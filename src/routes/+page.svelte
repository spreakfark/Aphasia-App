<script lang="ts">
	import Tile from '$lib/tile.svelte';
</script>

<div class="grid">
	<Tile>Incline Bed</Tile>
	<Tile>Lay down</Tile>
	<Tile>Sit up</Tile>
	<Tile>Need Medicine</Tile>
	<Tile>Nurse or Doctor</Tile>
	<Tile>In Pain</Tile>
	<Tile>Food/Drink</Tile>
	<Tile>TV</Tile>
	<Tile>Bath</Tile>
	<Tile>Change Bed</Tile>
	<Tile>Emotions</Tile>
	<Tile>Yes/No</Tile>
</div>

<style>
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
