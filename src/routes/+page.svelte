<script lang="ts">
	import TextSection from './section/TextSection.svelte';
	import DictionarySection from './section/DictionarySection.svelte';
    import Footer from './Footer.svelte';
    import type { SearchType } from './types';

	let dictComponent: DictionarySection;

	function dblClockWord(token: CustomEvent<string>) {
		dictComponent.focusWord(token.detail)
	}

	let searchText: string;
	let searchType: SearchType;
 </script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="kaidic" />
</svelte:head>

<section>
	<TextSection
		on:dblClickWord="{dblClockWord}"
		searchText={searchText}
		searchType={searchType}
	/>
	<DictionarySection 
		bind:this={dictComponent}
	/>
	<Footer 
	bind:searchText={searchText}
	bind:searchType={searchType}
	/>
</section>

<style>
section {
	display: grid;
	grid-template-areas: "left right" "footer footer";
	grid-template-columns: 1fr 30%;
	grid-template-rows: 1fr 8%;
	width: 100%;
	height: 100%;
}

</style>
