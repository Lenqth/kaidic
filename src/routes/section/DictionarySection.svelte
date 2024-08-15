<script lang="ts">
	import { dictionary, toDictionary } from "../store";

	let dictionaryText = localStorage.getItem("Kaidic_dict") ?? "";

	function input(text: string) {
		localStorage.setItem("Kaidic_dict", text)
		let newDict = toDictionary(text)
		dictionary.set(
			newDict
		)
		console.log(newDict)
	}
	$: input(dictionaryText) 
</script>

<div class="dictionary-section">
	<textarea
		class="dictionary-area"
		bind:value={dictionaryText}
		placeholder="じしょ"
	/>
</div>

<style>
	.dictionary-section {
		grid-area: right;
		width: 100%;
		height: 100%;
	}
	.dictionary-area {
		overflow-y: scroll;
		background-color: #ececd6;
		width: 100%;
		height: 100%;
	}
</style>
