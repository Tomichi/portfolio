<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import RightArrow from '$lib/icons/RightArrow.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';

	interface Props {
		items: T[];
		itemsPerPage?: number;
		children: Snippet<[T[]]>;
	}

	let { items, itemsPerPage = 3, children }: Props = $props();

	let currentIndex = $state(0);

	const maxIndex = $derived(Math.max(0, Math.ceil(items.length / itemsPerPage) - 1));
	const canGoNext = $derived(currentIndex < maxIndex);
	const canGoPrev = $derived(currentIndex > 0);
	const visibleItems = $derived(() => {
		const start = currentIndex * itemsPerPage;
		const end = start + itemsPerPage;
		return items.slice(start, end);
	});

	function goToPage(index: number) {
		if (index >= 0 && index <= maxIndex) {
			currentIndex = index;
		}
	}

	function nextSlide() {
		if (canGoNext) {
			currentIndex++;
		}
	}

	function prevSlide() {
		if (canGoPrev) {
			currentIndex--;
		}
	}
</script>

<div class="relative">
	{#if items.length > itemsPerPage}
		<!-- Left Arrow -->
		<button
			class="absolute -left-12 top-1/2 -translate-y-1/2 transform opacity-100 transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-30"
			onclick={prevSlide}
			disabled={!canGoPrev}
			aria-label="Previous page"
		>
			<LeftArrow width="24px" height="24px" class="text-primary hover:text-primary/80" />
		</button>

		<!-- Right Arrow -->
		<button
			class="absolute -right-12 top-1/2 -translate-y-1/2 transform opacity-100 transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-30"
			onclick={nextSlide}
			disabled={!canGoNext}
			aria-label="Next page"
		>
			<RightArrow width="24px" height="24px" class="text-primary hover:text-primary/80" />
		</button>
	{/if}

	<div class="flex gap-4">
		{@render children(visibleItems())}
	</div>

	<!-- Pagination Dots -->
	{#if items.length > itemsPerPage}
		<div class="mt-8 flex justify-center gap-2">
			{#each Array(maxIndex + 1) as _, index}
				<button
					class="h-2 w-2 rounded-full transition-all duration-200 {currentIndex === index ? 'bg-primary' : 'bg-primary/30'}"
					onclick={() => goToPage(index)}
					aria-label="Go to page {index + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div> 