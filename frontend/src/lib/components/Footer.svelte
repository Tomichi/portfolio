<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	const currentYear = new Date().getFullYear();

	const githubProjects = [
		{
			name: 'Personal Portfolio',
			url: 'https://github.com/tomichi/portfolio'
		}
	];
</script>

<footer class="border-t bg-background">
	<div class="container mx-auto px-4 py-6">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<span class="text-sm text-muted-foreground">
				© {currentYear} Tomáš Michna
			</span>

			<div class="flex items-center gap-6">
				{#each githubProjects as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						<Github class="h-4 w-4 transition-transform group-hover:scale-110" />
						<span>{project.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
