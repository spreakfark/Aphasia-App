if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let u={};const r=e=>i(e,a),o={module:{uri:a},exports:u,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(l(...e),u)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"robots.txt",revision:"ea6b94db76687d4538d1341c4f2120dd"},{url:"_app/immutable/assets/+layout-af88e95f.css",revision:null},{url:"_app/immutable/assets/+page-26c2e937.css",revision:null},{url:"_app/immutable/assets/+page-ba18a7ec.css",revision:null},{url:"_app/immutable/assets/back-icon-b047119d.css",revision:null},{url:"_app/immutable/assets/tile-ae97b290.css",revision:null},{url:"_app/immutable/chunks/0-7bc90be1.js",revision:null},{url:"_app/immutable/chunks/1-64f266bb.js",revision:null},{url:"_app/immutable/chunks/2-a67daff1.js",revision:null},{url:"_app/immutable/chunks/3-6d3690cb.js",revision:null},{url:"_app/immutable/chunks/4-600427ac.js",revision:null},{url:"_app/immutable/chunks/5-ef94a030.js",revision:null},{url:"_app/immutable/chunks/6-29e4decc.js",revision:null},{url:"_app/immutable/chunks/7-0b8b4123.js",revision:null},{url:"_app/immutable/chunks/back-icon-e214ef35.js",revision:null},{url:"_app/immutable/chunks/index-18da49c2.js",revision:null},{url:"_app/immutable/chunks/index-bf283ca9.js",revision:null},{url:"_app/immutable/chunks/singletons-b330b9e6.js",revision:null},{url:"_app/immutable/chunks/tile-b57ca796.js",revision:null},{url:"_app/immutable/components/error.svelte-63cda8d9.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-ad1ee15c.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-9ae1fa34.js",revision:null},{url:"_app/immutable/components/pages/emotions/_page.svelte-3774a658.js",revision:null},{url:"_app/immutable/components/pages/food-drink/_page.svelte-dae63160.js",revision:null},{url:"_app/immutable/components/pages/pain/_page.svelte-80d827e5.js",revision:null},{url:"_app/immutable/components/pages/pain/intensity/_page.svelte-4f8133e3.js",revision:null},{url:"_app/immutable/components/pages/yes-no/_page.svelte-9dbd4507.js",revision:null},{url:"_app/immutable/start-01d745a5.js",revision:null},{url:"Aphasia_logo.svg",revision:"7d9060e6d1d5f690a3b1484765d36b0f"},{url:"/emotions",revision:"aaa8f1abc1cae664943cfba8b2a2f5c6"},{url:"favicon.png",revision:"800e6ab0a1e71004d8e3a3c92d88241f"},{url:"/food-drink",revision:"c185d8c83916d89b20a504198c66d106"},{url:"icons/doctor.svg",revision:"a26634a61ac51ce01955375ccecb4719"},{url:"icons/emoticon-angry-outline.svg",revision:"63c9ee9057f7b64c1df117edaca9972e"},{url:"icons/food.svg",revision:"1e14e99f0e88567ee670c46a9535bec3"},{url:"icons/lightning-bolt.svg",revision:"b242c9e8d3e683ee0d0afde19d0a2e94"},{url:"icons/paper-roll-outline.svg",revision:"a0fafcd0d67627a661b9a7c22b008ee0"},{url:"icons/pill.svg",revision:"575f11dad83da2772b3dcd1e3466d03b"},{url:"icons/seat-flat-angled.svg",revision:"24f7de42b4f52ee832540f4594f494ed"},{url:"icons/seat-flat.svg",revision:"f4be2071d6fa8ff8e11a1ef02bc738ed"},{url:"icons/seat-passenger.svg",revision:"42a6c8d2a40b056662ebebff199bca24"},{url:"icons/shower.svg",revision:"74bc093e294a845e200f9c2d3ac8ea41"},{url:"icons/television-classic.svg",revision:"d44b886b32fd2d8dbc57e52fbd388102"},{url:"/",revision:"bdbe78ef9f9c48aa961384a01ffa1a32"},{url:"/pain",revision:"78b64640452742a0e53ba97d76112fcb"},{url:"/pain/intensity",revision:"daf7ea216d65eb0a64c9b0ce15e49408"},{url:"pwa-192x192.png",revision:"ec1b9ee95a94f764829c6a429dfe0a04"},{url:"pwa-512x512.png",revision:"be60db182fe350d0970fdf559d1ffb1c"},{url:"/yes-no",revision:"d1376ee4c4b5cdbc11f307d894d44610"},{url:"manifest.webmanifest",revision:"741bd0582e8575be35bd65439c95fe37"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
