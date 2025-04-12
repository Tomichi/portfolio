<script lang="ts">
	let { height = '1em', width = '1em', ...rest } = $props();
</script>

<svg {width} {height} viewBox="0 0 24 24" fill="none" {...rest} >
	<path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>