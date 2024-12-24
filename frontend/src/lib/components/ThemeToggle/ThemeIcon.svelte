<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { Theme, type ThemeType } from '$lib/theme';

	let {
		theme,
		size = 'md',
		className = ''
	} = $props<{
		theme: ThemeType;
		size?: 'sm' | 'md';
		className?: string;
	}>();

	let iconClass = $derived(`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} ${className}`);
</script>

{#if theme === Theme.LIGHT}
	<Sun class={iconClass} />
{:else}
	<Moon class={iconClass} />
{/if}
