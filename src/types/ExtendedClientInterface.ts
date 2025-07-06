import type { Client, Collection } from "discord.js";
import type ClientColorProperty from "types/ClientColorProperty";
import type { ExtendedSlashCommand } from "types/ExtendedSlashCommand";

type ExtendedClientInterface = {
	slashCommands: Collection<string, ExtendedSlashCommand>;
	color: ClientColorProperty;
} & Client;

export default ExtendedClientInterface;
