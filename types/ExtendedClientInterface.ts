import type { Client, Collection } from "discord.js";
import type ClientColorProperty from "./ClientColorProperty";
import type { ExtendedSlashCommand } from "./ExtendedSlashCommand";

type ExtendedClientInterface = {
	slashCommands: Collection<string, ExtendedSlashCommand>;
	color: ClientColorProperty;
} & Client;

export default ExtendedClientInterface;
