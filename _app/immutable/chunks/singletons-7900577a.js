import{w as i}from"./index-18da49c2.js";let f="",b="";function p(e){f=e.base,b=e.assets||f}function g(e){let n=e.baseURI;if(!n){const t=e.getElementsByTagName("base");n=t.length?t[0].href:e.URL}return n}function m(){return{x:pageXOffset,y:pageYOffset}}function _(e){return e.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function w(e){return e instanceof SVGAElement?new URL(e.href.baseVal,document.baseURI):new URL(e.href)}function l(e){const n=i(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let c;return n.subscribe(u=>{(c===void 0||t&&u!==c)&&s(c=u)})}return{notify:r,set:a,subscribe:o}}function d(){const{set:e,subscribe:n}=i(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),s=o!=="1661888347108";return s&&(e(!0),clearTimeout(t)),s}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:n,check:r}}function U(e){e.client}const R={url:l({}),page:l({}),navigating:i(null),updated:d()};export{w as a,m as b,p as c,_ as f,g,U as i,R as s};
