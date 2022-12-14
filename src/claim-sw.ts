import {
	cleanupOutdatedCaches,
	createHandlerBoundToURL,
	precacheAndRoute
} from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let denylist: undefined | RegExp[];
if (import.meta.env.DEV) denylist = [/^\/_app\/manifest.webmanifest$/];

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('/Aphasia-App'), { denylist }));

(self as any).skipWaiting();
clientsClaim();
