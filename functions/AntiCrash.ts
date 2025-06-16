import type ExtendedClientInterface from "../types/ExtendedClientInterface";

export async function AntiCrash(client: ExtendedClientInterface) {
	process.on("uncaughtException", (err, origin) => {
		console.log(
			client.color(`⭐ | Error no capturado: ${err}\nOrigen: ${origin}`).red,
		);
	});

	process.on("uncaughtExceptionMonitor", (err, origin) => {
		console.log(
			client.color(`⭐ | Error no capturado: ${err}\nOrigen: ${origin}`).red,
		);
	});

	process.on("unhandledRejection", (reason, promise) => {
		console.log(
			client.color(`⭐ | Rechazo no capturado: ${reason}\nPromesa: ${promise}`)
				.red,
		);
	});
}
