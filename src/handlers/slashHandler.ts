import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import type CommandBuilderInterface from "../types/CommandBuilderInterface";
import type ExtendedClientInterface from "../types/ExtendedClientInterface";

enum Result {
	ReloadNotRequired = 0,
	ReloadRequired = 1,
}

export async function loadSlash(client: ExtendedClientInterface) {
	for (const category of readdirSync("./src/slashcommands")) {
		for (const fileName of readdirSync(
			`./src/slashcommands/${category}`,
		).filter((file) => file.endsWith(".js") || file.endsWith(".ts"))) {
			const command = (await import(`../slashcommands/${category}/${fileName}`))
				?.default;
			if (!command) continue;
			client.slashCommands.set(command.name, command);
		}
	}
	const commandsMap = client.slashCommands.map((x) => x);
	const verifying = await verifySlash(commandsMap);
	if (verifying === Result.ReloadRequired) {
		await client.application?.commands.set(commandsMap);
		console.log(client.color("👽 | Comandos recargados").yellow);
	} else {
		console.log(client.color("👽 | Recarga de comandos no necesaria").yellow);
	}
}

async function verifySlash(
	commands: CommandBuilderInterface[],
): Promise<Result> {
	let commandsFile: string;
	try {
		commandsFile = await readFileSync("./commands.json", { encoding: "utf-8" });
	} catch (_e) {
		await writeFileSync("./commands.json", JSON.stringify(commands, null, 0));
		return Result.ReloadRequired;
	}
	const jsonCommands = JSON.parse(commandsFile) as CommandBuilderInterface[];
	if (
		JSON.stringify(jsonCommands, null, 0) === JSON.stringify(commands, null, 0)
	) {
		return Result.ReloadNotRequired;
	}
	await writeFileSync("./commands.json", JSON.stringify(commands, null, 0));
	return Result.ReloadRequired;
}
