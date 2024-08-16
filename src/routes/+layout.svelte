<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: grid;
		grid-template-rows: min-content 1fr;
		height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
