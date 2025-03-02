<script lang="ts">
	import Gmail from '$lib/icons/Gmail.svelte';
	import GoogleMaps from '$lib/icons/GoogleMaps.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Number from '$lib/icons/Number.svelte';
	interface Props {
		title: string;
		subtitle: string;
		email: string;
		location: string;
		availability: string;
		linkedInLink: string;
		githubLink: string;
		icoNumber: string;
		billingAddress: string;
	}
	let { title, subtitle, email, location, availability, linkedInLink, githubLink, icoNumber, billingAddress }: Props =
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
			<div class="rounded-lg border border-border bg-card p-5 shadow-lg">
				<div class="grid gap-3">
					<a
						href="mailto:{email}"
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Gmail class="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
								<h3 class="text-lg font-medium">Email</h3>
							</div>
							<span class="text-base text-primary group-hover:underline">
								{email}
							</span>
						</div>
					</a>

					<a
						href={linkedInLink}
						target="_blank"
						rel="noopener noreferrer"
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<LinkedIn class="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
								<h3 class="text-lg font-medium">LinkedIn</h3>
							</div>
							<span class="text-base text-primary group-hover:underline"> View Profile → </span>
						</div>
					</a>

					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Github class="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
								<h3 class="text-lg font-medium">Github</h3>
							</div>
							<span class="text-base text-primary group-hover:underline"> View Profile → </span>
						</div>
					</a>

					<div
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<GoogleMaps
									class="h-5 w-5 text-primary transition-transform group-hover:scale-110"
								/>
								<h3 class="text-lg font-medium">Location</h3>
							</div>
							<span class="text-base text-muted-foreground">
								{location}
							</span>
						</div>
					</div>

					<div
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<GoogleMaps
									class="h-5 w-5 text-primary transition-transform group-hover:scale-110"
								/>
								<h3 class="text-lg font-medium">Billing address</h3>
							</div>
							<span class="text-base text-muted-foreground">
								{billingAddress}
							</span>
						</div>
					</div>



					<div
						class="group block transform rounded-md border border-transparent p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
					>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Number
									class="h-5 w-5 text-primary transition-transform group-hover:scale-110"
								/>
								<h3 class="text-lg font-medium">IČO</h3>
							</div>
							<span class="text-base text-muted-foreground">
								{icoNumber}
							</span>
						</div>
					</div>


					<div class="mt-2 flex items-center justify-center">
						<span
							class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20"
						>
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"
								></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
							</span>
							{availability}
						</span>
					</div>

					
				</div>
			</div>
		</div>
	</div>
</section>
