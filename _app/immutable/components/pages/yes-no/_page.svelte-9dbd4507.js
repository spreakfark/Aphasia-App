import{S as T,i as Y,s as A,k as x,v as u,a as k,l as y,m as q,w as p,h as c,c as B,n as g,b as $,x as d,F as C,f as h,t as v,y as w,q as N,r as S}from"../../../chunks/index-bf283ca9.js";import{B as D}from"../../../chunks/back-icon-e214ef35.js";import{T as E}from"../../../chunks/tile-b57ca796.js";function F(f){let t;return{c(){t=N("Yes")},l(s){t=S(s,"Yes")},m(s,r){$(s,t,r)},d(s){s&&c(t)}}}function I(f){let t;return{c(){t=N("No")},l(s){t=S(s,"No")},m(s,r){$(s,t,r)},d(s){s&&c(t)}}}function P(f){let t,s,r,n,l,_,o,m;return s=new D({}),l=new E({props:{class:"big",$$slots:{default:[F]},$$scope:{ctx:f}}}),o=new E({props:{class:"big",$$slots:{default:[I]},$$scope:{ctx:f}}}),{c(){t=x("a"),u(s.$$.fragment),r=k(),n=x("div"),u(l.$$.fragment),_=k(),u(o.$$.fragment),this.h()},l(e){t=y(e,"A",{class:!0,href:!0});var a=q(t);p(s.$$.fragment,a),a.forEach(c),r=B(e),n=y(e,"DIV",{class:!0});var i=q(n);p(l.$$.fragment,i),_=B(i),p(o.$$.fragment,i),i.forEach(c),this.h()},h(){g(t,"class","back svelte-do0gw0"),g(t,"href","/"),g(n,"class","yes-no-page grid svelte-do0gw0")},m(e,a){$(e,t,a),d(s,t,null),$(e,r,a),$(e,n,a),d(l,n,null),C(n,_),d(o,n,null),m=!0},p(e,[a]){const i={};a&1&&(i.$$scope={dirty:a,ctx:e}),l.$set(i);const b={};a&1&&(b.$$scope={dirty:a,ctx:e}),o.$set(b)},i(e){m||(h(s.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),m=!0)},o(e){v(s.$$.fragment,e),v(l.$$.fragment,e),v(o.$$.fragment,e),m=!1},d(e){e&&c(t),w(s),e&&c(r),e&&c(n),w(l),w(o)}}}class G extends T{constructor(t){super(),Y(this,t,null,P,A,{})}}export{G as default};