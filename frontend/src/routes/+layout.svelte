<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme, type Theme, themeConfig } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';
	import Github from '$lib/icons/Github.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';

	let { children } = $props();
	let mediaQuery: MediaQueryList;

	// Theme selector component
	const themes: Theme[] = ['light', 'dark'];

	$effect(() => {
		// Remove all theme classes first
		document.documentElement.classList.remove(...Object.keys(themeConfig));
		// Add current theme class
		document.documentElement.classList.add($theme);
	});

	onMount(() => {
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		theme.set(mediaQuery.matches ? 'dark' : 'light');

		const handleThemeChange = (e: MediaQueryListEvent) => theme.set(e.matches ? 'dark' : 'light');

		mediaQuery.addEventListener('change', handleThemeChange);
		return () => mediaQuery.removeEventListener('change', handleThemeChange);
	});
</script>

<div class={`min-h-screen transition-colors duration-300 ${themeConfig[$theme].background}`}>
	<nav class={`fixed z-50 w-full backdrop-blur-sm ${themeConfig[$theme].nav}`}>
		<div class="container mx-auto px-4 py-3">
			<div class="flex items-center justify-between">
				<a href="/" class={`text-2xl font-bold ${themeConfig[$theme].text}`}> Tomáš Michna </a>

				<!-- Navigation Links -->
				<div class="flex items-center gap-6">
					<a
						href="#about"
						class={`transition-opacity hover:opacity-75 ${themeConfig[$theme].text}`}
					>
						About
					</a>
					<a
						href="#projects"
						class={`transition-opacity hover:opacity-75 ${themeConfig[$theme].text}`}
					>
						Projects
					</a>
					<a
						href="#contact"
						class={`transition-opacity hover:opacity-75 ${themeConfig[$theme].text}`}
					>
						Contact
					</a>
					<a href="/" class={`transition-opacity hover:opacity-75 ${themeConfig[$theme].text}`}>
						CV
					</a>
					<a
						href="https://www.linkedin.com/in/tomáš-michna-69760290/"
						target="_blank"
						class={`transition-opacity hover:opacity-75 ${themeConfig[$theme].text}`}
					>
						<LinkedIn width="1.5em" height="1.5em" />
					</a>

					<!-- Theme Selector -->
					<div class="group relative">
						<button
							class={`rounded-lg p-2 ${themeConfig[$theme].card} transition-opacity hover:opacity-75`}
						>
							{#if $theme === 'light'}
								<Sun class="h-5 w-5 text-gray-400" />
							{:else if $theme === 'dark'}
								<Moon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
							{/if}
						</button>

						<!-- Theme Dropdown -->
						<div
							class="invisible absolute right-0 mt-2 w-32 rounded-lg py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 {themeConfig[
								$theme
							].card}"
						>
							{#each themes as themeOption}
								<button
									class={`flex w-full items-center space-x-2 px-4 py-2 text-left transition-opacity hover:opacity-75 ${
										themeConfig[$theme].text
									} ${$theme === themeOption ? 'font-bold' : ''}`}
									onclick={() => theme.set(themeOption)}
								>
									{#if themeOption === 'light'}
										<Sun class="h-5 w-5 text-gray-400" />
										<span>{themeOption}</span>
									{:else if themeOption === 'dark'}
										<Moon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
										<span>{themeOption}</span>
									{/if}
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	{@render children()}

	<footer class={`${themeConfig[$theme].card}`}>
		<div class="container mx-auto px-4 py-8">
			<div class="flex items-center justify-center space-x-2 text-center">
				<p class={`${themeConfig[$theme].text} opacity-75`}>
					© {new Date().getFullYear()} Tomáš Michna. All rights reserved.
				</p>
				<a
					href="https://github.com/Tomichi/portfolio"
					title="repository link"
					target="_blank"
					class="inline-flex items-center transition-all duration-200 hover:opacity-75"
				>
					<Github width="1em" height="1em" color="#c8c8c8" />
				</a>
			</div>
		</div>
	</footer>
</div>
