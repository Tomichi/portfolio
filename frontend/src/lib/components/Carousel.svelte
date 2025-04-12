<script lang="ts">
	import RightArrow from '$lib/icons/RightArrow.svelte';
	import LeftArrow from '$lib/icons/LeftArrow.svelte';

	interface Props {
		items: any[];
		itemsPerPage: number;
	}

	let { items, itemsPerPage = 3 }: Props = $props();
	
	let currentIndex = $state(0);
	let maxIndex = $state(0);
	let canGoNext = $state(false);
	let canGoPrev = $state(false);
	let visibleItems = $state<any[]>([]);

	$effect(() => {
		const start = currentIndex * itemsPerPage;
		const end = start + itemsPerPage;
		visibleItems = items.slice(start, end);
		maxIndex = Math.max(0, Math.ceil(items.length / itemsPerPage) - 1);
		canGoNext = currentIndex < maxIndex;
		canGoPrev = currentIndex > 0;
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
		>
			<LeftArrow width="24px" height="24px" class="text-primary hover:text-primary/80"/>
		</button>

		<!-- Right Arrow -->
		<button
			class="absolute -right-12 top-1/2 -translate-y-1/2 transform opacity-100 transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-30"
			onclick={nextSlide}
			disabled={!canGoNext}
		>
			<RightArrow width="24px" height="24px" class="text-primary hover:text-primary/80"/>
		</button>
	{/if}

	<div class="flex gap-4">
		<slot {visibleItems} />
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