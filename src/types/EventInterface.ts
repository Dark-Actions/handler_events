import type { Awaitable } from "discord.js";
import type { ExtendedClientEvents } from "types/ExtendedClientEvents";

export default interface EventInterface<
	Event extends keyof ExtendedClientEvents,
> {
	name: Event;
	execute: (...args: ExtendedClientEvents[Event]) => Awaitable<void>;
}
