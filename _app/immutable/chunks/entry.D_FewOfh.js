var lt,ct;import{ax as ut,n as le,J as ft}from"./runtime.B9YMaOlr.js";new URL("sveltekit-internal://");function dt(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function pt(e){return e.split("%25").map(decodeURI).join("%25")}function ht(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function ce({href:e}){return e.split("#")[0]}const mt=["href","pathname","search","toString","toJSON"];function gt(e,r,t){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));r();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of mt)Object.defineProperty(n,a,{get(){return r(),e[a]},enumerable:!0,configurable:!0});return n}const yt="/__data.json",wt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+yt}function bt(...e){let r=5381;for(const t of e)if(typeof t=="string"){let n=t.length;for(;n;)r=r*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=n.length;for(;a;)r=r*33^n[--a]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}function kt(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t.buffer}const Pe=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:(r==null?void 0:r.method)||"GET")!=="GET"&&F.delete(ue(e)),Pe(e,r));const F=new Map;function St(e,r){const t=ue(e,r),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:a,...o}=JSON.parse(n.textContent);const i=n.getAttribute("data-ttl");return i&&F.set(t,{body:a,init:o,ttl:1e3*Number(i)}),n.getAttribute("data-b64")!==null&&(a=kt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,r)}function At(e,r,t){if(F.size>0){const n=ue(e,t),a=F.get(n);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);F.delete(n)}}return window.fetch(r,t)}function ue(e,r){let t=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const n=[];r.headers&&n.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&n.push(r.body),t+=`[data-hash="${bt(...n)}"]`}return t}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${_t(e).map(t=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(n)return r.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const a=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(a)return r.push({name:a[1],matcher:a[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!t)return;const o=t.split(/\[(.+?)\](?!\])/);return"/"+o.map((i,s)=>{if(s%2){if(i.startsWith("x+"))return fe(String.fromCharCode(parseInt(i.slice(2),16)));if(i.startsWith("u+"))return fe(String.fromCharCode(...i.slice(2).split("-").map(d=>parseInt(d,16))));const l=Et.exec(i),[,c,f,h,p]=l;return r.push({name:h,matcher:p,optional:!!c,rest:!!f,chained:f?s===1&&o[0]==="":!1}),f?"(.*?)":c?"([^/]*)?":"([^/]+?)"}return fe(i)}).join("")}).join("")}/?$`),params:r}}function xt(e){return!/^\([^)]+\)$/.test(e)}function _t(e){return e.slice(1).split("/").filter(xt)}function Pt(e,r,t){const n={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<r.length;s+=1){const l=r[s];let c=a[s-i];if(l.chained&&l.rest&&i&&(c=a.slice(s-i,s+1).filter(f=>f).join("/"),i=0),c===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||t[l.matcher](c)){n[l.name]=c;const f=r[s+1],h=a[s+1];f&&!f.rest&&f.optional&&h&&l.chained&&(i=0),!f&&!h&&Object.keys(n).length===o.length&&(i=0);continue}if(l.optional&&l.chained){i++;continue}return}if(!i)return n}function fe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut({nodes:e,server_loads:r,dictionary:t,matchers:n}){const a=new Set(r);return Object.entries(t).map(([s,[l,c,f]])=>{const{pattern:h,params:p}=Rt(s),d={id:s,exec:y=>{const u=h.exec(y);if(u)return Pt(u,p,n)},errors:[1,...f||[]].map(y=>e[y]),layouts:[0,...c||[]].map(i),leaf:o(l)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const l=s<0;return l&&(s=~s),[l,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ue(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Ce(e,r,t=JSON.stringify){const n=t(r);try{sessionStorage[e]=n}catch{}}const O=[];function de(e,r=le){let t=null;const n=new Set;function a(s){if(ut(e,s)&&(e=s,t)){const l=!O.length;for(const c of n)c[1](),O.push(c,e);if(l){for(let c=0;c<O.length;c+=2)O[c][0](O[c+1]);O.length=0}}}function o(s){a(s(e))}function i(s,l=le){const c=[s,l];return n.add(c),n.size===1&&(t=r(a,o)||le),s(e),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}const x=((lt=globalThis.__sveltekit_ibkgii)==null?void 0:lt.base)??"",Ct=((ct=globalThis.__sveltekit_ibkgii)==null?void 0:ct.assets)??x,Lt="1732028300320",Le="sveltekit:snapshot",je="sveltekit:scroll",Ie="sveltekit:states",jt="sveltekit:pageurl",T="sveltekit:history",q="sveltekit:navigation",H={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Oe(e){if(e instanceof URL)return e;let r=document.baseURI;if(!r){const t=document.getElementsByTagName("base");r=t.length?t[0].href:document.URL}return new URL(e,r)}function pe(){return{x:pageXOffset,y:pageYOffset}}function $(e,r){return e.getAttribute(`data-sveltekit-${r}`)}const Te={...H,"":H.hover};function $e(e){let r=e.assignedSlot??e.parentNode;return(r==null?void 0:r.nodeType)===11&&(r=r.host),r}function Ne(e,r){for(;e&&e!==r;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=$e(e)}}function he(e,r){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!n||X(t,r)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===W&&e.hasAttribute("download");return{url:t,external:a,target:n,download:o}}function K(e){let r=null,t=null,n=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),r===null&&(r=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=$e(s);function l(c){switch(c){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[n??"off"],preload_data:Te[a??"off"],keepfocus:l(r),noscroll:l(t),reload:l(o),replace_state:l(i)}}function De(e){const r=de(e);let t=!0;function n(){t=!0,r.update(i=>i)}function a(i){t=!1,r.set(i)}function o(i){let s;return r.subscribe(l=>{(s===void 0||t&&l!==s)&&i(s=l)})}return{notify:n,set:a,subscribe:o}}function It(){const{set:e,subscribe:r}=de(!1);let t;async function n(){clearTimeout(t);try{const a=await fetch(`${Ct}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const o=(await a.json()).version!==Lt;return o&&(e(!0),clearTimeout(t)),o}catch{return!1}}return{subscribe:r,check:n}}function X(e,r){return e.origin!==W||!e.pathname.startsWith(r)}function Be(e){const r=Tt(e),t=new ArrayBuffer(r.length),n=new DataView(t);for(let a=0;a<t.byteLength;a++)n.setUint8(a,r.charCodeAt(a));return t}const Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Tt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let r="",t=0,n=0;for(let a=0;a<e.length;a++)t<<=6,t|=Ot.indexOf(e[a]),n+=6,n===24&&(r+=String.fromCharCode((t&16711680)>>16),r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255),t=n=0);return n===12?(t>>=4,r+=String.fromCharCode(t)):n===18&&(t>>=2,r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255)),r}const $t=-1,Nt=-2,Dt=-3,Bt=-4,Vt=-5,Ft=-6;function qt(e,r){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,n=Array(t.length);function a(o,i=!1){if(o===$t)return;if(o===Dt)return NaN;if(o===Bt)return 1/0;if(o===Vt)return-1/0;if(o===Ft)return-0;if(i)throw new Error("Invalid input");if(o in n)return n[o];const s=t[o];if(!s||typeof s!="object")n[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const l=s[0],c=r==null?void 0:r[l];if(c)return n[o]=c(a(s[1]));switch(l){case"Date":n[o]=new Date(s[1]);break;case"Set":const f=new Set;n[o]=f;for(let d=1;d<s.length;d+=1)f.add(a(s[d]));break;case"Map":const h=new Map;n[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":n[o]=new RegExp(s[1],s[2]);break;case"Object":n[o]=Object(s[1]);break;case"BigInt":n[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);n[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],y=s[1],u=Be(y),g=new d(u);n[o]=g;break}case"ArrayBuffer":{const d=s[1],y=Be(d);n[o]=y;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(s.length);n[o]=l;for(let c=0;c<s.length;c+=1){const f=s[c];f!==Nt&&(l[c]=a(f))}}else{const l={};n[o]=l;for(const c in s){const f=s[c];l[c]=a(f)}}return n[o]}return a(0)}const Ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ve];const Wt=new Set([...Ve]);[...Wt];function Jt(e){return e.filter(r=>r!=null)}class Y{constructor(r,t){this.status=r,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class Fe{constructor(r,t){this.status=r,this.location=t}}class me extends Error{constructor(r,t,n){super(n),this.status=r,this.text=t}}const Mt="x-sveltekit-invalidated",Gt="x-sveltekit-trailing-slash";function Q(e){return e instanceof Y||e instanceof me?e.status:500}function zt(e){return e instanceof me?e.text:"Internal Error"}const I=Ue(je)??{},J=Ue(Le)??{},L={url:De({}),page:De({}),navigating:de(null),updated:It()};function ge(e){I[e]=pe()}function Ht(e,r){let t=e+1;for(;I[t];)delete I[t],t+=1;for(t=r+1;J[t];)delete J[t],t+=1}function N(e){return location.href=e.href,new Promise(()=>{})}async function qe(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function We(){}let Z,ye,ee,j,we,D;const Je=[],te=[];let _=null;const Me=[],Kt=[];let B=[],w={branch:[],error:null,url:null},ve=!1,re=!1,Ge=!0,M=!1,G=!1,ze=!1,be=!1,ke,E,P,U,ne;const z=new Set;async function Xt(e,r,t){var a,o;document.URL!==location.href&&(location.href=location.href),D=e,Z=Ut(e),j=document.documentElement,we=r,ye=e.nodes[0],ee=e.nodes[1],ye(),ee(),E=(a=history.state)==null?void 0:a[T],P=(o=history.state)==null?void 0:o[q],E||(E=P=Date.now(),history.replaceState({...history.state,[T]:E,[q]:P},""));const n=I[E];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),t?await ar(we,t):rr(location.href,{replaceState:!0}),nr()}function Yt(){Je.length=0,be=!1}function He(e){te.some(r=>r==null?void 0:r.snapshot)&&(J[e]=te.map(r=>{var t;return(t=r==null?void 0:r.snapshot)==null?void 0:t.capture()}))}function Ke(e){var r;(r=J[e])==null||r.forEach((t,n)=>{var a,o;(o=(a=te[n])==null?void 0:a.snapshot)==null||o.restore(t)})}function Xe(){ge(E),Ce(je,I),He(P),Ce(Le,J)}async function Ye(e,r,t,n){return se({type:"goto",url:Oe(e),keepfocus:r.keepFocus,noscroll:r.noScroll,replace_state:r.replaceState,state:r.state,redirect_count:t,nav_token:n,accept:()=>{r.invalidateAll&&(be=!0)}})}async function Qt(e){if(e.id!==(_==null?void 0:_.id)){const r={};z.add(r),_={id:e.id,token:r,promise:tt({...e,preload:r}).then(t=>(z.delete(r),t.type==="loaded"&&t.state.error&&(_=null),t))}}return _.promise}async function Se(e){const r=Z.find(t=>t.exec(rt(e)));r&&await Promise.all([...r.layouts,r.leaf].map(t=>t==null?void 0:t[1]()))}function Qe(e,r,t){var o;w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),U=e.props.page,ke=new D.root({target:r,props:{...e.props,stores:L,components:te},hydrate:t,sync:!1}),Ke(P);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};B.forEach(i=>i(a)),re=!0}function ae({url:e,params:r,branch:t,status:n,error:a,route:o,form:i}){let s="never";if(x&&(e.pathname===x||e.pathname===x+"/"))s="always";else for(const p of t)(p==null?void 0:p.slash)!==void 0&&(s=p.slash);e.pathname=dt(e.pathname,s),e.search=e.search;const l={type:"loaded",state:{url:e,params:r,branch:t,error:a,route:o},props:{constructors:Jt(t).map(p=>p.node.component),page:U}};i!==void 0&&(l.props.form=i);let c={},f=!U,h=0;for(let p=0;p<Math.max(t.length,w.branch.length);p+=1){const d=t[p],y=w.branch[p];(d==null?void 0:d.data)!==(y==null?void 0:y.data)&&(f=!0),d&&(c={...c,...d.data},f&&(l.props[`data_${h}`]=c),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==U.form||f)&&(l.props.page={error:a,params:r,route:{id:(o==null?void 0:o.id)??null},state:{},status:n,url:new URL(e),form:i??null,data:f?c:U.data}),l}async function Ae({loader:e,parent:r,url:t,params:n,route:a,server_data_node:o}){var f,h,p;let i=null,s=!0;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},c=await e();if((f=c.universal)!=null&&f.load){let d=function(...u){for(const g of u){const{href:v}=new URL(g,t);l.dependencies.add(v)}};const y={route:new Proxy(a,{get:(u,g)=>(s&&(l.route=!0),u[g])}),params:new Proxy(n,{get:(u,g)=>(s&&l.params.add(g),u[g])}),data:(o==null?void 0:o.data)??null,url:gt(t,()=>{s&&(l.url=!0)},u=>{s&&l.search_params.add(u)}),async fetch(u,g){let v;u instanceof Request?(v=u.url,g={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...g}):v=u;const R=new URL(v,t);return s&&d(R.href),R.origin===t.origin&&(v=R.href.slice(t.origin.length)),re?At(v,R.href,g):St(v,g)},setHeaders:()=>{},depends:d,parent(){return s&&(l.parent=!0),r()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await c.universal.load.call(null,y)??null}return{node:c,loader:e,server:o,universal:(h=c.universal)!=null&&h.load?{type:"data",data:i,uses:l}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=c.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function Ze(e,r,t,n,a,o){if(be)return!0;if(!a)return!1;if(a.parent&&e||a.route&&r||a.url&&t)return!0;for(const i of a.search_params)if(n.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Je.some(s=>s(new URL(i))))return!0;return!1}function Ee(e,r){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?r??null:null}function Zt(e,r){if(!e)return new Set(r.searchParams.keys());const t=new Set([...e.searchParams.keys(),...r.searchParams.keys()]);for(const n of t){const a=e.searchParams.getAll(n),o=r.searchParams.getAll(n);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(n)}return t}function et({error:e,url:r,route:t,params:n}){return{type:"loaded",state:{error:e,url:r,route:t,params:n,branch:[]},props:{page:U,constructors:[]}}}async function tt({id:e,invalidating:r,url:t,params:n,route:a,preload:o}){if((_==null?void 0:_.id)===e)return z.delete(_.token),_.promise;const{errors:i,layouts:s,leaf:l}=a,c=[...s,l];i.forEach(m=>m==null?void 0:m().catch(()=>{})),c.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let f=null;const h=w.url?e!==w.url.pathname+w.url.search:!1,p=w.route?a.id!==w.route.id:!1,d=Zt(w.url,t);let y=!1;const u=c.map((m,k)=>{var C;const S=w.branch[k],A=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Ze(y,p,h,d,(C=S.server)==null?void 0:C.uses,n));return A&&(y=!0),A});if(u.some(Boolean)){try{f=await ot(t,u)}catch(m){const k=await V(m,{url:t,params:n,route:{id:e}});return z.has(o)?et({error:k,url:t,params:n,route:a}):oe({status:Q(m),error:k,url:t,route:a})}if(f.type==="redirect")return f}const g=f==null?void 0:f.nodes;let v=!1;const R=c.map(async(m,k)=>{var C;if(!m)return;const S=w.branch[k],A=g==null?void 0:g[k];if((!A||A.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Ze(v,p,h,d,(C=S.universal)==null?void 0:C.uses,n))return S;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return Ae({loader:m[1],url:t,params:n,route:a,parent:async()=>{var _e;const xe={};for(let ie=0;ie<k;ie+=1)Object.assign(xe,(_e=await R[ie])==null?void 0:_e.data);return xe},server_data_node:Ee(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of R)m.catch(()=>{});const b=[];for(let m=0;m<c.length;m+=1)if(c[m])try{b.push(await R[m])}catch(k){if(k instanceof Fe)return{type:"redirect",location:k.location};if(z.has(o))return et({error:await V(k,{params:n,url:t,route:{id:a.id}}),url:t,params:n,route:a});let S=Q(k),A;if(g!=null&&g.includes(k))S=k.status??S,A=k.error;else if(k instanceof Y)A=k.body;else{if(await L.updated.check())return await qe(),await N(t);A=await V(k,{params:n,url:t,route:{id:a.id}})}const C=await er(m,b,i);return C?ae({url:t,params:n,branch:b.slice(0,C.idx).concat(C.node),status:S,error:A,route:a}):await at(t,{id:a.id},A,S)}else b.push(void 0);return ae({url:t,params:n,branch:b,status:200,error:null,route:a,form:r?void 0:null})}async function er(e,r,t){for(;e--;)if(t[e]){let n=e;for(;!r[n];)n-=1;try{return{idx:n+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:r,url:t,route:n}){const a={};let o=null;if(D.server_loads[0]===0)try{const l=await ot(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||ve)&&await N(t)}const i=await Ae({loader:ye,url:t,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:Ee(o)}),s={node:await ee(),loader:ee,universal:null,server:null,data:null};return ae({url:t,params:a,branch:[i,s],status:e,error:r,route:null})}function Re(e,r){if(!e||X(e,x))return;let t;try{t=D.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const n=rt(t);for(const a of Z){const o=a.exec(n);if(o)return{id:e.pathname+e.search,invalidating:r,route:a,params:ht(o),url:e}}}function rt(e){return pt(e.slice(x.length)||"/")}function nt({url:e,type:r,intent:t,delta:n}){let a=!1;const o=it(w,t,e,r);n!==void 0&&(o.navigation.delta=n);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Me.forEach(s=>s(i)),a?null:o}async function se({type:e,url:r,popped:t,keepfocus:n,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:l={},accept:c=We,block:f=We}){const h=Re(r,!1),p=nt({url:r,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){f();return}const d=E,y=P;c(),M=!0,re&&L.navigating.set(p.navigation),ne=l;let u=h&&await tt(h);if(!u){if(X(r,x))return await N(r);u=await at(r,{id:null},await V(new me(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=(h==null?void 0:h.url)||r,ne!==l)return p.reject(new Error("navigation aborted")),!1;if(u.type==="redirect")if(s>=20)u=await oe({status:500,error:await V(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return Ye(new URL(u.location,r).href,{},s+1,l),!1;else u.props.page.status>=400&&await L.updated.check()&&(await qe(),await N(r));if(Yt(),ge(d),He(y),u.props.page.url.pathname!==r.pathname&&(r.pathname=u.props.page.url.pathname),i=t?t.state:i,!t){const b=o?0:1,m={[T]:E+=b,[q]:P+=b,[Ie]:i};(o?history.replaceState:history.pushState).call(history,m,"",r),o||Ht(E,P)}if(_=null,u.props.page.state=i,re){w=u.state,u.props.page&&(u.props.page.url=r);const b=(await Promise.all(Kt.map(m=>m(p.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){B=B.filter(k=>!b.includes(k))};b.push(m),B.push(...b)}ke.$set(u.props),ze=!0}else Qe(u,we,!1);const{activeElement:g}=document;await ft();const v=t?t.scroll:a?pe():null;if(Ge){const b=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));v?scrollTo(v.x,v.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!n&&!R&&or(),Ge=!0,u.props.page&&(U=u.props.page),M=!1,e==="popstate"&&Ke(P),p.fulfil(void 0),B.forEach(b=>b(p.navigation)),L.navigating.set(null)}async function at(e,r,t,n){return e.origin===W&&e.pathname===location.pathname&&!ve?await oe({status:n,error:t,url:e,route:r}):await N(e)}function tr(){let e;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{n(i,2)},20)});function r(o){o.defaultPrevented||n(o.composedPath()[0],1)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Se(i.target.href),t.unobserve(i.target))},{threshold:0});function n(o,i){const s=Ne(o,j);if(!s)return;const{url:l,external:c,download:f}=he(s,x);if(c||f)return;const h=K(s),p=l&&w.url.pathname+w.url.search===l.pathname+l.search;if(!h.reload&&!p)if(i<=h.preload_data){const d=Re(l,!1);d&&Qt(d)}else i<=h.preload_code&&Se(l.pathname)}function a(){t.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:l}=he(o,x);if(s||l)continue;const c=K(o);c.reload||(c.preload_code===H.viewport&&t.observe(o),c.preload_code===H.eager&&Se(i.pathname))}}B.push(a),a()}function V(e,r){if(e instanceof Y)return e.body;const t=Q(e),n=zt(e);return D.hooks.handleError({error:e,event:r,status:t,message:n})??{message:n}}function rr(e,r={}){return e=Oe(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):Ye(e,r,0)}function nr(){var r;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Xe(),!M){const a=it(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};Me.forEach(i=>i(o))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Xe()}),(r=navigator.connection)!=null&&r.saveData||tr(),j.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ne(t.composedPath()[0],j);if(!n)return;const{url:a,external:o,target:i,download:s}=he(n,x);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const l=K(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[c,f]=a.href.split("#"),h=c===ce(location);if(o||l.reload&&(!h||!f)){nt({url:a,type:"link"})?M=!0:t.preventDefault();return}if(f!==void 0&&h){const[,p]=w.url.href.split("#");if(p===f){if(t.preventDefault(),f===""||f==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const d=n.ownerDocument.getElementById(decodeURIComponent(f));d&&(d.scrollIntoView(),d.focus())}return}if(G=!0,ge(E),e(a),!l.replace_state)return;G=!1}t.preventDefault(),await new Promise(p=>{requestAnimationFrame(()=>{setTimeout(p,0)}),setTimeout(p,100)}),se({type:"link",url:a,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??a.href===location.href})}),j.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||n.target)==="_blank"||((a==null?void 0:a.formMethod)||n.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||n.action);if(X(o,x))return;const i=t.target,s=K(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),c=a==null?void 0:a.getAttribute("name");c&&l.append(c,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(l).toString(),se({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[T]){const a=t.state[T];if(ne={},a===E)return;const o=I[a],i=t.state[Ie]??{},s=new URL(t.state[jt]??location.href),l=t.state[q],c=ce(location)===ce(w.url);if(l===P&&(ze||c)){e(s),I[E]=pe(),o&&scrollTo(o.x,o.y),i!==U.state&&(U={...U,state:i},ke.$set({page:U})),E=a;return}const f=a-E;await se({type:"popstate",url:s,popped:{state:i,scroll:o,delta:f},accept:()=>{E=a,P=l},block:()=>{history.go(-f)},nav_token:ne})}else if(!G){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[T]:++E,[q]:P},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){w.url=t,L.page.set({...U,url:t}),L.page.notify()}}async function ar(e,{status:r=200,error:t,node_ids:n,params:a,route:o,data:i,form:s}){ve=!0;const l=new URL(location.href);({params:a={},route:o={id:null}}=Re(l,!1)||{});let c;try{const f=n.map(async(d,y)=>{const u=i[y];return u!=null&&u.uses&&(u.uses=st(u.uses)),Ae({loader:D.nodes[d],url:l,params:a,route:o,parent:async()=>{const g={};for(let v=0;v<y;v+=1)Object.assign(g,(await f[v]).data);return g},server_data_node:Ee(u)})}),h=await Promise.all(f),p=Z.find(({id:d})=>d===o.id);if(p){const d=p.layouts;for(let y=0;y<d.length;y++)d[y]||h.splice(y,0,void 0)}c=ae({url:l,params:a,branch:h,status:r,error:t,form:s,route:p??null})}catch(f){if(f instanceof Fe){await N(new URL(f.location,location.href));return}c=await oe({status:Q(f),error:await V(f,{url:l,params:a,route:o}),url:l,route:o})}c.props.page&&(c.props.page.state={}),Qe(c,e,!0)}async function ot(e,r){var a;const t=new URL(e);t.pathname=vt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Gt,"1"),t.searchParams.append(Mt,r.map(o=>o?"1":"0").join(""));const n=await Pe(t.href);if(!n.ok){let o;throw(a=n.headers.get("content-type"))!=null&&a.includes("application/json")?o=await n.json():n.status===404?o="Not Found":n.status===500&&(o="Internal Error"),new Y(n.status,o)}return new Promise(async o=>{var h;const i=new Map,s=n.body.getReader(),l=new TextDecoder;function c(p){return qt(p,{Promise:d=>new Promise((y,u)=>{i.set(d,{fulfil:y,reject:u})})})}let f="";for(;;){const{done:p,value:d}=await s.read();if(p&&!f)break;for(f+=!d&&f?`
`:l.decode(d,{stream:!0});;){const y=f.indexOf(`
`);if(y===-1)break;const u=JSON.parse(f.slice(0,y));if(f=f.slice(y+1),u.type==="redirect")return o(u);if(u.type==="data")(h=u.nodes)==null||h.forEach(g=>{(g==null?void 0:g.type)==="data"&&(g.uses=st(g.uses),g.data=c(g.data))}),o(u);else if(u.type==="chunk"){const{id:g,data:v,error:R}=u,b=i.get(g);i.delete(g),R?b.reject(c(R)):b.fulfil(c(v))}}}})}function st(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function or(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,t=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),t!==null?r.setAttribute("tabindex",t):r.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const a=[];for(let o=0;o<n.rangeCount;o+=1)a.push(n.getRangeAt(o));setTimeout(()=>{if(n.rangeCount===a.length){for(let o=0;o<n.rangeCount;o+=1){const i=a[o],s=n.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}n.removeAllRanges()}})}}}function it(e,r,t,n){var s,l;let a,o;const i=new Promise((c,f)=>{a=c,o=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((s=e.route)==null?void 0:s.id)??null},url:e.url},to:t&&{params:(r==null?void 0:r.params)??null,route:{id:((l=r==null?void 0:r.route)==null?void 0:l.id)??null},url:t},willUnload:!r,type:n,complete:i},fulfil:a,reject:o}}export{Xt as a,L as s};
