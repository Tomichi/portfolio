import { browser } from '$app/environment';
import type { ThemeType } from '$lib/theme/types';
import { Theme } from '$lib/theme/types';

export class ThemeDOM {
	static update(theme: ThemeType): void {
		if (!browser) return;
		const root = document.documentElement;
		root.classList.remove(...Object.values(Theme));
		root.classList.add(theme);
	}

	static getSystemPreference(): ThemeType {
		return browser && window.matchMedia('(prefers-color-scheme: dark)').matches
			? Theme.DARK
			: Theme.LIGHT;
	}
}
