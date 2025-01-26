<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Blog - Tomáš Michna</title>
	<meta
		name="description"
		content="Articles about web development, technology, and software engineering."
	/>
</svelte:head>

<section class="container mx-auto min-h-screen px-4 py-20">
	<!-- Header -->
	<div class="mx-auto mb-16 max-w-3xl text-center">
		<h1 class="mb-4 text-4xl font-bold text-foreground md:text-6xl">Blog Posts</h1>
		<div
			class="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary/50"
		></div>
		<p class="text-xl text-muted-foreground">Personal posts about my journey.</p>
	</div>

	<!-- Blog Posts Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post}
			<article
				class="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
			>
				<a href={`/blog/${post.slug}`} class="flex h-full flex-col">
					{#if post.coverImage}
						<div class="relative aspect-[16/10] w-full overflow-hidden">
							<img
								src={post.coverImage}
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
								loading="lazy"
								decoding="async"
							/>
							{#if post.tags?.length}
								<div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span
											class="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
										>
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					{/if}

					<div class="flex flex-1 flex-col p-6">
						<div class="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
							<time datetime={post.date} class="font-medium">
								{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</time>
							<span>•</span>
							<span>{post.readingTime} min read</span>
						</div>

						<h2
							class="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-primary"
						>
							{post.title}
						</h2>

						<p class="mb-4 flex-1 text-muted-foreground">
							{post.excerpt}
						</p>

						<div class="mt-auto flex items-center text-sm font-medium text-primary">
							Read more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
