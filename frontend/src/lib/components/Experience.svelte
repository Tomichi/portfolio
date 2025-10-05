<script lang="ts">
	import { type Project } from './types';
	import Carousel from './Carousel.svelte';

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
	const projectsPerPage = 3;
</script>

<section id="work-experience" class="bg-background py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Work experience</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">Key projects and professional experiences</p>
		</div>

		<Carousel items={projects} itemsPerPage={projectsPerPage}>
			{#snippet children(visibleItems)}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each visibleItems as project (project.company)}
						<div class="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300">
							<div class="flex items-start gap-4 p-6">
								{#if project.logo}
									<a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
										<img src={project.logo} alt={project.company} class="h-12 w-12" />
									</a>
								{/if}
								<div>
									<h4 class="text-lg font-medium">{project.company}</h4>
									<p class="text-sm text-muted-foreground">
										{project.position} • {project.period}
									</p>
								</div>
							</div>

							<!-- Content -->
							<div class="space-y-4 p-6">
								<p class="text-muted-foreground">
									{project.description}
								</p>

								<!-- Technologies -->
								<div class="space-y-2">
									<h4 class="text-sm font-medium">Technologies</h4>
									<div class="flex flex-wrap gap-2">
										{#each project.technologies as tech}
											<span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
												{tech}
											</span>
										{/each}
									</div>
								</div>

								<!-- Highlights -->
								<div class="space-y-2">
									<h4 class="text-sm font-medium">Key Achievements</h4>
									<ul class="space-y-1">
										{#each project.highlights as highlight}
											<li class="flex items-start text-sm text-muted-foreground">
												<span class="mr-2 text-primary">→</span>
												<span>{highlight}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/snippet}
		</Carousel>
	</div>
</section>
