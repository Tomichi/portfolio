<script lang="ts">
	const skills = [
		{
			category: 'Core Technologies',
			items: ['Python', 'FastAPI', 'C++', 'Machine Learning', 'Computer Vision']
		},
		{
			category: 'Data Engineering',
			items: ['PostgreSQL', 'MongoDB', 'ETL', 'Airflow', 'Docker']
		},
		{
			category: 'Scientific Computing',
			items: ['NumPy', 'PyTorch', 'HPC', 'Computational Mathematics', 'Graph Theory']
		}
	];

	const education = [
		{
			degree: "Master's in Computational Mathematics",
			institution: 'VSB - Technical University of Ostrava',
			period: '2018 - 2020',
			honors: 'Graduated with honors, Best thesis diploma at department',
			details: 'Specialized in parallel computing and boundary elements method in Laplace equation'
		},
		{
			degree: "Bachelor's in Computational and Applied Mathematics",
			institution: 'VSB - Technical University of Ostrava',
			period: '2015 - 2018',
			honors: 'Best thesis diploma at department',
			details: 'Focus on graph theory and parallel programming'
		}
	];
</script>

<section id="about" class="bg-muted/50 py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">About Me</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">
				Data Engineer & Computer Vision Specialist with a strong mathematical background
			</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
			<!-- Left Column: Bio -->
			<div class="space-y-6">
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Professional Journey</h3>
					<p class="leading-relaxed text-muted-foreground">
						Currently working as a Data Engineer at OUTFINDO, where I specialize in building robust
						data pipelines and machine learning systems. With experience spanning from computer
						vision at SANEZOO to research in high-performance computing at IT4Innovations, I bring a
						unique blend of theoretical knowledge and practical expertise to solve complex technical
						challenges.
					</p>
				</div>

				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Academic Excellence</h3>
					{#each education as { degree, institution, period, honors, details }}
						<div class="mb-6 last:mb-0">
							<h4 class="text-lg font-medium">{degree}</h4>
							<p class="mb-1 text-sm text-muted-foreground">{institution} • {period}</p>
							<p class="mb-2 text-sm text-primary">{honors}</p>
							<p class="text-sm text-muted-foreground">{details}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right Column: Skills & Expertise -->
			<div class="space-y-6">
				{#each skills as { category, items }}
					<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
						<h3 class="mb-4 text-xl font-semibold">{category}</h3>
						<div class="flex flex-wrap gap-2">
							{#each items as skill}
								<span class="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				{/each}

				<!-- Achievements -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Key Highlights</h3>
					<ul class="space-y-3 text-muted-foreground">
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Developed ETL pipelines and ML systems at OUTFINDO</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Implemented 3D bin picking solutions using computer vision</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Research in graph theory using high-performance computing</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Multiple certifications in MongoDB and data modeling</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
