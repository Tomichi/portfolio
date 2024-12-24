import type { LayoutServerLoad } from './$types';
import { getThemeFromCookie } from '$lib/theme/server';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const cookieObject: Record<string, string> = {};
	for (const key of cookies.getAll().map((c) => c.name)) {
		const value = cookies.get(key);
		if (value) cookieObject[key] = value;
	}

	return {
		theme: getThemeFromCookie(cookieObject)
	};
};
