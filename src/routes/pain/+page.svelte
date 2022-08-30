<script>
	import BackIcon from '$lib/back-icon.svelte';
	import Tile from '$lib/tile.svelte';
	import { base } from '$app/paths';
</script>

<div class="grid">
	<Tile href="{base}/pain/intensity">Head</Tile>
	<Tile href="{base}/pain/intensity">Stomach</Tile>
	<Tile href="{base}/pain/intensity">Chest</Tile>
	<Tile href="{base}/pain/intensity">Back</Tile>
	<Tile href="{base}/pain/intensity">Legs</Tile>
	<Tile href="{base}/pain/intensity">Feet</Tile>
	<Tile href="{base}/pain/intensity">Skin</Tile>
	<Tile href="{base}/pain/intensity">Eyes</Tile>
	<Tile href="{base}/pain/intensity">Shoulder</Tile>
	<Tile href="{base}/pain/intensity">Mouth</Tile>
	<Tile href="{base}/pain/intensity">Arm</Tile>
	<Tile href="{base}/"><BackIcon /></Tile>
</div>
