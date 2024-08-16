<script lang="ts">
	import { page } from "$app/stores";
	import { base } from "$app/paths";
    import type { SearchType } from "./types";
	export let searchText: string = "";

	export let searchType: SearchType = "part";
</script>

<footer>
	<div class="corner"></div>

	<nav>
		<div>
			<label for="searchText">
				文を単語でフィルタする:
			</label>
			<input type="text" id="searchText" bind:value={searchText}>
		</div>
		<fieldset class="radioset">
			<label for="searchType1">部分一致</label>
			<input type="radio" id="searchType1" name="searchType" value="part" checked bind:group={searchType}/>

			<label for="searchType2">完全一致</label>
			<input type="radio" id="searchType2" name="searchType" value="full"  bind:group={searchType}/>

			<label for="searchType3">前方一致</label>
			<input type="radio" id="searchType3" name="searchType" value="prefix"  bind:group={searchType}/>

			<label for="searchType4">後方一致</label>
			<input type="radio" id="searchType4" name="searchType" value="suffix"  bind:group={searchType}/>
		</fieldset>
	</nav>

	<div class="corner"></div>
</footer>

<style>
	input {
		margin: 1rem;
		height: fit-content;
	}
	.radioset {
		margin: 1rem;
	}
	input[type=radio] {
		margin: auto 1rem auto 0.2rem;
	}

	footer {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
