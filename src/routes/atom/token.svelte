<script lang="ts">
	import { dictionary } from '../store';

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function onMouseOver() {
		dispatch("hover", token);
	}
	function onMouseLeave() {
		dispatch("hover", null);
	}
	export let token: string;
	export let hovered: boolean;
	let isBr;
	$: isBr = token.indexOf(".") >= 0;


</script>

<span
	on:mouseover={onMouseOver}
	on:mouseleave={onMouseLeave}
	on:focus={onMouseOver}
	on:blur={onMouseLeave}
	class:hovered={hovered}
	title={token}
>
	{($dictionary)[token] ?? token}
</span>
{#if isBr}
	<br>	
{/if}

<style>
	span {
		display: inline-block;
		margin: 2px;
		font-family: monospace;
		user-select: all;
	}
	.hovered {
		background-color: lightpink;
	}
</style>
