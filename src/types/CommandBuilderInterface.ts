import type {
	Awaitable,
	ChatInputApplicationCommandData,
	ChatInputCommandInteraction,
} from "discord.js";
import type ExtendedClientInterface from "types/ExtendedClientInterface";

type CommandBuilderInterface = {
	execute: (
		client: ExtendedClientInterface,
		interaction: ChatInputCommandInteraction,
	) => Awaitable<void>;
} & ChatInputApplicationCommandData;

export default CommandBuilderInterface;
