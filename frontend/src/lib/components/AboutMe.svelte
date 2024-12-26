<script lang="ts">
	import {
		type Skill,
		type Achievement,
		type Certification,
		type Education,
		type Language,
		type Hobby
	} from './types';

	interface Props {
		title: string;
		subtitle: string;
		professionalSummary: string;
		education: Education[];
		certifications: Certification[];
		skills: Skill[];
		achievements: Achievement[];
		languages: Language[];
		hobbies: Hobby[];
	}

	let {
		title,
		subtitle,
		professionalSummary,
		education,
		certifications,
		skills,
		achievements,
		languages,
		hobbies
	}: Props = $props();
</script>

<section id="about" class="bg-muted/80 py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">{title}</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">{subtitle}</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
			<!-- Left Column -->
			<div class="space-y-6">
				<!-- Professional Summary -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Professional Summary</h3>
					<p class="leading-relaxed text-muted-foreground">
						{professionalSummary}
					</p>
				</div>

				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Education</h3>
					{#each education as edu}
						<div class="mb-6 space-y-3">
							<h4 class="text-lg font-medium">{edu.degree}</h4>
							<p class="text-sm text-muted-foreground">
								{edu.institution} • {edu.period}
							</p>

							{#if edu.thesis}
								<div class="text-sm">
									<a
										href={edu.thesis.url}
										class="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										{edu.thesis.name}
									</a>
									{#if edu.thesis.description}
										<p class="mt-1 text-muted-foreground">{edu.thesis.description}</p>
									{/if}
								</div>
							{/if}

							{#if edu.awards?.length}
								<div class="space-y-1">
									{#each edu.awards as award}
										{#if award.url}
											<a
												href={award.url}
												class="block text-sm text-primary hover:underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												{award.name}
											</a>
										{:else}
											<p class="text-sm text-primary">{award.name}</p>
										{/if}
									{/each}
								</div>
							{/if}

							<p class="text-sm text-muted-foreground">
								{edu.description}
							</p>
						</div>
					{/each}
				</div>

				<!-- Certifications -->
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

				<!-- Hobbies & Interests -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Hobbies & Interests</h3>
					<div class="space-y-4">
						{#each hobbies as hobby}
							<div>
								<h4 class="text-base font-medium text-primary">{hobby.name}</h4>
								{#if hobby.description}
									<p class="mt-1 text-sm text-muted-foreground">{hobby.description}</p>
								{/if}
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

				<!-- Achievements -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Additional Achievements</h3>
					<ul class="space-y-3 text-muted-foreground">
						{#each achievements as achievement}
							<li class="flex items-start">
								<span class="mr-2 text-primary">→</span>
								<span>{achievement.text}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Languages -->
				<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-semibold">Languages</h3>
					<div class="space-y-3">
						{#each languages as lang}
							<div class="flex items-center justify-between">
								<span class="font-medium">{lang.name}</span>
								<div class="text-sm">
									<span class="text-primary">{lang.level}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
