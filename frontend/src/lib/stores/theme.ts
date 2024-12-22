import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark' | 'forest' | 'ocean';

export const theme = writable<Theme>('light');

export const themeConfig = {
	light: {
		background: 'bg-white',
		text: 'text-gray-900',
		accent: 'bg-blue-600',
		nav: 'bg-white/80',
		card: 'bg-white',
		sectionBg: {
			hero: 'bg-white',
			about: 'bg-gray-100',
			projects: 'bg-white',
			contact: 'bg-gray-100'
		}
	},
	dark: {
		background: 'bg-slate-950',
		text: 'text-slate-50',
		accent: 'bg-blue-600',
		nav: 'bg-slate-950/90',
		card: 'bg-slate-950',
		sectionBg: {
			hero: 'bg-slate-950',
			about: 'bg-slate-900',
			projects: 'bg-slate-950',
			contact: 'bg-slate-900'
		}
	}
	// ... other themes
} as const;
