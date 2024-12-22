<script lang="ts">
	import { theme, themeConfig } from '$lib/stores/theme';

	let {
		label,
		type = 'text',
		id
	} = $props<{ label: string; type?: 'text' | 'email' | 'textarea'; id: string }>();
</script>

<div>
	<label for={id} class={`mb-2 block ${themeConfig[$theme].text} opacity-80`}>
		{label}
	</label>

	{#if type === 'textarea'}
		<textarea
			{id}
			rows="4"
			class={`w-full rounded-lg border px-4 py-2 ${themeConfig[$theme].card} ${themeConfig[$theme].text} transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
		></textarea>
	{:else}
		<input
			{type}
			{id}
			class={`w-full rounded-lg border px-4 py-2 ${themeConfig[$theme].card} ${themeConfig[$theme].text} transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
		/>
	{/if}
</div>
