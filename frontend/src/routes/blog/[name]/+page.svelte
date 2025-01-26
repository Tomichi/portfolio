<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.post.title} - Tomáš Michna Blog</title>
	<meta name="description" content={data.post.excerpt} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<article class="container mx-auto min-h-screen px-4 py-20" lang="en">
	<!-- Header -->
	<header class="mx-auto mb-16 max-w-4xl text-center">
		<h1
			class="mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
		>
			{data.post.title}
		</h1>
		<div class="mb-8 flex items-center justify-center gap-6 text-base text-muted-foreground">
			<time datetime={data.post.date} class="font-medium">
				{new Date(data.post.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
			<span class="h-1.5 w-1.5 rounded-full bg-primary/50"></span>
			<span>{data.post.readingTime} min read</span>
		</div>
		{#if data.post.coverImage}
			<div class="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl shadow-xl">
				<div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
				<img
					src={data.post.coverImage}
					alt={`Cover image for ${data.post.title}`}
					class="h-full w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			</div>
		{/if}
	</header>

	<!-- Content -->
	<div
		class="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline prose-a:transition-colors hover:prose-a:text-primary/80 prose-pre:rounded-lg prose-img:rounded-lg"
	>
		{@html data.post.content}
	</div>

	<!-- Footer -->
	<footer class="mx-auto mt-20 max-w-3xl">
		<div
			class="flex flex-col items-center gap-8 rounded-xl border border-border bg-card p-8 text-center"
		>
			<div class="space-y-2">
				<h2 class="text-xl font-semibold text-foreground">Thanks for reading!</h2>
				<p class="text-muted-foreground">Feel free to share this post with others.</p>
			</div>

			{#if data.post.tags?.length}
				<div class="flex flex-wrap justify-center gap-2">
					{#each data.post.tags as tag}
						<span class="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<a
				href="/blog"
				class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				Back to all posts
			</a>
		</div>
	</footer>
</article>
