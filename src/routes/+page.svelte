<script>
	import TextSection from './section/TextSection.svelte';
	import DictionarySection from './section/DictionarySection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="kaidic" />
</svelte:head>

<section>
	<TextSection/>
	<DictionarySection />
</section>

<style>
section {
	display: grid;
	grid-template-areas: "left right";
	grid-template-columns: 1fr 30%;
	width: 100%;
	height: 100%;
}

</style>
