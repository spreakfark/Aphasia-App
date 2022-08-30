<script>
	import BackIcon from '$lib/back-icon.svelte';
	import Tile from '$lib/tile.svelte';
</script>

<a class="back" href="/">
    <BackIcon />
</a>
<div class="yes-no-page grid">
	<Tile class="big">Yes</Tile>
	<Tile class="big">No</Tile>
</div>

<style>
	.grid {
		grid-template-columns: none;
		grid-template-rows: repeat(2, 1fr);
	}

	.yes-no-page :global(.big) {
		font-size: min(18vh, 18vw);
	}

	.back {
		position: absolute;
		top: 2vw;
		left: 2vw;
		z-index: 10;
	}
</style>
