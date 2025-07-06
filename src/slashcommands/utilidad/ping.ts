import { CommandBuilder } from "clases/CommandBuilder";
import { EmbedBuilder } from "discord.js";

export default new CommandBuilder({
	name: "ping",
	description: "Muestra mi latencia",

	async execute(client, interaction) {
		const ping = Date.now() - interaction.createdTimestamp;

		const embed = new EmbedBuilder()
			.setColor("Red")
			.setDescription(
				`🏓 \`|\` Pong!\n📨 \`|\` Mensajes: \`${ping}ms\`\n🛰️ \`|\` Ping DiscordAPI: \`${client.ws.ping}ms\``,
			);

		interaction.reply({ embeds: [embed] });
	},
});
