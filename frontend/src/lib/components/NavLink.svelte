<script lang="ts">
	let {
		href,
		external = false,
		children,
		onClick
	} = $props<{
		href: string;
		external?: boolean;
		children?: import('svelte').Snippet;
		onClick?: (e: MouseEvent) => void;
	}>();

	function handleClick(e: MouseEvent) {
		if (onClick) onClick(e);
	}
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="text-foreground transition-colors duration-200 hover:text-muted-foreground"
	onclick={handleClick}
>
	{@render children?.()}
</a>
