<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        value: string;
        href?: string;
        children: Snippet;
    }
    let { href = '', value, children }: Props = $props();
</script>

{#if href}
	<a {href} class="group block rounded-md border border-transparent p-2.5 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/5">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				{@render children?.()}
			</div>
			<span class="text-base text-primary group-hover:underline">
				{value}
			</span>
		</div>
	</a>
{:else}
	<div class="group block rounded-md border border-transparent p-2.5 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/5">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				{@render children?.()}
			</div>
			<span class="text-base text-muted-foreground">
				{value}
			</span>
		</div>
	</div>
{/if}