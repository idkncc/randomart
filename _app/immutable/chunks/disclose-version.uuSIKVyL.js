import{x as v,y as m,T as _,z as c,A as w,h as i,c as o,B as h,C as N}from"./runtime.B9YMaOlr.js";function p(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=m;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function T(n,t){var e=(t&_)!==0,f=(t&w)!==0,a,u=!n.startsWith("<!>");return()=>{if(i)return r(o,null),o;a===void 0&&(a=p(u?n:"<!>"+n),e||(a=c(a)));var s=f?document.importNode(a,!0):a.cloneNode(!0);if(e){var l=c(s),d=s.lastChild;r(l,d)}else r(s,s);return s}}function b(n,t,e="svg"){var f=!n.startsWith("<!>"),a=`<${e}>${f?n:"<!>"+n}</${e}>`,u;return()=>{if(i)return r(o,null),o;if(!u){var s=p(a),l=c(s);u=c(l)}var d=u.cloneNode(!0);return r(d,d),d}}function g(n=""){if(!i){var t=v(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=v()),h(e)),r(e,e),e}function x(){if(i)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=v();return n.append(t,e),r(t,e),n}function y(n,t){if(i){m.nodes_end=o,N();return}n!==null&&n.before(t)}const C="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(C);export{y as a,g as b,x as c,r as d,b as n,T as t};