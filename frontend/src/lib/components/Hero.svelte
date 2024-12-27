<script lang="ts">
	interface Props {
		name: string;
		role: string;
		imageUrl: string;
		buttonText: string;
		buttonHref: string;
	}
	let { name, role, imageUrl, buttonText, buttonHref }: Props = $props();
</script>

<section
	id="welcome"
	class="relative flex min-h-screen items-center justify-center bg-background px-4 pt-20"
>
	<div class="text-center">
		<div class="mb-10 flex items-center justify-center md:mb-[40px]">
			<div class="relative inline-block">
				<img
					loading="lazy"
					decoding="async"
					class="h-[160px] w-[160px] rounded-full border-2 border-muted object-cover transition-transform duration-300 hover:scale-105 md:h-[350px] md:w-[350px]"
					src={imageUrl}
					alt={`${name} - Photo`}
				/>
			</div>
		</div>

		<h1 class="mb-6 text-5xl font-bold text-foreground md:text-7xl">
			Hi, I'm {name}
		</h1>

		<p class="mb-8 text-xl text-muted-foreground md:text-2xl">
			{role}
		</p>

		<a
			href={buttonHref}
			class="inline-block rounded-lg bg-primary px-8 py-3 text-primary-foreground
                   transition-all duration-300 hover:scale-105 hover:opacity-90
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                   dark:focus:ring-offset-background"
		>
			{buttonText}
		</a>
	</div>
</section>
