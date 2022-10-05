<script lang="ts">
	import Tile from '$lib/tile.svelte';
	import { base } from '$app/paths';

	//@ts-ignore
	const version: string = __version__;
</script>

<div class="grid">
	<Tile icon_href="{base}/icons/seat-flat-angled.svg">Incline Bed</Tile>
	<Tile icon_href="{base}/icons/seat-flat.svg">Lay down</Tile>
	<Tile icon_href="{base}/icons/seat-passenger.svg">Sit up</Tile>
	<Tile icon_href="{base}/icons/pill.svg">Need Medicine</Tile>
	<Tile icon_href="{base}/icons/doctor.svg">Nurse or Doctor</Tile>
	<Tile icon_href="{base}/icons/lightning-bolt.svg" href="{base}/pain">In Pain</Tile>
	<Tile icon_href="{base}/icons/food.svg" href="{base}/food-drink">Food/Drink</Tile>
	<Tile icon_href="{base}/icons/television-classic.svg">TV</Tile>
	<Tile icon_href="{base}/icons/shower.svg">Bath</Tile>
	<Tile icon_href="{base}/icons/paper-roll-outline.svg">Change Bed</Tile>
	<Tile icon_href="{base}/icons/emoticon-angry-outline.svg" href="{base}/emotions">Emotions</Tile>
	<Tile href="{base}/yes-no">Yes/No</Tile>
</div>
<div class="version">{version}</div>

<style>
	.version {
		position: absolute;
		bottom: 0.4rem;
		right: 0.4rem;
		font-weight: 500;
		opacity: 0.1;
		font-size: 0.75rem;
		z-index: 10;
	}
</style>