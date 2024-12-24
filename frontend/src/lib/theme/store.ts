import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Theme, type ThemeType } from '$lib/theme/types';
import { CookieManager } from '$lib/utils/cookie';
import { ThemeDOM } from '$lib/theme/dom';

class ThemeStore {
	private store: Writable<ThemeType>;
	private readonly cookieName = 'theme-preference';

	constructor() {
		this.store = writable<ThemeType>(Theme.LIGHT);
		if (browser) {
			this.initialize();
		}
	}

	private initialize(): void {
		const savedTheme = CookieManager.get(this.cookieName) as ThemeType | undefined;
		const initialTheme =
			savedTheme && Object.values(Theme).includes(savedTheme)
				? savedTheme
				: ThemeDOM.getSystemPreference();

		this.setTheme(initialTheme);
	}

	public setTheme(theme: ThemeType): void {
		if (!Object.values(Theme).includes(theme)) {
			throw new Error(`Invalid theme: ${theme}`);
		}

		this.store.set(theme);
		ThemeDOM.update(theme);
		CookieManager.set(this.cookieName, theme);
	}

	public subscribe(run: (value: ThemeType) => void) {
		return this.store.subscribe(run);
	}

	public getCurrentTheme(): ThemeType {
		let currentTheme: ThemeType;
		this.store.subscribe((value) => {
			currentTheme = value;
		})();
		return currentTheme!;
	}
}

// Export singleton instance
export const themeStore = new ThemeStore();
