import { readdirSync } from "node:fs";
import type ExtendedClientInterface from "../types/ExtendedClientInterface";

export async function loadEvents(client: ExtendedClientInterface) {
	for (const subdirectory of readdirSync("./eventos")) {
		for (const filename of readdirSync(`./eventos/${subdirectory}`)) {
			const event = require(`../eventos/${subdirectory}/${filename}`);
			client.on(event.name, event.execute.bind(null, client));
		}
	}
}
