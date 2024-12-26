<script lang="ts">
	import LinkedIn from '../icons/LinkedIn.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import { scrollToSection } from '$lib/stores/scroll';

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#work-experience', label: 'Work Experience' },
		{ href: '#contact', label: 'Contact' }
	];

	function handleNavClick(event: MouseEvent, href: string) {
		if (href.startsWith('#')) {
			event.preventDefault();
			scrollToSection(href);
		}
	}
</script>

<nav
	class="fixed z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container mx-auto px-4 py-3">
		<div class="flex items-center justify-between">
			<NavLink href="#welcome" onClick={(e) => handleNavClick(e, '#welcome')}>
				<span class="text-2xl font-bold">Tomáš Michna</span>
			</NavLink>

			<div class="flex items-center gap-6">
				{#each navLinks as link}
					<NavLink href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
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
