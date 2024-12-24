import { themeStore } from '$lib/theme/store';

export function useTheme() {
	return {
		subscribe: themeStore.subscribe.bind(themeStore),
		setTheme: themeStore.setTheme.bind(themeStore),
		getCurrentTheme: themeStore.getCurrentTheme.bind(themeStore)
	};
}
