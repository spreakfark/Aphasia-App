<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Bowser from 'bowser';

	interface IBeforeInstallPromptEvent extends Event {
		prompt(): Promise<void>;
	}

	let dialogVisible = false;
	let bannerVisible = false;

	let isMobile = false;
	let isSafari = false;
	let isChrome = false;
	let isIPaid = false;
	let isInStandaloneMode = false;

	let installer: IBeforeInstallPromptEvent | undefined;

	onMount(() => {
		const browser = Bowser.getParser(window.navigator.userAgent);
		const platform = browser.getPlatform().type;
		isMobile = platform === 'mobile' || platform === 'tablet';
		isSafari = browser.getBrowserName(true) === 'safari';
		isChrome = browser.getBrowserName(true) === 'chrome';
		const iPadProperties =
			navigator.userAgent.match(/Mac/) &&
			!!navigator.maxTouchPoints &&
			navigator?.maxTouchPoints > 2;
		isIPaid = iPadProperties !== null && iPadProperties;

		isInStandaloneMode =
			window.matchMedia('(display-mode: standalone)').matches ||
			(window.navigator as any).standalone ||
			document.referrer.includes('android-app://');

		bannerVisible = (isMobile || isIPaid) && !isInStandaloneMode;
	});

	function install() {
		if (isChrome) {
			if (installer === undefined) {
				bannerVisible = false;
				return;
			}
			installer?.prompt();
			return;
		}
		dialogVisible = true;
	}

	function hideDialog() {
		dialogVisible = false;
	}

	function catchInstallPromt(event: Event) {
		event.preventDefault();
		installer = event as IBeforeInstallPromptEvent;
	}
</script>

<svelte:window on:beforeinstallprompt={catchInstallPromt} />

{#if bannerVisible}
	<div class="banner">
		<div class="banner-block">
			<img src="{base}/favicon.png" alt="App Icon" id="app-icon" />
			<span id="app-name">Aphasia</span>
			<button id="app-install-button" on:click={install}>Install</button>
		</div>
	</div>
{/if}
{#if dialogVisible}
	<div class="backdrop" on:click|self={hideDialog}>
		<div class="dialog">
			{#if isSafari}
				<div class="ios-guide">
					<span class="dialog-title">Install App (iOS)</span>
					<div class="step fill-blue">
						<svg
							class="step-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="56"
							height="56"
							viewBox="0 0 56 56"
							><path
								d="M 28.0117 36.0975 C 29.0195 36.0975 29.8633 35.2538 29.8633 34.2694 L 29.8633 10.1991 L 29.7226 6.7069 L 31.3164 8.3710 L 34.8555 12.1444 C 35.1836 12.5194 35.6758 12.7069 36.1211 12.7069 C 37.1055 12.7069 37.8320 12.0038 37.8320 11.0663 C 37.8320 10.5507 37.6445 10.1757 37.2930 9.8241 L 29.3711 2.1835 C 28.9023 1.7146 28.4805 1.5509 28.0117 1.5509 C 27.5195 1.5509 27.1211 1.7146 26.6523 2.1835 L 18.7305 9.8241 C 18.3789 10.1757 18.1679 10.5507 18.1679 11.0663 C 18.1679 12.0038 18.8711 12.7069 19.8555 12.7069 C 20.3242 12.7069 20.8164 12.5194 21.1445 12.1444 L 24.7070 8.3710 L 26.3008 6.6835 L 26.1367 10.1991 L 26.1367 34.2694 C 26.1367 35.2538 27.0039 36.0975 28.0117 36.0975 Z M 14.5586 54.4491 L 41.4414 54.4491 C 46.3633 54.4491 48.8008 52.0116 48.8008 47.1835 L 48.8008 24.0741 C 48.8008 19.2460 46.3633 16.8085 41.4414 16.8085 L 34.9258 16.8085 L 34.9258 20.5819 L 41.3945 20.5819 C 43.6914 20.5819 45.0274 21.8241 45.0274 24.2616 L 45.0274 46.9960 C 45.0274 49.4335 43.6914 50.6757 41.3945 50.6757 L 14.6289 50.6757 C 12.2852 50.6757 10.9726 49.4335 10.9726 46.9960 L 10.9726 24.2616 C 10.9726 21.8241 12.2852 20.5819 14.6289 20.5819 L 21.0976 20.5819 L 21.0976 16.8085 L 14.5586 16.8085 C 9.6836 16.8085 7.1992 19.2226 7.1992 24.0741 L 7.1992 47.1835 C 7.1992 52.0350 9.6836 54.4491 14.5586 54.4491 Z"
							/></svg
						>
						<span>1. Press the share button {isIPaid ? 'above' : 'below'}</span>
					</div>
					<div class="step fill-black">
						<svg
							class="step-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="56"
							height="56"
							viewBox="0 0 56 56"
							><path
								d="M 46.8672 9.2617 C 44.4766 6.8711 41.1016 6.4961 37.1172 6.4961 L 18.8360 6.4961 C 14.8985 6.4961 11.5235 6.8711 9.1329 9.2617 C 6.7422 11.6523 6.3907 15.0039 6.3907 18.9180 L 6.3907 37.0118 C 6.3907 41.0195 6.7422 44.3477 9.1329 46.7383 C 11.5235 49.1289 14.8985 49.5039 18.9063 49.5039 L 37.1172 49.5039 C 41.1016 49.5039 44.4766 49.1289 46.8672 46.7383 C 49.2580 44.3477 49.6093 41.0195 49.6093 37.0118 L 49.6093 18.9883 C 49.6093 14.9805 49.2580 11.6289 46.8672 9.2617 Z M 45.8360 18.3320 L 45.8360 37.6445 C 45.8360 40.0820 45.5313 42.5664 44.1251 43.9961 C 42.6953 45.4024 40.1641 45.7305 37.7500 45.7305 L 18.2500 45.7305 C 15.8360 45.7305 13.3048 45.4024 11.8985 43.9961 C 10.4688 42.5664 10.1641 40.0820 10.1641 37.6445 L 10.1641 18.4023 C 10.1641 15.9414 10.4688 13.4102 11.8751 12.0039 C 13.3048 10.5742 15.8594 10.2696 18.3204 10.2696 L 37.7500 10.2696 C 40.1641 10.2696 42.6953 10.5977 44.1251 12.0039 C 45.5313 13.4336 45.8360 15.9180 45.8360 18.3320 Z M 28.0000 40.5039 C 28.9375 40.5039 29.6875 39.7774 29.6875 38.8398 L 29.6875 29.6758 L 38.8516 29.6758 C 39.7891 29.6758 40.5391 28.8789 40.5391 28.0118 C 40.5391 27.0977 39.7891 26.3242 38.8516 26.3242 L 29.6875 26.3242 L 29.6875 17.1367 C 29.6875 16.1992 28.9375 15.4727 28.0000 15.4727 C 27.0626 15.4727 26.3360 16.1992 26.3360 17.1367 L 26.3360 26.3242 L 17.1719 26.3242 C 16.2344 26.3242 15.4844 27.0977 15.4844 28.0118 C 15.4844 28.8789 16.2344 29.6758 17.1719 29.6758 L 26.3360 29.6758 L 26.3360 38.8398 C 26.3360 39.7774 27.0626 40.5039 28.0000 40.5039 Z"
							/></svg
						>
						<span>2. Press "Add to Home Screen"</span>
					</div>
					<button class="close-button" on:click={hideDialog}>OK</button>
				</div>
			{:else}
				<div class="not-chrome-mobile-guide">
					<span class="dialog-title">Browser not supported</span>
					<div class="step fill-black">
						<svg
							class="step-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m12 20l3.46-6h-.01c.34-.6.55-1.27.55-2c0-1.2-.54-2.27-1.38-3h4.79c.38.93.59 1.94.59 3a8 8 0 0 1-8 8m-8-8c0-1.46.39-2.82 1.07-4l3.47 6h.01c.69 1.19 1.95 2 3.45 2c.45 0 .88-.09 1.29-.23l-2.4 4.14C7 19.37 4 16.04 4 12m11 0a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3m-3-8a7.98 7.98 0 0 1 6.92 4H12c-1.94 0-3.55 1.38-3.92 3.21L5.7 7.08A7.981 7.981 0 0 1 12 4m0-2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
							/></svg
						>
						<span>Open this webpage in the Chrome browser</span>
					</div>
					<button class="close-button" on:click={hideDialog}>OK</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	#app-icon {
		height: 2.75rem;
		width: 2.75rem;
		border-radius: 22%;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	#app-name {
		margin: 0 0.5rem;
		flex-grow: 1;
		font-size: 1rem;
	}
	.banner {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-left: 1rem;
		margin-right: 1rem;
		animation: slide-in 0.8s forwards;
		border-bottom: 1px solid #000000;
		z-index: 100;
	}

	@keyframes slide-in {
		0% {
			margin-top: -60px;
		}
		100% {
			margin-top: 0px;
		}
	}

	.banner-block {
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 60rem;
	}

	@media (max-height: 348px) {
		.banner {
			display: none;
		}
	}

	button {
		font-size: 1rem;
		font-weight: 400;
		background-color: #007aff;
		color: #ffffff;
		text-decoration: none;
		border: none;
		border-radius: 0.5rem;
		text-align: center;
		padding: 0.3rem 0.75rem;
	}
	button:active {
		background-color: #0068d8;
	}
	#app-install-button {
		font-size: 0.875rem;
		border-radius: 2rem;
	}

	.backdrop {
		z-index: 1000;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		position: absolute;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dialog {
		background-color: #ffffff;
		height: auto;
		width: 19rem;
		padding: 1.25rem;
		margin: 0.5rem;
		border-radius: 0.5rem;
		font-weight: 500;
		font-size: 1rem;
	}
	.dialog > div {
		display: flex;
		flex-direction: column;
	}
	.dialog-title {
		margin: 0 0 1rem;
		display: block;
		font-size: 1.5rem;
	}
	.step {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1rem;
	}
	.step span {
		margin-left: 0.5rem;
	}
	.step .step-icon {
		height: auto;
		width: 1.75rem;
	}
	.dialog .close-button {
		align-items: flex-end;
		align-self: flex-end;
	}
	.fill-blue {
		fill: #007aff;
	}
	.fill-black {
		fill: #000000;
	}
</style>
