import type CommandBuilderInterface from "../types/CommandBuilderInterface";

export class CommandBuilder {
	constructor(data: CommandBuilderInterface) {
		Object.assign(this, data);
	}
}
