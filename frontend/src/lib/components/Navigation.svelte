<script lang="ts">
	import LinkedIn from '../icons/LinkedIn.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#work-experience', label: 'Work Experience' },
		{ href: '#contact', label: 'Contact' },
		{ href: '/', label: 'CV' }
	];
</script>

<nav
	class="fixed z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container mx-auto px-4 py-3">
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="text-2xl font-bold text-foreground transition-colors hover:text-muted-foreground"
			>
				Tomáš Michna
			</a>

			<div class="flex items-center gap-6">
				{#each navLinks as link}
					<NavLink href={link.href}>
						{link.label}
					</NavLink>
				{/each}

				<NavLink href="https://www.linkedin.com/in/tomáš-michna-69760290/" external={true}>
					<LinkedIn class="h-6 w-6" />
				</NavLink>

				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>
