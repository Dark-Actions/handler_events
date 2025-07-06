import { Client, type ClientOptions, Collection } from "discord.js";
import type ExtendedClientInterface from "types/ExtendedClientInterface";
import type { ExtendedSlashCommand } from "types/ExtendedSlashCommand";

export class ExtendedClient extends Client implements ExtendedClientInterface {
	slashCommands = new Collection<string, ExtendedSlashCommand>();
	color = (...args: string[]) => ({
		red: `\x1b[31m${args.join(" ")}\x1b[0m`,
		yellow: `\x1b[33m${args.join(" ")}\x1b[0m`,
		magenta: `\x1b[35m${args.join(" ")}\x1b[0m`,
		cyan: `\x1b[36m${args.join(" ")}\x1b[0m`,
		green: `\x1b[32m${args.join(" ")}\x1b[0m`,
	});
	// biome-ignore lint/complexity/noUselessConstructor: tsx needs it
	constructor(options: ClientOptions) {
		super(options);
	}
}
