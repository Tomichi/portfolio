<script lang="ts">
	const skills = [
		{
			category: 'Data Engineering',
			items: [
				'Python (FastAPI, Scrapy)',
				'PostgreSQL',
				'MongoDB',
				'ETL Pipeline Design',
				'Airflow',
				'Docker'
			]
		},
		{
			category: 'Machine Learning & CV',
			items: [
				'PyTorch',
				'Deep Learning',
				'Computer Vision',
				'CUDA',
				'C++ (14/17)',
				'Parallel Computing'
			]
		},
		{
			category: 'Scientific Computing',
			items: ['HPC', 'Graph Theory', 'NumPy', 'Computational Mathematics', 'Algorithm Design']
		}
	];

	const certifications = [
		{
			issuer: 'NVIDIA',
			credentials: [
				{
					name: 'Fundamentals of Deep Learning for Computer Vision',
					date: 'Feb 2020'
				}
			]
		}
	];
</script>

<section id="about" class="bg-muted/80 py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">About Me</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">
				Data Engineer & Computer Vision Specialist with Strong Mathematical Foundation
			</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
			<!-- Left Column -->
			<div class="space-y-6">
				<!-- Professional Summary -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Professional Summary</h3>
					<p class="leading-relaxed text-muted-foreground">
						Data Engineer with expertise in computer vision and machine learning. Combining strong
						mathematical background with practical engineering skills to build scalable data
						solutions and intelligent systems. Experienced in high-performance computing and
						parallel programming.
					</p>
				</div>

				<!-- Education -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Education</h3>
					<div class="space-y-3">
						<h4 class="text-lg font-medium">Master's in Computational Mathematics</h4>
						<p class="text-sm text-muted-foreground">
							VSB - Technical University of Ostrava • 2018-2020
						</p>
						<p class="text-sm text-primary">Best Thesis Award 2020 • Graduated with honors</p>
						<p class="text-sm text-muted-foreground">
							Focused on solving discrete problems with boundary elements method in Laplace equation
							in 3D. Implemented parallel computation solutions using graph coloring techniques.
						</p>
					</div>

					<div class="space-y-3">
						<h4 class="text-lg font-medium">Bachelor's in Computational and Applied Mathematics</h4>
						<p class="text-sm text-muted-foreground">
							VSB - Technical University of Ostrava • 2015-2018
						</p>
						<p class="text-sm text-primary">Best Thesis Award 2018</p>
						<p class="text-sm text-muted-foreground">
							Research in graph theory, focusing on parallel programming for graph labeling
							problems. Active member of ACM-ICPC and Support Talented Students program.
						</p>
					</div>
				</div>

				<!-- Professional Certifications -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Professional Certifications</h3>
					<div class="space-y-6">
						{#each certifications as cert}
							<div class="space-y-3">
								<h4 class="text-lg font-medium">{cert.issuer}</h4>
								<ul class="space-y-2">
									{#each cert.credentials as cred}
										<li class="text-sm">
											<div class="font-medium">{cred.name}</div>
											<div class="text-muted-foreground">
												Issued {cred.date}
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Right Column -->
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

				<!-- Additional Achievements -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Additional Achievements</h3>
					<ul class="space-y-3 text-muted-foreground">
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span
								>2nd Place at European Healthcare Hackathon - Hospital Surveillance AI Project
								(2023)</span
							>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Best Thesis Award - Applied Mathematics Department (2018 & 2020)</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>Member of Support Talented Students Program (2016-2020)</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-primary">→</span>
							<span>
								ICPC Programming Contest: 3x CERC (Central European Regional Contest) Participant
								(2015-2017)
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
