<script lang="ts">
	import Gmail from '$lib/icons/Gmail.svelte';
	import GoogleMaps from '$lib/icons/GoogleMaps.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Github from '$lib/icons/Github.svelte';
	interface Props {
		title: string;
		subtitle: string;
		email: string;
		location: string;
		availability: string;
		linkedInLink: string;
		githubLink: string;
	}
	let { title, subtitle, email, location, availability, linkedInLink, githubLink }: Props =
		$props();
</script>

<section id="contact" class="bg-muted/80 py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold">{title}</h2>
			<div class="mx-auto mb-8 h-1 w-20 bg-primary"></div>
			<p class="text-lg text-muted-foreground">{subtitle}</p>
		</div>

		<div class="mx-auto max-w-2xl">
			<div class="rounded-lg border border-border bg-card p-6 shadow-sm">
				<div class="space-y-6">
					<div>
						<h3 class="mb-3 text-xl font-semibold">Email</h3>
						<a
							href="mailto:{email}"
							class="group inline-flex items-center gap-2 text-lg text-primary hover:underline"
						>
							<Gmail class="h-4 w-4 transition-transform group-hover:scale-110" />
							{email}
						</a>
					</div>
					<div class="space-y-3">
						<h3 class="mb-3 text-xl font-semibold">LinkedIn</h3>
						<a
							href={linkedInLink}
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-2 text-lg text-primary hover:underline"
						>
							<LinkedIn class="h-4 w-4 transition-transform group-hover:scale-110" /> LinkedIn Profile
						</a>
					</div>

					<div>
						<h3 class="mb-3 text-xl font-semibold">Github</h3>
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-2 text-lg text-primary hover:underline"
						>
							<Github class="h-4 w-4 transition-transform group-hover:scale-110" /> Github Profile
						</a>
					</div>

					<div>
						<h3 class="mb-3 text-xl font-semibold">Location</h3>
						<p class="group inline-flex gap-2 text-lg text-muted-foreground">
							<GoogleMaps class="h-5 w-5 transition-transform group-hover:scale-110" />
							{location}
						</p>
					</div>

					<div class="pt-4">
						<span class="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
							{availability}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
