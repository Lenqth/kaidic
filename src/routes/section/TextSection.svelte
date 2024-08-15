<script lang="ts">
	import Token from '../atom/token.svelte';
	import {tokens} from '../store'

	let hoveredWord: string | null = null;
	
	function onHover(e: CustomEvent<string | null>){
		hoveredWord = e.detail
	}
</script>

<div class="text-section">
	{#each $tokens as t, i}
		<Token token={t} hovered={hoveredWord===t} on:hover={onHover}/>
	{/each}
</div>

<style>

.text-section {
	width: 100%;
	height: 100%;
	grid-area: left;
	overflow-y: scroll;
	white-space: pre-wrap;
}
</style>
