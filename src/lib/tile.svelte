<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href === undefined}
	<button class="tile">
		<slot />
	</button>
{:else}
	<a class="tile" {href}>
		<slot />
	</a>
{/if}

<style>
	.tile {
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
		font-size: clamp(1rem, 4vw, 2.75rem);
        text-decoration: none;
		background-color: #ffffff;
		color: #000000;
		border: 1px #000000 solid;
		border-radius: 0;
		margin: -1px;
		padding: 2rem;
		transition: 0s;
		transition-delay: 3s;
		transition-duration: 0.5s;
        display: flex;
        justify-content: center; /* align horizontal */
        align-items: center;
	}

	.tile:active {
		transition-delay: -1s;
		background-color: #000000;
		color: #ffffff;
	}
</style>
