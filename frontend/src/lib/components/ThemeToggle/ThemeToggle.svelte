<script lang="ts">
	import { useTheme, Theme, type ThemeType } from '$lib/theme';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { THEME_LABELS } from '$lib/components/ThemeToggle/constants';
	import ThemeIcon from '$lib/components/ThemeToggle/ThemeIcon.svelte';

	const theme = useTheme();
	let isOpen = $state(false);
	let currentTheme = $derived($theme);

	function toggleDropdown(e: MouseEvent) {
		e.stopPropagation();
		isOpen = !isOpen;
	}

	function selectTheme(newTheme: ThemeType) {
		theme.setTheme(newTheme);
		isOpen = false;
	}
</script>

<div class="relative" use:clickOutside={() => (isOpen = false)}>
	<button
		type="button"
		class="inline-flex items-center justify-center rounded-md bg-secondary p-2.5 text-sm
               font-medium transition-colors duration-200 hover:bg-secondary/80"
		aria-label="Toggle theme"
		aria-expanded={isOpen}
		onclick={toggleDropdown}
	>
		<ThemeIcon theme={currentTheme} />
	</button>

	{#if isOpen}
		<div
			class="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md
                   bg-popover shadow-lg ring-1 ring-black/5 focus:outline-none"
			role="menu"
		>
			<div class="py-1">
				{#each Object.values(Theme) as themeOption}
					<button
						class="flex w-full items-center px-4 py-2 text-sm text-foreground
                               transition-colors hover:bg-muted/50"
						class:font-medium={currentTheme === themeOption}
						onclick={() => selectTheme(themeOption)}
					>
						<ThemeIcon theme={themeOption} size="sm" className="mr-2" />
						<span>{THEME_LABELS[themeOption]}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
