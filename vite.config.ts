import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
import { pwaConfiguration } from './pwa-configuration.js'

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

const config: UserConfig = {
	plugins: [VitePWA(pwaConfiguration), sveltekit()],
	define: {
		__version__: `"${pkg.version}"`
	}
};

export default config;
