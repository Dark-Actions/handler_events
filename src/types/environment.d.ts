declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TZ?: string;
			TOKEN: string;
		}
	}
}

export {};
