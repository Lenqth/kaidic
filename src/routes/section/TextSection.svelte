<script lang="ts">
	import Token from '../atom/token.svelte';
	import {tokens} from '../store'
	import { createEventDispatcher } from "svelte";
    import type { SearchType } from '../types';

	const dispatch = createEventDispatcher();

	export let searchText: string = "";
	export let searchType: SearchType;

	let hoveredWord: string | null = null;
	
	function onHover(e: CustomEvent<string | null>){
		hoveredWord = e.detail
	}

	function onDblClickWord(token: string) {
		console.log(token)
		dispatch("dblClickWord", token)
	}

	let sentences;

	function match(text: string, target: string, searchType: SearchType, noBlank: boolean = false): boolean {
		if (target == "" && noBlank) return false;
		switch(searchType) {
			case "full":
				return text === target
			case 'part':
				return text.indexOf(target) >= 0
			case 'prefix':
				return text.startsWith(target)
			case 'suffix':
				return text.endsWith(target)
		}
	}

	function sentenceSplit(tks: string[], searchText: string, searchType: SearchType) : string[][] {
		const st = searchText.trim();
		let result = []
		let current: string[] = []

		tks.forEach( (token) => {
			current.push(token)
			if (token.indexOf(".")  >= 0 ) {
				if (st == "" || current.find(x => match(x, st, searchType))) {
					result.push(current)
				}
				current = []
			}
		})

		if (current.length > 0) {
			result.push(current)
		}
		return result
	}

	$: sentences = sentenceSplit($tokens, searchText, searchType)

</script>

<div class="text-section">
	{#each sentences as s, _}
		{#each s as t, i}
			<Token
				token={t}
				hovered={hoveredWord===t} 
				searched={match(t, searchText, searchType, true)}
				on:hover={onHover}
				on:click={() => onDblClickWord(t)}
			/>
		{/each}
		<br>
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
