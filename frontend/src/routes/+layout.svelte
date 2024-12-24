<script lang="ts">
	import Navigation from '../lib/components/Navigation.svelte';
	import { flushSync } from 'svelte';
	import { createThemeInitScript, cleanupThemeScript } from '$lib/theme/initalize';
	import '../app.css';

	let { children } = $props();

	const themeScript = createThemeInitScript();

	$effect.root(() => {
		flushSync(() => {
			cleanupThemeScript();
		});
	});
</script>

<svelte:head>
	{@html `<script id="theme-init">${themeScript}<\/script>`}
</svelte:head>

<div class="min-h-screen bg-background">
	<Navigation />
	{@render children()}
</div>
