import { Theme, type ThemeType } from '$lib/theme';

export const THEME_LABELS: Record<ThemeType, string> = {
	[Theme.LIGHT]: 'Light',
	[Theme.DARK]: 'Dark'
} as const;
