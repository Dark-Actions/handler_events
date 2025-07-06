import { readdirSync } from "node:fs";
import type ExtendedClientInterface from "types/ExtendedClientInterface";

export async function loadEvents(client: ExtendedClientInterface) {
	for (const subdirectory of readdirSync("./src/eventos")) {
		for (const filename of readdirSync(`./src/eventos/${subdirectory}`)) {
			const event = (await import(`../eventos/${subdirectory}/${filename}`))
				?.default;
			if (!event) continue;
			client.on(event.name, event.execute.bind(null, client));
		}
	}
}
