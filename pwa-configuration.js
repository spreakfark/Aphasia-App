const pwaConfiguration = {
	srcDir: './build',
	outDir: './.svelte-kit/output/client',
	includeManifestIcons: false,
	base: '/Aphasia-App/',
	scope: '/Aphasia-App/',
	manifest: {
		short_name: 'Aphasia',
		name: 'Aphasia',
		scope: '/Aphasia-App/',
		start_url: '/Aphasia-App/',
		display: 'standalone',
		theme_color: '#ffffff',
		background_color: '#ffffff',
		icons: [
			{
				src: '/Aphasia-App/pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/Aphasia-App/pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: '/Aphasia-App/pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable'
			}
		]
	},
	workbox: {
		// mode: 'development',
		navigateFallback: '/Aphasia-App',
		// vite and SvelteKit are not aligned: pwa plugin will use /\.[a-f0-9]{8}\./ by default: #164 optimize workbox work
		dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
		globDirectory: './build/',
		globPatterns: ['robots.txt', '**/*.{js,css,html,ico,png,svg,webmanifest}'],
		globIgnores: ['**/sw*', '**/workbox-*'],
		inlineWorkboxRuntime: true,
		modifyURLPrefix: { '': '/Aphasia-App/' },

		manifestTransforms: [
			async (/** @type {any[]} */ entries) => {
				// manifest.webmanifest is added always by pwa plugin, so we remove it.
				// EXCLUDE from the sw precache sw and workbox-*
				const manifest = entries
					.filter(
						({ url }) =>
							url !== 'Aphasia-App/manifest.webmanifest' &&
							url !== 'Aphasia-App/sw.js' &&
							!url.startsWith('Aphasia-App/workbox-')
					)
					.map((e) => {
						let url = e.url;
						if (url && url.endsWith('.html')) {
							if (url.startsWith('/')) {
								url = url.slice(1);
							}

							if (url === '/Aphasia-App/index.html') {
								e.url = '/Aphasia-App';
							} else if (url.endsWith('index.html')) {
								e.url = `/${url.substring(0, url.lastIndexOf('/'))}`;
							} else if (url.endsWith('.html')) {
								e.url = `/${url.substring(0, url.length - '.html'.length)}`;
							}
						}

						return e;
					});

				return { manifest };
			}
		]
	}
};

export { pwaConfiguration };
