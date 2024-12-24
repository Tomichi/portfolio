const THEME_COOKIE_NAME = 'theme-preference';

export function createThemeInitScript() {
	return `
        try {
            const theme = document.cookie
                .split('; ')
                .find(row => row.startsWith('${THEME_COOKIE_NAME}'))
                ?.split('=')[1];
            
            if (theme && ['light', 'dark'].includes(theme)) {
                document.documentElement.classList.add(theme);
            } else {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                    ? 'dark' 
                    : 'light';
                document.documentElement.classList.add(systemTheme);
            }
        } catch (e) {
            console.error('Theme initialization error:', e);
        }
    `;
}

export function cleanupThemeScript() {
	if (typeof window !== 'undefined') {
		const scriptTag = document.getElementById('theme-init');
		if (scriptTag) {
			scriptTag.remove();
		}
	}
}
