<script lang="ts">
	export let href: string | undefined = undefined;
	export let icon_href: string | undefined = undefined;
	export let icon_alt: string | undefined = undefined;
	export let disabled: boolean = false;
</script>

{#if href === undefined}
	<button class={$$props.class + ' tile '} class:disabled>
		{#if icon_href !== undefined}
			<img class="icon" src={icon_href} alt={icon_alt} />
		{/if}
		<span>
			<slot />
		</span>
	</button>
{:else}
	<a class={$$props.class + ' tile'} class:disabled {href}>
		{#if icon_href !== undefined}
			<img class="icon" src={icon_href} alt={icon_alt} />
		{/if}
		<span>
			<slot />
		</span>
	</a>
{/if}

<style>
	.tile {
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
		font-size: clamp(0.5rem, min(4vw, 3.5vh), 2.75rem);
		font-weight: 700;
		line-height: clamp(1rem, min(5vw, 5vh), 3rem);
		text-decoration: none;
		background-color: var(--tile-bg-color, #ffffff);
		color: #000000;
		border: 1px #000000 solid;
		border-radius: 0;
		margin-right: -1px;
		margin-bottom: -1px;
		padding: clamp(0rem, min(4vw, 4vh), 2rem);
		transition: 0s;
		transition-delay: 3s;
		transition-duration: 0.5s;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.tile:not(.disabled):active {
		transition-delay: -1s;
		background-color: #000000;
		color: #ffffff;
		border-color: #ffffff;
		z-index: 0;
	}

	.tile .icon {
		width: auto;
		height: calc(clamp(0.5rem, min(4vw, 3.5vh), 2.75rem) * 2);
		object-fit: contain;
		transition: 0s;
		transition-delay: 3s;
		transition-duration: 0.5s;
		margin-bottom: min(1vw, 1vh);
	}

	.tile:not(.disabled):active .icon {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
		transition-delay: -1s;
	}

	/* Safari only override */
	:global(_::-webkit-full-page-media), :global(_:future), :global(:root) .tile {
		margin: -1px !important;
	}

	@media not all and (min-resolution: 0.001dpcm) {
		@supports (-webkit-appearance: none) {
			.tile {
				margin: -1px !important;
			}
		}
	}
</style>
