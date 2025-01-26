<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import { scrollToSection } from '$lib/stores/scroll';
	import { page } from '$app/stores';

	const navLinks = [
		{ href: '/#about', label: 'About' },
		{ href: '/#work-experience', label: 'Experience' },
		{ href: '/#contact', label: 'Contact' },
		{ href: '/blog', label: 'Blog' }
	];

	function handleNavClick(event: MouseEvent, href: string) {
		if (href.startsWith('/#')) {
			event.preventDefault();
			const isOnBlogRoute = $page.url.pathname.startsWith('/blog');

			if (isOnBlogRoute) {
				window.location.href = href;
			} else {
				scrollToSection(href.substring(1));
			}
		}
	}
</script>

<nav
	class="fixed z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container mx-auto px-4 py-3">
		<div class="flex items-center justify-between">
			<NavLink href="/" onClick={(e) => handleNavClick(e, '/#welcome')}>
				<span class="text-2xl font-bold">Tomáš Michna</span>
			</NavLink>

			<div class="flex items-center gap-6">
				{#each navLinks as link}
					<NavLink href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
						{link.label}
					</NavLink>
				{/each}
				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>
