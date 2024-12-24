<script lang="ts">
	let {
		href,
		external = false,
		children
	} = $props<{
		href: string;
		external?: boolean;
		children?: import('svelte').Snippet;
	}>();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="text-foreground transition-colors duration-200 hover:text-muted-foreground"
>
	{@render children?.()}
</a>
