<script>
	import BackIcon from '$lib/back-icon.svelte';
	import Tile from '$lib/tile.svelte';
    import { base } from '$app/paths';
</script>

<div class="wrapper">
    <div class="container">
        <div class="banner">
            <span>Rate your pain</span>
            <span class="description">10 being the worst pain</span>
        </div>
    </div>
    <div class="grid">
        <Tile --tile-bg-color="#ffffff">1</Tile>
        <Tile --tile-bg-color="#FFEBEB">2</Tile>
        <Tile --tile-bg-color="#FFD7D7">3</Tile>
        <Tile --tile-bg-color="#FFC8C8">4</Tile>
        <Tile --tile-bg-color="#FFB6B6">5</Tile>
        <Tile --tile-bg-color="#FF8F8F">6</Tile>
        <Tile --tile-bg-color="#FF7A7A">7</Tile>
        <Tile --tile-bg-color="#FF5E5E">8</Tile>
        <Tile --tile-bg-color="#FF3A3A">9</Tile>
        <Tile --tile-bg-color="#FF2727">10</Tile>
        <Tile disabled />
        <Tile href="{base}/"><BackIcon /></Tile>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    .container {
        width: 100%;
    }
    .grid {
        height: 100%;
    }
    .banner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 3vh 5vw;
        font-size: clamp(1rem, min(4vw, 4vh), 2.75rem);
        border-top: 1px solid #000000;
    }
    .description {
        font-weight: 500;
        font-size: clamp(1rem, min(3vw, 3vh), 2.75rem);
    }
</style>