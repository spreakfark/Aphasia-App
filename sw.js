try{self["workbox:core:6.5.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class i{constructor(e,t,i="GET"){this.handler=s(t),this.match=e,this.method=i}setCatchHandler(e){this.catchHandler=s(e)}}class a extends i{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class n{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const i=s.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:i,url:s});let r=n&&n.handler;const o=e.method;if(!r&&this.i.has(o)&&(r=this.i.get(o)),!r)return;let c;try{c=r.handle({url:s,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const l=n&&n.catchHandler;return c instanceof Promise&&(this.o||l)&&(c=c.catch((async i=>{if(l)try{return await l.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(i=e)}if(this.o)return this.o.handle({url:s,request:e,event:t});throw i}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:i}){const a=this.t.get(s.method)||[];for(const n of a){let a;const r=n.match({url:e,sameOrigin:t,request:s,event:i});if(r)return a=r,(Array.isArray(a)&&0===a.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(a=void 0),{route:n,params:a}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new n,r.addFetchListener(),r.addCacheListener()),r);function c(e,s,n){let r;if("string"==typeof e){const t=new URL(e,location.href);r=new i((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)r=new a(e,s,n);else if("function"==typeof e)r=new i(e,s,n);else{if(!(e instanceof i))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return o().registerRoute(r),r}const l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[l.prefix,e,l.suffix].filter((e=>e&&e.length>0)).join("-"),p=e=>e||h(l.precache),u=e=>e||h(l.runtime);function f(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}function d(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:i}=e;if(!i)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(i,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(i,location.href),n=new URL(i,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:n.href}}class w{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class m{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.l.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this.l=e}}let v;async function b(e,s){let i=null;if(e.url){i=new URL(e.url).origin}if(i!==self.location.origin)throw new t("cross-origin-copy-response",{origin:i});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=s?s(n):n,o=function(){if(void 0===v){const e=new Response("");if("body"in e)try{new Response(e.body),v=!0}catch(e){v=!1}v=!1}return v}()?a.body:await a.blob();return new Response(o,r)}function A(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}function R(e){return"string"==typeof e?new Request(e):e}class q{constructor(e,t){this.h={},Object.assign(this,t),this.event=t.event,this.p=e,this.u=new g,this.m=[],this.v=[...e.plugins],this.A=new Map;for(const e of this.v)this.A.set(e,{});this.event.waitUntil(this.u.promise)}async fetch(e){const{event:s}=this;let i=R(e);if("navigate"===i.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?i.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))i=await e({request:i.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=i.clone();try{let e;e=await fetch(i,"navigate"===i.mode?void 0:this.p.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:n,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=R(e);let s;const{cacheName:i,matchOptions:a}=this.p,n=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},a),{cacheName:i});s=await caches.match(n,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:i,matchOptions:a,cachedResponse:s,request:n,event:this.event})||void 0;return s}async cachePut(e,s){const i=R(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(i,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const o=await this.g(s);if(!o)return!1;const{cacheName:c,matchOptions:l}=this.p,h=await self.caches.open(c),p=this.hasCallback("cacheDidUpdate"),u=p?await async function(e,t,s,i){const a=A(t.url,s);if(t.url===a)return e.match(t,i);const n=Object.assign(Object.assign({},i),{ignoreSearch:!0}),r=await e.keys(t,n);for(const t of r)if(a===A(t.url,s))return e.match(t,i)}(h,n.clone(),["__WB_REVISION__"],l):null;try{await h.put(n,p?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:u,newResponse:o.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this.h[s]){let i=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))i=R(await e({mode:t,request:i,event:this.event,params:this.params}));this.h[s]=i}return this.h[s]}hasCallback(e){for(const t of this.p.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.p.plugins)if("function"==typeof t[e]){const s=this.A.get(t),i=i=>{const a=Object.assign(Object.assign({},i),{state:s});return t[e](a)};yield i}}waitUntil(e){return this.m.push(e),e}async doneWaiting(){let e;for(;e=this.m.shift();)await e}destroy(){this.u.resolve(null)}async g(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class U extends class{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,i="params"in e?e.params:void 0,a=new q(this,{event:t,request:s,params:i}),n=this._(a,s,t);return[n,this.R(n,a,s,t)]}async _(e,s,i){let a;await e.runCallbacks("handlerWillStart",{event:i,request:s});try{if(a=await this.q(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:t,event:i,request:s}),a)break;if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:i,request:s,response:a});return a}async R(e,t,s,i){let a,n;try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:i,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:i,request:s,response:a,error:n}),t.destroy(),n)throw n}}{constructor(e={}){e.cacheName=p(e.cacheName),super(e),this.U=!1!==e.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async q(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this.j(e,t):await this.L(e,t))}async L(e,s){let i;const a=s.params||{};if(!this.U)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=a.integrity,n=e.integrity,r=!n||n===t;i=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?n||t:void 0})),t&&r&&"no-cors"!==e.mode&&(this.k(),await s.cachePut(e,i.clone()))}return i}async j(e,s){this.k();const i=await s.fetch(e);if(!await s.cachePut(e,i.clone()))throw new t("bad-precaching-response",{url:e.url,status:i.status});return i}k(){let e=null,t=0;for(const[s,i]of this.plugins.entries())i!==U.copyRedirectedCacheableResponsesPlugin&&(i===U.defaultPrecacheCacheabilityPlugin&&(e=s),i.cacheWillUpdate&&t++);0===t?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class j{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.C=new Map,this.O=new Map,this.N=new Map,this.p=new U({cacheName:p(e),plugins:[...t,new m({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.p}precache(e){this.addToCacheList(e),this.K||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.K=!0)}addToCacheList(e){const s=[];for(const i of e){"string"==typeof i?s.push(i):i&&void 0===i.revision&&s.push(i.url);const{cacheKey:e,url:a}=d(i),n="string"!=typeof i&&i.revision?"reload":"default";if(this.C.has(a)&&this.C.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.C.get(a),secondEntry:e});if("string"!=typeof i&&i.integrity){if(this.N.has(e)&&this.N.get(e)!==i.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this.N.set(e,i.integrity)}if(this.C.set(a,e),this.O.set(a,n),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new w;this.strategy.plugins.push(t);for(const[t,s]of this.C){const i=this.N.get(s),a=this.O.get(t),n=new Request(t,{integrity:i,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:i}=t;return{updatedURLs:s,notUpdatedURLs:i}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.C.values()),i=[];for(const a of t)s.has(a.url)||(await e.delete(a),i.push(a.url));return{deletedURLs:i}}))}getURLsToCacheKeys(){return this.C}getCachedURLs(){return[...this.C.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.C.get(t.href)}getIntegrityForCacheKey(e){return this.N.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let L;const k=()=>(L||(L=new j),L);class x extends i{constructor(e,t){super((({request:s})=>{const i=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:i=!0,urlManipulation:a}={}){const n=new URL(e,location.href);n.hash="",yield n.href;const r=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(n,t);if(yield r.href,s&&r.pathname.endsWith("/")){const e=new URL(r.href);e.pathname+=s,yield e.href}if(i){const e=new URL(r.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:n});for(const t of e)yield t.href}}(s.url,t)){const t=i.get(a);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}var C,E;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),C={},function(e){k().precache(e)}([{url:"/Aphasia-App/robots.txt",revision:"ea6b94db76687d4538d1341c4f2120dd"},{url:"/Aphasia-App/_app/immutable/assets/+layout-247266b3.css",revision:null},{url:"/Aphasia-App/_app/immutable/assets/+page-2bb31d68.css",revision:null},{url:"/Aphasia-App/_app/immutable/assets/+page-895f9de0.css",revision:null},{url:"/Aphasia-App/_app/immutable/assets/+page-ba18a7ec.css",revision:null},{url:"/Aphasia-App/_app/immutable/assets/back-icon-b047119d.css",revision:null},{url:"/Aphasia-App/_app/immutable/assets/tile-3cb1f7cb.css",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/0-bf275f89.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/1-e65fafe2.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/2-40a4d588.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/3-a359833b.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/4-e4179555.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/5-6a0d58f1.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/6-f752e0ea.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/7-1751175f.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/back-icon-666efc64.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/index-741b9f67.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/paths-74db60bd.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/singletons-255dd496.js",revision:null},{url:"/Aphasia-App/_app/immutable/chunks/tile-afac0928.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/error.svelte-f246aaa0.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/_layout.svelte-ad1f8bc0.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/_page.svelte-c0a9941b.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/emotions/_page.svelte-c3d67f3f.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/food-drink/_page.svelte-599daeca.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/pain/_page.svelte-2ba4e037.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/pain/intensity/_page.svelte-a5cedaeb.js",revision:null},{url:"/Aphasia-App/_app/immutable/components/pages/yes-no/_page.svelte-0b73d4e8.js",revision:null},{url:"/Aphasia-App/_app/immutable/start-7499cb32.js",revision:null},{url:"/Aphasia-App/Aphasia_logo.svg",revision:"7d9060e6d1d5f690a3b1484765d36b0f"},{url:"/Aphasia-App/emotions",revision:"9a6c844fd557ca093ec1340a59d1f7a0"},{url:"/Aphasia-App/favicon.png",revision:"800e6ab0a1e71004d8e3a3c92d88241f"},{url:"/Aphasia-App/food-drink",revision:"130a3c41c5c9b154770151955124046c"},{url:"/Aphasia-App/icons/doctor.svg",revision:"a26634a61ac51ce01955375ccecb4719"},{url:"/Aphasia-App/icons/emoticon-angry-outline.svg",revision:"63c9ee9057f7b64c1df117edaca9972e"},{url:"/Aphasia-App/icons/food.svg",revision:"1e14e99f0e88567ee670c46a9535bec3"},{url:"/Aphasia-App/icons/lightning-bolt.svg",revision:"b242c9e8d3e683ee0d0afde19d0a2e94"},{url:"/Aphasia-App/icons/paper-roll-outline.svg",revision:"a0fafcd0d67627a661b9a7c22b008ee0"},{url:"/Aphasia-App/icons/pill.svg",revision:"575f11dad83da2772b3dcd1e3466d03b"},{url:"/Aphasia-App/icons/seat-flat-angled.svg",revision:"24f7de42b4f52ee832540f4594f494ed"},{url:"/Aphasia-App/icons/seat-flat.svg",revision:"f4be2071d6fa8ff8e11a1ef02bc738ed"},{url:"/Aphasia-App/icons/seat-passenger.svg",revision:"42a6c8d2a40b056662ebebff199bca24"},{url:"/Aphasia-App/icons/shower.svg",revision:"74bc093e294a845e200f9c2d3ac8ea41"},{url:"/Aphasia-App/icons/television-classic.svg",revision:"d44b886b32fd2d8dbc57e52fbd388102"},{url:"/Aphasia-App",revision:"b023e4015d74384234c58b762e3d09a3"},{url:"/Aphasia-App/manifest.webmanifest",revision:"74230a93ba7266fd0c75f8927569c1b5"},{url:"/Aphasia-App/pain",revision:"9f4d8f2bf5db27ec70cfbf19fd7211f0"},{url:"/Aphasia-App/pain/intensity",revision:"d540f9186c47df3a7ee3db233686f895"},{url:"/Aphasia-App/pwa-192x192.png",revision:"ec1b9ee95a94f764829c6a429dfe0a04"},{url:"/Aphasia-App/pwa-512x512.png",revision:"be60db182fe350d0970fdf559d1ffb1c"},{url:"/Aphasia-App/yes-no",revision:"5c874d6ad75cd313ed91ea5703d4e1eb"},{url:"manifest.webmanifest",revision:"74230a93ba7266fd0c75f8927569c1b5"}]),function(e){const t=k();c(new x(t,e))}(C),self.addEventListener("activate",(e=>{const t=p();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))})),c(new class extends i{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this.P(e)),e),this.T=t,this.W=s}P({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this.W)if(e.test(s))return!1;return!!this.T.some((e=>e.test(s)))}}((E="/Aphasia-App",k().createHandlerBoundToURL(E))));