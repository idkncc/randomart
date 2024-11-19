var Bb=Object.defineProperty;var zb=Object.getPrototypeOf;var kb=Reflect.get;var hd=at=>{throw TypeError(at)};var Gb=(at,nt,bt)=>nt in at?Bb(at,nt,{enumerable:!0,configurable:!0,writable:!0,value:bt}):at[nt]=bt;var Qi=(at,nt,bt)=>Gb(at,typeof nt!="symbol"?nt+"":nt,bt),dc=(at,nt,bt)=>nt.has(at)||hd("Cannot "+bt);var P=(at,nt,bt)=>(dc(at,nt,"read from private field"),bt?bt.call(at):nt.get(at)),ee=(at,nt,bt)=>nt.has(at)?hd("Cannot add the same private member more than once"):nt instanceof WeakSet?nt.add(at):nt.set(at,bt),Ue=(at,nt,bt,qr)=>(dc(at,nt,"write to private field"),qr?qr.call(at,bt):nt.set(at,bt),bt),_i=(at,nt,bt)=>(dc(at,nt,"access private method"),bt);var fc=(at,nt,bt,qr)=>({set _(To){Ue(at,nt,To,bt)},get _(){return P(at,nt,qr)}}),dd=(at,nt,bt)=>kb(zb(at),bt,nt);import{d as Hb,t as tt,a as oe,c as $e,n as Vb,b as Li}from"../chunks/disclose-version.uuSIKVyL.js";import{av as fd,aw as Wb,ax as Xb,b as pc,U as $b,X as mc,a as bo,h as Ut,C as Qn,c as er,O as jb,am as pd,ay as qb,az as Yb,F as Kb,P as Mr,aA as Zb,aB as Jb,aC as So,W as gc,aD as Qb,au as eS,aE as tS,d as md,y as _c,aj as iS,Y as rS,Z as gd,B as Mo,_ as es,ar as aS,ap as nS,E as sS,aF as vc,x as oS,z as lS,K as _d,aG as cS,a1 as uS,aH as hS,aI as dS,a0 as fS,D as Xe,p as Qe,n as yt,e as Et,t as Ot,g as et,r as Tt,I as Rt,j as K,v as He,m as wt,o as vi,J as vd,aJ as xd,aK as pS,aL as xc,aM as mS,f as Ce,aN as gS,an as _S,aa as yd,s as ot,aO as zt,aP as bd}from"../chunks/runtime.B9YMaOlr.js";import{i as vS,d as xS,e as Sd,f as yS,g as bS,n as SS,j as MS,l as ES,m as TS,u as Md,a as wS,k as Ed}from"../chunks/store._b3fSD13.js";import{p as ue,b as tr,r as Dt,a as lt,i as xi,s as yi,c as kt,l as yc,o as AS}from"../chunks/index-client.BId0FHxG.js";import{s as rt}from"../chunks/snippet.BpfV97_g.js";import{i as RS}from"../chunks/legacy.Dwg2B2n3.js";let Td,CS=(async()=>{var Aa,vn,_r,Gr,vr,bc,Sc,xn,yn,bn,Sn,Mn,En,Tn,wn,An,Rn,Cn,Hs,Vs,Ra,Pn,ii,Hr,Ws,Xs,$s,js,Ca,Ln,Ai,Un,Vr,qs,Ys,Ks,Zs,Js,Pa,Dn,qi,In,Qs,La,Nn,Yi,eo,Ua,On,to,io,Da,Fn,ro,ao,Ia,Wr,xr,Na,yr,Oa,Fa,Bn,zn,kn,Ki,no,Ba,wd,so,za,oo,lo,co,uo,Gn,Ad,ho,fo,Hn,ka,Vn,po,mo,Wn,Xn,$n,br,Ga,jn,go,Rd,_o,qn,Ri,Ci,Zi,Ha,Eo,Va,Yn,Wa,Xa,vo;function at(i,e,t){Ut&&Qn();var r=i,a=$b,n,s=fd()?Wb:Xb;pc(()=>{s(a,a=e())&&(n&&mc(n),n=bo(()=>t(r)))}),Ut&&(r=er)}function nt(i,e){return e}function bt(i,e,t,r){for(var a=[],n=e.length,s=0;s<n;s++)Qb(e[s].e,a,!0);var o=n>0&&a.length===0&&t!==null;if(o){var l=t.parentNode;eS(l),l.append(t),r.clear(),ir(i,e[0].prev,e[n-1].next)}tS(a,()=>{for(var c=0;c<n;c++){var u=e[c];o||(r.delete(u.k),ir(i,u.prev,u.next)),md(u.e,!o)}})}function qr(i,e,t,r,a,n=null){var s=i,o={items:new Map,first:null};Ut&&Qn();var l=null,c=!1;pc(()=>{var u=t(),f=jb(u)?u:u==null?[]:pd(u),d=f.length;if(c&&d===0)return;c=d===0;let m=!1;if(Ut){var g=s.data===rS;g!==(d===0)&&(s=gd(),Mo(s),es(!1),m=!0)}if(Ut){for(var _=null,p,h=0;h<d;h++){if(er.nodeType===8&&er.data===aS){s=er,m=!0,es(!1);break}var b=f[h],E=r(b,h);p=Mc(er,o,_,null,b,E,h,a,e),o.items.set(E,p),_=p}d>0&&Mo(gd())}if(!Ut){var S=iS;To(f,o,s,a,e,(S.f&So)!==0,r)}n!==null&&(d===0?l?gc(l):l=bo(()=>n(s)):l!==null&&mc(l,()=>{l=null})),m&&es(!0),t()}),Ut&&(s=er)}function To(i,e,t,r,a,n,s){var o=i.length,l=e.items,c=e.first,u=c,f,d=null,m=[],g=[],_,p,h,b;for(b=0;b<o;b+=1){if(_=i[b],p=s(_,b),h=l.get(p),h===void 0){var E=u?u.e.nodes_start:t;d=Mc(E,e,d,d===null?e.first:d.next,_,p,b,r,a),l.set(p,d),m=[],g=[],u=d.next;continue}if(Cd(h,_,b),h.e.f&So&&gc(h.e),h!==u){if(f!==void 0&&f.has(h)){if(m.length<g.length){var S=g[0],O;d=S.prev;var A=m[0],w=m[m.length-1];for(O=0;O<m.length;O+=1)Ec(m[O],S,t);for(O=0;O<g.length;O+=1)f.delete(g[O]);ir(e,A.prev,w.next),ir(e,d,A),ir(e,w,S),u=S,d=w,b-=1,m=[],g=[]}else f.delete(h),Ec(h,u,t),ir(e,h.prev,h.next),ir(e,h,d===null?e.first:d.next),ir(e,d,h),d=h;continue}for(m=[],g=[];u!==null&&u.k!==p;)(n||!(u.e.f&So))&&(f??(f=new Set)).add(u),g.push(u),u=u.next;if(u===null)continue;h=u}m.push(h),d=h,u=h.next}if(u!==null||f!==void 0){for(var D=f===void 0?[]:pd(f);u!==null;)(n||!(u.e.f&So))&&D.push(u),u=u.next;var M=D.length;if(M>0){var y=null;bt(e,D,y,l)}}_c.first=e.first&&e.first.e,_c.last=d&&d.e}function Cd(i,e,t,r){Jb(i.v,e),i.i=t}function Mc(i,e,t,r,a,n,s,o,l){var c=(l&qb)!==0,u=(l&Yb)===0,f=c?u?Kb(a):Mr(a):a,d=l&Zb?Mr(s):s,m={i:d,v:f,k:n,a:null,e:null,prev:t,next:r};try{return m.e=bo(()=>o(i,f,d),Ut),m.e.prev=t&&t.e,m.e.next=r&&r.e,t===null?e.first=m:(t.next=m,t.e.next=m.e),r!==null&&(r.prev=m,r.e.prev=m.e),m}finally{}}function Ec(i,e,t){for(var r=i.next?i.next.e.nodes_start:t,a=e?e.e.nodes_start:t,n=i.e.nodes_start;n!==r;){var s=nS(n);a.before(n),n=s}}function ir(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Tc(i,e,t,r,a){var o;Ut&&Qn();var n=(o=e.$$slots)==null?void 0:o[t],s=!1;n===!0&&(n=e.children,s=!0),n===void 0||n(i,s?()=>r:r)}function wc(i,e,t,r,a,n){let s=Ut;Ut&&Qn();var o,l,c=null;Ut&&er.nodeType===1&&(c=er,Qn());var u=Ut?er:i,f;pc(()=>{const d=e()||null;var m=t||d==="svg"?vc:null;d!==o&&(f&&(d===null?mc(f,()=>{f=null,l=null}):d===l?gc(f):md(f)),d&&d!==l&&(f=bo(()=>{if(c=Ut?c:m?document.createElementNS(m,d):document.createElement(d),Hb(c,c),r){var g=Ut?lS(c):c.appendChild(oS());Ut&&(g===null?es(!1):Mo(g)),r(c,g)}_c.nodes_end=c,u.before(c)})),o=d,o&&(l=o))},sS),s&&(es(!0),Mo(u))}function Pd(i){if(Ut){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var r=i.value;wo(i,"value",null),i.value=r}if(i.hasAttribute("checked")){var a=i.checked;wo(i,"checked",null),i.checked=a}}};i.__on_r=t,dS(t),MS()}}function wo(i,e,t,r){var a=i.__attributes??(i.__attributes={});Ut&&(a[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||a[e]!==(a[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[cS]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Rc(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Ft(i,e,t,r,a=!1,n=!1,s=!1){var o=e||{},l=i.tagName==="OPTION";for(var c in e)c in t||(t[c]=null);var u=Rc(i),f=i.__attributes??(i.__attributes={}),d=[];for(const h in t){let b=t[h];if(l&&h==="value"&&b==null){i.value=i.__value="",o[h]=b;continue}var m=o[h];if(b!==m){o[h]=b;var g=h[0]+h[1];if(g!=="$$"){if(g==="on"){const E={},S="$$"+h;let O=h.slice(2);var _=xS(O);if(vS(O)&&(O=O.slice(0,-7),E.capture=!0),!_&&m){if(b!=null)continue;i.removeEventListener(O,o[S],E),o[S]=null}if(b!=null)if(_)i[`__${O}`]=b,yS([O]);else{let A=function(w){o[h].call(this,w)};e?o[S]=Sd(O,i,A,E):d.push([h,b,()=>o[S]=Sd(O,i,A,E)])}}else if(h==="style"&&b!=null)i.style.cssText=b+"";else if(h==="autofocus")bS(i,!!b);else if(h==="__value"||h==="value"&&b!=null)i.value=i[h]=i.__value=b;else{var p=h;a||(p=SS(p)),b==null&&!n?(f[h]=null,i.removeAttribute(h)):u.includes(p)&&(n||typeof b!="string")?i[p]=b:typeof b!="function"&&(Ut&&(p==="src"||p==="href"||p==="srcset")||wo(i,p,b))}h==="style"&&"__styles"in i&&(i.__styles={})}}}return e||uS(()=>{if(i.isConnected)for(const[h,b,E]of d)o[h]===b&&E()}),o}var Ac=new Map;function Rc(i){var e=Ac.get(i.nodeName);if(e)return e;Ac.set(i.nodeName,e=[]);for(var t,r=_d(i),a=Element.prototype;a!==r;){t=hS(r);for(var n in t)t[n].set&&e.push(n);r=_d(r)}return e}function Ld(i,e,t=e){var r=fd();ES(i,"input",()=>{var a=Cc(i)?Pc(i.value):i.value;t(a),r&&a!==(a=e())&&(i.value=a??"")}),fS(()=>{var a=e();if(Ut&&i.defaultValue!==i.value){t(i.value);return}Cc(i)&&a===Pc(i.value)||i.type==="date"&&!a&&!i.value||a!==i.value&&(i.value=a??"")})}function Cc(i){var e=i.type;return e==="number"||e==="range"}function Pc(i){return i===""?null:+i}function ja(i){Xe(i,i.v+1)}const Ao="170",Ud=0,Lc=1,Dd=2,Uc=1,Id=2,Ui=3,rr=0,$t=1,Di=2,ar=0,Yr=1,Dc=2,Ic=3,Nc=4,Nd=5,Er=100,Od=101,Fd=102,Bd=103,zd=104,kd=200,Gd=201,Hd=202,Vd=203,Ro=204,Co=205,Wd=206,Xd=207,$d=208,jd=209,qd=210,Yd=211,Kd=212,Zd=213,Jd=214,Po=0,Lo=1,Uo=2,Kr=3,Do=4,Io=5,No=6,Oo=7,Oc=0,Qd=1,ef=2,nr=0,tf=1,rf=2,af=3,nf=4,sf=5,of=6,lf=7,Fc=300,Zr=301,Jr=302,Fo=303,Bo=304,ts=306,zo=1e3,Tr=1001,ko=1002,oi=1003,cf=1004,is=1005,bi=1006,Go=1007,wr=1008,Ii=1009,Bc=1010,zc=1011,qa=1012,Ho=1013,Ar=1014,Ni=1015,Ya=1016,Vo=1017,Wo=1018,Qr=1020,kc=35902,Gc=1021,Hc=1022,li=1023,Vc=1024,Wc=1025,ea=1026,ta=1027,Xc=1028,Xo=1029,$c=1030,$o=1031,jo=1033,rs=33776,as=33777,ns=33778,ss=33779,qo=35840,Yo=35841,Ko=35842,Zo=35843,Jo=36196,Qo=37492,el=37496,tl=37808,il=37809,rl=37810,al=37811,nl=37812,sl=37813,ol=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,os=36492,ml=36494,gl=36495,jc=36283,_l=36284,vl=36285,xl=36286,uf=3200,hf=3201,df=0,ff=1,sr="",ai="srgb",ia="srgb-linear",ls="linear",ct="srgb",ra=7680,qc=519,pf=512,mf=513,gf=514,Yc=515,_f=516,vf=517,xf=518,yf=519,Kc=35044,Zc="300 es",Oi=2e3,cs=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,bl=180/Math.PI;function Ka(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function bf(i,e){return(i%e+e)%e}function Sl(i,e,t){return(1-t)*i+t*e}function Za(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*a+e.x,this.y=n*a+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,r,a,n,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c)}set(e,t,r,a,n,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],m=r[5],g=r[8],_=a[0],p=a[3],h=a[6],b=a[1],E=a[4],S=a[7],O=a[2],A=a[5],w=a[8];return n[0]=s*_+o*b+l*O,n[3]=s*p+o*E+l*A,n[6]=s*h+o*S+l*w,n[1]=c*_+u*b+f*O,n[4]=c*p+u*E+f*A,n[7]=c*h+u*S+f*w,n[2]=d*_+m*b+g*O,n[5]=d*p+m*E+g*A,n[8]=d*h+m*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*n*u+r*o*l+a*n*c-a*s*l}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,d=o*l-u*n,m=c*n-s*l,g=t*f+r*d+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(a*c-u*r)*_,e[2]=(o*r-a*s)*_,e[3]=d*_,e[4]=(u*t-a*l)*_,e[5]=(a*n-o*t)*_,e[6]=m*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*n)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new Fe;function Jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){const i=us("canvas");return i.style.display="block",i}const Qc={};function Ja(i){i in Qc||(Qc[i]=!0,console.warn(i))}function Mf(i,e,t){return new Promise(function(r,a){function n(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}function Ef(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sr?ls:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const eu=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],iu=[.3127,.329],ru=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ia]:{primaries:eu,whitePoint:iu,transfer:ls,toXYZ:ru,fromXYZ:au,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:eu,whitePoint:iu,transfer:ct,toXYZ:ru,fromXYZ:au,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}});let sa;class wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sa===void 0&&(sa=us("canvas")),sa.width=e.width,sa.height=e.height;const r=sa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=sa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=Fi(n[s]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Fi(t[r]/255)*255):t[r]=Fi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(El(a[s].image)):n.push(El(a[s]))}else n=El(a);r.url=n}return t||(e.images[this.uuid]=r),r}}function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class Yt extends aa{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,r=Tr,a=Tr,n=bi,s=wr,o=li,l=Ii,c=Yt.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ka(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=Fc,Yt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,r=0,a=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*r+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,n;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],f=s[5],d=s[9],m=s[2],g=s[6],_=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(d+g)<.1&&Math.abs(o+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(o+1)/2,b=(f+1)/2,E=(_+1)/2,S=(l+u)/4,O=(c+m)/4,A=(d+g)/4;return h>b&&h>E?h<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(h),a=S/r,n=O/r):b>E?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=S/a,n=A/a):E<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(E),r=O/n,a=A/n),this.set(r,a,n,t),this}let p=Math.sqrt((g-d)*(g-d)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(p)<.001&&(p=1),this.x=(g-d)/p,this.y=(c-m)/p,this.z=(u-l)/p,this.w=Math.acos((o+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends aa{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const n=new Yt(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);n.flipY=!1,n.generateMipmaps=r.generateMipmaps,n.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends Cf{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class su extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,n,s,o){let l=r[a+0],c=r[a+1],u=r[a+2],f=r[a+3];const d=n[s+0],m=n[s+1],g=n[s+2],_=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==g){let p=1-o;const h=l*d+c*m+u*g+f*_,b=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const O=Math.sqrt(E),A=Math.atan2(O,h*b);p=Math.sin(p*A)/O,o=Math.sin(o*A)/O}const S=o*b;if(l=l*p+d*S,c=c*p+m*S,u=u*p+g*S,f=f*p+_*S,p===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,a,n,s){const o=r[a],l=r[a+1],c=r[a+2],u=r[a+3],f=n[s],d=n[s+1],m=n[s+2],g=n[s+3];return e[t]=o*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-o*m,e[t+2]=c*g+u*m+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(a/2),f=o(n/2),d=l(r/2),m=l(a/2),g=l(n/2);switch(s){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=r+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(n-c)*m,this._z=(s-a)*m}else if(r>o&&r>f){const m=2*Math.sqrt(1+r-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(n+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-r-f);this._w=(n-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-r-o);this._w=(s-a)/m,this._x=(n+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+a*c-n*l,this._y=a*u+s*l+n*o-r*c,this._z=n*u+s*c+r*l-a*o,this._w=s*u-r*o-a*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,n=this._z,s=this._w;let o=s*e._w+r*e._x+a*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=a,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*a+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*f+this._w*d,this._x=r*f+this._x*d,this._y=a*f+this._y*d,this._z=n*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*a,this.y=n[1]*t+n[4]*r+n[7]*a,this.z=n[2]*t+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*r),u=2*(o*t-n*a),f=2*(n*r-s*t);return this.x=t+l*c+s*f-o*u,this.y=r+l*u+o*c-n*f,this.z=a+l*f+n*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a,this.y=n[1]*t+n[5]*r+n[9]*a,this.z=n[2]*t+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new W,ou=new Qa;class en{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ci):ci.fromBufferAttribute(n,s),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hs.copy(r.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tn),ds.subVectors(this.max,tn),oa.subVectors(e.a,tn),la.subVectors(e.b,tn),ca.subVectors(e.c,tn),or.subVectors(la,oa),lr.subVectors(ca,la),Cr.subVectors(oa,ca);let t=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Cr.z,Cr.y,or.z,0,-or.x,lr.z,0,-lr.x,Cr.z,0,-Cr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Cr.y,Cr.x,0];return!wl(t,oa,la,ca,ds)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,oa,la,ca,ds))?!1:(fs.crossVectors(or,lr),t=[fs.x,fs.y,fs.z],wl(t,oa,la,ca,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new W,new W,new W,new W,new W,new W,new W,new W],ci=new W,hs=new en,oa=new W,la=new W,ca=new W,or=new W,lr=new W,Cr=new W,tn=new W,ds=new W,fs=new W,Pr=new W;function wl(i,e,t,r,a){for(let n=0,s=i.length-3;n<=s;n+=3){Pr.fromArray(i,n);const o=a.x*Math.abs(Pr.x)+a.y*Math.abs(Pr.y)+a.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=r.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lf=new en,rn=new W,Al=new W;class Rl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Lf.setFromPoints(e).getCenter(r);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rn.subVectors(e,this.center);const t=rn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(rn,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rn.copy(e.center).add(Al)),this.expandByPoint(rn.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new W,Cl=new W,ps=new W,cr=new W,Pl=new W,ms=new W,Ll=new W;class Uf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Cl.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(Cl);const n=e.distanceTo(t)*.5,s=-this.direction.dot(ps),o=cr.dot(this.direction),l=-cr.dot(ps),c=cr.lengthSq(),u=Math.abs(1-s*s);let f,d,m,g;if(u>0)if(f=s*l-o,d=s*o-l,g=n*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+s*d+2*o)+d*(s*f+d+2*l)+c}else d=n,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*l)+c;else d=-n,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-s*n+o)),d=f>0?-n:Math.min(Math.max(-n,-l),n),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-n,-l),n),m=d*(d+2*l)+c):(f=Math.max(0,-(s*n+o)),d=f>0?n:Math.min(Math.max(-n,-l),n),m=-f*f+d*(d+2*l)+c);else d=s>0?-n:n,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Cl).addScaledVector(ps,d),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),a=zi.dot(zi)-r*r,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,n,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(n=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),r>s||n>a||((n>r||isNaN(r))&&(r=n),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||o>a)||((o>r||r!==r)&&(r=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,a,n){Pl.subVectors(t,e),ms.subVectors(r,e),Ll.crossVectors(Pl,ms);let s=this.direction.dot(Ll),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;cr.subVectors(this.origin,e);const l=o*this.direction.dot(ms.crossVectors(cr,ms));if(l<0)return null;const c=o*this.direction.dot(Pl.cross(cr));if(c<0||l+c>s)return null;const u=-o*cr.dot(Ll);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,r,a,n,s,o,l,c,u,f,d,m,g,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c,u,f,d,m,g,_,p)}set(e,t,r,a,n,s,o,l,c,u,f,d,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),n=1/ua.setFromMatrixColumn(e,1).length(),s=1/ua.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,n=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const d=s*u,m=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-s*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,m=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=s*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,If)}lookAt(e,t,r){const a=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ur.crossVectors(r,Qt),ur.lengthSq()===0&&(Math.abs(r.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ur.crossVectors(r,Qt)),ur.normalize(),gs.crossVectors(Qt,ur),a[0]=ur.x,a[4]=gs.x,a[8]=Qt.x,a[1]=ur.y,a[5]=gs.y,a[9]=Qt.y,a[2]=ur.z,a[6]=gs.z,a[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],m=r[13],g=r[2],_=r[6],p=r[10],h=r[14],b=r[3],E=r[7],S=r[11],O=r[15],A=a[0],w=a[4],D=a[8],M=a[12],y=a[1],C=a[5],R=a[9],F=a[13],B=a[2],X=a[6],z=a[10],j=a[14],k=a[3],Y=a[7],ne=a[11],xe=a[15];return n[0]=s*A+o*y+l*B+c*k,n[4]=s*w+o*C+l*X+c*Y,n[8]=s*D+o*R+l*z+c*ne,n[12]=s*M+o*F+l*j+c*xe,n[1]=u*A+f*y+d*B+m*k,n[5]=u*w+f*C+d*X+m*Y,n[9]=u*D+f*R+d*z+m*ne,n[13]=u*M+f*F+d*j+m*xe,n[2]=g*A+_*y+p*B+h*k,n[6]=g*w+_*C+p*X+h*Y,n[10]=g*D+_*R+p*z+h*ne,n[14]=g*M+_*F+p*j+h*xe,n[3]=b*A+E*y+S*B+O*k,n[7]=b*w+E*C+S*X+O*Y,n[11]=b*D+E*R+S*z+O*ne,n[15]=b*M+E*F+S*j+O*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+n*l*f-a*c*f-n*o*d+r*c*d+a*o*m-r*l*m)+_*(+t*l*m-t*c*d+n*s*d-a*s*m+a*c*u-n*l*u)+p*(+t*c*f-t*o*m-n*s*f+r*s*m+n*o*u-r*c*u)+h*(-a*o*u-t*l*f+t*o*d+a*s*f-r*s*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],b=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,E=g*d*c-u*p*c-g*l*m+s*p*m+u*l*h-s*d*h,S=u*_*c-g*f*c+g*o*m-s*_*m-u*o*h+s*f*h,O=g*f*l-u*_*l-g*o*d+s*_*d+u*o*p-s*f*p,A=t*b+r*E+a*S+n*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=b*w,e[1]=(_*d*n-f*p*n-_*a*m+r*p*m+f*a*h-r*d*h)*w,e[2]=(o*p*n-_*l*n+_*a*c-r*p*c-o*a*h+r*l*h)*w,e[3]=(f*l*n-o*d*n-f*a*c+r*d*c+o*a*m-r*l*m)*w,e[4]=E*w,e[5]=(u*p*n-g*d*n+g*a*m-t*p*m-u*a*h+t*d*h)*w,e[6]=(g*l*n-s*p*n-g*a*c+t*p*c+s*a*h-t*l*h)*w,e[7]=(s*d*n-u*l*n+u*a*c-t*d*c-s*a*m+t*l*m)*w,e[8]=S*w,e[9]=(g*f*n-u*_*n-g*r*m+t*_*m+u*r*h-t*f*h)*w,e[10]=(s*_*n-g*o*n+g*r*c-t*_*c-s*r*h+t*o*h)*w,e[11]=(u*o*n-s*f*n-u*r*c+t*f*c+s*r*m-t*o*m)*w,e[12]=O*w,e[13]=(u*_*a-g*f*a+g*r*d-t*_*d-u*r*p+t*f*p)*w,e[14]=(g*o*a-s*_*a-g*r*l+t*_*l+s*r*p-t*o*p)*w,e[15]=(s*f*a-u*o*a+u*r*l-t*f*l-s*r*d+t*o*d)*w,this}scale(e){const t=this.elements,r=e.x,a=e.y,n=e.z;return t[0]*=r,t[4]*=a,t[8]*=n,t[1]*=r,t[5]*=a,t[9]*=n,t[2]*=r,t[6]*=a,t[10]*=n,t[3]*=r,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),n=1-r,s=e.x,o=e.y,l=e.z,c=n*s,u=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+r,u*l-a*s,0,c*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,n,s){return this.set(1,r,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,u=s+s,f=o+o,d=n*c,m=n*u,g=n*f,_=s*u,p=s*f,h=o*f,b=l*c,E=l*u,S=l*f,O=r.x,A=r.y,w=r.z;return a[0]=(1-(_+h))*O,a[1]=(m+S)*O,a[2]=(g-E)*O,a[3]=0,a[4]=(m-S)*A,a[5]=(1-(d+h))*A,a[6]=(p+b)*A,a[7]=0,a[8]=(g+E)*w,a[9]=(p-b)*w,a[10]=(1-(d+_))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let n=ua.set(a[0],a[1],a[2]).length();const s=ua.set(a[4],a[5],a[6]).length(),o=ua.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const l=1/n,c=1/s,u=1/o;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),r.x=n,r.y=s,r.z=o,this}makePerspective(e,t,r,a,n,s,o=Oi){const l=this.elements,c=2*n/(t-e),u=2*n/(r-a),f=(t+e)/(t-e),d=(r+a)/(r-a);let m,g;if(o===Oi)m=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===cs)m=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,a,n,s,o=Oi){const l=this.elements,c=1/(t-e),u=1/(r-a),f=1/(s-n),d=(t+e)*c,m=(r+a)*u;let g,_;if(o===Oi)g=(s+n)*f,_=-2*f;else if(o===cs)g=n*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ua=new W,ui=new Ct,Df=new W(0,0,0),If=new W(1,1,1),ur=new W,gs=new W,Qt=new W,lu=new Ct,cu=new Qa;class ki{constructor(e=0,t=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],f=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const hu=new W,ha=new Qa,Gi=new Ct,_s=new W,an=new W,Of=new W,Ff=new Qa,du=new W(1,0,0),fu=new W(0,1,0),pu=new W(0,0,1),mu={type:"added"},Bf={type:"removed"},da={type:"childadded",child:null},Ul={type:"childremoved",child:null};class ei extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new W,t=new ki,r=new Qa,a=new W(1,1,1);function n(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Fe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_s.copy(e):_s.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),an.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(an,_s,this.up):Gi.lookAt(_s,an,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),ha.setFromRotationMatrix(Gi),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),da.child=e,this.dispatchEvent(da),da.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(an,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(an,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];n(e.shapes,f)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ei.DEFAULT_UP=new W(0,1,0),ei.DEFAULT_MATRIX_AUTO_UPDATE=!0,ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new W,Hi=new W,Dl=new W,Vi=new W,fa=new W,pa=new W,gu=new W,Il=new W,Nl=new W,Ol=new W,Fl=new At,Bl=new At,zl=new At;class di{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),hi.subVectors(e,t),a.cross(hi);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,r,a,n){hi.subVectors(a,t),Hi.subVectors(r,t),Dl.subVectors(e,t);const s=hi.dot(hi),o=hi.dot(Hi),l=hi.dot(Dl),c=Hi.dot(Hi),u=Hi.dot(Dl),f=s*c-o*o;if(f===0)return n.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,g=(s*u-o*l)*d;return n.set(1-m-g,g,m)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,a,n,s,o,l){return this.getBarycoord(e,t,r,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Vi.x),l.addScaledVector(s,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,r,a,n,s){return Fl.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Fl.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,r),zl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Fl,n.x),s.addScaledVector(Bl,n.y),s.addScaledVector(zl,n.z),s}static isFrontFacing(e,t,r,a){return hi.subVectors(r,t),Hi.subVectors(e,t),hi.cross(Hi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,n){return di.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,n=this.c;let s,o;fa.subVectors(a,r),pa.subVectors(n,r),Il.subVectors(e,r);const l=fa.dot(Il),c=pa.dot(Il);if(l<=0&&c<=0)return t.copy(r);Nl.subVectors(e,a);const u=fa.dot(Nl),f=pa.dot(Nl);if(u>=0&&f<=u)return t.copy(a);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(fa,s);Ol.subVectors(e,n);const m=fa.dot(Ol),g=pa.dot(Ol);if(g>=0&&m<=g)return t.copy(n);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(pa,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return gu.subVectors(n,a),o=(f-u)/(f-u+(m-g)),t.copy(a).addScaledVector(gu,o);const h=1/(p+_+d);return s=_*h,o=d*h,t.copy(r).addScaledVector(fa,s).addScaledVector(pa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},vs={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ze.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Ze.workingColorSpace){if(e=bf(e,1),t=jt(t,0,1),r=jt(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,s=2*r-n;this.r=kl(s,n,e+1/3),this.g=kl(s,n,e),this.b=kl(s,n,e-1/3)}return Ze.toWorkingColorSpace(this,a),this}setStyle(e,t=ai){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=_u[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ze.fromWorkingColorSpace(Vt.copy(this),e),Math.round(jt(Vt.r*255,0,255))*65536+Math.round(jt(Vt.g*255,0,255))*256+Math.round(jt(Vt.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Vt.copy(this),t);const r=Vt.r,a=Vt.g,n=Vt.b,s=Math.max(r,a,n),o=Math.min(r,a,n);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case r:l=(a-n)/f+(a<n?6:0);break;case a:l=(n-r)/f+2;break;case n:l=(r-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ai){Ze.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,r=Vt.g,a=Vt.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(vs);const r=Sl(hr.h,vs.h,t),a=Sl(hr.s,vs.s,t),n=Sl(hr.l,vs.l,t);return this.setHSL(r,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*a,this.g=n[1]*t+n[4]*r+n[7]*a,this.b=n[2]*t+n[5]*r+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ht;ht.NAMES=_u;let zf=0;class xs extends aa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ka(),this.name="",this.blending=Yr,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ro&&(r.blendSrc=this.blendSrc),this.blendDst!==Co&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(r.textures=n),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vu extends xs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new W,ys=new ut;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Kc,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Za(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Za(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Za(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Za(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),r=qt(r,this.array),a=qt(a,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class xu extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yu extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Lr extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let kf=0;const ni=new Ct,Gl=new ei,ma=new W,ti=new en,nn=new en,Bt=new W;class Ur extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jc(e)?yu:xu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Fe().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lr(r,3))}else{for(let r=0,a=t.count;r<a;r++){const n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const n=t[r];ti.setFromBufferAttribute(n),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(ti.min,nn.min),ti.expandByPoint(Bt),Bt.addVectors(ti.max,nn.max),ti.expandByPoint(Bt)):(ti.expandByPoint(nn.min),ti.expandByPoint(nn.max))}ti.getCenter(r);let a=0;for(let n=0,s=e.count;n<s;n++)Bt.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(Bt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(ma.fromBufferAttribute(e,c),Bt.add(ma)),a=Math.max(a,r.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<r.count;D++)o[D]=new W,l[D]=new W;const c=new W,u=new W,f=new W,d=new ut,m=new ut,g=new ut,_=new W,p=new W;function h(D,M,y){c.fromBufferAttribute(r,D),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,y),d.fromBufferAttribute(n,D),m.fromBufferAttribute(n,M),g.fromBufferAttribute(n,y),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[D].add(_),o[M].add(_),o[y].add(_),l[D].add(p),l[M].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,M=b.length;D<M;++D){const y=b[D],C=y.start,R=y.count;for(let F=C,B=C+R;F<B;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new W,S=new W,O=new W,A=new W;function w(D){O.fromBufferAttribute(a,D),A.copy(O);const M=o[D];E.copy(M),E.sub(O.multiplyScalar(O.dot(M))).normalize(),S.crossVectors(A,M);const y=S.dot(l[D])<0?-1:1;s.setXYZW(D,E.x,E.y,E.z,y)}for(let D=0,M=b.length;D<M;++D){const y=b[D],C=y.start,R=y.count;for(let F=C,B=C+R;F<B;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const a=new W,n=new W,s=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);a.fromBufferAttribute(t,g),n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,p),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Si(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ur,r=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,r);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,r);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],f=n[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new Ct,Dr=new Uf,bs=new Rl,Su=new W,Ss=new W,Ms=new W,Es=new W,Hl=new W,Ts=new W,Mu=new W,ws=new W;class Mi extends ei{constructor(e=new Ur,t=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){Ts.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const u=o[l],f=n[l];u!==0&&(Hl.fromBufferAttribute(f,e),s?Ts.addScaledVector(Hl,u):Ts.addScaledVector(Hl.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bs.copy(r.boundingSphere),bs.applyMatrix4(n),Dr.copy(e.ray).recast(e.near),!(bs.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(bs,Su)===null||Dr.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(bu.copy(n).invert(),Dr.copy(e.ray).applyMatrix4(bu),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,r){let a;const n=this.geometry,s=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,f=n.attributes.normal,d=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=s[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,O=E;S<O;S+=3){const A=o.getX(S),w=o.getX(S+1),D=o.getX(S+2);a=As(this,h,e,r,c,u,f,A,w,D),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);a=As(this,s,e,r,c,u,f,b,E,S),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=s[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,O=E;S<O;S+=3){const A=S,w=S+1,D=S+2;a=As(this,h,e,r,c,u,f,A,w,D),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=p,E=p+1,S=p+2;a=As(this,s,e,r,c,u,f,b,E,S),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Gf(i,e,t,r,a,n,s,o){let l;if(e.side===$t?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,e.side===rr,o),l===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:i}}function As(i,e,t,r,a,n,s,o,l,c){i.getVertexPosition(o,Ss),i.getVertexPosition(l,Ms),i.getVertexPosition(c,Es);const u=Gf(i,e,t,r,Ss,Ms,Es,Mu);if(u){const f=new W;di.getBarycoord(Mu,Ss,Ms,Es,f),a&&(u.uv=di.getInterpolatedAttribute(a,o,l,c,f,new ut)),n&&(u.uv1=di.getInterpolatedAttribute(n,o,l,c,f,new ut)),s&&(u.normal=di.getInterpolatedAttribute(s,o,l,c,f,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};di.getNormal(Ss,Ms,Es,d.normal),u.face=d,u.barycoord=f}return u}class sn extends Ur{constructor(e=1,t=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,r,t,e,s,n,0),g("z","y","x",1,-1,r,t,-e,s,n,1),g("x","z","y",1,1,e,r,t,a,s,2),g("x","z","y",1,-1,e,r,-t,a,s,3),g("x","y","z",1,-1,e,t,r,a,n,4),g("x","y","z",-1,-1,e,t,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Lr(c,3)),this.setAttribute("normal",new Lr(u,3)),this.setAttribute("uv",new Lr(f,2));function g(_,p,h,b,E,S,O,A,w,D,M){const y=S/w,C=O/D,R=S/2,F=O/2,B=A/2,X=w+1,z=D+1;let j=0,k=0;const Y=new W;for(let ne=0;ne<z;ne++){const xe=ne*C-F;for(let Te=0;Te<X;Te++){const We=Te*y-R;Y[_]=We*b,Y[p]=xe*E,Y[h]=B,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[h]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Te/w),f.push(1-ne/D),j+=1}}for(let ne=0;ne<D;ne++)for(let xe=0;xe<w;xe++){const Te=d+xe+X*ne,We=d+xe+X*(ne+1),q=d+(xe+1)+X*(ne+1),ie=d+(xe+1)+X*ne;l.push(Te,We,ie),l.push(We,q,ie),k+=6}o.addGroup(m,k,M),m+=k,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const r=ga(i[t]);for(const a in r)e[a]=r[a]}return e}function Hf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Vf={clone:ga,merge:Xt};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends xs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Tu extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new W,wu=new ut,Au=new ut;class fi extends Tu{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Au),t.subVectors(Au,wu)}setViewOffset(e,t,r,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yl*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*a/l,t-=s.offsetY*r/c,a*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _a=-90,va=1;class $f extends ei{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fi(_a,va,e,t);a.layers=this.layers,this.add(a);const n=new fi(_a,va,e,t);n.layers=this.layers,this.add(n);const s=new fi(_a,va,e,t);s.layers=this.layers,this.add(s);const o=new fi(_a,va,e,t);o.layers=this.layers,this.add(o);const l=new fi(_a,va,e,t);l.layers=this.layers,this.add(l);const c=new fi(_a,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,n,s,o,l]=t;for(const c of t)this.remove(c);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,n),e.setRenderTarget(r,1,a),e.render(t,s),e.setRenderTarget(r,2,a),e.render(t,o),e.setRenderTarget(r,3,a),e.render(t,l),e.setRenderTarget(r,4,a),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,a),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Ru extends Yt{constructor(e,t,r,a,n,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,r,a,n,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jf extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ru(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new sn(5,5,5),n=new Wi({name:"CubemapFromEquirect",uniforms:ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$t,blending:ar});n.uniforms.tEquirect.value=t;const s=new Mi(a,n),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=bi),new $f(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,a){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,a);e.setRenderTarget(n)}}const Vl=new W,qf=new W,Yf=new Fe;class Ir{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Vl.subVectors(r,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Yf.getNormalMatrix(e),a=this.coplanarPoint(Vl).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Rl,Rs=new W;class Cu{constructor(e=new Ir,t=new Ir,r=new Ir,a=new Ir,n=new Ir,s=new Ir){this.planes=[e,t,r,a,n,s]}set(e,t,r,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi){const r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],f=a[6],d=a[7],m=a[8],g=a[9],_=a[10],p=a[11],h=a[12],b=a[13],E=a[14],S=a[15];if(r[0].setComponents(l-n,d-c,p-m,S-h).normalize(),r[1].setComponents(l+n,d+c,p+m,S+h).normalize(),r[2].setComponents(l+s,d+u,p+g,S+b).normalize(),r[3].setComponents(l-s,d-u,p-g,S-b).normalize(),r[4].setComponents(l-o,d-f,p-_,S-E).normalize(),t===Oi)r[5].setComponents(l+o,d+f,p+_,S+E).normalize();else if(t===cs)r[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Rs.x=a.normal.x>0?e.max.x:e.min.x,Rs.y=a.normal.y>0?e.max.y:e.min.y,Rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,e=!1,t=null,r=null;function a(n,s){t(n,s),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function Kf(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}class on extends Ur{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(r),l=Math.floor(a),c=o+1,u=l+1,f=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const b=h*d-s;for(let E=0;E<c;E++){const S=E*f-n;g.push(S,-b,0),_.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const E=b+c*h,S=b+c*(h+1),O=b+1+c*(h+1),A=b+1+c*h;m.push(E,S,A),m.push(S,O,A)}this.setIndex(m),this.setAttribute("position",new Lr(g,3)),this.setAttribute("normal",new Lr(_,3)),this.setAttribute("uv",new Lr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:ip,aomap_fragment:rp,aomap_pars_fragment:ap,batching_pars_vertex:np,batching_vertex:sp,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:up,bumpmap_pars_fragment:hp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:vp,color_vertex:xp,common:yp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Ep,emissivemap_fragment:Tp,emissivemap_pars_fragment:wp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Ip,fog_pars_vertex:Np,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:$p,lights_phong_pars_fragment:jp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:am,map_particle_fragment:nm,map_particle_pars_fragment:sm,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:um,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Mm,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:wm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Dm,shadowmap_vertex:Im,shadowmask_pars_fragment:Nm,skinbase_vertex:Om,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Gm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:$m,uv_pars_vertex:jm,uv_vertex:qm,worldpos_vertex:Ym,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ig,depth_frag:rg,distanceRGBA_vert:ag,distanceRGBA_frag:ng,equirect_vert:sg,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Sg,meshtoon_frag:Mg,points_vert:Eg,points_frag:Tg,shadow_vert:wg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ce={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ei={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Ei.physical={uniforms:Xt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Cs={r:0,b:0,g:0},Or=new ki,Pg=new Ct;function Lg(i,e,t,r,a,n,s){const o=new ht(0);let l=n===!0?0:1,c,u,f=null,d=0,m=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function _(b){let E=!1;const S=g(b);S===null?h(o,l):S&&S.isColor&&(h(S,1),E=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===ts)?(u===void 0&&(u=new Mi(new sn(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ga(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Or.copy(E.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Or)),u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,(f!==S||d!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Mi(new on(2,2),new Wi({name:"BackgroundMaterial",uniforms:ga(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,E){b.getRGB(Cs,Eu(i)),r.buffers.color.setClear(Cs.r,Cs.g,Cs.b,E,s)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:_,addToRenderList:p}}function Ug(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=d(null);let n=a,s=!1;function o(y,C,R,F,B){let X=!1;const z=f(F,R,C);n!==z&&(n=z,c(n.object)),X=m(y,F,R,B),X&&g(y,F,R,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,S(y,C,R,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,C,R){const F=R.wireframe===!0;let B=r[y.id];B===void 0&&(B={},r[y.id]=B);let X=B[C.id];X===void 0&&(X={},B[C.id]=X);let z=X[F];return z===void 0&&(z=d(l()),X[F]=z),z}function d(y){const C=[],R=[],F=[];for(let B=0;B<t;B++)C[B]=0,R[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,C,R,F){const B=n.attributes,X=C.attributes;let z=0;const j=R.getAttributes();for(const k in j)if(j[k].location>=0){const Y=B[k];let ne=X[k];if(ne===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;z++}return n.attributesNum!==z||n.index!==F}function g(y,C,R,F){const B={},X=C.attributes;let z=0;const j=R.getAttributes();for(const k in j)if(j[k].location>=0){let Y=X[k];Y===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),B[k]=ne,z++}n.attributes=B,n.attributesNum=z,n.index=F}function _(){const y=n.newAttributes;for(let C=0,R=y.length;C<R;C++)y[C]=0}function p(y){h(y,0)}function h(y,C){const R=n.newAttributes,F=n.enabledAttributes,B=n.attributeDivisors;R[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),B[y]!==C&&(i.vertexAttribDivisor(y,C),B[y]=C)}function b(){const y=n.newAttributes,C=n.enabledAttributes;for(let R=0,F=C.length;R<F;R++)C[R]!==y[R]&&(i.disableVertexAttribArray(R),C[R]=0)}function E(y,C,R,F,B,X,z){z===!0?i.vertexAttribIPointer(y,C,R,B,X):i.vertexAttribPointer(y,C,R,F,B,X)}function S(y,C,R,F){_();const B=F.attributes,X=R.getAttributes(),z=C.defaultAttributeValues;for(const j in X){const k=X[j];if(k.location>=0){let Y=B[j];if(Y===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const ne=Y.normalized,xe=Y.itemSize,Te=e.get(Y);if(Te===void 0)continue;const We=Te.buffer,q=Te.type,ie=Te.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||Y.gpuType===Ho;if(Y.isInterleavedBufferAttribute){const se=Y.data,we=se.stride,De=Y.offset;if(se.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)h(k.location+ze,se.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ze=0;ze<k.locationSize;ze++)p(k.location+ze);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ze=0;ze<k.locationSize;ze++)E(k.location+ze,xe/k.locationSize,q,ne,we*ie,(De+xe/k.locationSize*ze)*ie,ge)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)h(k.location+se,Y.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<k.locationSize;se++)p(k.location+se);i.bindBuffer(i.ARRAY_BUFFER,We);for(let se=0;se<k.locationSize;se++)E(k.location+se,xe/k.locationSize,q,ne,xe*ie,xe/k.locationSize*se*ie,ge)}}else if(z!==void 0){const ne=z[j];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(k.location,ne);break;case 3:i.vertexAttrib3fv(k.location,ne);break;case 4:i.vertexAttrib4fv(k.location,ne);break;default:i.vertexAttrib1fv(k.location,ne)}}}}b()}function O(){D();for(const y in r){const C=r[y];for(const R in C){const F=C[R];for(const B in F)u(F[B].object),delete F[B];delete C[R]}delete r[y]}}function A(y){if(r[y.id]===void 0)return;const C=r[y.id];for(const R in C){const F=C[R];for(const B in F)u(F[B].object),delete F[B];delete C[R]}delete r[y.id]}function w(y){for(const C in r){const R=r[C];if(R[y.id]===void 0)continue;const F=R[y.id];for(const B in F)u(F[B].object),delete F[B];delete R[y.id]}}function D(){M(),s=!0,n!==a&&(n=a,c(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Dg(i,e,t){let r;function a(c){r=c}function n(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,f){f!==0&&(i.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,r,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ig(i,e,t,r){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==li&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===Ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ni&&!D)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:O,maxSamples:A}}function Ng(i){const e=this;let t=null,r=0,a=!1,n=!1;const s=new Ir,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||r!==0||a;return a=d,r=f.length,m},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!a||g===null||g.length===0||n&&!p)n?u(null):c();else{const b=n?0:r,E=b*4;let S=h.clippingState||null;l.value=S,S=u(g,d,E,m);for(let O=0;O!==E;++O)S[O]=t[O];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,S=m;E!==_;++E,S+=4)s.copy(f[E]).applyMatrix4(b,o),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Og(i){let e=new WeakMap;function t(s,o){return o===Fo?s.mapping=Zr:o===Bo&&(s.mapping=Jr),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Fo||o===Bo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class Lu extends Tu{constructor(e=-1,t=1,r=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=r-e,s=r+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xa=4,Uu=[.125,.215,.35,.446,.526,.582],Fr=20,Wl=new Lu,Du=new ht;let Xl=null,$l=0,jl=0,ql=!1;const Br=(1+Math.sqrt(5))/2,ya=1/Br,Iu=[new W(-Br,ya,0),new W(Br,ya,0),new W(-ya,0,Br),new W(ya,0,Br),new W(0,Br,-ya),new W(0,Br,ya),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Xl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,a,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,$l,jl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ya,format:li,colorSpace:ia,depthBuffer:!1},a=Ou(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(n)),this._blurMaterial=Bg(n,e,t)}return a}_compileMaterial(e){const t=new Mi(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,r,a){const n=new fi(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Du),l.toneMapping=nr,l.autoClear=!1;const f=new vu({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),d=new Mi(new sn,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(Du),m=!0);for(let _=0;_<6;_++){const p=_%3;p===0?(n.up.set(0,s[_],0),n.lookAt(o[_],0,0)):p===1?(n.up.set(0,0,s[_]),n.lookAt(0,o[_],0)):(n.up.set(0,s[_],0),n.lookAt(0,0,o[_]));const h=this._cubeSize;Ps(a,p*h,_>2?h:0,h,h),l.setRenderTarget(a),m&&l.render(d,n),l.render(e,n)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Zr||e.mapping===Jr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const n=a?this._cubemapMaterial:this._equirectMaterial,s=new Mi(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Wl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let n=1;n<a;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Iu[(a-n-1)%Iu.length];this._blur(e,n-1,n,s,o)}t.autoClear=r}_blur(e,t,r,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,a,"latitudinal",n),this._halfBlur(s,e,r,r,a,"longitudinal",n)}_halfBlur(e,t,r,a,n,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mi(this._lodPlanes[a],c),d=c.uniforms,m=this._sizeLods[r]-1,g=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Fr-1),_=n/g,p=isFinite(n)?1+Math.floor(u*_):Fr;p>Fr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const h=[];let b=0;for(let w=0;w<Fr;++w){const D=w/_,M=Math.exp(-D*D/2);h.push(M),w===0?b+=M:w<p&&(b+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-r;const S=this._sizeLods[a],O=3*S*(a>E-xa?a-E+xa:0),A=4*(this._cubeSize-S);Ps(t,O,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Wl)}}function Fg(i){const e=[],t=[],r=[];let a=i;const n=i-xa+1+Uu.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>i-xa?l=Uu[s-i+xa-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,b=new Float32Array(_*g*m),E=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,D=A>2?0:-1,M=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];b.set(M,_*g*A),E.set(d,p*g*A);const y=[A,A,A,A,A,A];S.set(y,h*g*A)}const O=new Ur;O.setAttribute("position",new Si(b,_)),O.setAttribute("uv",new Si(E,p)),O.setAttribute("faceIndex",new Si(S,h)),e.push(O),a>xa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ou(i,e,t){const r=new Rr(i,e,t);return r.texture.mapping=ts,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function Bg(i,e,t){const r=new Float32Array(Fr),a=new W(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Fu(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Bu(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zg(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===Bo,u=l===Zr||l===Jr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Nu(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&a(m)?(t===null&&(t=new Nu(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",n),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function kg(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ja("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Gg(i,e,t,r){const a={},n=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",s),delete a[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let E=0,S=b.length;E<S;E+=3){const O=b[E+0],A=b[E+1],w=b[E+2];d.push(O,A,A,w,w,O)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const O=E+0,A=E+1,w=E+2;d.push(O,A,A,w,w,O)}}else return;const p=new(Jc(d)?yu:xu)(d,1);p.version=_;const h=n.get(f);h&&e.remove(h),n.set(f,p)}function u(f){const d=n.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return n.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Hg(i,e,t){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,m){i.drawElements(r,m,n,d*s),t.update(m,r,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(r,m,n,d*s,g),t.update(m,r,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,n,d,0,g);let _=0;for(let p=0;p<g;p++)_+=m[p];t.update(_,r,1)}function f(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/s,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,n,d,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b]*_[b];t.update(h,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Vg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(n/3);break;case i.LINES:t.lines+=o*(n/2);break;case i.LINE_STRIP:t.lines+=o*(n-1);break;case i.LINE_LOOP:t.lines+=o*n;break;case i.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Wg(i,e,t){const r=new WeakMap,a=new At;function n(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=r.get(o);if(d===void 0||d.count!==f){let m=function(){D.dispose(),r.delete(o),o.removeEventListener("dispose",m)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let O=o.attributes.position.count*S,A=1;O>e.maxTextureSize&&(A=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const w=new Float32Array(O*A*4*f),D=new su(w,O,A,f);D.type=Ni,D.needsUpdate=!0;const M=S*4;for(let y=0;y<f;y++){const C=h[y],R=b[y],F=E[y],B=O*A*4*y;for(let X=0;X<C.count;X++){const z=X*M;g===!0&&(a.fromBufferAttribute(C,X),w[B+z+0]=a.x,w[B+z+1]=a.y,w[B+z+2]=a.z,w[B+z+3]=0),_===!0&&(a.fromBufferAttribute(R,X),w[B+z+4]=a.x,w[B+z+5]=a.y,w[B+z+6]=a.z,w[B+z+7]=0),p===!0&&(a.fromBufferAttribute(F,X),w[B+z+8]=a.x,w[B+z+9]=a.y,w[B+z+10]=a.z,w[B+z+11]=F.itemSize===4?a.w:1)}}d={count:f,texture:D,size:new ut(O,A)},r.set(o,d),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:n}}function Xg(i,e,t,r){let a=new WeakMap;function n(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return f}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}class zu extends Yt{constructor(e,t,r,a,n,s,o,l,c,u=ea){if(u!==ea&&u!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ea&&(r=Ar),r===void 0&&u===ta&&(r=Qr),super(null,a,n,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ku=new Yt,Gu=new zu(1,1),Hu=new su,Vu=new Pf,Wu=new Ru,Xu=[],$u=[],ju=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function ba(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let n=Xu[a];if(n===void 0&&(n=new Float32Array(a),Xu[a]=n),e!==0){r.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(n,o)}return n}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ls(i,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Kg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,r))return;Yu.set(r),i.uniformMatrix2fv(this.addr,!1,Yu),Nt(t,r)}}function Zg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,r))return;qu.set(r),i.uniformMatrix3fv(this.addr,!1,qu),Nt(t,r)}}function Jg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,r))return;ju.set(r),i.uniformMatrix4fv(this.addr,!1,ju),Nt(t,r)}}function Qg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function r_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function o_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let n;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=Yc,n=Gu):n=ku,t.setTexture2D(e||n,a)}function l_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Vu,a)}function c_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Wu,a)}function u_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Hu,a)}function h_(i){switch(i){case 5126:return $g;case 35664:return jg;case 35665:return qg;case 35666:return Yg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return i_;case 5125:return r_;case 36294:return a_;case 36295:return n_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function d_(i,e){i.uniform1fv(this.addr,e)}function f_(i,e){const t=ba(e,this.size,2);i.uniform2fv(this.addr,t)}function p_(i,e){const t=ba(e,this.size,3);i.uniform3fv(this.addr,t)}function m_(i,e){const t=ba(e,this.size,4);i.uniform4fv(this.addr,t)}function g_(i,e){const t=ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){const t=ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){const t=ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function M_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function T_(i,e){i.uniform3uiv(this.addr,e)}function w_(i,e){i.uniform4uiv(this.addr,e)}function A_(i,e,t){const r=this.cache,a=e.length,n=Ls(t,a);It(r,n)||(i.uniform1iv(this.addr,n),Nt(r,n));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||ku,n[s])}function R_(i,e,t){const r=this.cache,a=e.length,n=Ls(t,a);It(r,n)||(i.uniform1iv(this.addr,n),Nt(r,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Vu,n[s])}function C_(i,e,t){const r=this.cache,a=e.length,n=Ls(t,a);It(r,n)||(i.uniform1iv(this.addr,n),Nt(r,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Wu,n[s])}function P_(i,e,t){const r=this.cache,a=e.length,n=Ls(t,a);It(r,n)||(i.uniform1iv(this.addr,n),Nt(r,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Hu,n[s])}function L_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return b_;case 35669:case 35673:return S_;case 5125:return M_;case 36294:return E_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class U_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}}class D_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}}class I_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],r)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function N_(i,e,t){const r=i.name,a=r.length;for(Kl.lastIndex=0;;){const n=Kl.exec(r),s=Kl.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Ku(t,c===void 0?new U_(o,i,e):new D_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new I_(o),Ku(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const n=e.getActiveUniform(t,a),s=e.getUniformLocation(t,n.name);N_(n,s,this)}}setValue(e,t,r,a){const n=this.map[t];n!==void 0&&n.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&r.push(s)}return r}}function Zu(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const O_=37297;let F_=0;function B_(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const Ju=new Fe;function z_(i){Ze._getMatrix(Ju,Ze.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ls:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(r&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+B_(i.getShaderSource(e),s)}else return a}function k_(i,e){const t=z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G_(i,e){let t;switch(e){case tf:t="Linear";break;case rf:t="Reinhard";break;case af:t="Cineon";break;case nf:t="ACESFilmic";break;case of:t="AgX";break;case lf:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new W;function H_(){Ze.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function W_(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function X_(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const n=i.getActiveAttrib(e,a),s=n.name;let o=1;n.type===i.FLOAT_MAT2&&(o=2),n.type===i.FLOAT_MAT3&&(o=3),n.type===i.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ln(i){return i!==""}function eh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace($_,q_)}const j_=new Map;function q_(i,e){let t=ke[e];if(t===void 0){const r=j_.get(e);if(r!==void 0)t=ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Y_,K_)}function K_(i,e,t,r){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function rh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qd:e="ENVMAP_BLENDING_MIX";break;case ef:e="ENVMAP_BLENDING_ADD";break}return e}function tv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function iv(i,e,t,r){const a=i.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Z_(t),c=J_(t),u=Q_(t),f=ev(t),d=tv(t),m=V_(t),g=W_(n),_=a.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ln).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ln).join(`
`),h.length>0&&(h+=`
`)):(p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),h=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?ke.tonemapping_pars_fragment:"",t.toneMapping!==nr?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),H_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),s=Zl(s),s=eh(s,t),s=th(s,t),o=Zl(o),o=eh(o,t),o=th(o,t),s=ih(s),o=ih(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=b+p+s,S=b+h+o,O=Zu(a,a.VERTEX_SHADER,E),A=Zu(a,a.FRAGMENT_SHADER,S);a.attachShader(_,O),a.attachShader(_,A),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const R=a.getProgramInfoLog(_).trim(),F=a.getShaderInfoLog(O).trim(),B=a.getShaderInfoLog(A).trim();let X=!0,z=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,O,A);else{const j=Qu(a,O,"vertex"),k=Qu(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+j+`
`+k)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(F===""||B==="")&&(z=!1);z&&(C.diagnostics={runnable:X,programLog:R,vertexShader:{log:F,prefix:p},fragmentShader:{log:B,prefix:h}})}a.deleteShader(O),a.deleteShader(A),D=new Us(a,_),M=X_(a,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(_,O_)),y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}let rv=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new nv(e),t.set(e,r)),r}}class nv{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function sv(i,e,t,r,a,n,s){const o=new uu,l=new av,c=new Set,u=[],f=a.logarithmicDepthBuffer,d=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,C,R,F){const B=R.fog,X=F.geometry,z=M.isMeshStandardMaterial?R.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),k=j&&j.mapping===ts?j.image.height:null,Y=g[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=ne!==void 0?ne.length:0;let Te=0;X.morphAttributes.position!==void 0&&(Te=1),X.morphAttributes.normal!==void 0&&(Te=2),X.morphAttributes.color!==void 0&&(Te=3);let We,q,ie,ge;if(Y){const st=Ei[Y];We=st.vertexShader,q=st.fragmentShader}else We=M.vertexShader,q=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const se=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,dt=!!M.map,Ve=!!M.matcap,St=!!j,I=!!M.aoMap,si=!!M.lightMap,je=!!M.bumpMap,qe=!!M.normalMap,Pe=!!M.displacementMap,mt=!!M.emissiveMap,Ae=!!M.metalnessMap,T=!!M.roughnessMap,v=M.anisotropy>0,G=M.clearcoat>0,J=M.dispersion>0,te=M.iridescence>0,Z=M.sheen>0,Se=M.transmission>0,de=v&&!!M.anisotropyMap,ye=G&&!!M.clearcoatMap,Je=G&&!!M.clearcoatNormalMap,ae=G&&!!M.clearcoatRoughnessMap,_e=te&&!!M.iridescenceMap,Le=te&&!!M.iridescenceThicknessMap,Ie=Z&&!!M.sheenColorMap,ve=Z&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,Ge=!!M.specularColorMap,ft=!!M.specularIntensityMap,U=Se&&!!M.transmissionMap,he=Se&&!!M.thicknessMap,$=!!M.gradientMap,Q=!!M.alphaMap,fe=M.alphaTest>0,le=!!M.alphaHash,Ke=!!M.extensions;let Mt=nr;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Wt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:q,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ze,batchingColor:ze&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ia,alphaToCoverage:!!M.alphaToCoverage,map:dt,matcap:Ve,envMap:St,envMapMode:St&&j.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:si,bumpMap:je,normalMap:qe,displacementMap:d&&Pe,emissiveMap:mt,normalMapObjectSpace:qe&&M.normalMapType===ff,normalMapTangentSpace:qe&&M.normalMapType===df,metalnessMap:Ae,roughnessMap:T,anisotropy:v,anisotropyMap:de,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:Je,clearcoatRoughnessMap:ae,dispersion:J,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:Z,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Ye,specularColorMap:Ge,specularIntensityMap:ft,transmission:Se,transmissionMap:U,thicknessMap:he,gradientMap:$,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:le,combine:M.combine,mapUv:dt&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:si&&_(M.lightMap.channel),bumpMapUv:je&&_(M.bumpMap.channel),normalMapUv:qe&&_(M.normalMap.channel),displacementMapUv:Pe&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:Ae&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:ye&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Ye&&_(M.specularMap.channel),specularColorMapUv:Ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ft&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(dt||Q),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:dt&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Di,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=g[M.type];let C;if(y){const R=Ei[y];C=Vf.clone(R.uniforms)}else C=M.uniforms;return C}function O(M,y){let C;for(let R=0,F=u.length;R<F;R++){const B=u[R];if(B.cacheKey===y){C=B,++C.usedTimes;break}}return C===void 0&&(C=new iv(i,y,M,n),u.push(C)),C}function A(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:O,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:D}}function ov(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function n(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:n}}function lv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nh(){const i=[];let e=0;const t=[],r=[],a=[];function n(){e=0,t.length=0,r.length=0,a.length=0}function s(f,d,m,g,_,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,g,_,p){const h=s(f,d,m,g,_,p);m.transmission>0?r.push(h):m.transparent===!0?a.push(h):t.push(h)}function l(f,d,m,g,_,p){const h=s(f,d,m,g,_,p);m.transmission>0?r.unshift(h):m.transparent===!0?a.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||lv),r.length>1&&r.sort(d||ah),a.length>1&&a.sort(d||ah)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:u,sort:c}}function cv(){let i=new WeakMap;function e(r,a){const n=i.get(r);let s;return n===void 0?(s=new nh,i.set(r,[s])):a>=n.length?(s=new nh,n.push(s)):s=n[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ht};break;case"SpotLight":t={position:new W,direction:new W,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){const e=new uv,t=hv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new W);const a=new W,n=new Ct,s=new Ct;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,b=0,E=0,S=0,O=0,A=0,w=0;c.sort(fv);for(let M=0,y=c.length;M<y;M++){const C=c[M],R=C.color,F=C.intensity,B=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*F,f+=R.g*F,d+=R.b*F;else if(C.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(C.sh.coefficients[z],F);w++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=X,r.directionalShadowMatrix[m]=C.shadow.matrix,b++}r.directional[m]=z,m++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(R).multiplyScalar(F),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,r.spot[_]=z;const j=C.shadow;if(C.map&&(r.spotLightMap[O]=C.map,O++,j.updateMatrices(C),C.castShadow&&A++),r.spotLightMatrix[_]=j.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.spotShadow[_]=k,r.spotShadowMap[_]=X,S++}_++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(R).multiplyScalar(F),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),r.rectArea[p]=z,p++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,r.pointShadow[g]=k,r.pointShadowMap[g]=X,r.pointShadowMatrix[g]=C.shadow.matrix,E++}r.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(F),z.groundColor.copy(C.groundColor).multiplyScalar(F),r.hemi[h]=z,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;const D=r.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==h||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==O||D.numLightProbes!==w)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=p,r.point.length=g,r.hemi.length=h,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=S+O-A,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=w,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=h,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=O,D.numLightProbes=w,r.version=dv++)}function l(c,u){let f=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const E=c[h];if(E.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(p),f++}else if(E.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),s.identity(),n.copy(E.matrixWorld),n.premultiply(p),s.extractRotation(n),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const S=r.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:r}}function sh(i){const e=new pv(i),t=[],r=[];function a(u){c.camera=u,t.length=0,r.length=0}function n(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function mv(i){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new sh(i),e.set(a,[o])):n>=s.length?(o=new sh(i),s.push(o)):o=s[n],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class gv extends xs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _v extends xs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yv(i,e,t){let r=new Cu;const a=new ut,n=new ut,s=new At,o=new gv({depthPacking:hf}),l=new _v,c={},u=t.maxTextureSize,f={[rr]:$t,[$t]:rr,[Di]:Di},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:vv,fragmentShader:xv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ur;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let h=this.type;this.render=function(A,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ar),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const F=h!==Ui&&this.type===Ui,B=h===Ui&&this.type!==Ui;for(let X=0,z=A.length;X<z;X++){const j=A[X],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const Y=k.getFrameExtents();if(a.multiply(Y),n.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/Y.x),a.x=n.x*Y.x,k.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/Y.y),a.y=n.y*Y.y,k.mapSize.y=n.y)),k.map===null||F===!0||B===!0){const xe=this.type!==Ui?{minFilter:oi,magFilter:oi}:{};k.map!==null&&k.map.dispose(),k.map=new Rr(a.x,a.y,xe),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ne=k.getViewportCount();for(let xe=0;xe<ne;xe++){const Te=k.getViewport(xe);s.set(n.x*Te.x,n.y*Te.y,n.x*Te.z,n.y*Te.w),R.viewport(s),k.updateMatrices(j,xe),r=k.getFrustum(),S(w,D,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===Ui&&b(k,D),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,C)};function b(A,w){const D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rr(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,D,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,D,m,_,null)}function E(A,w,D,M){let y=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const R=y.uuid,F=w.uuid;let B=c[R];B===void 0&&(B={},c[R]=B);let X=B[F];X===void 0&&(X=y.clone(),B[F]=X,w.addEventListener("dispose",O)),y=X}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Ui?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=i.properties.get(y);R.light=D}return y}function S(A,w,D,M,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ui)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const R=e.update(A),F=A.material;if(Array.isArray(F)){const B=R.groups;for(let X=0,z=B.length;X<z;X++){const j=B[X],k=F[j.materialIndex];if(k&&k.visible){const Y=E(A,k,M,y);A.onBeforeShadow(i,A,w,D,R,Y,j),i.renderBufferDirect(D,null,R,Y,A,j),A.onAfterShadow(i,A,w,D,R,Y,j)}}}else if(F.visible){const B=E(A,F,M,y);A.onBeforeShadow(i,A,w,D,R,B,null),i.renderBufferDirect(D,null,R,B,A,null),A.onAfterShadow(i,A,w,D,R,B,null)}}const C=A.children;for(let R=0,F=C.length;R<F;R++)S(C[R],w,D,M,y)}function O(A){A.target.removeEventListener("dispose",O);for(const w in c){const D=c[w],M=A.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}}const bv={[Po]:Lo,[Uo]:No,[Do]:Oo,[Kr]:Io,[Lo]:Po,[No]:Uo,[Oo]:Do,[Io]:Kr};function Sv(i,e){function t(){let U=!1;const he=new At;let $=null;const Q=new At(0,0,0,0);return{setMask:function(fe){$!==fe&&!U&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){U=fe},setClear:function(fe,le,Ke,Mt,Wt){Wt===!0&&(fe*=Mt,le*=Mt,Ke*=Mt),he.set(fe,le,Ke,Mt),Q.equals(he)===!1&&(i.clearColor(fe,le,Ke,Mt),Q.copy(he))},reset:function(){U=!1,$=null,Q.set(-1,0,0,0)}}}function r(){let U=!1,he=!1,$=null,Q=null,fe=null;return{setReversed:function(le){if(he!==le){const Ke=e.get("EXT_clip_control");he?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Mt=fe;fe=null,this.setClear(Mt)}he=le},getReversed:function(){return he},setTest:function(le){le?se(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(le){$!==le&&!U&&(i.depthMask(le),$=le)},setFunc:function(le){if(he&&(le=bv[le]),Q!==le){switch(le){case Po:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=le}},setLocked:function(le){U=le},setClear:function(le){fe!==le&&(he&&(le=1-le),i.clearDepth(le),fe=le)},reset:function(){U=!1,$=null,Q=null,fe=null,he=!1}}}function a(){let U=!1,he=null,$=null,Q=null,fe=null,le=null,Ke=null,Mt=null,Wt=null;return{setTest:function(st){U||(st?se(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(st){he!==st&&!U&&(i.stencilMask(st),he=st)},setFunc:function(st,mi,Ji){($!==st||Q!==mi||fe!==Ji)&&(i.stencilFunc(st,mi,Ji),$=st,Q=mi,fe=Ji)},setOp:function(st,mi,Ji){(le!==st||Ke!==mi||Mt!==Ji)&&(i.stencilOp(st,mi,Ji),le=st,Ke=mi,Mt=Ji)},setLocked:function(st){U=st},setClear:function(st){Wt!==st&&(i.clearStencil(st),Wt=st)},reset:function(){U=!1,he=null,$=null,Q=null,fe=null,le=null,Ke=null,Mt=null,Wt=null}}}const n=new t,s=new r,o=new a,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,E=null,S=null,O=null,A=null,w=new ht(0,0,0),D=0,M=!1,y=null,C=null,R=null,F=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=j>=2);let Y=null,ne={};const xe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),We=new At().fromArray(xe),q=new At().fromArray(Te);function ie(U,he,$,Q){const fe=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<$;Ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return le}const ge={};ge[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(i.DEPTH_TEST),s.setFunc(Kr),je(!1),qe(Lc),se(i.CULL_FACE),I(ar);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function we(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function De(U,he){return f[U]!==he?(i.bindFramebuffer(U,he),f[U]=he,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ze(U,he){let $=m,Q=!1;if(U){$=d.get(he),$===void 0&&($=[],d.set(he,$));const fe=U.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ke=fe.length;le<Ke;le++)$[le]=i.COLOR_ATTACHMENT0+le;$.length=fe.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function dt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Ve={[Er]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};Ve[Bd]=i.MIN,Ve[zd]=i.MAX;const St={[kd]:i.ZERO,[Gd]:i.ONE,[Hd]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,he,$,Q,fe,le,Ke,Mt,Wt,st){if(U===ar){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),U!==Nd){if(U!==p||st!==M){if((h!==Er||S!==Er)&&(i.blendEquation(i.FUNC_ADD),h=Er,S=Er),st)switch(U){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,E=null,O=null,A=null,w.set(0,0,0),D=0,p=U,M=st}return}fe=fe||he,le=le||$,Ke=Ke||Q,(he!==h||fe!==S)&&(i.blendEquationSeparate(Ve[he],Ve[fe]),h=he,S=fe),($!==b||Q!==E||le!==O||Ke!==A)&&(i.blendFuncSeparate(St[$],St[Q],St[le],St[Ke]),b=$,E=Q,O=le,A=Ke),(Mt.equals(w)===!1||Wt!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Wt),w.copy(Mt),D=Wt),p=U,M=!1}function si(U,he){U.side===Di?we(i.CULL_FACE):se(i.CULL_FACE);let $=U.side===$t;he&&($=!$),je($),U.blending===Yr&&U.transparent===!1?I(ar):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),n.setMask(U.colorWrite);const Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function qe(U){U!==Ud?(se(i.CULL_FACE),U!==C&&(U===Lc?i.cullFace(i.BACK):U===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),C=U}function Pe(U){U!==R&&(z&&i.lineWidth(U),R=U)}function mt(U,he,$){U?(se(i.POLYGON_OFFSET_FILL),(F!==he||B!==$)&&(i.polygonOffset(he,$),F=he,B=$)):we(i.POLYGON_OFFSET_FILL)}function Ae(U){U?se(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+X-1),Y!==U&&(i.activeTexture(U),Y=U)}function v(U,he,$){$===void 0&&(Y===null?$=i.TEXTURE0+X-1:$=Y);let Q=ne[$];Q===void 0&&(Q={type:void 0,texture:void 0},ne[$]=Q),(Q.type!==U||Q.texture!==he)&&(Y!==$&&(i.activeTexture($),Y=$),i.bindTexture(U,he||ge[U]),Q.type=U,Q.texture=he)}function G(){const U=ne[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){We.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function ve(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Ye(U,he){let $=c.get(he);$===void 0&&($=new WeakMap,c.set(he,$));let Q=$.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(he,U.name),$.set(U,Q))}function Ge(U,he){const $=c.get(he).get(U);l.get(he)!==$&&(i.uniformBlockBinding(he,$,U.__bindingPointIndex),l.set(he,$))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,ne={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,E=null,S=null,O=null,A=null,w=new ht(0,0,0),D=0,M=!1,y=null,C=null,R=null,F=null,B=null,We.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:se,disable:we,bindFramebuffer:De,drawBuffers:ze,useProgram:dt,setBlending:I,setMaterial:si,setFlipSided:je,setCullFace:qe,setLineWidth:Pe,setPolygonOffset:mt,setScissorTest:Ae,activeTexture:T,bindTexture:v,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:_e,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:Je,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ie,viewport:ve,reset:ft}}function oh(i,e,t,r){const a=Mv(r);switch(t){case Gc:return i*e;case Vc:return i*e;case Wc:return i*e*2;case Xc:return i*e/a.components*a.byteLength;case Xo:return i*e/a.components*a.byteLength;case $c:return i*e*2/a.components*a.byteLength;case $o:return i*e*2/a.components*a.byteLength;case Hc:return i*e*3/a.components*a.byteLength;case li:return i*e*4/a.components*a.byteLength;case jo:return i*e*4/a.components*a.byteLength;case rs:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ns:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Zo:return Math.max(i,16)*Math.max(e,8)/4;case qo:case Ko:return Math.max(i,8)*Math.max(e,8)/2;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case os:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jc:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mv(i){switch(i){case Ii:case Bc:return{byteLength:1,components:1};case qa:case zc:case Ya:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case Ar:case Ho:case Ni:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ev(i,e,t,r,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):us("canvas")}function _(T,v,G){let J=1;const te=Ae(T);if((te.width>G||te.height>G)&&(J=G/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(J*te.width),Se=Math.floor(J*te.height);f===void 0&&(f=g(Z,Se));const de=v?g(Z,Se):f;return de.width=Z,de.height=Se,de.getContext("2d").drawImage(T,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Se+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function p(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,G,J,te=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=v;if(v===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),v===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){const Se=te?ls:Ze.getTransfer(J);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=Se===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(T,v){let G;return T?v===null||v===Ar||v===Qr?G=i.DEPTH24_STENCIL8:v===Ni?G=i.DEPTH32F_STENCIL8:v===qa&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ar||v===Qr?G=i.DEPTH_COMPONENT24:v===Ni?G=i.DEPTH_COMPONENT32F:v===qa&&(G=i.DEPTH_COMPONENT16),G}function O(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==oi&&T.minFilter!==bi?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&u.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),y(v)}function D(T){const v=r.get(T);if(v.__webglInit===void 0)return;const G=T.source,J=d.get(G);if(J){const te=J[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(T),Object.keys(J).length===0&&d.delete(G)}r.remove(T)}function M(T){const v=r.get(T);i.deleteTexture(v.__webglTexture);const G=T.source,J=d.get(G);delete J[v.__cacheKey],s.memory.textures--}function y(T){const v=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let te=0;te<v.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[J][te]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=T.textures;for(let J=0,te=G.length;J<te;J++){const Z=r.get(G[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),s.memory.textures--),r.remove(G[J])}r.remove(T)}let C=0;function R(){C=0}function F(){const T=C;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),C+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function X(T,v){const G=r.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,T,v);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function z(T,v){const G=r.get(T);if(T.version>0&&G.__version!==T.version){q(G,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function j(T,v){const G=r.get(T);if(T.version>0&&G.__version!==T.version){q(G,T,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function k(T,v){const G=r.get(T);if(T.version>0&&G.__version!==T.version){ie(G,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}const Y={[zo]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},ne={[oi]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[bi]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[wr]:i.LINEAR_MIPMAP_LINEAR},xe={[pf]:i.NEVER,[yf]:i.ALWAYS,[mf]:i.LESS,[Yc]:i.LEQUAL,[gf]:i.EQUAL,[xf]:i.GEQUAL,[_f]:i.GREATER,[vf]:i.NOTEQUAL};function Te(T,v){if(v.type===Ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bi||v.magFilter===Go||v.magFilter===is||v.magFilter===wr||v.minFilter===bi||v.minFilter===Go||v.minFilter===is||v.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===oi||v.minFilter!==is&&v.minFilter!==wr||v.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function We(T,v){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const Z=B(v);if(Z!==T.__cacheKey){te[Z]===void 0&&(te[Z]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),te[Z].usedTimes++;const Se=te[T.__cacheKey];Se!==void 0&&(te[T.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),T.__cacheKey=Z,T.__webglTexture=te[Z].texture}return G}function q(T,v,G){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const te=We(T,v),Z=v.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+G);const Se=r.get(Z);if(Z.version!==Se.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const de=Ze.getPrimaries(Ze.workingColorSpace),ye=v.colorSpace===sr?null:Ze.getPrimaries(v.colorSpace),Je=v.colorSpace===sr||de===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ae=_(v.image,!1,a.maxTextureSize);ae=mt(v,ae);const _e=n.convert(v.format,v.colorSpace),Le=n.convert(v.type);let Ie=E(v.internalFormat,_e,Le,v.colorSpace,v.isVideoTexture);Te(J,v);let ve;const Ye=v.mipmaps,Ge=v.isVideoTexture!==!0,ft=Se.__version===void 0||te===!0,U=Z.dataReady,he=O(v,ae);if(v.isDepthTexture)Ie=S(v.format===ta,v.type),ft&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,Le,null));else if(v.isDataTexture)if(Ye.length>0){Ge&&ft&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let $=0,Q=Ye.length;$<Q;$++)ve=Ye[$],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,Le,ve.data):t.texImage2D(i.TEXTURE_2D,$,Ie,ve.width,ve.height,0,_e,Le,ve.data);v.generateMipmaps=!1}else Ge?(ft&&t.texStorage2D(i.TEXTURE_2D,he,Ie,ae.width,ae.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,Le,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,Le,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,Ye[0].width,Ye[0].height,ae.depth);for(let $=0,Q=Ye.length;$<Q;$++)if(ve=Ye[$],v.format!==li)if(_e!==null)if(Ge){if(U)if(v.layerUpdates.size>0){const fe=oh(ve.width,ve.height,v.format,v.type);for(const le of v.layerUpdates){const Ke=ve.data.subarray(le*fe/ve.data.BYTES_PER_ELEMENT,(le+1)*fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,le,ve.width,ve.height,1,_e,Ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,ae.depth,_e,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ie,ve.width,ve.height,ae.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,ae.depth,_e,Le,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ie,ve.width,ve.height,ae.depth,0,_e,Le,ve.data)}else{Ge&&ft&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let $=0,Q=Ye.length;$<Q;$++)ve=Ye[$],v.format!==li?_e!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,Le,ve.data):t.texImage2D(i.TEXTURE_2D,$,Ie,ve.width,ve.height,0,_e,Le,ve.data)}else if(v.isDataArrayTexture)if(Ge){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,ae.width,ae.height,ae.depth),U)if(v.layerUpdates.size>0){const $=oh(ae.width,ae.height,v.format,v.type);for(const Q of v.layerUpdates){const fe=ae.data.subarray(Q*$/ae.data.BYTES_PER_ELEMENT,(Q+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,_e,Le,fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(v.isData3DTexture)Ge?(ft&&t.texStorage3D(i.TEXTURE_3D,he,Ie,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(v.isFramebufferTexture){if(ft)if(Ge)t.texStorage2D(i.TEXTURE_2D,he,Ie,ae.width,ae.height);else{let $=ae.width,Q=ae.height;for(let fe=0;fe<he;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ie,$,Q,0,_e,Le,null),$>>=1,Q>>=1}}else if(Ye.length>0){if(Ge&&ft){const $=Ae(Ye[0]);t.texStorage2D(i.TEXTURE_2D,he,Ie,$.width,$.height)}for(let $=0,Q=Ye.length;$<Q;$++)ve=Ye[$],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e,Le,ve):t.texImage2D(i.TEXTURE_2D,$,Ie,_e,Le,ve);v.generateMipmaps=!1}else if(Ge){if(ft){const $=Ae(ae);t.texStorage2D(i.TEXTURE_2D,he,Ie,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Le,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ie,_e,Le,ae);p(v)&&h(J),Se.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ie(T,v,G){if(v.image.length!==6)return;const J=We(T,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const Z=r.get(te);if(te.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+G);const Se=Ze.getPrimaries(Ze.workingColorSpace),de=v.colorSpace===sr?null:Ze.getPrimaries(v.colorSpace),ye=v.colorSpace===sr||Se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Je=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Je&&!ae?_e[Q]=_(v.image[Q],!0,a.maxCubemapSize):_e[Q]=ae?v.image[Q].image:v.image[Q],_e[Q]=mt(v,_e[Q]);const Le=_e[0],Ie=n.convert(v.format,v.colorSpace),ve=n.convert(v.type),Ye=E(v.internalFormat,Ie,ve,v.colorSpace),Ge=v.isVideoTexture!==!0,ft=Z.__version===void 0||J===!0,U=te.dataReady;let he=O(v,Le);Te(i.TEXTURE_CUBE_MAP,v);let $;if(Je){Ge&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ye,Le.width,Le.height);for(let Q=0;Q<6;Q++){$=_e[Q].mipmaps;for(let fe=0;fe<$.length;fe++){const le=$[fe];v.format!==li?Ie!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,le.width,le.height,Ie,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,le.width,le.height,Ie,ve,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ye,le.width,le.height,0,Ie,ve,le.data)}}}else{if($=v.mipmaps,Ge&&ft){$.length>0&&he++;const Q=Ae(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Ie,ve,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,_e[Q].width,_e[Q].height,0,Ie,ve,_e[Q].data);for(let fe=0;fe<$.length;fe++){const le=$[fe].image[Q].image;Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,le.width,le.height,Ie,ve,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ye,le.width,le.height,0,Ie,ve,le.data)}}else{Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,ve,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ie,ve,_e[Q]);for(let fe=0;fe<$.length;fe++){const le=$[fe];Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ie,ve,le.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ye,Ie,ve,le.image[Q])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),Z.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ge(T,v,G,J,te,Z){const Se=n.convert(G.format,G.colorSpace),de=n.convert(G.type),ye=E(G.internalFormat,Se,de,G.colorSpace),Je=r.get(v),ae=r.get(G);if(ae.__renderTarget=v,!Je.__hasExternalTextures){const _e=Math.max(1,v.width>>Z),Le=Math.max(1,v.height>>Z);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,ye,_e,Le,v.depth,0,Se,de,null):t.texImage2D(te,Z,ye,_e,Le,0,Se,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),qe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,ae.__webglTexture,0,je(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,ae.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=S(v.stencilBuffer,te),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=je(v);qe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Z,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const J=v.textures;for(let te=0;te<J.length;te++){const Z=J[te],Se=n.convert(Z.format,Z.colorSpace),de=n.convert(Z.type),ye=E(Z.internalFormat,Se,de,Z.colorSpace),Je=je(v);G&&qe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ye,v.width,v.height):qe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,ye,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ye,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=r.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const J=G.__webglTexture,te=je(v);if(v.depthTexture.format===ea)qe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===ta)qe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(T){const v=r.get(T),G=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,T)}else if(G){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),se(v.__webglDepthbuffer[J],T,!1);else{const te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),se(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(T,v,G){const J=r.get(T);v!==void 0&&ge(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&De(T)}function dt(T){const v=T.texture,G=r.get(T),J=r.get(v);T.addEventListener("dispose",w);const te=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,s.memory.textures++),Z){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let ye=0;ye<v.mipmaps.length;ye++)G.__webglFramebuffer[de][ye]=i.createFramebuffer()}else G.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)G.__webglFramebuffer[de]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Se)for(let de=0,ye=te.length;de<ye;de++){const Je=r.get(te[de]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&qe(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const ye=te[de];G.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const Je=n.convert(ye.format,ye.colorSpace),ae=n.convert(ye.type),_e=E(ye.internalFormat,Je,ae,ye.colorSpace,T.isXRRenderTarget===!0),Le=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,_e,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,G.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),se(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Te(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ge(G.__webglFramebuffer[de][ye],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else ge(G.__webglFramebuffer[de],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let de=0,ye=te.length;de<ye;de++){const Je=te[de],ae=r.get(Je);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Te(i.TEXTURE_2D,Je),ge(G.__webglFramebuffer,T,Je,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),p(Je)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),Te(de,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ge(G.__webglFramebuffer[ye],T,v,i.COLOR_ATTACHMENT0,de,ye);else ge(G.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,de,0);p(v)&&h(de),t.unbindTexture()}T.depthBuffer&&De(T)}function Ve(T){const v=T.textures;for(let G=0,J=v.length;G<J;G++){const te=v[G];if(p(te)){const Z=b(T),Se=r.get(te).__webglTexture;t.bindTexture(Z,Se),h(Z),t.unbindTexture()}}}const St=[],I=[];function si(T){if(T.samples>0){if(qe(T)===!1){const v=T.textures,G=T.width,J=T.height;let te=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=r.get(T),de=v.length>1;if(de)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Je=r.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,te,i.NEAREST),l===!0&&(St.length=0,I.length=0,St.push(i.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(St.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Je=r.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function je(T){return Math.min(a.maxSamples,T.samples)}function qe(T){const v=r.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pe(T){const v=s.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function mt(T,v){const G=T.colorSpace,J=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ia&&G!==sr&&(Ze.getTransfer(G)===ct?(J!==li||te!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=si,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function Tv(i,e){function t(r,a=sr){let n;const s=Ze.getTransfer(a);if(r===Ii)return i.UNSIGNED_BYTE;if(r===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Bc)return i.BYTE;if(r===zc)return i.SHORT;if(r===qa)return i.UNSIGNED_SHORT;if(r===Ho)return i.INT;if(r===Ar)return i.UNSIGNED_INT;if(r===Ni)return i.FLOAT;if(r===Ya)return i.HALF_FLOAT;if(r===Gc)return i.ALPHA;if(r===Hc)return i.RGB;if(r===li)return i.RGBA;if(r===Vc)return i.LUMINANCE;if(r===Wc)return i.LUMINANCE_ALPHA;if(r===ea)return i.DEPTH_COMPONENT;if(r===ta)return i.DEPTH_STENCIL;if(r===Xc)return i.RED;if(r===Xo)return i.RED_INTEGER;if(r===$c)return i.RG;if(r===$o)return i.RG_INTEGER;if(r===jo)return i.RGBA_INTEGER;if(r===rs||r===as||r===ns||r===ss)if(s===ct)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===rs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===as)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ns)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ss)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===rs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===as)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ns)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ss)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qo||r===Yo||r===Ko||r===Zo)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===qo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ko)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jo||r===Qo||r===el)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Jo||r===Qo)return s===ct?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===el)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tl||r===il||r===rl||r===al||r===nl||r===sl||r===ol||r===ll||r===cl||r===ul||r===hl||r===dl||r===fl||r===pl)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===tl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===il)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===al)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ol)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ll)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ul)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pl)return s===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===os||r===ml||r===gl)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===os)return s===ct?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ml)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jc||r===_l||r===vl||r===xl)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===os)return n.COMPRESSED_RED_RGTC1_EXT;if(r===_l)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qr?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}class wv extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,r),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Is;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Yt,n=e.properties.get(a);n.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new on(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends aa{constructor(e,t){super();const r=this;let a=null,n=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const _=new Pv,p=t.getContextAttributes();let h=null,b=null;const E=[],S=[],O=new ut;let A=null;const w=new fi;w.viewport=new At;const D=new fi;D.viewport=new At;const M=[w,D],y=new wv;let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=E[q];return ie===void 0&&(ie=new Jl,E[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=E[q];return ie===void 0&&(ie=new Jl,E[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=E[q];return ie===void 0&&(ie=new Jl,E[q]=ie),ie.getHandSpace()};function F(q){const ie=S.indexOf(q.inputSource);if(ie===-1)return;const ge=E[ie];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||s),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",X);for(let q=0;q<E.length;q++){const ie=S[q];ie!==null&&(S[q]=null,E[q].disconnect(ie))}C=null,R=null,_.reset(),e.setRenderTarget(h),m=null,d=null,f=null,a=null,b=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){n=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(h=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",B),a.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),a.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Rr(m.framebufferWidth,m.framebufferHeight,{format:li,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,ge=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?ta:ea,ge=p.stencil?Qr:Ar);const we={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:n};f=new XRWebGLBinding(a,t),d=f.createProjectionLayer(we),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Rr(d.textureWidth,d.textureHeight,{format:li,type:Ii,depthTexture:new zu(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),We.setContext(a),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let ie=0;ie<q.removed.length;ie++){const ge=q.removed[ie],se=S.indexOf(ge);se>=0&&(S[se]=null,E[se].disconnect(ge))}for(let ie=0;ie<q.added.length;ie++){const ge=q.added[ie];let se=S.indexOf(ge);if(se===-1){for(let De=0;De<E.length;De++)if(De>=S.length){S.push(ge),se=De;break}else if(S[De]===null){S[De]=ge,se=De;break}if(se===-1)break}const we=E[se];we&&we.connect(ge)}}const z=new W,j=new W;function k(q,ie,ge){z.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const se=z.distanceTo(j),we=ie.projectionMatrix.elements,De=ge.projectionMatrix.elements,ze=we[14]/(we[10]-1),dt=we[14]/(we[10]+1),Ve=(we[9]+1)/we[5],St=(we[9]-1)/we[5],I=(we[8]-1)/we[0],si=(De[8]+1)/De[0],je=ze*I,qe=ze*si,Pe=se/(-I+si),mt=Pe*-I;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(mt),q.translateZ(Pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=ze+Pe,T=dt+Pe,v=je-mt,G=qe+(se-mt),J=Ve*dt/T*Ae,te=St*dt/T*Ae;q.projectionMatrix.makePerspective(v,G,J,te,Ae,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let ie=q.near,ge=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=D.near=w.near=ie,y.far=D.far=w.far=ge,(C!==y.near||R!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,R=y.far),w.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,y.layers.mask=w.layers.mask|D.layers.mask;const se=q.parent,we=y.cameras;Y(y,se);for(let De=0;De<we.length;De++)Y(we[De],se);we.length===2?k(y,w,D):y.projectionMatrix.copy(w.projectionMatrix),ne(q,y,se)};function ne(q,ie,ge){ge===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let xe=null;function Te(q,ie){if(u=ie.getViewerPose(c||s),g=ie,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let De=0;De<ge.length;De++){const ze=ge[De];let dt=null;if(m!==null)dt=m.getViewport(ze);else{const St=f.getViewSubImage(d,ze);dt=St.viewport,De===0&&(e.setRenderTargetTextures(b,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(b))}let Ve=M[De];Ve===void 0&&(Ve=new fi,Ve.layers.enable(De),Ve.viewport=new At,M[De]=Ve),Ve.matrix.fromArray(ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(dt.x,dt.y,dt.width,dt.height),De===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Ve)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=f.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&_.init(e,De,a.renderState)}}for(let ge=0;ge<E.length;ge++){const se=S[ge],we=E[ge];se!==null&&we!==void 0&&we.update(se,ie,c||s)}xe&&xe(q,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),g=null}const We=new Pu;We.setAnimationLoop(Te),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const zr=new ki,Uv=new Ct;function Dv(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function r(p,h){h.color.getRGB(p.fogColor.value,Eu(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function a(p,h,b,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(p,h):h.isMeshToonMaterial?(n(p,h),f(p,h)):h.isMeshPhongMaterial?(n(p,h),u(p,h)):h.isMeshStandardMaterial?(n(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(n(p,h),g(p,h)):h.isMeshDepthMaterial?n(p,h):h.isMeshDistanceMaterial?(n(p,h),_(p,h)):h.isMeshNormalMaterial?n(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===$t&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===$t&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),E=b.envMap,S=b.envMapRotation;E&&(p.envMap.value=E,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),p.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(zr)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Iv(i,e,t,r){let a={},n={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const S=E.program;r.uniformBlockBinding(b,S)}function c(b,E){let S=a[b.id];S===void 0&&(g(b),S=u(b),a[b.id]=S,b.addEventListener("dispose",p));const O=E.program;r.updateUBOMapping(b,O);const A=e.render.frame;n[b.id]!==A&&(d(b),n[b.id]=A)}function u(b){const E=f();b.__bindingPointIndex=E;const S=i.createBuffer(),O=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,O,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=a[b.id],S=b.uniforms,O=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,w=S.length;A<w;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=D.length;M<y;M++){const C=D[M];if(m(C,A,M,O)===!0){const R=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let X=0;X<F.length;X++){const z=F[X],j=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,R+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,S,O){const A=b.value,w=E+"_"+S;if(O[w]===void 0)return typeof A=="number"||typeof A=="boolean"?O[w]=A:O[w]=A.clone(),!0;{const D=O[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return O[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(b){const E=b.uniforms;let S=0;const O=16;for(let w=0,D=E.length;w<D;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,C=M.length;y<C;y++){const R=M[y],F=Array.isArray(R.value)?R.value:[R.value];for(let B=0,X=F.length;B<X;B++){const z=F[B],j=_(z),k=S%O,Y=k%j.boundary,ne=k+Y;S+=Y,ne!==0&&O-ne<j.storage&&(S+=O-ne),R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=j.storage}}}const A=S%O;return A>0&&(S+=O-A),b.__size=S,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete n[E.id]}function h(){for(const b in a)i.deleteBuffer(a[b]);s=[],a={},n={}}return{bind:l,update:c,dispose:h}}class Nv{constructor(e={}){const{canvas:t=Sf(),context:r=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=nr,this.toneMappingExposure=1;const S=this;let O=!1,A=0,w=0,D=null,M=-1,y=null;const C=new At,R=new At;let F=null;const B=new ht(0);let X=0,z=t.width,j=t.height,k=1,Y=null,ne=null;const xe=new At(0,0,z,j),Te=new At(0,0,z,j);let We=!1;const q=new Cu;let ie=!1,ge=!1;const se=new Ct,we=new Ct,De=new W,ze=new At,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function St(){return D===null?k:1}let I=r;function si(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const N="webgl2";if(I=si(N,x),I===null)throw si(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,qe,Pe,mt,Ae,T,v,G,J,te,Z,Se,de,ye,Je,ae,_e,Le,Ie,ve,Ye,Ge,ft,U;function he(){je=new kg(I),je.init(),Ge=new Tv(I,je),qe=new Ig(I,je,e,Ge),Pe=new Sv(I,je),qe.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),mt=new Vg(I),Ae=new ov,T=new Ev(I,je,Pe,Ae,qe,Ge,mt),v=new Og(S),G=new zg(S),J=new Kf(I),ft=new Ug(I,J),te=new Gg(I,J,mt,ft),Z=new Xg(I,te,J,mt),Ie=new Wg(I,qe,T),ae=new Ng(Ae),Se=new sv(S,v,G,je,qe,ft,ae),de=new Dv(S,Ae),ye=new cv,Je=new mv(je),Le=new Lg(S,v,G,Pe,Z,m,l),_e=new yv(S,Z,qe),U=new Iv(I,mt,qe,Pe),ve=new Dg(I,je,mt),Ye=new Hg(I,je,mt),mt.programs=Se.programs,S.capabilities=qe,S.extensions=je,S.properties=Ae,S.renderLists=ye,S.shadowMap=_e,S.state=Pe,S.info=mt}he();const $=new Lv(S,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(z,j,!1))},this.getSize=function(x){return x.set(z,j)},this.setSize=function(x,N,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=x,j=N,t.width=Math.floor(x*k),t.height=Math.floor(N*k),H===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(z*k,j*k).floor()},this.setDrawingBufferSize=function(x,N,H){z=x,j=N,k=H,t.width=Math.floor(x*H),t.height=Math.floor(N*H),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(xe)},this.setViewport=function(x,N,H,V){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,N,H,V),Pe.viewport(C.copy(xe).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Te)},this.setScissor=function(x,N,H,V){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,N,H,V),Pe.scissor(R.copy(Te).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(x){Pe.setScissorTest(We=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){ne=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(x=!0,N=!0,H=!0){let V=0;if(x){let L=!1;if(D!==null){const re=D.texture.format;L=re===jo||re===$o||re===Xo}if(L){const re=D.texture.type,pe=re===Ii||re===Ar||re===qa||re===Qr||re===Vo||re===Wo,be=Le.getClearColor(),Me=Le.getClearAlpha(),Ne=be.r,Oe=be.g,Re=be.b;pe?(g[0]=Ne,g[1]=Oe,g[2]=Re,g[3]=Me,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ne,_[1]=Oe,_[2]=Re,_[3]=Me,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ye.dispose(),Je.dispose(),Ae.dispose(),v.dispose(),G.dispose(),Z.dispose(),ft.dispose(),U.dispose(),Se.dispose(),$.dispose(),$.removeEventListener("sessionstart",rd),$.removeEventListener("sessionend",ad),Xr.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const x=mt.autoReset,N=_e.enabled,H=_e.autoUpdate,V=_e.needsUpdate,L=_e.type;he(),mt.autoReset=x,_e.enabled=N,_e.autoUpdate=H,_e.needsUpdate=V,_e.type=L}function le(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ke(x){const N=x.target;N.removeEventListener("dispose",Ke),Mt(N)}function Mt(x){Wt(x),Ae.remove(x)}function Wt(x){const N=Ae.get(x).programs;N!==void 0&&(N.forEach(function(H){Se.releaseProgram(H)}),x.isShaderMaterial&&Se.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,H,V,L,re){N===null&&(N=dt);const pe=L.isMesh&&L.matrixWorld.determinant()<0,be=Nb(x,N,H,V,L);Pe.setMaterial(V,pe);let Me=H.index,Ne=1;if(V.wireframe===!0){if(Me=te.getWireframeAttribute(H),Me===void 0)return;Ne=2}const Oe=H.drawRange,Re=H.attributes.position;let it=Oe.start*Ne,_t=(Oe.start+Oe.count)*Ne;re!==null&&(it=Math.max(it,re.start*Ne),_t=Math.min(_t,(re.start+re.count)*Ne)),Me!==null?(it=Math.max(it,0),_t=Math.min(_t,Me.count)):Re!=null&&(it=Math.max(it,0),_t=Math.min(_t,Re.count));const vt=_t-it;if(vt<0||vt===1/0)return;ft.setup(L,V,be,H,Me);let Lt,xt=ve;if(Me!==null&&(Lt=J.get(Me),xt=Ye,xt.setIndex(Lt)),L.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*St()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(L.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*St()),L.isLineSegments?xt.setMode(I.LINES):L.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else L.isPoints?xt.setMode(I.POINTS):L.isSprite&&xt.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)xt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))xt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ee=L._multiDrawStarts,$r=L._multiDrawCounts,jr=L._multiDrawCount,gi=Me?J.get(Me).bytesPerElement:1,$a=Ae.get(V).currentProgram.getUniforms();for(let ri=0;ri<jr;ri++)$a.setValue(I,"_gl_DrawID",ri),xt.render(Ee[ri]/gi,$r[ri])}else if(L.isInstancedMesh)xt.renderInstances(it,vt,L.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,$r=Math.min(H.instanceCount,Ee);xt.renderInstances(it,vt,$r)}else xt.render(it,vt)};function st(x,N,H){x.transparent===!0&&x.side===Di&&x.forceSinglePass===!1?(x.side=$t,x.needsUpdate=!0,yo(x,N,H),x.side=rr,x.needsUpdate=!0,yo(x,N,H),x.side=Di):yo(x,N,H)}this.compile=function(x,N,H=null){H===null&&(H=x),h=Je.get(H),h.init(N),E.push(h),H.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),x!==H&&x.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const V=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const re=L.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const be=re[pe];st(be,H,L),V.add(be)}else st(re,H,L),V.add(re)}),E.pop(),h=null,V},this.compileAsync=function(x,N,H=null){const V=this.compile(x,N,H);return new Promise(L=>{function re(){if(V.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){L(x);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let mi=null;function Ji(x){mi&&mi(x)}function rd(){Xr.stop()}function ad(){Xr.start()}const Xr=new Pu;Xr.setAnimationLoop(Ji),typeof self<"u"&&Xr.setContext(self),this.setAnimationLoop=function(x){mi=x,$.setAnimationLoop(x),x===null?Xr.stop():Xr.start()},$.addEventListener("sessionstart",rd),$.addEventListener("sessionend",ad),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,N,D),h=Je.get(x,E.length),h.init(N),E.push(h),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,ge),p=ye.get(x,b.length),p.init(),b.push(p),$.enabled===!0&&$.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&hc(re,N,-1/0,S.sortObjects)}hc(x,N,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(Y,ne),Ve=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ve&&Le.addToRenderList(p,x),this.info.render.frame++,ie===!0&&ae.beginShadows();const H=h.state.shadowsArray;_e.render(H,x,N),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,L=p.transmissive;if(h.setupLights(),N.isArrayCamera){const re=N.cameras;if(L.length>0)for(let pe=0,be=re.length;pe<be;pe++){const Me=re[pe];sd(V,L,x,Me)}Ve&&Le.render(x);for(let pe=0,be=re.length;pe<be;pe++){const Me=re[pe];nd(p,x,Me,Me.viewport)}}else L.length>0&&sd(V,L,x,N),Ve&&Le.render(x),nd(p,x,N);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(S,x,N),ft.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(h=E[E.length-1],ie===!0&&ae.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function hc(x,N,H,V){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){V&&ze.setFromMatrixPosition(x.matrixWorld).applyMatrix4(we);const re=Z.update(x),pe=x.material;pe.visible&&p.push(x,re,pe,H,ze.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const re=Z.update(x),pe=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ze.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),ze.copy(re.boundingSphere.center)),ze.applyMatrix4(x.matrixWorld).applyMatrix4(we)),Array.isArray(pe)){const be=re.groups;for(let Me=0,Ne=be.length;Me<Ne;Me++){const Oe=be[Me],Re=pe[Oe.materialIndex];Re&&Re.visible&&p.push(x,re,Re,H,ze.z,Oe)}}else pe.visible&&p.push(x,re,pe,H,ze.z,null)}}const L=x.children;for(let re=0,pe=L.length;re<pe;re++)hc(L[re],N,H,V)}function nd(x,N,H,V){const L=x.opaque,re=x.transmissive,pe=x.transparent;h.setupLightsView(H),ie===!0&&ae.setGlobalState(S.clippingPlanes,H),V&&Pe.viewport(C.copy(V)),L.length>0&&xo(L,N,H),re.length>0&&xo(re,N,H),pe.length>0&&xo(pe,N,H),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function sd(x,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new Rr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ya:Ii,minFilter:wr,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const L=h.state.transmissionRenderTarget[V.id],re=V.viewport||C;L.setSize(re.z,re.w);const pe=S.getRenderTarget();S.setRenderTarget(L),S.getClearColor(B),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Ve&&Le.render(H);const be=S.toneMapping;S.toneMapping=nr;const Me=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),ie===!0&&ae.setGlobalState(S.clippingPlanes,V),xo(x,H,V),T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Oe=0,Re=N.length;Oe<Re;Oe++){const it=N[Oe],_t=it.object,vt=it.geometry,Lt=it.material,xt=it.group;if(Lt.side===Di&&_t.layers.test(V.layers)){const Ee=Lt.side;Lt.side=$t,Lt.needsUpdate=!0,od(_t,H,V,vt,Lt,xt),Lt.side=Ee,Lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L))}S.setRenderTarget(pe),S.setClearColor(B,X),Me!==void 0&&(V.viewport=Me),S.toneMapping=be}function xo(x,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let L=0,re=x.length;L<re;L++){const pe=x[L],be=pe.object,Me=pe.geometry,Ne=V===null?pe.material:V,Oe=pe.group;be.layers.test(H.layers)&&od(be,N,H,Me,Ne,Oe)}}function od(x,N,H,V,L,re){x.onBeforeRender(S,N,H,V,L,re),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(S,N,H,V,x,re),L.transparent===!0&&L.side===Di&&L.forceSinglePass===!1?(L.side=$t,L.needsUpdate=!0,S.renderBufferDirect(H,N,V,L,x,re),L.side=rr,L.needsUpdate=!0,S.renderBufferDirect(H,N,V,L,x,re),L.side=Di):S.renderBufferDirect(H,N,V,L,x,re),x.onAfterRender(S,N,H,V,L,re)}function yo(x,N,H){N.isScene!==!0&&(N=dt);const V=Ae.get(x),L=h.state.lights,re=h.state.shadowsArray,pe=L.state.version,be=Se.getParameters(x,L.state,re,N,H),Me=Se.getProgramCacheKey(be);let Ne=V.programs;V.environment=x.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(x.isMeshStandardMaterial?G:v).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Ke),Ne=new Map,V.programs=Ne);let Oe=Ne.get(Me);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===pe)return cd(x,be),Oe}else be.uniforms=Se.getUniforms(x),x.onBeforeCompile(be,S),Oe=Se.acquireProgram(be,Me),Ne.set(Me,Oe),V.uniforms=be.uniforms;const Re=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=ae.uniform),cd(x,be),V.needsLights=Fb(x),V.lightsStateVersion=pe,V.needsLights&&(Re.ambientLightColor.value=L.state.ambient,Re.lightProbe.value=L.state.probe,Re.directionalLights.value=L.state.directional,Re.directionalLightShadows.value=L.state.directionalShadow,Re.spotLights.value=L.state.spot,Re.spotLightShadows.value=L.state.spotShadow,Re.rectAreaLights.value=L.state.rectArea,Re.ltc_1.value=L.state.rectAreaLTC1,Re.ltc_2.value=L.state.rectAreaLTC2,Re.pointLights.value=L.state.point,Re.pointLightShadows.value=L.state.pointShadow,Re.hemisphereLights.value=L.state.hemi,Re.directionalShadowMap.value=L.state.directionalShadowMap,Re.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Re.spotShadowMap.value=L.state.spotShadowMap,Re.spotLightMatrix.value=L.state.spotLightMatrix,Re.spotLightMap.value=L.state.spotLightMap,Re.pointShadowMap.value=L.state.pointShadowMap,Re.pointShadowMatrix.value=L.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function ld(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Us.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function cd(x,N){const H=Ae.get(x);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Nb(x,N,H,V,L){N.isScene!==!0&&(N=dt),T.resetTextureUnits();const re=N.fog,pe=V.isMeshStandardMaterial?N.environment:null,be=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ia,Me=(V.isMeshStandardMaterial?G:v).get(V.envMap||pe),Ne=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color;let vt=nr;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=S.toneMapping);const Lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=Lt!==void 0?Lt.length:0,Ee=Ae.get(V),$r=h.state.lights;if(ie===!0&&(ge===!0||x!==y)){const Jt=x===y&&V.id===M;ae.setState(V,x,Jt)}let jr=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==$r.state.version||Ee.outputColorSpace!==be||L.isBatchedMesh&&Ee.batching===!1||!L.isBatchedMesh&&Ee.batching===!0||L.isBatchedMesh&&Ee.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ee.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ee.instancing===!1||!L.isInstancedMesh&&Ee.instancing===!0||L.isSkinnedMesh&&Ee.skinning===!1||!L.isSkinnedMesh&&Ee.skinning===!0||L.isInstancedMesh&&Ee.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ee.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ee.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ee.instancingMorph===!1&&L.morphTexture!==null||Ee.envMap!==Me||V.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ae.numPlanes||Ee.numIntersection!==ae.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==Oe||Ee.morphTargets!==Re||Ee.morphNormals!==it||Ee.morphColors!==_t||Ee.toneMapping!==vt||Ee.morphTargetsCount!==xt)&&(jr=!0):(jr=!0,Ee.__version=V.version);let gi=Ee.currentProgram;jr===!0&&(gi=yo(V,N,L));let $a=!1,ri=!1,Kn=!1;const gt=gi.getUniforms(),Pi=Ee.uniforms;if(Pe.useProgram(gi.program)&&($a=!0,ri=!0,Kn=!0),V.id!==M&&(M=V.id,ri=!0),$a||y!==x){Pe.buffers.depth.getReversed()?(se.copy(x.projectionMatrix),Ef(se),Tf(se),gt.setValue(I,"projectionMatrix",se)):gt.setValue(I,"projectionMatrix",x.projectionMatrix),gt.setValue(I,"viewMatrix",x.matrixWorldInverse);const Jt=gt.map.cameraPosition;Jt!==void 0&&Jt.setValue(I,De.setFromMatrixPosition(x.matrixWorld)),qe.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,ri=!0,Kn=!0)}if(L.isSkinnedMesh){gt.setOptional(I,L,"bindMatrix"),gt.setOptional(I,L,"bindMatrixInverse");const Jt=L.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),gt.setValue(I,"boneTexture",Jt.boneTexture,T))}L.isBatchedMesh&&(gt.setOptional(I,L,"batchingTexture"),gt.setValue(I,"batchingTexture",L._matricesTexture,T),gt.setOptional(I,L,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",L._indirectTexture,T),gt.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",L._colorsTexture,T));const Zn=H.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ie.update(L,H,gi),(ri||Ee.receiveShadow!==L.receiveShadow)&&(Ee.receiveShadow=L.receiveShadow,gt.setValue(I,"receiveShadow",L.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pi.envMap.value=Me,Pi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Pi.envMapIntensity.value=N.environmentIntensity),ri&&(gt.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Ob(Pi,Kn),re&&V.fog===!0&&de.refreshFogUniforms(Pi,re),de.refreshMaterialUniforms(Pi,V,k,j,h.state.transmissionRenderTarget[x.id]),Us.upload(I,ld(Ee),Pi,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Us.upload(I,ld(Ee),Pi,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(I,"center",L.center),gt.setValue(I,"modelViewMatrix",L.modelViewMatrix),gt.setValue(I,"normalMatrix",L.normalMatrix),gt.setValue(I,"modelMatrix",L.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Jt=V.uniformsGroups;for(let Jn=0,Sr=Jt.length;Jn<Sr;Jn++){const ud=Jt[Jn];U.update(ud,gi),U.bind(ud,gi)}}return gi}function Ob(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Fb(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,N,H){Ae.get(x.texture).__webglTexture=N,Ae.get(x.depthTexture).__webglTexture=H;const V=Ae.get(x);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,N){const H=Ae.get(x);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,H=0){D=x,A=N,w=H;let V=!0,L=null,re=!1,pe=!1;if(x){const be=Ae.get(x);if(be.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(be.__hasExternalTextures)T.rebindTextures(x,Ae.get(x.texture).__webglTexture,Ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(be.__boundDepthTexture!==Oe){if(Oe!==null&&Ae.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Ne=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?L=Ne[N][H]:L=Ne[N],re=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?L=Ae.get(x).__webglMultisampledFramebuffer:Array.isArray(Ne)?L=Ne[H]:L=Ne,C.copy(x.viewport),R.copy(x.scissor),F=x.scissorTest}else C.copy(xe).multiplyScalar(k).floor(),R.copy(Te).multiplyScalar(k).floor(),F=We;if(Pe.bindFramebuffer(I.FRAMEBUFFER,L)&&V&&Pe.drawBuffers(x,L),Pe.viewport(C),Pe.scissor(R),Pe.setScissorTest(F),re){const be=Ae.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,H)}else if(pe){const be=Ae.get(x.texture),Me=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,H||0,Me)}M=-1},this.readRenderTargetPixels=function(x,N,H,V,L,re,pe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){Pe.bindFramebuffer(I.FRAMEBUFFER,be);try{const Me=x.texture,Ne=Me.format,Oe=Me.type;if(!qe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-V&&H>=0&&H<=x.height-L&&I.readPixels(N,H,V,L,Ge.convert(Ne),Ge.convert(Oe),re)}finally{const Me=D!==null?Ae.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(x,N,H,V,L,re,pe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){const Me=x.texture,Ne=Me.format,Oe=Me.type;if(!qe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=x.width-V&&H>=0&&H<=x.height-L){Pe.bindFramebuffer(I.FRAMEBUFFER,be);const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(N,H,V,L,Ge.convert(Ne),Ge.convert(Oe),0);const it=D!==null?Ae.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,it);const _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Mf(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(Re),I.deleteSync(_t),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,N=null,H=0){x.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1]);const V=Math.pow(2,-H),L=Math.floor(x.image.width*V),re=Math.floor(x.image.height*V),pe=N!==null?N.x:0,be=N!==null?N.y:0;T.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,pe,be,L,re),Pe.unbindTexture()},this.copyTextureToTexture=function(x,N,H=null,V=null,L=0){x.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,x=arguments[1],N=arguments[2],L=arguments[3]||0,H=null);let re,pe,be,Me,Ne,Oe,Re,it,_t;const vt=x.isCompressedTexture?x.mipmaps[L]:x.image;H!==null?(re=H.max.x-H.min.x,pe=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Ne=H.min.y,Oe=H.isBox3?H.min.z:0):(re=vt.width,pe=vt.height,be=vt.depth||1,Me=0,Ne=0,Oe=0),V!==null?(Re=V.x,it=V.y,_t=V.z):(Re=0,it=0,_t=0);const Lt=Ge.convert(N.format),xt=Ge.convert(N.type);let Ee;N.isData3DTexture?(T.setTexture3D(N,0),Ee=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Ee=I.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const $r=I.getParameter(I.UNPACK_ROW_LENGTH),jr=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),$a=I.getParameter(I.UNPACK_SKIP_ROWS),ri=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe);const Kn=x.isDataArrayTexture||x.isData3DTexture,gt=N.isDataArrayTexture||N.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Pi=Ae.get(x),Zn=Ae.get(N),Jt=Ae.get(Pi.__renderTarget),Jn=Ae.get(Zn.__renderTarget);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Sr=0;Sr<be;Sr++)Kn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.get(x).__webglTexture,L,Oe+Sr),x.isDepthTexture?(gt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,L,_t+Sr),I.blitFramebuffer(Me,Ne,re,pe,Re,it,re,pe,I.DEPTH_BUFFER_BIT,I.NEAREST)):gt?I.copyTexSubImage3D(Ee,L,Re,it,_t+Sr,Me,Ne,re,pe):I.copyTexSubImage2D(Ee,L,Re,it,_t+Sr,Me,Ne,re,pe);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Ee,L,Re,it,_t,re,pe,be,Lt,xt,vt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,L,Re,it,_t,re,pe,be,Lt,vt.data):I.texSubImage3D(Ee,L,Re,it,_t,re,pe,be,Lt,xt,vt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,Re,it,re,pe,Lt,xt,vt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,Re,it,vt.width,vt.height,Lt,vt.data):I.texSubImage2D(I.TEXTURE_2D,L,Re,it,re,pe,Lt,xt,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,$r),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jr),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,$a),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ri),L===0&&N.generateMipmaps&&I.generateMipmap(Ee),Pe.unbindTexture()},this.copyTextureToTexture3D=function(x,N,H=null,V=null,L=0){return x.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,x=arguments[2],N=arguments[3],L=arguments[4]||0),Ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,N,H,V,L)},this.initRenderTarget=function(x){Ae.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Pe.unbindTexture()},this.resetState=function(){A=0,w=0,D=null,Pe.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Ov extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lh(){return performance.now()}class Ns{constructor(e){this.value=e}clone(){return new Ns(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);const Bv=""+new URL("../assets/randomart_bg.COl9LaX1.wasm",import.meta.url).href,zv=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let a;if(typeof Buffer=="function"&&typeof Buffer.from=="function")a=Buffer.from(r,"base64");else if(typeof atob=="function"){const n=atob(r);a=new Uint8Array(n.length);for(let s=0;s<n.length;s++)a[s]=n.charCodeAt(s)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(a,i)}else{const r=await fetch(e),a=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&a.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const n=await r.arrayBuffer();t=await WebAssembly.instantiate(n,i)}}return t.instance.exports};let cn;function kv(i){cn=i}const Gv=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let ch=new Gv("utf-8",{ignoreBOM:!0,fatal:!0});ch.decode();let Os=null;function Hv(){return(Os===null||Os.byteLength===0)&&(Os=new Uint8Array(cn.memory.buffer)),Os}function Vv(i,e){return i=i>>>0,ch.decode(Hv().subarray(i,i+e))}function Wv(){let i,e;try{const t=cn.compile_webgl_fragment_shader();return i=t[0],e=t[1],Vv(t[0],t[1])}finally{cn.__wbindgen_free(i,e,1)}}function Xv(i){return()=>{throw new Error(`${i} is not defined`)}}const $v=typeof Math.random=="function"?Math.random:Xv("Math.random");function jv(){const i=cn.__wbindgen_export_0,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)}URL=globalThis.URL;const un=await zv({"./randomart_bg.js":{__wbg_random_6e698a416b330e00:$v,__wbindgen_init_externref_table:jv}},Bv),qv=un.memory,Yv=un.compile_webgl_fragment_shader,Kv=un.__wbindgen_export_0,Zv=un.__wbindgen_free,uh=un.__wbindgen_start,Jv=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_export_0:Kv,__wbindgen_free:Zv,__wbindgen_start:uh,compile_webgl_fragment_shader:Yv,memory:qv},Symbol.toStringTag,{value:"Module"}));kv(Jv),uh();function hh(i){var e,t,r="";if(typeof i=="string"||typeof i=="number")r+=i;else if(typeof i=="object")if(Array.isArray(i)){var a=i.length;for(e=0;e<a;e++)i[e]&&(t=hh(i[e]))&&(r&&(r+=" "),r+=t)}else for(t in i)i[t]&&(r&&(r+=" "),r+=t);return r}function dh(){for(var i,e,t=0,r="",a=arguments.length;t<a;t++)(i=arguments[t])&&(e=hh(i))&&(r&&(r+=" "),r+=e);return r}const Ql="-",Qv=i=>{const e=t0(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=i;return{getClassGroupId:a=>{const n=a.split(Ql);return n[0]===""&&n.length!==1&&n.shift(),fh(n,e)||e0(a)},getConflictingClassGroupIds:(a,n)=>{const s=t[a]||[];return n&&r[a]?[...s,...r[a]]:s}}},fh=(i,e)=>{var s;if(i.length===0)return e.classGroupId;const t=i[0],r=e.nextPart.get(t),a=r?fh(i.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const n=i.join(Ql);return(s=e.validators.find(({validator:o})=>o(n)))==null?void 0:s.classGroupId},ph=/^\[(.+)\]$/,e0=i=>{if(ph.test(i)){const e=ph.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},t0=i=>{const{theme:e,prefix:t}=i,r={nextPart:new Map,validators:[]};return r0(Object.entries(i.classGroups),t).forEach(([a,n])=>{ec(n,r,a,e)}),r},ec=(i,e,t,r)=>{i.forEach(a=>{if(typeof a=="string"){const n=a===""?e:mh(e,a);n.classGroupId=t;return}if(typeof a=="function"){if(i0(a)){ec(a(r),e,t,r);return}e.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{ec(s,mh(e,n),t,r)})})},mh=(i,e)=>{let t=i;return e.split(Ql).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},i0=i=>i.isThemeGetter,r0=(i,e)=>e?i.map(([t,r])=>{const a=r.map(n=>typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,o])=>[e+s,o])):n);return[t,a]}):i,a0=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const a=(n,s)=>{t.set(n,s),e++,e>i&&(e=0,r=t,t=new Map)};return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=r.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}},gh="!",n0=i=>{const{separator:e,experimentalParseClassName:t}=i,r=e.length===1,a=e[0],n=e.length,s=o=>{const l=[];let c=0,u=0,f;for(let p=0;p<o.length;p++){let h=o[p];if(c===0){if(h===a&&(r||o.slice(p,p+n)===e)){l.push(o.slice(u,p)),u=p+n;continue}if(h==="/"){f=p;continue}}h==="["?c++:h==="]"&&c--}const d=l.length===0?o:o.substring(u),m=d.startsWith(gh),g=m?d.substring(1):d,_=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:_}};return t?o=>t({className:o,parseClassName:s}):s},s0=i=>{if(i.length<=1)return i;const e=[];let t=[];return i.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},o0=i=>({cache:a0(i.cacheSize),parseClassName:n0(i),...Qv(i)}),l0=/\s+/,c0=(i,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a}=e,n=[],s=i.trim().split(l0);let o="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:u,hasImportantModifier:f,baseClassName:d,maybePostfixModifierPosition:m}=t(c);let g=!!m,_=r(g?d.substring(0,m):d);if(!_){if(!g){o=c+(o.length>0?" "+o:o);continue}if(_=r(d),!_){o=c+(o.length>0?" "+o:o);continue}g=!1}const p=s0(u).join(":"),h=f?p+gh:p,b=h+_;if(n.includes(b))continue;n.push(b);const E=a(_,g);for(let S=0;S<E.length;++S){const O=E[S];n.push(h+O)}o=c+(o.length>0?" "+o:o)}return o};function u0(){let i=0,e,t,r="";for(;i<arguments.length;)(e=arguments[i++])&&(t=_h(e))&&(r&&(r+=" "),r+=t);return r}const _h=i=>{if(typeof i=="string")return i;let e,t="";for(let r=0;r<i.length;r++)i[r]&&(e=_h(i[r]))&&(t&&(t+=" "),t+=e);return t};function tc(i,...e){let t,r,a,n=s;function s(l){const c=e.reduce((u,f)=>f(u),i());return t=o0(c),r=t.cache.get,a=t.cache.set,n=o,o(l)}function o(l){const c=r(l);if(c)return c;const u=c0(l,t);return a(l,u),u}return function(){return n(u0.apply(null,arguments))}}const pt=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},vh=/^\[(?:([a-z-]+):)?(.+)\]$/i,h0=/^\d+\/\d+$/,d0=new Set(["px","full","screen"]),f0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,m0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,g0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xi=i=>Sa(i)||d0.has(i)||h0.test(i),fr=i=>Ma(i,"length",T0),Sa=i=>!!i&&!Number.isNaN(Number(i)),ic=i=>Ma(i,"number",Sa),hn=i=>!!i&&Number.isInteger(Number(i)),v0=i=>i.endsWith("%")&&Sa(i.slice(0,-1)),Be=i=>vh.test(i),pr=i=>f0.test(i),x0=new Set(["length","size","percentage"]),y0=i=>Ma(i,x0,xh),b0=i=>Ma(i,"position",xh),S0=new Set(["image","url"]),M0=i=>Ma(i,S0,A0),E0=i=>Ma(i,"",w0),dn=()=>!0,Ma=(i,e,t)=>{const r=vh.exec(i);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},T0=i=>p0.test(i)&&!m0.test(i),xh=()=>!1,w0=i=>g0.test(i),A0=i=>_0.test(i),rc=()=>{const i=pt("colors"),e=pt("spacing"),t=pt("blur"),r=pt("brightness"),a=pt("borderColor"),n=pt("borderRadius"),s=pt("borderSpacing"),o=pt("borderWidth"),l=pt("contrast"),c=pt("grayscale"),u=pt("hueRotate"),f=pt("invert"),d=pt("gap"),m=pt("gradientColorStops"),g=pt("gradientColorStopPositions"),_=pt("inset"),p=pt("margin"),h=pt("opacity"),b=pt("padding"),E=pt("saturate"),S=pt("scale"),O=pt("sepia"),A=pt("skew"),w=pt("space"),D=pt("translate"),M=()=>["auto","contain","none"],y=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",Be,e],R=()=>[Be,e],F=()=>["",Xi,fr],B=()=>["auto",Sa,Be],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],z=()=>["solid","dashed","dotted","double","none"],j=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",Be],ne=()=>["auto","avoid","all","avoid-page","page","left","right","column"],xe=()=>[Sa,Be];return{cacheSize:500,separator:":",theme:{colors:[dn],spacing:[Xi,fr],blur:["none","",pr,Be],brightness:xe(),borderColor:[i],borderRadius:["none","","full",pr,Be],borderSpacing:R(),borderWidth:F(),contrast:xe(),grayscale:Y(),hueRotate:xe(),invert:Y(),gap:R(),gradientColorStops:[i],gradientColorStopPositions:[v0,fr],inset:C(),margin:C(),opacity:xe(),padding:R(),saturate:xe(),scale:xe(),sepia:Y(),skew:xe(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",Be]}],container:["container"],columns:[{columns:[pr]}],"break-after":[{"break-after":ne()}],"break-before":[{"break-before":ne()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),Be]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",hn,Be]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Be]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",hn,Be]}],"grid-cols":[{"grid-cols":[dn]}],"col-start-end":[{col:["auto",{span:["full",hn,Be]},Be]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[dn]}],"row-start-end":[{row:["auto",{span:[hn,Be]},Be]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Be]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[b]}],px:[{px:[b]}],py:[{py:[b]}],ps:[{ps:[b]}],pe:[{pe:[b]}],pt:[{pt:[b]}],pr:[{pr:[b]}],pb:[{pb:[b]}],pl:[{pl:[b]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Be,e]}],"min-w":[{"min-w":[Be,e,"min","max","fit"]}],"max-w":[{"max-w":[Be,e,"none","full","min","max","fit","prose",{screen:[pr]},pr]}],h:[{h:[Be,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Be,e,"auto","min","max","fit"]}],"font-size":[{text:["base",pr,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ic]}],"font-family":[{font:[dn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Be]}],"line-clamp":[{"line-clamp":["none",Sa,ic]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Xi,Be]}],"list-image":[{"list-image":["none",Be]}],"list-style-type":[{list:["none","disc","decimal",Be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Xi,fr]}],"underline-offset":[{"underline-offset":["auto",Xi,Be]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),b0]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",y0]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M0]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...z(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:z()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...z()]}],"outline-offset":[{"outline-offset":[Xi,Be]}],"outline-w":[{outline:[Xi,fr]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Xi,fr]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",pr,E0]}],"shadow-color":[{shadow:[dn]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...j(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",pr,Be]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[E]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Be]}],duration:[{duration:xe()}],ease:[{ease:["linear","in","out","in-out",Be]}],delay:[{delay:xe()}],animate:[{animate:["none","spin","ping","pulse","bounce",Be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[hn,Be]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Be]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Be]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Be]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Xi,fr,ic]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},R0=(i,{cacheSize:e,prefix:t,separator:r,experimentalParseClassName:a,extend:n={},override:s={}})=>{fn(i,"cacheSize",e),fn(i,"prefix",t),fn(i,"separator",r),fn(i,"experimentalParseClassName",a);for(const o in s)C0(i[o],s[o]);for(const o in n)P0(i[o],n[o]);return i},fn=(i,e,t)=>{t!==void 0&&(i[e]=t)},C0=(i,e)=>{if(e)for(const t in e)fn(i,t,e[t])},P0=(i,e)=>{if(e)for(const t in e){const r=e[t];r!==void 0&&(i[t]=(i[t]||[]).concat(r))}},L0=(i,...e)=>typeof i=="function"?tc(rc,i,...e):tc(()=>R0(rc(),i),...e),yh=tc(rc);function Kt(...i){return yh(dh(i))}var U0=tt("<div><!></div>");function D0(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=U0();let n;var s=Et(a);rt(s,()=>e.children??yt),Tt(a),tr(a,o=>t(o),()=>t()),Ot(()=>n=Ft(a,n,{class:Kt("bg-card text-card-foreground rounded-lg border shadow-sm",e.class),...r})),oe(i,a),et()}var I0=tt("<div><!></div>");function N0(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=I0();let n;var s=Et(a);rt(s,()=>e.children??yt),Tt(a),tr(a,o=>t(o),()=>t()),Ot(()=>n=Ft(a,n,{class:Kt("p-6",e.class),...r})),oe(i,a),et()}var O0=tt("<div><!></div>");function F0(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=O0();let n;var s=Et(a);rt(s,()=>e.children??yt),Tt(a),tr(a,o=>t(o),()=>t()),Ot(()=>n=Ft(a,n,{class:Kt("flex flex-col space-y-1.5 p-6 pb-0",e.class),...r})),oe(i,a),et()}var B0=tt("<div><!></div>");function z0(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=ue(e,"level",3,3),a=Dt(e,["$$slots","$$events","$$legacy","ref","class","level","children"]);var n=B0();let s;var o=Et(n);rt(o,()=>e.children??yt),Tt(n),tr(n,l=>t(l),()=>t()),Ot(()=>s=Ft(n,s,{role:"heading","aria-level":r(),class:Kt("text-lg font-semibold leading-none tracking-tight",e.class),...a})),oe(i,n),et()}function k0(i){return typeof i=="function"}function G0(i){return i!==null&&typeof i=="object"}const pn=Symbol("box"),ac=Symbol("is-writable");function H0(i){return G0(i)&&pn in i}function V0(i){return me.isBox(i)&&ac in i}function me(i){let e=Rt(lt(i));return{[pn]:!0,[ac]:!0,get current(){return K(e)},set current(t){Xe(e,lt(t))}}}function W0(i,e){const t=He(i);return e?{[pn]:!0,[ac]:!0,get current(){return K(t)},set current(r){e(r)}}:{[pn]:!0,get current(){return i()}}}function X0(i){return me.isBox(i)?i:k0(i)?me.with(i):me(i)}function $0(i){return Object.entries(i).reduce((e,[t,r])=>me.isBox(r)?(me.isWritableBox(r)?Object.defineProperty(e,t,{get(){return r.current},set(a){r.current=a}}):Object.defineProperty(e,t,{get(){return r.current}}),e):Object.assign(e,{[t]:r}),{})}function j0(i){return me.isWritableBox(i)?{[pn]:!0,get current(){return i.current}}:i}me.from=X0,me.with=W0,me.flatten=$0,me.readonly=j0,me.isBox=H0,me.isWritableBox=V0;function bh(...i){return function(e){var t;for(const r of i)if(r){if(e.defaultPrevented)return;typeof r=="function"?r.call(this,e):(t=r.current)==null||t.call(this,e)}}}var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mh={},Eh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,q0=/\n/g,Y0=/^\s*/,K0=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Z0=/^:\s*/,J0=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Q0=/^[;\s]*/,ex=/^\s+|\s+$/g,tx=`
`,Th="/",wh="*",kr="",ix="comment",rx="declaration",ax=function(i,e){if(typeof i!="string")throw new TypeError("First argument must be a string");if(!i)return[];e=e||{};var t=1,r=1;function a(g){var _=g.match(q0);_&&(t+=_.length);var p=g.lastIndexOf(tx);r=~p?g.length-p:r+g.length}function n(){var g={line:t,column:r};return function(_){return _.position=new s(g),c(),_}}function s(g){this.start=g,this.end={line:t,column:r},this.source=e.source}s.prototype.content=i;function o(g){var _=new Error(e.source+":"+t+":"+r+": "+g);if(_.reason=g,_.filename=e.source,_.line=t,_.column=r,_.source=i,!e.silent)throw _}function l(g){var _=g.exec(i);if(_){var p=_[0];return a(p),i=i.slice(p.length),_}}function c(){l(Y0)}function u(g){var _;for(g=g||[];_=f();)_!==!1&&g.push(_);return g}function f(){var g=n();if(!(Th!=i.charAt(0)||wh!=i.charAt(1))){for(var _=2;kr!=i.charAt(_)&&(wh!=i.charAt(_)||Th!=i.charAt(_+1));)++_;if(_+=2,kr===i.charAt(_-1))return o("End of comment missing");var p=i.slice(2,_-2);return r+=2,a(p),i=i.slice(_),r+=2,g({type:ix,comment:p})}}function d(){var g=n(),_=l(K0);if(_){if(f(),!l(Z0))return o("property missing ':'");var p=l(J0),h=g({type:rx,property:Ah(_[0].replace(Eh,kr)),value:p?Ah(p[0].replace(Eh,kr)):kr});return l(Q0),h}}function m(){var g=[];u(g);for(var _;_=d();)_!==!1&&(g.push(_),u(g));return g}return c(),m()};function Ah(i){return i?i.replace(ex,kr):kr}var nx=Sh&&Sh.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Mh,"__esModule",{value:!0});var Rh=Mh.default=ox,sx=nx(ax);function ox(i,e){var t=null;if(!i||typeof i!="string")return t;var r=(0,sx.default)(i),a=typeof e=="function";return r.forEach(function(n){if(n.type==="declaration"){var s=n.property,o=n.value;a?e(s,o,n):o&&(t=t||{},t[s]=o)}}),t}const lx=Rh.default||Rh,cx=/\d/,ux=["-","_","/","."];function hx(i=""){if(!cx.test(i))return i!==i.toLowerCase()}function dx(i){const e=[];let t="",r,a;for(const n of i){const s=ux.includes(n);if(s===!0){e.push(t),t="",r=void 0;continue}const o=hx(n);if(a===!1){if(r===!1&&o===!0){e.push(t),t=n,r=o;continue}if(r===!0&&o===!1&&t.length>1){const l=t.at(-1);e.push(t.slice(0,Math.max(0,t.length-1))),t=l+n,r=o;continue}}t+=n,r=o,a=s}return e.push(t),e}function Ch(i){return i?dx(i).map(e=>px(e)).join(""):""}function fx(i){return mx(Ch(i||""))}function px(i){return i?i[0].toUpperCase()+i.slice(1):""}function mx(i){return i?i[0].toLowerCase()+i.slice(1):""}function Fs(i){if(!i)return{};const e={};function t(r,a){if(r.startsWith("-moz-")||r.startsWith("-webkit-")||r.startsWith("-ms-")||r.startsWith("-o-")){e[Ch(r)]=a;return}if(r.startsWith("--")){e[r]=a;return}e[fx(r)]=a}return lx(i,t),e}function Ea(...i){return(...e)=>{for(const t of i)typeof t=="function"&&t(...e)}}function gx(i,e){const t=RegExp(i,"g");return r=>{if(typeof r!="string")throw new TypeError(`expected an argument of type string, but got ${typeof r}`);return r.match(t)?r.replace(t,e):r}}const _x=gx(/[A-Z]/,i=>`-${i.toLowerCase()}`);function vx(i){if(!i||typeof i!="object"||Array.isArray(i))throw new TypeError(`expected an argument of type object, but got ${typeof i}`);return Object.keys(i).map(e=>`${_x(e)}: ${i[e]};`).join(`
`)}function Ph(i={}){return vx(i).replace(`
`," ")}Ph({position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"});function xx(i){var e;return i.length>2&&i.startsWith("on")&&i[2]===((e=i[2])==null?void 0:e.toLowerCase())}function pi(...i){const e={...i[0]};for(let t=1;t<i.length;t++){const r=i[t];for(const a in r){const n=e[a],s=r[a],o=typeof n=="function",l=typeof s=="function";if(o&&xx(a)){const c=n,u=s;e[a]=bh(c,u)}else if(o&&l)e[a]=Ea(n,s);else if(a==="class"&&typeof n=="string"&&typeof s=="string")e[a]=dh(n,s);else if(a==="style"){const c=typeof n=="object",u=typeof s=="object",f=typeof n=="string",d=typeof s=="string";if(c&&u)e[a]={...n,...s};else if(c&&d){const m=Fs(s);e[a]={...n,...m}}else if(f&&u){const m=Fs(n);e[a]={...m,...s}}else if(f&&d){const m=Fs(n),g=Fs(s);e[a]={...m,...g}}else c?e[a]=n:u&&(e[a]=s)}else e[a]=s!==void 0?s:n}}return typeof e.style=="object"&&(e.style=Ph(e.style).replaceAll(`
`," ")),e.hidden!==!0&&(e.hidden=void 0),e.disabled!==!0&&(e.disabled=void 0),e}function Ti({id:i,ref:e,deps:t=()=>!0,onRefChange:r=()=>{},getRootNode:a=()=>typeof document<"u"?document:void 0}){const n=He(()=>t()),s=He(()=>a());wt(()=>(i.current,K(n),K(s),vi(()=>{var l;const o=(l=K(s))==null?void 0:l.getElementById(i.current);o?e.current=o:e.current=null,r(e.current)}))),wt(()=>()=>{e.current=null,r(null)})}function yx(i){wt(()=>()=>{i()})}function Lh(i,e){setTimeout(e,i)}function Bs(i){vd().then(i)}function bx(i){return i?"open":"closed"}function Sx(i){return i?"true":"false"}function Mx(i){return i?"true":void 0}const Uh="Enter",Ex="Escape",Dh=" ",Tx="Tab",nc=typeof document<"u",Ih=wx();function wx(){var i,e;return nc&&((i=window==null?void 0:window.navigator)==null?void 0:i.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function zs(i){return i instanceof HTMLElement}function Ax(i){return i instanceof Element}function Rx(i){return i instanceof HTMLInputElement&&"select"in i}function Cx(i,e){if(getComputedStyle(i).visibility==="hidden")return!0;for(;i;){if(e!==void 0&&i===e)return!1;if(getComputedStyle(i).display==="none")return!0;i=i.parentElement}return!1}function Px(i,e){return xd(i,e)}function Lx(i,e){const t=i,r=typeof i=="symbol"?i.description:i;if(!pS(t)){if(e===void 0)throw new Error(`Missing context dependency: ${r} and no fallback was provided.`);return e}return xc(i)}function Ux(i,e){return`${i}Context`}function Dx(i,e,t=!0){const r=Ux(i),a=Symbol.for(`bits-ui.${r}`),n=r;function s(l){const c=Lx(t?a:n,l);if(c===void 0)throw new Error(`Context \`${r}\` not found. Component must be used within ${Array.isArray(i)?`one of the following components: ${i.join(", ")}`:`\`${i}\``}`);return c}function o(l){return Px(t?a:n,l)}return[o,s]}let Nh=0;function $i(i="bits"){return Nh++,`${i}-${Nh}`}function Gt(){}class Ix{constructor(e,t){ee(this,vr);ee(this,Aa,Rt());ee(this,vn);ee(this,_r,0);ee(this,Gr,null);P(this,Aa).v=lt(e),Ue(this,vn,t)}get current(){return mS()?wt(()=>(fc(this,_r)._++,P(this,_r)===1&&_i(this,vr,bc).call(this,!0),()=>{vd().then(()=>{fc(this,_r)._--,P(this,_r)===0&&_i(this,vr,Sc).call(this)})})):P(this,_r)===0&&(_i(this,vr,bc).call(this,!1),_i(this,vr,Sc).call(this)),K(P(this,Aa))}}Aa=new WeakMap,vn=new WeakMap,_r=new WeakMap,Gr=new WeakMap,vr=new WeakSet,bc=function(e){Ue(this,Gr,P(this,vn).call(this,t=>{Xe(P(this,Aa),lt(t))},e)??null)},Sc=function(){P(this,Gr)!==null&&(P(this,Gr).call(this),Ue(this,Gr,null))},new Ix(null,(i,e)=>{function t(){i(document.activeElement)}if(t(),!!e)return document.addEventListener("focusin",t),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",t),document.removeEventListener("focusout",t)}});class Nx{constructor(e){ee(this,xn,Rt());ee(this,yn);wt(()=>{Xe(P(this,xn),lt(P(this,yn))),Ue(this,yn,e())})}get current(){return K(P(this,xn))}}xn=new WeakMap,yn=new WeakMap;function Ox(i,e){const t=me(i);function r(a){return e[t.current][a]??t.current}return{state:t,dispatch:a=>{t.current=r(a)}}}function Fx(i,e){let t=Rt(lt({})),r=Rt("none");const a=i.current?"mounted":"unmounted";let n=Rt(null);const s=new Nx(()=>i.current);wt(()=>{e.current&&i.current&&Bs(()=>{Xe(n,lt(document.getElementById(e.current)))})});const{state:o,dispatch:l}=Ox(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});wt(()=>{const d=i.current;vi(()=>{if(K(n)||Xe(n,lt(document.getElementById(e.current))),!K(n)||d===s.current)return;const m=K(r),g=ks(K(n));d?l("MOUNT"):g==="none"||K(t).display==="none"?l("UNMOUNT"):l(s&&m!==g?"ANIMATION_OUT":"UNMOUNT")})});function c(d){if(K(n)||Xe(n,lt(document.getElementById(e.current))),!K(n))return;const m=ks(K(n)),g=m.includes(d.animationName)||m==="none";d.target===K(n)&&g&&l("ANIMATION_END")}function u(d){K(n)||Xe(n,lt(document.getElementById(e.current))),K(n)&&d.target===K(n)&&Xe(r,lt(ks(K(n))))}wt(()=>{o.current,vi(()=>{if(K(n)||Xe(n,lt(document.getElementById(e.current))),!K(n))return;const d=ks(K(n));Xe(r,lt(o.current==="mounted"?d:"none"))})}),wt(()=>{if(K(n))return Xe(t,lt(getComputedStyle(K(n)))),K(n).addEventListener("animationstart",u),K(n).addEventListener("animationcancel",c),K(n).addEventListener("animationend",c),()=>{var d,m,g;(d=K(n))==null||d.removeEventListener("animationstart",u),(m=K(n))==null||m.removeEventListener("animationcancel",c),(g=K(n))==null||g.removeEventListener("animationend",c)}});const f=He(()=>["mounted","unmountSuspended"].includes(o.current));return{get current(){return K(f)}}}function ks(i){return i&&getComputedStyle(i).animationName||"none"}function Oh(i,e){Qe(e,!0);const t=Fx(me.with(()=>e.present),me.with(()=>e.id));var r=$e(),a=Ce(r);xi(a,()=>e.forceMount||e.present||t.current,n=>{var s=$e(),o=Ce(s);rt(o,()=>e.presence??yt,()=>({present:t})),oe(n,s)}),oe(i,r),et()}function Bx(i){return{content:`data-${i}-content`,trigger:`data-${i}-trigger`,overlay:`data-${i}-overlay`,title:`data-${i}-title`,description:`data-${i}-description`,close:`data-${i}-close`,cancel:`data-${i}-cancel`,action:`data-${i}-action`}}class zx{constructor(e){Qi(this,"open");Qi(this,"variant");ee(this,bn,Rt(null));ee(this,Sn,Rt(null));ee(this,Mn,Rt(null));ee(this,En,Rt(null));ee(this,Tn,Rt(void 0));ee(this,wn,Rt(void 0));ee(this,An,Rt(void 0));ee(this,Rn,Rt(void 0));ee(this,Cn,Rt(null));ee(this,Hs,He(()=>Bx(this.variant.current)));Qi(this,"handleOpen",()=>{this.open.current||(this.open.current=!0)});Qi(this,"handleClose",()=>{this.open.current&&(this.open.current=!1)});ee(this,Vs,He(()=>({"data-state":bx(this.open.current)})));this.open=e.open,this.variant=e.variant}get triggerNode(){return K(P(this,bn))}set triggerNode(e){Xe(P(this,bn),lt(e))}get titleNode(){return K(P(this,Sn))}set titleNode(e){Xe(P(this,Sn),lt(e))}get contentNode(){return K(P(this,Mn))}set contentNode(e){Xe(P(this,Mn),lt(e))}get descriptionNode(){return K(P(this,En))}set descriptionNode(e){Xe(P(this,En),lt(e))}get contentId(){return K(P(this,Tn))}set contentId(e){Xe(P(this,Tn),lt(e))}get titleId(){return K(P(this,wn))}set titleId(e){Xe(P(this,wn),lt(e))}get triggerId(){return K(P(this,An))}set triggerId(e){Xe(P(this,An),lt(e))}get descriptionId(){return K(P(this,Rn))}set descriptionId(e){Xe(P(this,Rn),lt(e))}get cancelNode(){return K(P(this,Cn))}set cancelNode(e){Xe(P(this,Cn),lt(e))}get attrs(){return K(P(this,Hs))}get sharedProps(){return K(P(this,Vs))}}bn=new WeakMap,Sn=new WeakMap,Mn=new WeakMap,En=new WeakMap,Tn=new WeakMap,wn=new WeakMap,An=new WeakMap,Rn=new WeakMap,Cn=new WeakMap,Hs=new WeakMap,Vs=new WeakMap;class kx{constructor(e,t){ee(this,Ra);ee(this,Pn);ee(this,ii);ee(this,Hr);ee(this,Ws,e=>{P(this,Hr).current||e.button>0||P(this,ii).handleOpen()});ee(this,Xs,e=>{if(!P(this,Hr).current){if(e.pointerType==="touch")return e.preventDefault();e.button>0||(e.preventDefault(),P(this,ii).handleOpen())}});ee(this,$s,e=>{P(this,Hr).current||(e.key===Dh||e.key===Uh)&&(e.preventDefault(),P(this,ii).handleOpen())});ee(this,js,He(()=>({id:P(this,Ra).current,"aria-haspopup":"dialog","aria-expanded":Sx(P(this,ii).open.current),"aria-controls":P(this,ii).contentId,[P(this,ii).attrs.trigger]:"",onpointerdown:P(this,Xs),onkeydown:P(this,$s),onclick:P(this,Ws),...P(this,ii).sharedProps})));Ue(this,Ra,e.id),Ue(this,ii,t),Ue(this,Pn,e.ref),Ue(this,Hr,e.disabled),Ti({id:P(this,Ra),ref:P(this,Pn),onRefChange:r=>{P(this,ii).triggerNode=r,P(this,ii).triggerId=r==null?void 0:r.id}})}get props(){return K(P(this,js))}}Ra=new WeakMap,Pn=new WeakMap,ii=new WeakMap,Hr=new WeakMap,Ws=new WeakMap,Xs=new WeakMap,$s=new WeakMap,js=new WeakMap;class Gx{constructor(e,t){ee(this,Ca);ee(this,Ln);ee(this,Ai);ee(this,Un);ee(this,Vr);ee(this,qs,He(()=>P(this,Ai).attrs[P(this,Un).current]));ee(this,Ys,e=>{P(this,Vr).current||e.button>0||P(this,Ai).handleClose()});ee(this,Ks,e=>{if(!P(this,Vr).current){if(e.pointerType==="touch")return e.preventDefault();e.button>0||(e.preventDefault(),P(this,Ai).handleClose())}});ee(this,Zs,e=>{P(this,Vr).current||(e.key===Dh||e.key===Uh)&&(e.preventDefault(),P(this,Ai).handleClose())});ee(this,Js,He(()=>({id:P(this,Ca).current,[K(P(this,qs))]:"",onpointerdown:P(this,Ks),onclick:P(this,Ys),onkeydown:P(this,Zs),...P(this,Ai).sharedProps})));Ue(this,Ai,t),Ue(this,Ln,e.ref),Ue(this,Ca,e.id),Ue(this,Un,e.variant),Ue(this,Vr,e.disabled),Ti({id:P(this,Ca),ref:P(this,Ln),deps:()=>P(this,Ai).open.current})}get props(){return K(P(this,Js))}}Ca=new WeakMap,Ln=new WeakMap,Ai=new WeakMap,Un=new WeakMap,Vr=new WeakMap,qs=new WeakMap,Ys=new WeakMap,Ks=new WeakMap,Zs=new WeakMap,Js=new WeakMap;class Hx{constructor(e,t){ee(this,Pa);ee(this,Dn);ee(this,qi);ee(this,In);ee(this,Qs,He(()=>({id:P(this,Pa).current,role:"heading","aria-level":P(this,In).current,[P(this,qi).attrs.title]:"",...P(this,qi).sharedProps})));Ue(this,Pa,e.id),Ue(this,qi,t),Ue(this,Dn,e.ref),Ue(this,In,e.level),Ti({id:P(this,Pa),ref:P(this,Dn),onRefChange:r=>{P(this,qi).titleNode=r,P(this,qi).titleId=r==null?void 0:r.id},deps:()=>P(this,qi).open.current})}get props(){return K(P(this,Qs))}}Pa=new WeakMap,Dn=new WeakMap,qi=new WeakMap,In=new WeakMap,Qs=new WeakMap;class Vx{constructor(e,t){ee(this,La);ee(this,Nn);ee(this,Yi);ee(this,eo,He(()=>({id:P(this,La).current,[P(this,Yi).attrs.description]:"",...P(this,Yi).sharedProps})));Ue(this,La,e.id),Ue(this,Yi,t),Ue(this,Nn,e.ref),Ti({id:P(this,La),ref:P(this,Nn),deps:()=>P(this,Yi).open.current,onRefChange:r=>{P(this,Yi).descriptionNode=r,P(this,Yi).descriptionId=r==null?void 0:r.id}})}get props(){return K(P(this,eo))}}La=new WeakMap,Nn=new WeakMap,Yi=new WeakMap,eo=new WeakMap;class Wx{constructor(e,t){ee(this,Ua);ee(this,On);Qi(this,"root");ee(this,to,He(()=>({open:this.root.open.current})));ee(this,io,He(()=>({id:P(this,Ua).current,role:this.root.variant.current==="alert-dialog"?"alertdialog":"dialog","aria-describedby":this.root.descriptionId,"aria-labelledby":this.root.titleId,[this.root.attrs.content]:"",style:{pointerEvents:"auto"},...this.root.sharedProps})));Ue(this,Ua,e.id),this.root=t,Ue(this,On,e.ref),Ti({id:P(this,Ua),ref:P(this,On),deps:()=>this.root.open.current,onRefChange:r=>{this.root.contentNode=r,this.root.contentId=r==null?void 0:r.id}})}get snippetProps(){return K(P(this,to))}get props(){return K(P(this,io))}}Ua=new WeakMap,On=new WeakMap,to=new WeakMap,io=new WeakMap;class Xx{constructor(e,t){ee(this,Da);ee(this,Fn);Qi(this,"root");ee(this,ro,He(()=>({open:this.root.open.current})));ee(this,ao,He(()=>({id:P(this,Da).current,[this.root.attrs.overlay]:"",style:{pointerEvents:"auto"},...this.root.sharedProps})));Ue(this,Da,e.id),Ue(this,Fn,e.ref),this.root=t,Ti({id:P(this,Da),ref:P(this,Fn),deps:()=>this.root.open.current})}get snippetProps(){return K(P(this,ro))}get props(){return K(P(this,ao))}}Da=new WeakMap,Fn=new WeakMap,ro=new WeakMap,ao=new WeakMap;const[$x,Ta]=Dx("Dialog.Root");function jx(i){return $x(new zx(i))}function qx(i){const e=Ta();return new kx(i,e)}function Yx(i){return new Hx(i,Ta())}function Kx(i){return new Wx(i,Ta())}function Zx(i){return new Xx(i,Ta())}function Jx(i){return new Vx(i,Ta())}function Qx(i){return new Gx(i,Ta())}var ey=tt("<div><!></div>");function ty(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=ue(e,"level",3,2),n=Dt(e,["$$slots","$$events","$$legacy","id","ref","child","children","level"]);const s=Yx({id:me.with(()=>t()),level:me.with(()=>a()),ref:me.with(()=>r(),u=>r(u))}),o=He(()=>pi(n,s.props));var l=$e(),c=Ce(l);xi(c,()=>e.child,u=>{var f=$e(),d=Ce(f);rt(d,()=>e.child,()=>({props:K(o)})),oe(u,f)},u=>{var f=ey();let d;var m=Et(f);rt(m,()=>e.children??yt),Tt(f),Ot(()=>d=Ft(f,d,{...K(o)})),oe(u,f)}),oe(i,l),et()}function iy(i,e){Qe(e,!0);var t=$e(),r=Ce(t);at(r,()=>e.children,a=>{var n=$e(),s=Ce(n);rt(s,()=>e.children??yt),oe(a,n)}),oe(i,t),et()}function ry(i,e){Qe(e,!0);let t=ue(e,"to",3,"body");const r=gS();let a=He(n);function n(){if(!nc||e.disabled)return null;let c=null;return typeof t()=="string"?c=document.querySelector(t()):(t()instanceof HTMLElement||t()instanceof DocumentFragment)&&(c=t()),c}let s;wt(()=>{if(!K(a)||e.disabled){s&&(Md(s),s=null);return}return vi(()=>s=TS(iy,{target:K(a),props:{children:e.children},context:r})),()=>{s&&(Md(s),s=null)}});var o=$e(),l=Ce(o);xi(l,()=>e.disabled,c=>{var u=$e(),f=Ce(u);rt(f,()=>e.children??yt),oe(c,u)}),oe(i,o),et()}function wi(i,e,t,r){const a=Array.isArray(e)?e:[e];return a.forEach(n=>i.addEventListener(n,t,r)),()=>{a.forEach(n=>i.removeEventListener(n,t,r))}}function Fh(i,e=500){let t=null;const r=(...a)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{i(...a)},e)};return r.destroy=()=>{t!==null&&(clearTimeout(t),t=null)},r}function sc(i,e){return i===e||i.contains(e)}function Bh(i){return(i==null?void 0:i.ownerDocument)??document}globalThis.bitsDismissableLayers??(globalThis.bitsDismissableLayers=new Map);class ay{constructor(e){ee(this,Ba);ee(this,Ia);ee(this,Wr);ee(this,xr,{pointerdown:!1});ee(this,Na,!1);Qi(this,"node",me(null));ee(this,yr);ee(this,Oa);ee(this,Fa,Rt(!1));ee(this,Bn);ee(this,zn,Rt(null));ee(this,kn);ee(this,Ki,Gt);ee(this,no,e=>{e.defaultPrevented||this.currNode&&Bs(()=>{var t,r;!this.currNode||P(this,uo).call(this,e.target)||e.target&&!K(P(this,Fa))&&((r=(t=P(this,Bn)).current)==null||r.call(t,e))})});ee(this,so,e=>{let t=e;t.defaultPrevented&&(t=zh(e)),P(this,Ia).current(e)});ee(this,za,Fh(e=>{if(!this.currNode){P(this,Ki).call(this);return}const t=P(this,kn).current(e,this.currNode)||ly(e,this.currNode);if(!P(this,Na)||_i(this,Ba,Ad).call(this)||!t){P(this,Ki).call(this);return}let r=e;if(r.defaultPrevented&&(r=zh(r)),P(this,Wr).current!=="close"&&P(this,Wr).current!=="defer-otherwise-close"){P(this,Ki).call(this);return}e.pointerType==="touch"?(P(this,Ki).call(this),Ue(this,Ki,wi(P(this,yr),"click",P(this,so),{once:!0}))):P(this,Ia).current(r)},10));ee(this,oo,e=>{P(this,xr)[e.type]=!0});ee(this,lo,e=>{P(this,xr)[e.type]=!1});ee(this,co,()=>{this.node.current&&Ue(this,Na,oy(this.node.current))});ee(this,uo,e=>this.node.current?sc(this.node.current,e):!1);ee(this,Gn,Fh(()=>{for(const e in P(this,xr))P(this,xr)[e]=!1;Ue(this,Na,!1)},20));ee(this,ho,()=>{Xe(P(this,Fa),!0)});ee(this,fo,()=>{Xe(P(this,Fa),!1)});Qi(this,"props",{onfocuscapture:P(this,ho),onblurcapture:P(this,fo)});Ue(this,Oa,e.enabled),Ue(this,kn,e.isValidEvent),Ti({id:e.id,ref:this.node,deps:()=>P(this,Oa).current,onRefChange:a=>{this.currNode=a}}),Ue(this,Wr,e.interactOutsideBehavior),Ue(this,Ia,e.onInteractOutside),Ue(this,Bn,e.onFocusOutside),wt(()=>{Ue(this,yr,Bh(this.currNode))});let t=Gt;const r=()=>{P(this,Gn).call(this),globalThis.bitsDismissableLayers.delete(this),P(this,za).destroy(),t()};wt(()=>(P(this,Oa).current&&this.currNode&&Lh(1,()=>{this.currNode&&(globalThis.bitsDismissableLayers.set(this,vi(()=>P(this,Wr))),t(),t=_i(this,Ba,wd).call(this))}),()=>{r()})),yx(()=>{P(this,Gn).destroy(),globalThis.bitsDismissableLayers.delete(this),P(this,za).destroy(),P(this,Ki).call(this),t()})}get currNode(){return K(P(this,zn))}set currNode(e){Xe(P(this,zn),lt(e))}}Ia=new WeakMap,Wr=new WeakMap,xr=new WeakMap,Na=new WeakMap,yr=new WeakMap,Oa=new WeakMap,Fa=new WeakMap,Bn=new WeakMap,zn=new WeakMap,kn=new WeakMap,Ki=new WeakMap,no=new WeakMap,Ba=new WeakSet,wd=function(){return Ea(wi(P(this,yr),"pointerdown",Ea(P(this,oo),P(this,co)),!0),wi(P(this,yr),"pointerdown",Ea(P(this,lo),P(this,za))),wi(P(this,yr),"focusin",P(this,no)))},so=new WeakMap,za=new WeakMap,oo=new WeakMap,lo=new WeakMap,co=new WeakMap,uo=new WeakMap,Gn=new WeakMap,Ad=function(){return Object.values(P(this,xr)).some(Boolean)},ho=new WeakMap,fo=new WeakMap;function ny(i){return new ay(i)}function sy(i){return i.findLast(([e,{current:t}])=>t==="close"||t==="ignore")}function oy(i){const e=[...globalThis.bitsDismissableLayers],t=sy(e);if(t)return t[0].node.current===i;const[r]=e[0];return r.node.current===i}function ly(i,e){if("button"in i&&i.button>0)return!1;const t=i.target;return Ax(t)?Bh(t).documentElement.contains(t)&&!sc(e,t):!1}function zh(i){const e=i.currentTarget,t=i.target;let r;i instanceof PointerEvent?r=new PointerEvent(i.type,i):r=new PointerEvent("pointerdown",i);let a=!1;return new Proxy(r,{get:(n,s)=>s==="currentTarget"?e:s==="target"?t:s==="preventDefault"?()=>{a=!0,typeof n.preventDefault=="function"&&n.preventDefault()}:s==="defaultPrevented"?a:s in n?n[s]:i[s]})}function cy(i,e){Qe(e,!0);let t=ue(e,"interactOutsideBehavior",3,"close"),r=ue(e,"onInteractOutside",3,Gt),a=ue(e,"onFocusOutside",3,Gt),n=ue(e,"isValidEvent",3,()=>!1);const s=ny({id:me.with(()=>e.id),interactOutsideBehavior:me.with(()=>t()),onInteractOutside:me.with(()=>r()),enabled:me.with(()=>e.enabled),onFocusOutside:me.with(()=>a()),isValidEvent:me.with(()=>n())});var o=$e(),l=Ce(o);rt(l,()=>e.children??yt,()=>({props:s.props})),oe(i,o),et()}globalThis.bitsEscapeLayers??(globalThis.bitsEscapeLayers=new Map);class uy{constructor(e){ee(this,Hn);ee(this,ka);ee(this,Vn);ee(this,po,()=>wi(document,"keydown",P(this,mo),{passive:!1}));ee(this,mo,e=>{if(e.key!==Ex||!dy(this))return;const t=new KeyboardEvent(e.type,e);e.preventDefault();const r=P(this,ka).current;r!=="close"&&r!=="defer-otherwise-close"||P(this,Hn).current(t)});Ue(this,ka,e.escapeKeydownBehavior),Ue(this,Hn,e.onEscapeKeydown),Ue(this,Vn,e.enabled);let t=Gt;wt(()=>(P(this,Vn).current&&(globalThis.bitsEscapeLayers.set(this,vi(()=>P(this,ka))),t=P(this,po).call(this)),()=>{t(),globalThis.bitsEscapeLayers.delete(this)}))}}Hn=new WeakMap,ka=new WeakMap,Vn=new WeakMap,po=new WeakMap,mo=new WeakMap;function hy(i){return new uy(i)}function dy(i){const e=[...globalThis.bitsEscapeLayers],t=e.findLast(([a,{current:n}])=>n==="close"||n==="ignore");if(t)return t[0]===i;const[r]=e[0];return r===i}function fy(i,e){Qe(e,!0);let t=ue(e,"escapeKeydownBehavior",3,"close"),r=ue(e,"onEscapeKeydown",3,Gt);hy({escapeKeydownBehavior:me.with(()=>t()),onEscapeKeydown:me.with(()=>r()),enabled:me.with(()=>e.enabled)});var a=$e(),n=Ce(a);rt(n,()=>e.children??yt),oe(i,a),et()}const py=me([]);function my(){const i=py;return{add(e){const t=i.current[0];e.id!==(t==null?void 0:t.id)&&(t==null||t.pause()),i.current=kh(i.current,e),i.current.unshift(e)},remove(e){var t;i.current=kh(i.current,e),(t=i.current[0])==null||t.resume()}}}function gy(){let i=Rt(!1);return{id:$i(),get paused(){return K(i)},pause(){Xe(i,!0)},resume(){Xe(i,!1)}}}function kh(i,e){return[...i].filter(t=>t.id!==e.id)}function _y(i){return i.filter(e=>e.tagName!=="A")}function mr(i,{select:e=!1}={}){if(!(i&&i.focus))return;const t=document.activeElement;i.focus({preventScroll:!0}),i!==t&&Rx(i)&&e&&i.select()}function vy(i,{select:e=!1}={}){const t=document.activeElement;for(const r of i)if(mr(r,{select:e}),document.activeElement!==t)return!0}function Gh(i,e){for(const t of i)if(!Cx(t,e))return t}function Hh(i){const e=[],t=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function xy(i){const e=Hh(i),t=Gh(e,i),r=Gh(e.reverse(),i);return[t,r]}const yy="focusScope.autoFocusOnMount",by="focusScope.autoFocusOnDestroy",Vh={bubbles:!1,cancelable:!0};function Sy({id:i,loop:e,enabled:t,onOpenAutoFocus:r,onCloseAutoFocus:a,forceMount:n}){const s=my(),o=gy(),l=me(null);Ti({id:i,ref:l,deps:()=>t.current});let c=Rt(null);wt(()=>{const g=l.current;if(!g||!t.current)return;function _(b){if(o.paused||!g)return;const E=b.target;zs(E)&&(g.contains(E)?Xe(c,lt(E)):mr(K(c),{select:!0}))}function p(b){if(o.paused||!g)return;const E=b.relatedTarget;zs(E)&&E!==null&&(g.contains(E)||mr(K(c),{select:!0}))}function h(b){g!=null&&g.contains(K(c))||mr(g)}return vi(()=>{const b=Ea(wi(document,"focusin",_),wi(document,"focusout",p)),E=new MutationObserver(h);return E.observe(g,{childList:!0,subtree:!0}),()=>{b(),E.disconnect()}})}),wt(()=>{if(n.current)return;let g=l.current;const _=document.activeElement;return vi(()=>{u(g,_)}),()=>{g&&f(_)}}),wt(()=>{if(!n.current)return;t.current;const g=l.current,_=document.activeElement;return vi(()=>{u(g,_)}),()=>{g&&f(_)}});function u(g,_){if(g||(g=document.getElementById(i.current)),!!g&&(s.add(o),!g.contains(_))){const p=new CustomEvent(yy,Vh);r.current(p),p.defaultPrevented||Bs(()=>{g&&(vy(_y(Hh(g)),{select:!0}),document.activeElement===_&&mr(g))})}}function f(g){const _=new CustomEvent(by,Vh);a.current(_),setTimeout(()=>{!_.defaultPrevented&&g&&mr(g??document.body,{select:!0}),s.remove(o)},0)}function d(g){if(!t.current||!e.current&&!t.current||o.paused)return;const _=g.key===Tx&&!g.ctrlKey&&!g.altKey&&!g.metaKey,p=document.activeElement;if(!(_&&p))return;const h=l.current;if(!h)return;const[b,E]=xy(h);b&&E?!g.shiftKey&&p===E?(g.preventDefault(),e.current&&mr(b,{select:!0})):g.shiftKey&&p===b&&(g.preventDefault(),e.current&&mr(E,{select:!0})):p===h&&g.preventDefault()}const m=He(()=>({id:i.current,tabindex:-1,onkeydown:d}));return{get props(){return K(m)}}}function My(i,e){Qe(e,!0);let t=ue(e,"trapFocus",3,!1),r=ue(e,"loop",3,!1),a=ue(e,"onCloseAutoFocus",3,Gt),n=ue(e,"onOpenAutoFocus",3,Gt),s=ue(e,"forceMount",3,!1);const o=Sy({enabled:me.with(()=>t()),loop:me.with(()=>r()),onCloseAutoFocus:me.with(()=>a()),onOpenAutoFocus:me.with(()=>n()),id:me.with(()=>e.id),forceMount:me.with(()=>s())});var l=$e(),c=Ce(l);rt(c,()=>e.focusScope??yt,()=>({props:o.props})),oe(i,l),et()}globalThis.bitsTextSelectionLayers??(globalThis.bitsTextSelectionLayers=new Map);class Ey{constructor(e){ee(this,go);ee(this,Wn);ee(this,Xn);ee(this,$n);ee(this,br);ee(this,Ga,Gt);ee(this,jn,me(null));ee(this,_o,e=>{const t=P(this,jn).current,r=e.target;!zs(t)||!zs(r)||!P(this,br).current||!Ay(this)||!sc(t,r)||(P(this,Xn).current(e),!e.defaultPrevented&&Ue(this,Ga,wy(t)))});ee(this,qn,()=>{P(this,Ga).call(this),Ue(this,Ga,Gt)});Ue(this,Wn,e.id),Ue(this,br,e.preventOverflowTextSelection),Ue(this,Xn,e.onPointerDown),Ue(this,$n,e.onPointerUp),Ti({id:P(this,Wn),ref:P(this,jn),deps:()=>P(this,br).current});let t=Gt;wt(()=>(P(this,br).current&&(globalThis.bitsTextSelectionLayers.set(this,vi(()=>P(this,br))),t=_i(this,go,Rd).call(this)),()=>{t(),P(this,qn).call(this),globalThis.bitsTextSelectionLayers.delete(this)}))}}Wn=new WeakMap,Xn=new WeakMap,$n=new WeakMap,br=new WeakMap,Ga=new WeakMap,jn=new WeakMap,go=new WeakSet,Rd=function(){return Ea(wi(document,"pointerdown",P(this,_o)),wi(document,"pointerup",bh(P(this,qn),P(this,$n))))},_o=new WeakMap,qn=new WeakMap;function Ty(i){return new Ey(i)}const Wh=i=>i.style.userSelect||i.style.webkitUserSelect;function wy(i){const e=document.body,t=Wh(e),r=Wh(i);return Gs(e,"none"),Gs(i,"text"),()=>{Gs(e,t),Gs(i,r)}}function Gs(i,e){i.style.userSelect=e,i.style.webkitUserSelect=e}function Ay(i){const e=[...globalThis.bitsTextSelectionLayers];if(!e.length)return!1;const t=e.at(-1);return t?t[0]===i:!1}function Ry(i,e){Qe(e,!0);let t=ue(e,"preventOverflowTextSelection",3,!0),r=ue(e,"onPointerDown",3,Gt),a=ue(e,"onPointerUp",3,Gt);Ty({id:me.with(()=>e.id),preventOverflowTextSelection:me.with(()=>t()),onPointerDown:me.with(()=>r()),onPointerUp:me.with(()=>a()),enabled:me.with(()=>e.enabled)});var n=$e(),s=Ce(n);rt(s,()=>e.children??yt),oe(i,n),et()}const uc=class uc extends Map{constructor(t){super();ee(this,Ha);ee(this,Ri,new Map);ee(this,Ci,Mr(0));ee(this,Zi,Mr(0));if(t){for(var[r,a]of t)super.set(r,a);P(this,Zi).v=super.size}}has(t){var r=P(this,Ri),a=r.get(t);if(a===void 0){var n=super.get(t);if(n!==void 0)a=Mr(0),r.set(t,a);else return K(P(this,Ci)),!1}return K(a),!0}forEach(t,r){_i(this,Ha,Eo).call(this),super.forEach(t,r)}get(t){var r=P(this,Ri),a=r.get(t);if(a===void 0){var n=super.get(t);if(n!==void 0)a=Mr(0),r.set(t,a);else{K(P(this,Ci));return}}return K(a),super.get(t)}set(t,r){var f;var a=P(this,Ri),n=a.get(t),s=super.get(t),o=super.set(t,r),l=P(this,Ci);if(n===void 0)a.set(t,Mr(0)),Xe(P(this,Zi),super.size),ja(l);else if(s!==r){ja(n);var c=l.reactions===null?null:new Set(l.reactions),u=c===null||!((f=n.reactions)!=null&&f.every(d=>c.has(d)));u&&ja(l)}return o}delete(t){var r=P(this,Ri),a=r.get(t),n=super.delete(t);return a!==void 0&&(r.delete(t),Xe(P(this,Zi),super.size),Xe(a,-1),ja(P(this,Ci))),n}clear(){if(super.size!==0){super.clear();var t=P(this,Ri);Xe(P(this,Zi),0);for(var r of t.values())Xe(r,-1);ja(P(this,Ci)),t.clear()}}keys(){return K(P(this,Ci)),super.keys()}values(){return _i(this,Ha,Eo).call(this),super.values()}entries(){return _i(this,Ha,Eo).call(this),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return K(P(this,Zi)),super.size}};Ri=new WeakMap,Ci=new WeakMap,Zi=new WeakMap,Ha=new WeakSet,Eo=function(){K(P(this,Ci));var t=P(this,Ri);if(P(this,Zi).v!==t.size)for(var r of dd(uc.prototype,this,"keys").call(this))t.has(r)||t.set(r,Mr(0));for(var[,a]of P(this,Ri))K(a)};let oc=uc;function Cy(i){let e=0,t=Rt(void 0),r;function a(){e-=1,r&&e<=0&&(r(),Xe(t,void 0),r=void 0)}return(...n)=>(e+=1,K(t)===void 0&&(r=_S(()=>{Xe(t,lt(i(...n)))})),wt(()=>()=>{a()}),K(t))}const Py=Cy(()=>{const i=new oc,e=He(()=>{for(const n of i.values())if(n)return!0;return!1});let t=lt({}),r=null;function a(){nc&&(document.body.style.paddingRight=t.paddingRight??"",document.body.style.marginRight=t.marginRight??"",document.body.style.pointerEvents=t.pointerEvents??"",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=t.overflow??"",Ih&&(r==null||r()))}return wt(()=>{const n=K(e);return vi(()=>{if(!n)return;const s=getComputedStyle(document.body);t.overflow=s.overflow,t.paddingRight=s.paddingRight,t.marginRight=s.marginRight,t.pointerEvents=s.pointerEvents;const o=window.innerWidth-document.documentElement.clientWidth,l={padding:Number.parseInt(t.paddingRight??"0",10)+o,margin:Number.parseInt(t.marginRight??"0",10)};o>0&&(document.body.style.paddingRight=`${l.padding}px`,document.body.style.marginRight=`${l.margin}px`,document.body.style.setProperty("--scrollbar-width",`${o}px`),document.body.style.overflow="hidden"),Ih&&(r=wi(document,"touchmove",c=>{c.target===document.documentElement&&(c.touches.length>1||c.preventDefault())},{passive:!1})),Bs(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})})}),wt(()=>()=>{r==null||r()}),{get map(){return i},resetBodyStyle:a}});function Ly(i,e=()=>null){const t=$i(),r=Py(),a=He(e);r.map.set(t,i??!1);const n=me.with(()=>r.map.get(t)??!1,s=>r.map.set(t,s));return wt(()=>()=>{r.map.delete(t),!Uy(r.map)&&(K(a)===null?requestAnimationFrame(()=>r.resetBodyStyle()):Lh(K(a),()=>r.resetBodyStyle()))}),n}function Uy(i){for(const[e,t]of i)if(t)return!0;return!1}function Xh(i,e){Qe(e,!0);let t=ue(e,"preventScroll",3,!0),r=ue(e,"restoreScrollDelay",3,null);Ly(t(),()=>r()),et()}function Dy({forceMount:i,present:e,trapFocus:t,open:r}){return i?r&&t:e&&t&&r}var Iy=tt("<div><!></div>");function Ny(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"forceMount",3,!1),a=ue(e,"ref",15,null),n=Dt(e,["$$slots","$$events","$$legacy","id","forceMount","child","children","ref"]);const s=Zx({id:me.with(()=>t()),ref:me.with(()=>a(),c=>a(c))}),o=He(()=>pi(n,s.props));var l=He(()=>s.root.open.current||r());Oh(i,{get id(){return t()},get present(){return K(l)},presence:c=>{var u=$e(),f=Ce(u);xi(f,()=>e.child,d=>{var m=$e(),g=Ce(m),_=yd(()=>({props:pi(K(o)),...s.snippetProps}));rt(g,()=>e.child,()=>K(_)),oe(d,m)},d=>{var m=Iy();const g=He(()=>pi(K(o)));let _;var p=Et(m);rt(p,()=>e.children??yt,()=>s.snippetProps),Tt(m),Ot(()=>_=Ft(m,_,{...K(g)})),oe(d,m)}),oe(c,u)},$$slots:{presence:!0}}),et()}var Oy=tt("<button><!></button>");function Fy(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=ue(e,"disabled",3,!1),n=Dt(e,["$$slots","$$events","$$legacy","id","ref","children","child","disabled"]);const s=qx({id:me.with(()=>t()),ref:me.with(()=>r(),u=>r(u)),disabled:me.with(()=>!!a())}),o=He(()=>pi(n,s.props));var l=$e(),c=Ce(l);xi(c,()=>e.child,u=>{var f=$e(),d=Ce(f);rt(d,()=>e.child,()=>({props:K(o)})),oe(u,f)},u=>{var f=Oy();let d;var m=Et(f);rt(m,()=>e.children??yt),Tt(f),Ot(()=>d=Ft(f,d,{...K(o)})),oe(u,f)}),oe(i,l),et()}var By=tt("<div><!></div>");function zy(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=Dt(e,["$$slots","$$events","$$legacy","id","children","child","ref"]);const n=Jx({id:me.with(()=>t()),ref:me.with(()=>r(),c=>r(c))}),s=He(()=>pi(a,n.props));var o=$e(),l=Ce(o);xi(l,()=>e.child,c=>{var u=$e(),f=Ce(u);rt(f,()=>e.child,()=>({props:K(s)})),oe(c,u)},c=>{var u=By();let f;var d=Et(u);rt(d,()=>e.children??yt),Tt(u),Ot(()=>f=Ft(u,f,{...K(s)})),oe(c,u)}),oe(i,o),et()}const ky="data-separator-root";class Gy{constructor(e){ee(this,Va);ee(this,Yn);ee(this,Wa);ee(this,Xa);ee(this,vo,He(()=>({id:P(this,Va).current,role:P(this,Xa).current?"none":"separator","aria-orientation":P(this,Wa).current,"aria-hidden":Mx(P(this,Xa).current),"data-orientation":P(this,Wa).current,[ky]:""})));Ue(this,Wa,e.orientation),Ue(this,Xa,e.decorative),Ue(this,Va,e.id),Ue(this,Yn,e.ref),Ti({id:P(this,Va),ref:P(this,Yn)})}get props(){return K(P(this,vo))}}Va=new WeakMap,Yn=new WeakMap,Wa=new WeakMap,Xa=new WeakMap,vo=new WeakMap;function Hy(i){return new Gy(i)}var Vy=tt("<div><!></div>");function Wy(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=ue(e,"decorative",3,!1),n=ue(e,"orientation",3,"horizontal"),s=Dt(e,["$$slots","$$events","$$legacy","id","ref","child","children","decorative","orientation"]);const o=Hy({ref:me.with(()=>r(),f=>r(f)),id:me.with(()=>t()),decorative:me.with(()=>a()),orientation:me.with(()=>n())}),l=He(()=>pi(s,o.props));var c=$e(),u=Ce(c);xi(u,()=>e.child,f=>{var d=$e(),m=Ce(d);rt(m,()=>e.child,()=>({props:K(l)})),oe(f,d)},f=>{var d=Vy();let m;var g=Et(d);rt(g,()=>e.children??yt),Tt(d),Ot(()=>m=Ft(d,m,{...K(l)})),oe(f,d)}),oe(i,c),et()}function Xy(i,e){Qe(e,!0);let t=ue(e,"open",15,!1),r=ue(e,"onOpenChange",3,Gt),a=ue(e,"controlledOpen",3,!1);jx({variant:me.with(()=>"dialog"),open:me.with(()=>t(),o=>{a()||t(o),r()(o)})});var n=$e(),s=Ce(n);rt(s,()=>e.children??yt),oe(i,n),et()}var $y=tt("<button><!></button>");function jy(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=ue(e,"disabled",3,!1),n=Dt(e,["$$slots","$$events","$$legacy","children","child","id","ref","disabled"]);const s=Qx({variant:me.with(()=>"close"),id:me.with(()=>t()),ref:me.with(()=>r(),u=>r(u)),disabled:me.with(()=>!!a())}),o=He(()=>pi(n,s.props));var l=$e(),c=Ce(l);xi(c,()=>e.child,u=>{var f=$e(),d=Ce(f);rt(d,()=>e.child,()=>({props:K(o)})),oe(u,f)},u=>{var f=$y();let d;var m=Et(f);rt(m,()=>e.children??yt),Tt(f),Ot(()=>d=Ft(f,d,{...K(o)})),oe(u,f)}),oe(i,l),et()}var qy=tt("<!> <!>",1),Yy=tt("<!> <div><!></div>",1);function Ky(i,e){Qe(e,!0);let t=ue(e,"id",19,$i),r=ue(e,"ref",15,null),a=ue(e,"forceMount",3,!1),n=ue(e,"onCloseAutoFocus",3,Gt),s=ue(e,"onEscapeKeydown",3,Gt),o=ue(e,"onInteractOutside",3,Gt),l=ue(e,"trapFocus",3,!0),c=ue(e,"preventScroll",3,!0),u=ue(e,"restoreScrollDelay",3,null),f=Dt(e,["$$slots","$$events","$$legacy","id","children","child","ref","forceMount","onCloseAutoFocus","onEscapeKeydown","onInteractOutside","trapFocus","preventScroll","restoreScrollDelay"]);const d=Kx({id:me.with(()=>t()),ref:me.with(()=>r(),_=>r(_))}),m=He(()=>pi(f,d.props));var g=He(()=>d.root.open.current||a());Oh(i,yi(()=>K(m),{get forceMount(){return a()},get present(){return K(g)},presence:(_,p)=>{let h=()=>p==null?void 0:p().present;var b=He(()=>Dy({forceMount:a(),present:h().current,trapFocus:l(),open:d.root.open.current}));My(_,yi({loop:!0,get trapFocus(){return K(b)}},()=>K(m),{onCloseAutoFocus:E=>{var S;n()(E),!E.defaultPrevented&&((S=d.root.triggerNode)==null||S.focus())},focusScope:(E,S)=>{let O=()=>S==null?void 0:S().props;fy(E,yi(()=>K(m),{get enabled(){return h().current},onEscapeKeydown:A=>{s()(A),!A.defaultPrevented&&d.root.handleClose()},children:(A,w)=>{cy(A,yi(()=>K(m),{get enabled(){return h().current},onInteractOutside:D=>{o()(D),!D.defaultPrevented&&d.root.handleClose()},children:(D,M)=>{Ry(D,yi(()=>K(m),{get enabled(){return h().current},children:(y,C)=>{var R=$e(),F=Ce(R);xi(F,()=>e.child,B=>{var X=qy(),z=Ce(X);xi(z,()=>d.root.open.current,Y=>{Xh(Y,{get preventScroll(){return c()},get restoreScrollDelay(){return u()}})});var j=ot(z,2),k=yd(()=>({props:pi(K(m),O()),...d.snippetProps}));rt(j,()=>e.child,()=>K(k)),oe(B,X)},B=>{var X=Yy(),z=Ce(X);Xh(z,{get preventScroll(){return c()}});var j=ot(z,2);const k=He(()=>pi(K(m),O()));let Y;var ne=Et(j);rt(ne,()=>e.children??yt),Tt(j),Ot(()=>Y=Ft(j,Y,{...K(k)})),oe(B,X)}),oe(y,R)},$$slots:{default:!0}}))},$$slots:{default:!0}}))},$$slots:{default:!0}}))},$$slots:{focusScope:!0}}))},$$slots:{presence:!0}})),et()}function Zy(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class"]);var a=$e(),n=Ce(a),s=He(()=>Kt("text-lg font-semibold leading-none tracking-tight",e.class));kt(n,()=>ty,(o,l)=>{l(o,yi({get ref(){return t()},set ref(c){t(c)},get class(){return K(s)}},()=>r))}),oe(i,a),et()}var Jy=tt("<div><!></div>");function Qy(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=Jy();let n;var s=Et(a);rt(s,()=>e.children??yt),Tt(a),tr(a,o=>t(o),()=>t()),Ot(()=>n=Ft(a,n,{class:Kt("flex flex-col space-y-1.5 text-center sm:text-left",e.class),...r})),oe(i,a),et()}function eb(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class"]);var a=$e(),n=Ce(a),s=He(()=>Kt("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",e.class));kt(n,()=>Ny,(o,l)=>{l(o,yi({get ref(){return t()},set ref(c){t(c)},get class(){return K(s)}},()=>r))}),oe(i,a),et()}const tb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ib=Vb("<svg><!><!></svg>");function rb(i,e){const t=yc(e,["children","$$slots","$$events","$$legacy"]),r=yc(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Qe(e,!1);let a=ue(e,"name",8,void 0),n=ue(e,"color",8,"currentColor"),s=ue(e,"size",8,24),o=ue(e,"strokeWidth",8,2),l=ue(e,"absoluteStrokeWidth",8,!1),c=ue(e,"iconNode",24,()=>[]);const u=(..._)=>_.filter((p,h,b)=>!!p&&b.indexOf(p)===h).join(" ");RS();var f=ib();let d;var m=Et(f);qr(m,1,c,nt,(_,p)=>{let h=()=>K(p)[0],b=()=>K(p)[1];var E=$e(),S=Ce(E);wc(S,h,!0,(O,A)=>{let w;Ot(()=>w=Ft(O,w,{...b()},void 0,O.namespaceURI===vc,O.nodeName.includes("-")))}),oe(_,E)});var g=ot(m);Tc(g,e,"default",{}),Tt(f),Ot(()=>d=Ft(f,d,{...tb,...r,width:s(),height:s(),stroke:n(),"stroke-width":l()?Number(o())*24/Number(s()):o(),class:u("lucide-icon","lucide",a()?`lucide-${a()}`:"",t.class)},void 0,!0)),oe(i,f),et()}function ab(i,e){const t=yc(e,["children","$$slots","$$events","$$legacy"]);rb(i,yi({name:"x"},()=>t,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(r,a)=>{var n=$e(),s=Ce(n);Tc(s,e,"default",{}),oe(r,n)},$$slots:{default:!0}}))}var nb=tt('<!> <span class="sr-only">Close</span>',1),sb=tt("<!> <!>",1),ob=tt("<!> <!>",1);function lb(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=$e(),n=Ce(a);kt(n,()=>db,(s,o)=>{o(s,{children:(l,c)=>{var u=ob(),f=Ce(u);kt(f,()=>eb,(g,_)=>{_(g,{})});var d=ot(f,2),m=He(()=>Kt("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",e.class));kt(d,()=>Ky,(g,_)=>{_(g,yi({get ref(){return t()},set ref(p){t(p)},get class(){return K(m)}},()=>r,{children:(p,h)=>{var b=sb(),E=Ce(b);rt(E,()=>e.children??yt);var S=ot(E,2);kt(S,()=>jy,(O,A)=>{A(O,{class:"ring-offset-background focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(w,D)=>{var M=nb(),y=Ce(M);ab(y,{class:"size-4"}),zt(2),oe(w,M)},$$slots:{default:!0}})}),oe(p,b)},$$slots:{default:!0}}))}),oe(l,u)},$$slots:{default:!0}})}),oe(i,a),et()}function cb(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=Dt(e,["$$slots","$$events","$$legacy","ref","class"]);var a=$e(),n=Ce(a),s=He(()=>Kt("text-muted-foreground text-sm",e.class));kt(n,()=>zy,(o,l)=>{l(o,yi({get ref(){return t()},set ref(c){t(c)},get class(){return K(s)}},()=>r))}),oe(i,a),et()}const ub=Xy,hb=Fy,db=ry;var $h=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Zt=i=>!i||typeof i!="object"||Object.keys(i).length===0,fb=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function jh(i,e){i.forEach(function(t){Array.isArray(t)?jh(t,e):e.push(t)})}function qh(i){let e=[];return jh(i,e),e}var Yh=(...i)=>qh(i).filter(Boolean),Kh=(i,e)=>{let t={},r=Object.keys(i),a=Object.keys(e);for(let n of r)if(a.includes(n)){let s=i[n],o=e[n];Array.isArray(s)||Array.isArray(o)?t[n]=Yh(o,s):typeof s=="object"&&typeof o=="object"?t[n]=Kh(s,o):t[n]=o+" "+s}else t[n]=i[n];for(let n of a)r.includes(n)||(t[n]=e[n]);return t},Zh=i=>!i||typeof i!="string"?i:i.replace(/\s+/g," ").trim(),pb={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Jh=i=>i||void 0,mn=(...i)=>Jh(qh(i).filter(Boolean).join(" ")),lc=null,ji={},cc=!1,gn=(...i)=>e=>e.twMerge?((!lc||cc)&&(cc=!1,lc=Zt(ji)?yh:L0({...ji,extend:{theme:ji.theme,classGroups:ji.classGroups,conflictingClassGroupModifiers:ji.conflictingClassGroupModifiers,conflictingClassGroups:ji.conflictingClassGroups,...ji.extend}})),Jh(lc(mn(i)))):mn(i),Qh=(i,e)=>{for(let t in e)i.hasOwnProperty(t)?i[t]=mn(i[t],e[t]):i[t]=e[t];return i},ed=(i,e)=>{let{extend:t=null,slots:r={},variants:a={},compoundVariants:n=[],compoundSlots:s=[],defaultVariants:o={}}=i,l={...pb,...e},c=t!=null&&t.base?mn(t.base,i==null?void 0:i.base):i==null?void 0:i.base,u=t!=null&&t.variants&&!Zt(t.variants)?Kh(a,t.variants):a,f=t!=null&&t.defaultVariants&&!Zt(t.defaultVariants)?{...t.defaultVariants,...o}:o;!Zt(l.twMergeConfig)&&!fb(l.twMergeConfig,ji)&&(cc=!0,ji=l.twMergeConfig);let d=Zt(t==null?void 0:t.slots),m=Zt(r)?{}:{base:mn(i==null?void 0:i.base,d&&(t==null?void 0:t.base)),...r},g=d?m:Qh({...t==null?void 0:t.slots},Zt(m)?{base:i==null?void 0:i.base}:m),_=Zt(t==null?void 0:t.compoundVariants)?n:Yh(t==null?void 0:t.compoundVariants,n),p=b=>{if(Zt(u)&&Zt(r)&&d)return gn(c,b==null?void 0:b.class,b==null?void 0:b.className)(l);if(_&&!Array.isArray(_))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof _}`);if(s&&!Array.isArray(s))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);let E=(R,F,B=[],X)=>{let z=B;if(typeof F=="string")z=z.concat(Zh(F).split(" ").map(j=>`${R}:${j}`));else if(Array.isArray(F))z=z.concat(F.reduce((j,k)=>j.concat(`${R}:${k}`),[]));else if(typeof F=="object"&&typeof X=="string"){for(let j in F)if(F.hasOwnProperty(j)&&j===X){let k=F[j];if(k&&typeof k=="string"){let Y=Zh(k);z[X]?z[X]=z[X].concat(Y.split(" ").map(ne=>`${R}:${ne}`)):z[X]=Y.split(" ").map(ne=>`${R}:${ne}`)}else Array.isArray(k)&&k.length>0&&(z[X]=k.reduce((Y,ne)=>Y.concat(`${R}:${ne}`),[]))}}return z},S=(R,F=u,B=null,X=null)=>{var z;let j=F[R];if(!j||Zt(j))return null;let k=(z=X==null?void 0:X[R])!=null?z:b==null?void 0:b[R];if(k===null)return null;let Y=$h(k),ne=Array.isArray(l.responsiveVariants)&&l.responsiveVariants.length>0||l.responsiveVariants===!0,xe=f==null?void 0:f[R],Te=[];if(typeof Y=="object"&&ne)for(let[ie,ge]of Object.entries(Y)){let se=j[ge];if(ie==="initial"){xe=ge;continue}Array.isArray(l.responsiveVariants)&&!l.responsiveVariants.includes(ie)||(Te=E(ie,se,Te,B))}let We=Y!=null&&typeof Y!="object"?Y:$h(xe),q=j[We||"false"];return typeof Te=="object"&&typeof B=="string"&&Te[B]?Qh(Te,q):Te.length>0?(Te.push(q),B==="base"?Te.join(" "):Te):q},O=()=>u?Object.keys(u).map(R=>S(R,u)):null,A=(R,F)=>{if(!u||typeof u!="object")return null;let B=new Array;for(let X in u){let z=S(X,u,R,F),j=R==="base"&&typeof z=="string"?z:z&&z[R];j&&(B[B.length]=j)}return B},w={};for(let R in b)b[R]!==void 0&&(w[R]=b[R]);let D=(R,F)=>{var B;let X=typeof(b==null?void 0:b[R])=="object"?{[R]:(B=b[R])==null?void 0:B.initial}:{};return{...f,...w,...X,...F}},M=(R=[],F)=>{let B=[];for(let{class:X,className:z,...j}of R){let k=!0;for(let[Y,ne]of Object.entries(j)){let xe=D(Y,F)[Y];if(Array.isArray(ne)){if(!ne.includes(xe)){k=!1;break}}else{let Te=We=>We==null||We===!1;if(Te(ne)&&Te(xe))continue;if(xe!==ne){k=!1;break}}}k&&(X&&B.push(X),z&&B.push(z))}return B},y=R=>{let F=M(_,R);if(!Array.isArray(F))return F;let B={};for(let X of F)if(typeof X=="string"&&(B.base=gn(B.base,X)(l)),typeof X=="object")for(let[z,j]of Object.entries(X))B[z]=gn(B[z],j)(l);return B},C=R=>{if(s.length<1)return null;let F={};for(let{slots:B=[],class:X,className:z,...j}of s){if(!Zt(j)){let k=!0;for(let Y of Object.keys(j)){let ne=D(Y,R)[Y];if(ne===void 0||(Array.isArray(j[Y])?!j[Y].includes(ne):j[Y]!==ne)){k=!1;break}}if(!k)continue}for(let k of B)F[k]=F[k]||[],F[k].push([X,z])}return F};if(!Zt(r)||!d){let R={};if(typeof g=="object"&&!Zt(g))for(let F of Object.keys(g))R[F]=B=>{var X,z;return gn(g[F],A(F,B),((X=y(B))!=null?X:[])[F],((z=C(B))!=null?z:[])[F],B==null?void 0:B.class,B==null?void 0:B.className)(l)};return R}return gn(c,O(),M(_),b==null?void 0:b.class,b==null?void 0:b.className)(l)},h=()=>{if(!(!u||typeof u!="object"))return Object.keys(u)};return p.variantKeys=h(),p.extend=t,p.base=c,p.slots=g,p.variants=u,p.defaultVariants=f,p.compoundSlots=s,p.compoundVariants=_,p};const td=ed({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});var mb=tt("<a><!></a>"),gb=tt("<button><!></button>");function gr(i,e){Qe(e,!0);let t=ue(e,"variant",3,"default"),r=ue(e,"size",3,"default"),a=ue(e,"ref",15,null),n=ue(e,"href",3,void 0),s=ue(e,"type",3,"button"),o=Dt(e,["$$slots","$$events","$$legacy","class","variant","size","ref","href","type","children"]);var l=$e(),c=Ce(l);xi(c,n,u=>{var f=mb();let d;var m=Et(f);rt(m,()=>e.children??yt),Tt(f),tr(f,g=>a(g),()=>a()),Ot(()=>d=Ft(f,d,{class:Kt(td({variant:t(),size:r(),className:e.class})),href:n(),...o})),oe(u,f)},u=>{var f=gb();let d;var m=Et(f);rt(m,()=>e.children??yt),Tt(f),tr(f,g=>a(g),()=>a()),Ot(()=>d=Ft(f,d,{class:Kt(td({variant:t(),size:r(),className:e.class})),type:s(),...o})),oe(u,f)}),oe(i,l),et()}var _b=tt("<input>");function vb(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=ue(e,"value",15),a=Dt(e,["$$slots","$$events","$$legacy","ref","value","class"]);var n=_b();Pd(n);let s;tr(n,o=>t(o),()=>t()),Ot(()=>s=Ft(n,s,{class:Kt("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class),...a})),Ld(n,r),oe(i,n),et()}function xb(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=ue(e,"orientation",3,"horizontal"),a=Dt(e,["$$slots","$$events","$$legacy","ref","class","orientation"]);var n=$e(),s=Ce(n),o=He(()=>Kt("bg-border shrink-0",r()==="horizontal"?"h-[1px] w-full":"min-h-full w-[1px]",e.class));kt(s,()=>Wy,(l,c)=>{c(l,yi({get ref(){return t()},set ref(u){t(u)},get class(){return K(o)},get orientation(){return r()}},()=>a))}),oe(i,n),et()}const yb=ed({base:"focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",outline:"text-foreground",kbd:"px-2 text-foreground bg-background shadow-sm"}},defaultVariants:{variant:"default"}});function _n(i,e){Qe(e,!0);let t=ue(e,"ref",15,null),r=ue(e,"variant",3,"default"),a=Dt(e,["$$slots","$$events","$$legacy","ref","href","class","variant","children"]);var n=$e(),s=Ce(n);wc(s,()=>e.href?"a":"span",!1,(o,l)=>{tr(o,d=>t(d),()=>t());let c;Ot(()=>c=Ft(o,c,{href:e.href,class:Kt(yb({variant:r(),className:e.class})),...a},void 0,o.namespaceURI===vc,o.nodeName.includes("-")));var u=$e(),f=Ce(u);rt(f,()=>e.children??yt),oe(l,u)}),oe(i,n),et()}function id(){const i=document.querySelector("#canvas-size").clientTop,e=document.querySelector("#canvas-size").clientLeft,t=document.querySelector("#canvas-size").clientWidth,r=document.querySelector("#canvas-size").clientHeight;return{top:i,left:e,width:t,height:r}}function wa(i,e){Qe(e,!0);const t=xc("threeEnv");function r(){t.renderer.setPixelRatio(1),t.renderer.setSize(e.resolution[0],e.resolution[1]),t.uniforms.resolution.value.x=e.resolution[0],t.uniforms.resolution.value.y=e.resolution[1],t.renderer.render(t.scene,t.camera),t.renderer.render(t.scene,t.camera);var a=t.renderer.domElement.toDataURL(),n=new Image;n.src=a;const s=document.createElement("a");document.body.appendChild(s),s.href=a,s.target="_self",s.download=`renderer@${e.resolution[0]}x${e.resolution[1]}.png`,s.click();const o=id();t.renderer.setPixelRatio(window.devicePixelRatio),t.renderer.setSize(o.width,o.height),t.uniforms.resolution.value.x=o.width*window.devicePixelRatio,t.uniforms.resolution.value.y=o.height*window.devicePixelRatio}gr(i,{variant:"outline",onclick:r,children:(a,n)=>{zt();var s=Li();Ot(()=>wS(s,`${e.title??""} (${e.resolution[0]??""}x${e.resolution[1]??""})`)),oe(a,s)},$$slots:{default:!0}}),et()}var bb=tt("Pause <!>",1),Sb=tt("<code>t</code> variable (in percents of PI)",1),Mb=tt('<div class="grid grid-cols-[1fr_3fr_1fr] gap-1"><!> <!> <!></div>'),Eb=tt("<!> <!>",1),Tb=tt("Custom Grammar <!>",1),wb=tt("Download <!>",1),Ab=tt("<!> <!>",1),Rb=tt("Custom <!>",1),Cb=tt('<!> <div class="flex flex-col gap-2"><!> <!> <!> <!> <!> <!> <!> <!></div>',1),Pb=tt("<!> <!>",1),Lb=tt("Recompile <!>",1),Ub=tt(`<div class="controls svelte-16lckao"><div><h1>Randomart</h1> <p>Reimplementation of <a href="https://github.com/tsoding/randomart">Tsoding's randomart</a>, but in Rust and for Web</p> <ul class="my-2"><li><a href="https://github.com/idkncc/randomart">Github repo</a></li> <li><a href="http://users.ece.cmu.edu/~adrian/projects/validation/validation.pdf">Hash visualization PDF</a></li></ul></div> <div class="flags svelte-16lckao"><div class="flex flex-col gap-2"><!> <!></div> <!></div> <div class="flex-grow"></div> <div class="flex flex-col gap-2"><!>   <!></div></div>`);function Db(i,e){Qe(e,!0);const t=xc("threeEnv");let r=Rt(!1);function a(h){h.key==="r"?(h.preventDefault(),n()):h.key==="d"?(h.preventDefault(),Xe(r,!0)):h.key==="p"&&(h.preventDefault(),t.flags.stopAnimation=!t.flags.stopAnimation)}function n(){const h=Wv();t.mesh.material=new Wi({uniforms:t.uniforms,vertexShader:`#define GLSLIFY 1

            void main() {
                // Vertex shader output
                gl_Position = vec4(position, 1.0);
            }`,fragmentShader:h})}var s=Ub();Ed("keydown",bd,a);var o=ot(Et(s),2),l=Et(o),c=Et(l),u=He(()=>t.flags.stopAnimation?"default":"secondary");gr(c,{class:"w-full",get variant(){return K(u)},onclick:()=>t.flags.stopAnimation=!t.flags.stopAnimation,children:(h,b)=>{zt();var E=bb(),S=ot(Ce(E));_n(S,{variant:"kbd",class:"rounded-sm px-1",children:(O,A)=>{zt();var w=Li("p");oe(O,w)},$$slots:{default:!0}}),oe(h,E)},$$slots:{default:!0}});var f=ot(c,2),d=He(()=>`${t.flags.stopAnimation?"flex":"hidden"} w-full flex-col gap-1.5`);kt(f,()=>D0,(h,b)=>{b(h,{get class(){return K(d)},children:(E,S)=>{var O=Eb(),A=Ce(O);kt(A,()=>F0,(D,M)=>{M(D,{children:(y,C)=>{var R=$e(),F=Ce(R);kt(F,()=>z0,(B,X)=>{X(B,{level:2,children:(z,j)=>{var k=Sb();zt(),oe(z,k)},$$slots:{default:!0}})}),oe(y,R)},$$slots:{default:!0}})});var w=ot(A,2);kt(w,()=>N0,(D,M)=>{M(D,{children:(y,C)=>{var R=Mb(),F=Et(R);gr(F,{variant:"outline",onclick:()=>t.flags.currentFrame-=5,children:(z,j)=>{zt();var k=Li("-5");oe(z,k)},$$slots:{default:!0}});var B=ot(F,2);vb(B,{type:"number",id:"current-frame",placeholder:"0-100",min:0,max:100,get value(){return t.flags.currentFrame},set value(z){t.flags.currentFrame=z}});var X=ot(B,2);gr(X,{variant:"outline",onclick:()=>t.flags.currentFrame+=5,children:(z,j)=>{zt();var k=Li("+5");oe(z,k)},$$slots:{default:!0}}),Tt(R),oe(y,R)},$$slots:{default:!0}})}),oe(E,O)},$$slots:{default:!0}})}),Tt(l);var m=ot(l,2);gr(m,{variant:"secondary",disabled:!0,children:(h,b)=>{zt();var E=Tb(),S=ot(Ce(E));_n(S,{variant:"outline",children:(O,A)=>{zt();var w=Li("maybe in da future");oe(O,w)},$$slots:{default:!0}}),oe(h,E)},$$slots:{default:!0}}),Tt(o);var g=ot(o,4),_=Et(g);kt(_,()=>ub,(h,b)=>{b(h,{get open(){return K(r)},set open(E){Xe(r,lt(E))},children:(E,S)=>{var O=Pb(),A=Ce(O);kt(A,()=>hb,(D,M)=>{M(D,{children:(y,C)=>{gr(y,{variant:"secondary",class:"w-full",children:(R,F)=>{zt();var B=wb(),X=ot(Ce(B));_n(X,{variant:"kbd",class:"rounded-sm px-1",children:(z,j)=>{zt();var k=Li("d");oe(z,k)},$$slots:{default:!0}}),oe(R,B)},$$slots:{default:!0}})},$$slots:{default:!0}})});var w=ot(A,2);kt(w,()=>lb,(D,M)=>{M(D,{children:(y,C)=>{var R=Cb(),F=Ce(R);kt(F,()=>Qy,(We,q)=>{q(We,{children:(ie,ge)=>{var se=Ab(),we=Ce(se);kt(we,()=>Zy,(ze,dt)=>{dt(ze,{children:(Ve,St)=>{zt();var I=Li("Download");oe(Ve,I)},$$slots:{default:!0}})});var De=ot(we,2);kt(De,()=>cb,(ze,dt)=>{dt(ze,{children:(Ve,St)=>{zt();var I=Li("Select the resolution of render image");oe(Ve,I)},$$slots:{default:!0}})}),oe(ie,se)},$$slots:{default:!0}})});var B=ot(F,2),X=Et(B);wa(X,{title:"Current screen resolution",resolution:[window.screen.width*window.devicePixelRatio,window.screen.height*window.devicePixelRatio]});var z=ot(X,2);xb(z,{});var j=ot(z,2);wa(j,{title:"Ultrawide",resolution:[3440,1440]});var k=ot(j,2);wa(k,{title:"4K UHD",resolution:[3840,2160]});var Y=ot(k,2);wa(Y,{title:"QHD",resolution:[2560,1440]});var ne=ot(Y,2);wa(ne,{title:"Full HD",resolution:[1920,1080]});var xe=ot(ne,2);wa(xe,{title:"Square",resolution:[1024,1024]});var Te=ot(xe,2);gr(Te,{variant:"outline",disabled:!0,children:(We,q)=>{zt();var ie=Rb(),ge=ot(Ce(ie));_n(ge,{variant:"outline",children:(se,we)=>{zt();var De=Li("SOON");oe(se,De)},$$slots:{default:!0}}),oe(We,ie)},$$slots:{default:!0}}),Tt(B),oe(y,R)},$$slots:{default:!0}})}),oe(E,O)},$$slots:{default:!0}})});var p=ot(_,2);gr(p,{onclick:n,children:(h,b)=>{zt();var E=Lb(),S=ot(Ce(E));_n(S,{variant:"kbd",class:"rounded-sm px-1",children:(O,A)=>{zt();var w=Li("r");oe(O,w)},$$slots:{default:!0}}),oe(h,E)},$$slots:{default:!0}}),Tt(g),Tt(s),oe(i,s),et()}var Ib=tt('<div class="randomart"><div id="canvas-size"></div> <!></div> <div id="canvas-container"></div>',1);Td=function(i,e){Qe(e,!0);let t=lt({renderer:void 0,scene:void 0,camera:void 0,clock:void 0,mesh:void 0,uniforms:void 0,flags:{stopAnimation:!1,currentFrame:50}});xd("threeEnv",t),wt(()=>{t.uniforms&&t.flags.stopAnimation&&(t.uniforms.time.value=Math.PI*(t.flags.currentFrame/100))}),AS(()=>{const o=id();t.renderer=new Nv,t.renderer.setPixelRatio(window.devicePixelRatio),t.renderer.setSize(o.width,o.height);var l=document.querySelector("#canvas-container");l.appendChild(t.renderer.domElement),t.renderer.domElement.style.position="absolute",t.renderer.domElement.style.top=`${o.top}px`,t.renderer.domElement.style.left=`${o.left}px`,t.scene=new Ov,t.camera=new Lu(-1,1,1,-1,0,1),t.clock=new Fv(!0);var c=new on(2,2);t.uniforms={time:new Ns(0),resolution:new Ns(new ut(o.width,o.height).multiplyScalar(window.devicePixelRatio))},t.mesh=new Mi(c),t.scene.add(t.mesh);function u(){t.flags.stopAnimation||(t.uniforms.time.value=t.clock.getElapsedTime()),t.renderer.render(t.scene,t.camera),requestAnimationFrame(u)}requestAnimationFrame(u)});function r(){const o=document.querySelector("#canvas-size").clientWidth,l=document.querySelector("#canvas-size").clientHeight;t.renderer.setSize(o,l),t.uniforms.resolution.value.x=o*window.devicePixelRatio,t.uniforms.resolution.value.y=l*window.devicePixelRatio}var a=Ib();Ed("resize",bd,r);var n=Ce(a),s=ot(Et(n),2);Db(s,{}),Tt(n),zt(2),oe(i,a),et()}})();export{CS as __tla,Td as component};
