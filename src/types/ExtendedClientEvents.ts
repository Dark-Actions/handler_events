import type { ExtendedClient } from "clases/ExtendedClient";
import type {
	AnyThreadChannel,
	ApplicationCommandPermissionsUpdateData,
	AutoModerationActionExecution,
	AutoModerationRule,
	Client,
	CloseEvent,
	Collection,
	DMChannel,
	ForumChannel,
	Guild,
	GuildAuditLogsEntry,
	GuildBan,
	GuildEmoji,
	GuildMember,
	GuildScheduledEvent,
	GuildTextBasedChannel,
	Interaction,
	Invite,
	MediaChannel,
	Message,
	MessageReaction,
	NewsChannel,
	NonThreadGuildBasedChannel,
	PartialGuildMember,
	PartialGuildScheduledEvent,
	PartialMessage,
	PartialMessageReaction,
	PartialThreadMember,
	PartialUser,
	Presence,
	Role,
	Snowflake,
	StageInstance,
	Sticker,
	TextBasedChannel,
	TextChannel,
	ThreadMember,
	Typing,
	User,
	VoiceChannel,
	VoiceState,
} from "discord.js";

export interface ExtendedClientEvents {
	applicationCommandPermissionsUpdate: [
		client: ExtendedClient,
		data: ApplicationCommandPermissionsUpdateData,
	];
	autoModerationActionExecution: [
		client: ExtendedClient,
		autoModerationActionExecution: AutoModerationActionExecution,
	];
	autoModerationRuleCreate: [
		client: ExtendedClient,
		autoModerationRule: AutoModerationRule,
	];
	autoModerationRuleDelete: [
		client: ExtendedClient,
		autoModerationRule: AutoModerationRule,
	];
	autoModerationRuleUpdate: [
		client: ExtendedClient,
		oldAutoModerationRule: AutoModerationRule | null,
		newAutoModerationRule: AutoModerationRule,
	];
	cacheSweep: [client: ExtendedClient, message: string];
	channelCreate: [client: ExtendedClient, channel: NonThreadGuildBasedChannel];
	channelDelete: [
		client: ExtendedClient,
		channel: DMChannel | NonThreadGuildBasedChannel,
	];
	channelPinsUpdate: [
		client: ExtendedClient,
		channel: TextBasedChannel,
		date: Date,
	];
	channelUpdate: [
		client: ExtendedClient,
		oldChannel: DMChannel | NonThreadGuildBasedChannel,
		newChannel: DMChannel | NonThreadGuildBasedChannel,
	];
	debug: [client: ExtendedClient, message: string];
	warn: [client: ExtendedClient, message: string];
	emojiCreate: [client: ExtendedClient, emoji: GuildEmoji];
	emojiDelete: [client: ExtendedClient, emoji: GuildEmoji];
	emojiUpdate: [
		client: ExtendedClient,
		oldEmoji: GuildEmoji,
		newEmoji: GuildEmoji,
	];
	error: [client: ExtendedClient, error: Error];
	guildAuditLogEntryCreate: [
		client: ExtendedClient,
		auditLogEntry: GuildAuditLogsEntry,
		guild: Guild,
	];
	guildAvailable: [client: ExtendedClient, guild: Guild];
	guildBanAdd: [client: ExtendedClient, ban: GuildBan];
	guildBanRemove: [client: ExtendedClient, ban: GuildBan];
	guildCreate: [client: ExtendedClient, guild: Guild];
	guildDelete: [client: ExtendedClient, guild: Guild];
	guildUnavailable: [client: ExtendedClient, guild: Guild];
	guildIntegrationsUpdate: [client: ExtendedClient, guild: Guild];
	guildMemberAdd: [client: ExtendedClient, member: GuildMember];
	guildMemberAvailable: [
		client: ExtendedClient,
		member: GuildMember | PartialGuildMember,
	];
	guildMemberRemove: [
		client: ExtendedClient,
		member: GuildMember | PartialGuildMember,
	];
	guildMembersChunk: [
		client: ExtendedClient,
		members: Collection<Snowflake, GuildMember>,
		guild: Guild,
		data: {
			index: number;
			count: number;
			notFound: unknown[];
			nonce: string | undefined;
		},
	];
	guildMemberUpdate: [
		client: ExtendedClient,
		oldMember: GuildMember | PartialGuildMember,
		newMember: GuildMember,
	];
	guildUpdate: [client: ExtendedClient, oldGuild: Guild, newGuild: Guild];
	inviteCreate: [client: ExtendedClient, invite: Invite];
	inviteDelete: [client: ExtendedClient, invite: Invite];
	messageCreate: [client: ExtendedClient, message: Message];
	messageDelete: [client: ExtendedClient, message: Message | PartialMessage];
	messageReactionRemoveAll: [
		client: ExtendedClient,
		message: Message | PartialMessage,
		reactions: Collection<string | Snowflake, MessageReaction>,
	];
	messageReactionRemoveEmoji: [
		client: ExtendedClient,
		reaction: MessageReaction | PartialMessageReaction,
	];
	messageDeleteBulk: [
		messages: Collection<Snowflake, Message | PartialMessage>,
		channel: GuildTextBasedChannel,
	];
	messageReactionAdd: [
		reaction: MessageReaction | PartialMessageReaction,
		user: User | PartialUser,
	];
	messageReactionRemove: [
		reaction: MessageReaction | PartialMessageReaction,
		user: User | PartialUser,
	];
	messageUpdate: [
		oldMessage: Message | PartialMessage,
		newMessage: Message | PartialMessage,
	];
	presenceUpdate: [oldPresence: Presence | null, newPresence: Presence];
	ready: [client: Client<true>];
	invalidated: [client: ExtendedClient];
	roleCreate: [client: ExtendedClient, role: Role];
	roleDelete: [client: ExtendedClient, role: Role];
	roleUpdate: [client: ExtendedClient, oldRole: Role, newRole: Role];
	threadCreate: [
		client: ExtendedClient,
		thread: AnyThreadChannel,
		newlyCreated: boolean,
	];
	threadDelete: [client: ExtendedClient, thread: AnyThreadChannel];
	threadListSync: [
		client: ExtendedClient,
		threads: Collection<Snowflake, AnyThreadChannel>,
		guild: Guild,
	];
	threadMemberUpdate: [
		client: ExtendedClient,
		oldMember: ThreadMember,
		newMember: ThreadMember,
	];
	threadMembersUpdate: [
		client: ExtendedClient,
		addedMembers: Collection<Snowflake, ThreadMember>,
		removedMembers: Collection<Snowflake, ThreadMember | PartialThreadMember>,
		thread: AnyThreadChannel,
	];
	threadUpdate: [
		client: ExtendedClient,
		oldThread: AnyThreadChannel,
		newThread: AnyThreadChannel,
	];
	typingStart: [client: ExtendedClient, typing: Typing];
	userUpdate: [
		client: ExtendedClient,
		oldUser: User | PartialUser,
		newUser: User,
	];
	voiceStateUpdate: [
		client: ExtendedClient,
		oldState: VoiceState,
		newState: VoiceState,
	];
	/** @deprecated Use {@link webhooksUpdate} instead. */
	webhookUpdate: ExtendedClientEvents["webhooksUpdate"];
	webhooksUpdate: [
		client: ExtendedClient,
		channel:
			| TextChannel
			| NewsChannel
			| VoiceChannel
			| ForumChannel
			| MediaChannel,
	];
	interactionCreate: [client: ExtendedClient, interaction: Interaction];
	shardDisconnect: [
		client: ExtendedClient,
		closeEvent: CloseEvent,
		shardId: number,
	];
	shardError: [client: ExtendedClient, error: Error, shardId: number];
	shardReady: [
		client: ExtendedClient,
		shardId: number,
		unavailableGuilds: Set<Snowflake> | undefined,
	];
	shardReconnecting: [client: ExtendedClient, shardId: number];
	shardResume: [
		client: ExtendedClient,
		shardId: number,
		replayedEvents: number,
	];
	stageInstanceCreate: [client: ExtendedClient, stageInstance: StageInstance];
	stageInstanceUpdate: [
		client: ExtendedClient,
		oldStageInstance: StageInstance | null,
		newStageInstance: StageInstance,
	];
	stageInstanceDelete: [client: ExtendedClient, stageInstance: StageInstance];
	stickerCreate: [client: ExtendedClient, sticker: Sticker];
	stickerDelete: [client: ExtendedClient, sticker: Sticker];
	stickerUpdate: [
		client: ExtendedClient,
		oldSticker: Sticker,
		newSticker: Sticker,
	];
	guildScheduledEventCreate: [
		client: ExtendedClient,
		guildScheduledEvent: GuildScheduledEvent,
	];
	guildScheduledEventUpdate: [
		client: ExtendedClient,
		oldGuildScheduledEvent:
			| GuildScheduledEvent
			| PartialGuildScheduledEvent
			| null,
		newGuildScheduledEvent: GuildScheduledEvent,
	];
	guildScheduledEventDelete: [
		client: ExtendedClient,
		guildScheduledEvent: GuildScheduledEvent | PartialGuildScheduledEvent,
	];
	guildScheduledEventUserAdd: [
		client: ExtendedClient,
		guildScheduledEvent: GuildScheduledEvent | PartialGuildScheduledEvent,
		user: User,
	];
	guildScheduledEventUserRemove: [
		client: ExtendedClient,
		guildScheduledEvent: GuildScheduledEvent | PartialGuildScheduledEvent,
		user: User,
	];
}
