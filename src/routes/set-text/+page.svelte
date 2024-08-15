<script lang="ts">
	
	import { tokens, toTokens } from '../store';

	let text: string = localStorage.getItem("Kaidic_targetText") ?? "";
	function setText (text: string) {
		localStorage.setItem("Kaidic_targetText", text)
		let newTokens = toTokens(text);
		tokens.set(newTokens);
	}
	$: setText(text)

</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<textarea bind:value={text} />

<style>
textarea {
	margin: 2rem;
	width: 80%;
	height: 80%;
}
</style>