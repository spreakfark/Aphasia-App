<script>
import BackIcon from "$lib/back-icon.svelte";
import Tile from "$lib/tile.svelte";
import { base } from '$app/paths';

</script>
<div class="grid">
	<Tile>Angry</Tile>
	<Tile>Sad</Tile>
	<Tile>Lonely</Tile>
	<Tile>Confused</Tile>
	<Tile>Happy</Tile>
	<Tile>Worried</Tile>
	<Tile>Scared</Tile>
	<Tile>Have Anxiety</Tile>
	<Tile>Tired</Tile>
	<Tile>Depressed</Tile>
	<Tile disabled></Tile>
	<Tile href="{base}/"><BackIcon /></Tile>
</div>