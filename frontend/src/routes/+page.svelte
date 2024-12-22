<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, themeConfig } from '$lib/stores/theme';
	import Input from '$lib/components/forms/Input.svelte';

	let sections: HTMLElement[] = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '-50px'
			}
		);

		sections.forEach((section) => {
			section.classList.add(
				'transform',
				'translate-y-16',
				'opacity-0',
				'transition-all',
				'duration-1000'
			);
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<main class={themeConfig[$theme].background}>
	<!-- Hero Section -->
	<section
		bind:this={sections[0]}
		class={`flex min-h-screen items-center justify-center px-4 pt-20 ${themeConfig[$theme].sectionBg.hero}`}
	>
		<div class="text-center">
			<img
				class="mx-auto mb-[40px] h-[80px] w-[80px] rounded-full border object-cover md:h-[350px] md:w-[350px]"
				src="https://media.licdn.com/dms/image/v2/D4D03AQGy1KMpva_UKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699305399980?e=1740614400&v=beta&t=C-FI87XRtT_6DxNE8HD8MeO0buWHhaBnW0pcgS_R79Q"
				alt="Tomas Michna - Photo"
			/>

			<h1 class={`mb-6 text-5xl font-bold md:text-7xl ${themeConfig[$theme].text}`}>
				Hi, I'm Tomáš Michna
			</h1>
			<p class={`mb-8 text-xl opacity-80 md:text-2xl ${themeConfig[$theme].text}`}>
				Data Engineer / R&D
			</p>
			<a
				href="#contact"
				class={`inline-block rounded-lg px-8 py-3 transition-all duration-300 ${themeConfig[$theme].accent} transform text-white hover:scale-105 hover:opacity-90`}
			>
				Get in Touch
			</a>
		</div>
	</section>

	<!-- About Section -->
	<section
		id="about"
		bind:this={sections[1]}
		class={`px-4 py-20 ${themeConfig[$theme].sectionBg.about}`}
	>
		<div class="container mx-auto max-w-4xl">
			<h2 class={`mb-8 text-center text-3xl font-bold md:text-4xl ${themeConfig[$theme].text}`}>
				About Me
			</h2>
			<p class={`mb-6 text-lg ${themeConfig[$theme].text} opacity-80`}>
				Your compelling story goes here. Talk about your journey, passion, and what drives you.
			</p>
			<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each ['Experience', 'Education', 'Skills'] as category}
					<div
						class={`transform rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 ${themeConfig[$theme].card}`}
					>
						<h3 class={`mb-4 text-xl font-bold ${themeConfig[$theme].text}`}>{category}</h3>
						<p class={`${themeConfig[$theme].text} opacity-80`}>
							{#if category === 'Experience'}
								X years of professional experience
							{:else if category === 'Education'}
								Your degree or certifications
							{:else}
								Your key technical skills
							{/if}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section
		id="projects"
		bind:this={sections[2]}
		class={`px-4 py-20 ${themeConfig[$theme].sectionBg.projects}`}
	>
		<div class="container mx-auto max-w-6xl">
			<h2 class={`mb-8 text-center text-3xl font-bold md:text-4xl ${themeConfig[$theme].text}`}>
				Featured Projects
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _, i}
					<div
						class={`transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 ${themeConfig[$theme].card}`}
					>
						<img
							src={`https://placehold.co/400x300?text=Project+${i + 1}`}
							alt={`Project ${i + 1}`}
							class="h-48 w-full object-cover"
						/>
						<div class="p-6">
							<h3 class={`mb-2 text-xl font-bold ${themeConfig[$theme].text}`}>
								Project {i + 1}
							</h3>
							<p class={`mb-4 ${themeConfig[$theme].text} opacity-80`}>
								Brief description of the project goes here.
							</p>
							<div class="flex gap-2">
								{#each ['Tech 1', 'Tech 2'] as tech}
									<span
										class={`rounded-full px-3 py-1 text-sm ${themeConfig[$theme].background} ${themeConfig[$theme].text}`}
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section
		id="contact"
		bind:this={sections[3]}
		class={`px-4 py-20 ${themeConfig[$theme].sectionBg.contact}`}
	>
		<div class="container mx-auto max-w-xl">
			<h2 class={`mb-8 text-center text-3xl font-bold md:text-4xl ${themeConfig[$theme].text}`}>
				Get in Touch
			</h2>
			<form class="mx-auto max-w-xl space-y-6">
				<Input label="Name" id="name" type="text" />
				<Input label="Email" id="email" type="email" />
				<Input label="Message" id="message" type="textarea" />
				<button
					type="submit"
					class={`w-full rounded-lg px-8 py-3 transition-all duration-300 ${themeConfig[$theme].accent} transform text-white hover:scale-105 hover:opacity-90`}
				>
					Send Message
				</button>
			</form>
		</div>
	</section>
</main>
