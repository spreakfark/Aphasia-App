if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let u={};const r=e=>i(e,a),o={module:{uri:a},exports:u,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(l(...e),u)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"robots.txt",revision:"ea6b94db76687d4538d1341c4f2120dd"},{url:"_app/immutable/assets/+layout-af88e95f.css",revision:null},{url:"_app/immutable/assets/+page-26c2e937.css",revision:null},{url:"_app/immutable/assets/+page-ba18a7ec.css",revision:null},{url:"_app/immutable/assets/back-icon-b047119d.css",revision:null},{url:"_app/immutable/assets/tile-ae97b290.css",revision:null},{url:"_app/immutable/chunks/0-68107e4c.js",revision:null},{url:"_app/immutable/chunks/1-bd046cbd.js",revision:null},{url:"_app/immutable/chunks/2-c38ff2c0.js",revision:null},{url:"_app/immutable/chunks/3-eeb7f88b.js",revision:null},{url:"_app/immutable/chunks/4-cbd840f5.js",revision:null},{url:"_app/immutable/chunks/5-974db7f7.js",revision:null},{url:"_app/immutable/chunks/6-04a23ecb.js",revision:null},{url:"_app/immutable/chunks/7-9493ab3d.js",revision:null},{url:"_app/immutable/chunks/back-icon-e214ef35.js",revision:null},{url:"_app/immutable/chunks/index-18da49c2.js",revision:null},{url:"_app/immutable/chunks/index-bf283ca9.js",revision:null},{url:"_app/immutable/chunks/paths-6cd3a76e.js",revision:null},{url:"_app/immutable/chunks/singletons-6c1bce4d.js",revision:null},{url:"_app/immutable/chunks/tile-b57ca796.js",revision:null},{url:"_app/immutable/components/error.svelte-c8130349.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-23603f5d.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-08f7b787.js",revision:null},{url:"_app/immutable/components/pages/emotions/_page.svelte-3653e603.js",revision:null},{url:"_app/immutable/components/pages/food-drink/_page.svelte-3e5b4eaf.js",revision:null},{url:"_app/immutable/components/pages/pain/_page.svelte-d8d30e7d.js",revision:null},{url:"_app/immutable/components/pages/pain/intensity/_page.svelte-250cda82.js",revision:null},{url:"_app/immutable/components/pages/yes-no/_page.svelte-665acd88.js",revision:null},{url:"_app/immutable/start-253967c3.js",revision:null},{url:"Aphasia_logo.svg",revision:"7d9060e6d1d5f690a3b1484765d36b0f"},{url:"/emotions",revision:"05b6ebf5ecfc8ceaa1cab0413ab958e4"},{url:"favicon.png",revision:"800e6ab0a1e71004d8e3a3c92d88241f"},{url:"/food-drink",revision:"33f052f1c42e33138401bab9a95edccc"},{url:"icons/doctor.svg",revision:"a26634a61ac51ce01955375ccecb4719"},{url:"icons/emoticon-angry-outline.svg",revision:"63c9ee9057f7b64c1df117edaca9972e"},{url:"icons/food.svg",revision:"1e14e99f0e88567ee670c46a9535bec3"},{url:"icons/lightning-bolt.svg",revision:"b242c9e8d3e683ee0d0afde19d0a2e94"},{url:"icons/paper-roll-outline.svg",revision:"a0fafcd0d67627a661b9a7c22b008ee0"},{url:"icons/pill.svg",revision:"575f11dad83da2772b3dcd1e3466d03b"},{url:"icons/seat-flat-angled.svg",revision:"24f7de42b4f52ee832540f4594f494ed"},{url:"icons/seat-flat.svg",revision:"f4be2071d6fa8ff8e11a1ef02bc738ed"},{url:"icons/seat-passenger.svg",revision:"42a6c8d2a40b056662ebebff199bca24"},{url:"icons/shower.svg",revision:"74bc093e294a845e200f9c2d3ac8ea41"},{url:"icons/television-classic.svg",revision:"d44b886b32fd2d8dbc57e52fbd388102"},{url:"/",revision:"4633e436b05fe51b63d677807afb0b8b"},{url:"/pain",revision:"83c8201e24ea2119fc497e563964919d"},{url:"/pain/intensity",revision:"4ed6194d00484bbe9ed8739f9597d7b9"},{url:"pwa-192x192.png",revision:"ec1b9ee95a94f764829c6a429dfe0a04"},{url:"pwa-512x512.png",revision:"be60db182fe350d0970fdf559d1ffb1c"},{url:"/yes-no",revision:"d77025e98f81fe85238e11c35a2cf54e"},{url:"manifest.webmanifest",revision:"88d978281b1aa8db1234f4fc168c8629"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/Aphasia-App")))}));
