<script lang="ts">
	export let href: string | undefined = undefined;
	export let icon_href: string | undefined = undefined;
	export let icon_alt: string | undefined = undefined;
</script>

{#if href === undefined}
	<button class={$$props.class + ' tile '}>
		{#if icon_href !== undefined}
			<img class="icon" src={icon_href} alt={icon_alt} />
		{/if}
		<slot />
	</button>
{:else}
	<a class={$$props.class + ' tile'} {href}>
		{#if icon_href !== undefined}
			<img class="icon" src={icon_href} alt={icon_alt} />
		{/if}
		<slot />
	</a>
{/if}

<style>
	.tile {
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
		font-size: clamp(1rem, 4vw, 2.75rem);
        line-height: 3rem;
		text-decoration: none;
		background-color: #ffffff;
		color: #000000;
		border: 1px #000000 solid;
		border-radius: 0;
		margin-right: -1px;
		margin-bottom: -1px;
		padding: 2rem;
		transition: 0s;
		transition-delay: 3s;
		transition-duration: 0.5s;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.tile:active {
		transition-delay: -1s;
		background-color: #000000;
		color: #ffffff;
		border-color: #ffffff;
		z-index: 0;
	}

	.tile .icon {
		width: 36%;
		height: 36%;
		object-fit: contain;
		transition: 0s;
		transition-delay: 3s;
		transition-duration: 0.5s;
		margin-bottom: 1rem;
	}

	.tile:active .icon {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
		transition-delay: -1s;
	}
</style>
