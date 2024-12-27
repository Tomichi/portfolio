<script lang="ts">
	const projects = [
		{
			title: 'OUTFINDO Data Engineering',
			period: '2021 - Present',
			description:
				'Developed ETL pipelines and data processing systems using Python, FastAPI, and Airflow',
			technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Airflow', 'Docker'],
			highlights: [
				'Implemented scalable data processing pipelines',
				'Built RESTful APIs with FastAPI',
				'Orchestrated ETL tasks using Airflow'
			]
		},
		{
			title: '3D Bin Picking System',
			period: '2020 - 2021',
			description: 'Computer vision solution for automated bin picking at SANEZOO',
			technologies: ['C++', 'CUDA', 'Python', 'Computer Vision'],
			highlights: [
				'Developed 3D object detection algorithms',
				'Optimized performance using CUDA',
				'Implemented real-time processing systems'
			]
		},
		{
			title: 'HPC Graph Theory Research',
			period: '2019 - 2020',
			description:
				'Research on graph theory problems using high-performance computing at IT4Innovations',
			technologies: ['C++', 'HPC', 'Graph Theory', 'Parallel Computing'],
			highlights: [
				'Implemented parallel algorithms for graph problems',
				'Optimized computations for supercomputer architecture'
			]
		}
	];
</script>

<section id="work-experience" class="bg-background py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Work Experience</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">Key projects and professional experiences</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
					<!-- Header -->
					<div class="border-b border-border p-6">
						<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
						<p class="text-sm text-muted-foreground">{project.period}</p>
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
	</div>
</section>
