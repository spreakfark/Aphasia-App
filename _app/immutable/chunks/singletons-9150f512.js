import{w as c}from"./index-18da49c2.js";import{a as l}from"./paths-6cd3a76e.js";function h(e){let n=e.baseURI;if(!n){const t=e.getElementsByTagName("base");n=t.length?t[0].href:e.URL}return n}function m(){return{x:pageXOffset,y:pageYOffset}}function g(e){return e.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function _(e){return e instanceof SVGAElement?new URL(e.href.baseVal,document.baseURI):new URL(e.href)}function f(e){const n=c(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(u=>{(i===void 0||t&&u!==i)&&s(i=u)})}return{notify:r,set:a,subscribe:o}}function d(){const{set:e,subscribe:n}=c(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${l}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),s=o!=="1661894968271";return s&&(e(!0),clearTimeout(t)),s}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:n,check:r}}function w(e){e.client}const U={url:f({}),page:f({}),navigating:c(null),updated:d()};export{_ as a,m as b,g as f,h as g,w as i,U as s};
