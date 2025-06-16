import { ExtendedClient } from "./clases/ExtendedClient";
import { AntiCrash } from "./functions/AntiCrash";
import { loadEvents } from "./handlers/eventHandler";
import { loadSlash } from "./handlers/slashHandler";
const client = new ExtendedClient({ intents: 3276543 });

(async () => {
	await client
		.login(process.env.TOKEN)
		.catch((err) =>
			console.error(client.color(`⭐ | Error al iniciar sesión\n${err}`).red),
		);
})();

client.on("ready", async () => {
	await loadSlash(client)
		.then(() => {
			console.log(client.color("👽 | Comandos recargados").yellow);
		})
		.catch((err) =>
			console.error(
				client.color(`👽 | Error al recargar los comandos\n${err}`).red,
			),
		);
	await loadEvents(client)
		.then(() => {
			console.log(client.color("🥵 | Eventos cargados").cyan);
		})
		.catch((err) =>
			console.error(
				client.color(`🥵 | Error al cargar los eventos: ${err}`).red,
			),
		);
	await AntiCrash(client)
		.then(() => {
			console.log(client.color("🐢 | AntiCrash cargado").green);
		})
		.catch((err) =>
			console.error(
				client.color(`🐢 | Error al cargar el AntiCrash: ${err}`).green,
			),
		);
	console.log(
		client.color(
			`🦊 | Hemos encendido con la cuenta ${client.user?.tag} y Node ${process.version}`,
		).magenta,
	);
});
