<script>
	import { onMount } from 'svelte';
	import { useRegisterSW } from 'virtual:pwa-register/svelte';
	import { browser, dev } from '$app/environment';
	import InstallPrompt from '$lib/install-prompt.svelte';

	onMount(() => {
		registerServiceWorker();
	});

	function registerServiceWorker() {
		if (!dev && !browser) {
			return;
		}
		useRegisterSW({
			onRegistered(r) {
				if (r) {
					r.update();
				}
			}
		});
	}
</script>

{#if browser}
	<InstallPrompt />
{/if}
<main>
	<slot />
</main>

<style>
	@font-face {
		font-family: 'Poppins';
		font-weight: 700;
		src: url('/Aphasia-App/fonts/poppins/Poppins-Bold.woff2') format('woff2'),
			url('/Aphasia-App/fonts/poppins/Poppins-Bold.woff') format('woff');
	}

	@font-face {
		font-family: 'Poppins';
		font-weight: 500;
		src: url('/Aphasia-App/fonts/poppins/Poppins-Medium.woff2') format('woff2'),
			url('/Aphasia-App/fonts/poppins/Poppins-Medium.woff') format('woff');
	}

	:global(html) {
		height: 100%;
	}

	:global(body) {
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
		font-weight: 700;
		font-style: normal;

		width: auto;
		height: calc(100% - (env(safe-area-inset-top) + env(safe-area-inset-bottom)));
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		user-select: none;
		margin: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
			env(safe-area-inset-left);
	}

	:global(html),
	:global(body) {
		/* Disables browser pull-to-reload */
		overscroll-behavior-y: contain;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
		-webkit-tap-highlight-color: transparent;
	}

	:global(.grid) {
		margin-top: -1px;
		margin-left: -1px;
		display: grid;
		height: calc(100% + 1px);
		width: calc(100% + 1px);
		overflow: hidden;
		overscroll-behavior: none;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
	}

	@media (min-width: 600px) {
		:global(.grid) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 1200px) {
		:global(.grid) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	main {
		position: relative;
		height: 100%;
		width: 100%;
	}
</style>
