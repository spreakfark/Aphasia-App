<script lang="ts">
	import Tile from '$lib/tile.svelte';
</script>

<div class="grid">
	<Tile>Tile 1</Tile>
	<Tile>Tile 2</Tile>
	<Tile>Tile 3</Tile>

	<Tile>Tile 4</Tile>
	<Tile>Tile 5</Tile>
	<Tile>Tile 6</Tile>

	<Tile>Tile 7</Tile>
	<Tile>Tile 8</Tile>
	<Tile>Tile 9</Tile>

	<Tile>Tile 10</Tile>
	<Tile>Tile 11</Tile>
	<Tile>Tile 12</Tile>
</div>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.grid {
		display: grid;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		overscroll-behavior: none;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 600px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 1200px) {
		.grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
