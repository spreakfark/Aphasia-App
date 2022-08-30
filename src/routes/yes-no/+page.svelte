<script>
import Tile from "$lib/tile.svelte";

</script>

<a class="back" href="/">Back</a>
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
        font-size: 18vw;
    }

    .back {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10;
    }
</style>