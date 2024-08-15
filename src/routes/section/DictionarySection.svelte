<script lang="ts">
	import { dictionary, toDictionary, toDictionaryList } from "../store";

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
	
	let testAreaComponent: HTMLTextAreaElement;
	export function focusWord(token: string) {
		const li = toDictionaryList(dictionaryText)
		const index = li.findIndex( (row) => row[0] === token)
        const lineHeight = testAreaComponent.scrollHeight / li.length;
		if (index >= 0) {
			testAreaComponent.scrollTo(0, index * lineHeight - 1)
		}
	}
</script>

<div class="dictionary-section">
	<textarea
		class="dictionary-area"
		bind:value={dictionaryText}
		bind:this={testAreaComponent}
		placeholder="じしょ&#13;翻訳前 翻訳後&#13;の形式で改行区切りで入れる&#13;間はスペースっぽいものならタブや複数でも可"
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
