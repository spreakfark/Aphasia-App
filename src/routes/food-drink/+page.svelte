<script>
	import BackIcon from '$lib/back-icon.svelte';
	import Tile from '$lib/tile.svelte';
	import { base } from '$app/paths';
</script>

<div class="grid">
	<Tile>Water</Tile>
	<Tile>Ginger Ale</Tile>
	<Tile>Coffee</Tile>
	<Tile>Mashed Potatoes</Tile>
	<Tile>Meatloaf</Tile>
	<Tile>Pudding</Tile>
	<Tile>Eggs</Tile>
	<Tile>Fruit</Tile>
	<Tile disabled />
	<Tile disabled />
	<Tile disabled />
	<Tile href="{base}/"><BackIcon /></Tile>
</div>
