import type { ThemeType } from '$lib/theme/types';
import { Theme } from '$lib/theme/types';
import { THEME_COOKIE_NAME } from '$lib/theme/constants';

export function getThemeFromCookie(cookies: Record<string, string>): ThemeType {
	const theme = cookies[THEME_COOKIE_NAME];
	return Object.values(Theme).includes(theme as ThemeType) ? (theme as ThemeType) : Theme.LIGHT;
}
