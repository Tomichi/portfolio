import { browser } from '$app/environment';

export class CookieManager {
	static set(name: string, value: string, days: number = 365): void {
		if (!browser) return;
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Strict`;
	}

	static get(name: string): string | undefined {
		if (!browser) return undefined;
		return document.cookie
			.split('; ')
			.find((row) => row.startsWith(name))
			?.split('=')[1];
	}
}
