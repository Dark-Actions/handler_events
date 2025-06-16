import { EventBuilder } from "../../clases/EventBuilder";

export default new EventBuilder({
	name: "interactionCreate",
	async execute(client, interaction) {
		if (!interaction.isChatInputCommand()) return;
		const cmd = client.slashCommands.get(interaction.commandName);
		if (!cmd) return;

		cmd.execute(client, interaction);
	},
});
