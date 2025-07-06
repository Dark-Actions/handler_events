import type EventInterface from "types/EventInterface";
import type { ExtendedClientEvents } from "types/ExtendedClientEvents";

export class EventBuilder<Event extends keyof ExtendedClientEvents> {
	constructor(data: EventInterface<Event>) {
		Object.assign(this, data);
	}
}
