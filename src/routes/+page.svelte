<script lang="ts">
	import Tile from '$lib/tile.svelte';
</script>

<div class="grid">
	<Tile icon_href="/icons/seat-flat-angled.svg">Incline Bed</Tile>
	<Tile icon_href="/icons/seat-flat.svg">Lay down</Tile>
	<Tile icon_href="/icons/seat-passenger.svg">Sit up</Tile>
	<Tile icon_href="/icons/pill.svg">Need Medicine</Tile>
	<Tile icon_href="/icons/doctor.svg">Nurse or Doctor</Tile>
	<Tile icon_href="/icons/lightning-bolt.svg">In Pain</Tile>
	<Tile icon_href="/icons/food.svg" href="/food-drink">Food/Drink</Tile>
	<Tile icon_href="/icons/television-classic.svg">TV</Tile>
	<Tile icon_href="/icons/shower.svg">Bath</Tile>
	<Tile icon_href="/icons/paper-roll-outline.svg">Change Bed</Tile>
	<Tile icon_href="/icons/emoticon-angry-outline.svg" href="/emotions">Emotions</Tile>
	<Tile href="/yes-no">Yes/No</Tile>
</div>
