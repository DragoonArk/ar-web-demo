(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Fx="modulepreload",Mx=function(r,e){return new URL(r,e).href},yo={},M0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),x=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(t.map(c=>{if(c=Mx(c,n),c in yo)return;yo[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!n)for(let E=o.length-1;E>=0;E--){const m=o[E];if(m.href===c&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Fx,l||(p.as="script"),p.crossOrigin="",p.href=c,x&&p.setAttribute("nonce",x),document.head.appendChild(p),l)return new Promise((E,m)=>{p.addEventListener("load",E),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function yx(r={}){const{immediate:e=!1,onNeedReload:t,onNeedRefresh:n,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:a}=r;let x,c;const l=async(d=!0)=>{await c};async function u(){if("serviceWorker"in navigator){if(x=await M0(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:d}},[],import.meta.url).then(({Workbox:d})=>new d("./sw.js",{scope:"./",type:"classic"})).catch(d=>{a?.(d)}),!x)return;x.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&(t?t():window.location.reload())}),x.addEventListener("installed",d=>{d.isUpdate||i?.()}),x.register({immediate:e}).then(d=>{o?o("./sw.js",d):s?.(d)}).catch(d=>{a?.(d)})}}return c=u(),l}const Sx=["site","models"],Tx=["id","path","scale","offset","rotationDeg"];function Hs(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function So(r,e){for(const t of e)if(!(t in r))throw new Error(`invalid site config: missing required field: ${t}`)}function To(r,e){if(!Hs(r)||typeof r.x!="number"||typeof r.y!="number"||typeof r.z!="number")throw new Error(`invalid site config: ${e} must be { x, y, z }`);return{x:r.x,y:r.y,z:r.z}}function bx(r){let e;try{e=JSON.parse(r)}catch{throw new Error("invalid site config: not valid JSON")}if(!Hs(e))throw new Error("invalid site config: expected object");if(So(e,Sx),typeof e.site!="string"||!Array.isArray(e.models))throw new Error("invalid site config: site must be string and models must be array");const t=e.models.map(n=>{if(!Hs(n))throw new Error("invalid site config: each model must be an object");if(So(n,Tx),typeof n.id!="string"||typeof n.path!="string"||typeof n.scale!="number")throw new Error("invalid site config: model id/path must be strings and scale must be a number");return{id:n.id,path:n.path,scale:n.scale,offset:To(n.offset,"model.offset"),rotationDeg:To(n.rotationDeg,"model.rotationDeg")}});return{site:e.site,models:t}}const wx=["v","site","floor","model","sizeCm"];function Rx(r){let e;try{e=JSON.parse(r)}catch{throw new Error("invalid QR payload: not valid JSON")}if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("invalid QR payload: expected object");const t=e;for(const n of wx)if(!(n in t))throw new Error(`invalid QR payload: missing required field: ${n}`);if(typeof t.sizeCm!="number"||!Number.isFinite(t.sizeCm)||t.sizeCm<=0)throw new Error("invalid QR payload: sizeCm must be a positive number");return{v:t.v,site:String(t.site),floor:String(t.floor),model:String(t.model),sizeCm:t.sizeCm,...typeof t.qrId=="string"?{qrId:t.qrId}:{}}}var Px=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function tm(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}var y0={exports:{}};(function(r,e){(function(n,i){r.exports=i()})(typeof self<"u"?self:Px,function(){return function(t){var n={};function i(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=n,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=3)}([function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function o(a,x){this.width=x,this.height=a.length/x,this.data=a}return o.createEmpty=function(a,x){return new o(new Uint8ClampedArray(a*x),a)},o.prototype.get=function(a,x){return a<0||a>=this.width||x<0||x>=this.height?!1:!!this.data[x*this.width+a]},o.prototype.set=function(a,x,c){this.data[x*this.width+a]=c?1:0},o.prototype.setRegion=function(a,x,c,l,u){for(var d=x;d<x+l;d++)for(var p=a;p<a+c;p++)this.set(p,d,!!u)},o}();n.BitMatrix=s},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(2);function o(x,c){return x^c}n.addOrSubtractGF=o;var a=function(){function x(c,l,u){this.primitive=c,this.size=l,this.generatorBase=u,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var d=1,p=0;p<this.size;p++)this.expTable[p]=d,d=d*2,d>=this.size&&(d=(d^this.primitive)&this.size-1);for(var p=0;p<this.size-1;p++)this.logTable[this.expTable[p]]=p;this.zero=new s.default(this,Uint8ClampedArray.from([0])),this.one=new s.default(this,Uint8ClampedArray.from([1]))}return x.prototype.multiply=function(c,l){return c===0||l===0?0:this.expTable[(this.logTable[c]+this.logTable[l])%(this.size-1)]},x.prototype.inverse=function(c){if(c===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[c]-1]},x.prototype.buildMonomial=function(c,l){if(c<0)throw new Error("Invalid monomial degree less than 0");if(l===0)return this.zero;var u=new Uint8ClampedArray(c+1);return u[0]=l,new s.default(this,u)},x.prototype.log=function(c){if(c===0)throw new Error("Can't take log(0)");return this.logTable[c]},x.prototype.exp=function(c){return this.expTable[c]},x}();n.default=a},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(1),o=function(){function a(x,c){if(c.length===0)throw new Error("No coefficients.");this.field=x;var l=c.length;if(l>1&&c[0]===0){for(var u=1;u<l&&c[u]===0;)u++;if(u===l)this.coefficients=x.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(l-u);for(var d=0;d<this.coefficients.length;d++)this.coefficients[d]=c[u+d]}}else this.coefficients=c}return a.prototype.degree=function(){return this.coefficients.length-1},a.prototype.isZero=function(){return this.coefficients[0]===0},a.prototype.getCoefficient=function(x){return this.coefficients[this.coefficients.length-1-x]},a.prototype.addOrSubtract=function(x){var c;if(this.isZero())return x;if(x.isZero())return this;var l=this.coefficients,u=x.coefficients;l.length>u.length&&(c=[u,l],l=c[0],u=c[1]);for(var d=new Uint8ClampedArray(u.length),p=u.length-l.length,E=0;E<p;E++)d[E]=u[E];for(var E=p;E<u.length;E++)d[E]=s.addOrSubtractGF(l[E-p],u[E]);return new a(this.field,d)},a.prototype.multiply=function(x){if(x===0)return this.field.zero;if(x===1)return this;for(var c=this.coefficients.length,l=new Uint8ClampedArray(c),u=0;u<c;u++)l[u]=this.field.multiply(this.coefficients[u],x);return new a(this.field,l)},a.prototype.multiplyPoly=function(x){if(this.isZero()||x.isZero())return this.field.zero;for(var c=this.coefficients,l=c.length,u=x.coefficients,d=u.length,p=new Uint8ClampedArray(l+d-1),E=0;E<l;E++)for(var m=c[E],f=0;f<d;f++)p[E+f]=s.addOrSubtractGF(p[E+f],this.field.multiply(m,u[f]));return new a(this.field,p)},a.prototype.multiplyByMonomial=function(x,c){if(x<0)throw new Error("Invalid degree less than 0");if(c===0)return this.field.zero;for(var l=this.coefficients.length,u=new Uint8ClampedArray(l+x),d=0;d<l;d++)u[d]=this.field.multiply(this.coefficients[d],c);return new a(this.field,u)},a.prototype.evaluateAt=function(x){var c=0;if(x===0)return this.getCoefficient(0);var l=this.coefficients.length;if(x===1)return this.coefficients.forEach(function(d){c=s.addOrSubtractGF(c,d)}),c;c=this.coefficients[0];for(var u=1;u<l;u++)c=s.addOrSubtractGF(this.field.multiply(x,c),this.coefficients[u]);return c},a}();n.default=o},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(4),o=i(5),a=i(11),x=i(12);function c(d){var p=x.locate(d);if(!p)return null;for(var E=0,m=p;E<m.length;E++){var f=m[E],h=a.extract(d,f),B=o.decode(h.matrix);if(B)return{binaryData:B.bytes,data:B.text,chunks:B.chunks,version:B.version,location:{topRightCorner:h.mappingFunction(f.dimension,0),topLeftCorner:h.mappingFunction(0,0),bottomRightCorner:h.mappingFunction(f.dimension,f.dimension),bottomLeftCorner:h.mappingFunction(0,f.dimension),topRightFinderPattern:f.topRight,topLeftFinderPattern:f.topLeft,bottomLeftFinderPattern:f.bottomLeft,bottomRightAlignmentPattern:f.alignmentPattern}}}return null}var l={inversionAttempts:"attemptBoth"};function u(d,p,E,m){m===void 0&&(m={});var f=l;Object.keys(f||{}).forEach(function(_){f[_]=m[_]||f[_]});var h=f.inversionAttempts==="attemptBoth"||f.inversionAttempts==="invertFirst",B=f.inversionAttempts==="onlyInvert"||f.inversionAttempts==="invertFirst",A=s.binarize(d,p,E,h),g=A.binarized,D=A.inverted,v=c(B?D:g);return!v&&(f.inversionAttempts==="attemptBoth"||f.inversionAttempts==="invertFirst")&&(v=c(B?g:D)),v}u.default=u,n.default=u},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(0),o=8,a=24;function x(u,d,p){return u<d?d:u>p?p:u}var c=function(){function u(d,p){this.width=d,this.data=new Uint8ClampedArray(d*p)}return u.prototype.get=function(d,p){return this.data[p*this.width+d]},u.prototype.set=function(d,p,E){this.data[p*this.width+d]=E},u}();function l(u,d,p,E){if(u.length!==d*p*4)throw new Error("Malformed data passed to binarizer.");for(var m=new c(d,p),f=0;f<d;f++)for(var h=0;h<p;h++){var B=u[(h*d+f)*4+0],A=u[(h*d+f)*4+1],g=u[(h*d+f)*4+2];m.set(f,h,.2126*B+.7152*A+.0722*g)}for(var D=Math.ceil(d/o),v=Math.ceil(p/o),_=new c(D,v),b=0;b<v;b++)for(var C=0;C<D;C++){for(var M=0,R=1/0,N=0,h=0;h<o;h++)for(var f=0;f<o;f++){var K=m.get(C*o+f,b*o+h);M+=K,R=Math.min(R,K),N=Math.max(N,K)}var T=M/Math.pow(o,2);if(N-R<=a&&(T=R/2,b>0&&C>0)){var P=(_.get(C,b-1)+2*_.get(C-1,b)+_.get(C-1,b-1))/4;R<P&&(T=P)}_.set(C,b,T)}var O=s.BitMatrix.createEmpty(d,p),k=null;E&&(k=s.BitMatrix.createEmpty(d,p));for(var b=0;b<v;b++)for(var C=0;C<D;C++){for(var j=x(C,2,D-3),X=x(b,2,v-3),M=0,Z=-2;Z<=2;Z++)for(var G=-2;G<=2;G++)M+=_.get(j+Z,X+G);for(var ee=M/25,Z=0;Z<o;Z++)for(var G=0;G<o;G++){var f=C*o+Z,h=b*o+G,V=m.get(f,h);O.set(f,h,V<=ee),E&&k.set(f,h,!(V<=ee))}}return E?{binarized:O,inverted:k}:{binarized:O}}n.binarize=l},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(0),o=i(6),a=i(9),x=i(10);function c(g,D){for(var v=g^D,_=0;v;)_++,v&=v-1;return _}function l(g,D){return D<<1|g}var u=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],d=[function(g){return(g.y+g.x)%2===0},function(g){return g.y%2===0},function(g){return g.x%3===0},function(g){return(g.y+g.x)%3===0},function(g){return(Math.floor(g.y/2)+Math.floor(g.x/3))%2===0},function(g){return g.x*g.y%2+g.x*g.y%3===0},function(g){return(g.y*g.x%2+g.y*g.x%3)%2===0},function(g){return((g.y+g.x)%2+g.y*g.x%3)%2===0}];function p(g){var D=17+4*g.versionNumber,v=s.BitMatrix.createEmpty(D,D);v.setRegion(0,0,9,9,!0),v.setRegion(D-8,0,8,9,!0),v.setRegion(0,D-8,9,8,!0);for(var _=0,b=g.alignmentPatternCenters;_<b.length;_++)for(var C=b[_],M=0,R=g.alignmentPatternCenters;M<R.length;M++){var N=R[M];C===6&&N===6||C===6&&N===D-7||C===D-7&&N===6||v.setRegion(C-2,N-2,5,5,!0)}return v.setRegion(6,9,1,D-17,!0),v.setRegion(9,6,D-17,1,!0),g.versionNumber>6&&(v.setRegion(D-11,0,3,6,!0),v.setRegion(0,D-11,6,3,!0)),v}function E(g,D,v){for(var _=d[v.dataMask],b=g.height,C=p(D),M=[],R=0,N=0,K=!0,T=b-1;T>0;T-=2){T===6&&T--;for(var P=0;P<b;P++)for(var O=K?b-1-P:P,k=0;k<2;k++){var j=T-k;if(!C.get(j,O)){N++;var X=g.get(j,O);_({y:O,x:j})&&(X=!X),R=l(X,R),N===8&&(M.push(R),N=0,R=0)}}K=!K}return M}function m(g){var D=g.height,v=Math.floor((D-17)/4);if(v<=6)return x.VERSIONS[v-1];for(var _=0,b=5;b>=0;b--)for(var C=D-9;C>=D-11;C--)_=l(g.get(C,b),_);for(var M=0,C=5;C>=0;C--)for(var b=D-9;b>=D-11;b--)M=l(g.get(C,b),M);for(var R=1/0,N,K=0,T=x.VERSIONS;K<T.length;K++){var P=T[K];if(P.infoBits===_||P.infoBits===M)return P;var O=c(_,P.infoBits);O<R&&(N=P,R=O),O=c(M,P.infoBits),O<R&&(N=P,R=O)}if(R<=3)return N}function f(g){for(var D=0,v=0;v<=8;v++)v!==6&&(D=l(g.get(v,8),D));for(var _=7;_>=0;_--)_!==6&&(D=l(g.get(8,_),D));for(var b=g.height,C=0,_=b-1;_>=b-7;_--)C=l(g.get(8,_),C);for(var v=b-8;v<b;v++)C=l(g.get(v,8),C);for(var M=1/0,R=null,N=0,K=u;N<K.length;N++){var T=K[N],P=T.bits,O=T.formatInfo;if(P===D||P===C)return O;var k=c(D,P);k<M&&(R=O,M=k),D!==C&&(k=c(C,P),k<M&&(R=O,M=k))}return M<=3?R:null}function h(g,D,v){var _=D.errorCorrectionLevels[v],b=[],C=0;if(_.ecBlocks.forEach(function(X){for(var Z=0;Z<X.numBlocks;Z++)b.push({numDataCodewords:X.dataCodewordsPerBlock,codewords:[]}),C+=X.dataCodewordsPerBlock+_.ecCodewordsPerBlock}),g.length<C)return null;g=g.slice(0,C);for(var M=_.ecBlocks[0].dataCodewordsPerBlock,R=0;R<M;R++)for(var N=0,K=b;N<K.length;N++){var T=K[N];T.codewords.push(g.shift())}if(_.ecBlocks.length>1)for(var P=_.ecBlocks[0].numBlocks,O=_.ecBlocks[1].numBlocks,R=0;R<O;R++)b[P+R].codewords.push(g.shift());for(;g.length>0;)for(var k=0,j=b;k<j.length;k++){var T=j[k];T.codewords.push(g.shift())}return b}function B(g){var D=m(g);if(!D)return null;var v=f(g);if(!v)return null;var _=E(g,D,v),b=h(_,D,v.errorCorrectionLevel);if(!b)return null;for(var C=b.reduce(function(k,j){return k+j.numDataCodewords},0),M=new Uint8ClampedArray(C),R=0,N=0,K=b;N<K.length;N++){var T=K[N],P=a.decode(T.codewords,T.codewords.length-T.numDataCodewords);if(!P)return null;for(var O=0;O<T.numDataCodewords;O++)M[R++]=P[O]}try{return o.decode(M,D.versionNumber)}catch{return null}}function A(g){if(g==null)return null;var D=B(g);if(D)return D;for(var v=0;v<g.width;v++)for(var _=v+1;_<g.height;_++)g.get(v,_)!==g.get(_,v)&&(g.set(v,_,!g.get(v,_)),g.set(_,v,!g.get(_,v)));return B(g)}n.decode=A},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(7),o=i(8),a;(function(m){m.Numeric="numeric",m.Alphanumeric="alphanumeric",m.Byte="byte",m.Kanji="kanji",m.ECI="eci"})(a=n.Mode||(n.Mode={}));var x;(function(m){m[m.Terminator=0]="Terminator",m[m.Numeric=1]="Numeric",m[m.Alphanumeric=2]="Alphanumeric",m[m.Byte=4]="Byte",m[m.Kanji=8]="Kanji",m[m.ECI=7]="ECI"})(x||(x={}));function c(m,f){for(var h=[],B="",A=[10,12,14][f],g=m.readBits(A);g>=3;){var D=m.readBits(10);if(D>=1e3)throw new Error("Invalid numeric value above 999");var v=Math.floor(D/100),_=Math.floor(D/10)%10,b=D%10;h.push(48+v,48+_,48+b),B+=v.toString()+_.toString()+b.toString(),g-=3}if(g===2){var D=m.readBits(7);if(D>=100)throw new Error("Invalid numeric value above 99");var v=Math.floor(D/10),_=D%10;h.push(48+v,48+_),B+=v.toString()+_.toString()}else if(g===1){var D=m.readBits(4);if(D>=10)throw new Error("Invalid numeric value above 9");h.push(48+D),B+=D.toString()}return{bytes:h,text:B}}var l=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function u(m,f){for(var h=[],B="",A=[9,11,13][f],g=m.readBits(A);g>=2;){var D=m.readBits(11),v=Math.floor(D/45),_=D%45;h.push(l[v].charCodeAt(0),l[_].charCodeAt(0)),B+=l[v]+l[_],g-=2}if(g===1){var v=m.readBits(6);h.push(l[v].charCodeAt(0)),B+=l[v]}return{bytes:h,text:B}}function d(m,f){for(var h=[],B="",A=[8,16,16][f],g=m.readBits(A),D=0;D<g;D++){var v=m.readBits(8);h.push(v)}try{B+=decodeURIComponent(h.map(function(_){return"%"+("0"+_.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:h,text:B}}function p(m,f){for(var h=[],B="",A=[8,10,12][f],g=m.readBits(A),D=0;D<g;D++){var v=m.readBits(13),_=Math.floor(v/192)<<8|v%192;_<7936?_+=33088:_+=49472,h.push(_>>8,_&255),B+=String.fromCharCode(o.shiftJISTable[_])}return{bytes:h,text:B}}function E(m,f){for(var h,B,A,g,D=new s.BitStream(m),v=f<=9?0:f<=26?1:2,_={text:"",bytes:[],chunks:[],version:f};D.available()>=4;){var b=D.readBits(4);if(b===x.Terminator)return _;if(b===x.ECI)D.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:D.readBits(7)}):D.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:D.readBits(14)}):D.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:D.readBits(21)}):_.chunks.push({type:a.ECI,assignmentNumber:-1});else if(b===x.Numeric){var C=c(D,v);_.text+=C.text,(h=_.bytes).push.apply(h,C.bytes),_.chunks.push({type:a.Numeric,text:C.text})}else if(b===x.Alphanumeric){var M=u(D,v);_.text+=M.text,(B=_.bytes).push.apply(B,M.bytes),_.chunks.push({type:a.Alphanumeric,text:M.text})}else if(b===x.Byte){var R=d(D,v);_.text+=R.text,(A=_.bytes).push.apply(A,R.bytes),_.chunks.push({type:a.Byte,bytes:R.bytes,text:R.text})}else if(b===x.Kanji){var N=p(D,v);_.text+=N.text,(g=_.bytes).push.apply(g,N.bytes),_.chunks.push({type:a.Kanji,bytes:N.bytes,text:N.text})}}if(D.available()===0||D.readBits(D.available())===0)return _}n.decode=E},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function o(a){this.byteOffset=0,this.bitOffset=0,this.bytes=a}return o.prototype.readBits=function(a){if(a<1||a>32||a>this.available())throw new Error("Cannot read "+a.toString()+" bits");var x=0;if(this.bitOffset>0){var c=8-this.bitOffset,l=a<c?a:c,u=c-l,d=255>>8-l<<u;x=(this.bytes[this.byteOffset]&d)>>u,a-=l,this.bitOffset+=l,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(a>0){for(;a>=8;)x=x<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;if(a>0){var u=8-a,d=255>>u<<u;x=x<<a|(this.bytes[this.byteOffset]&d)>>u,this.bitOffset+=a}}return x},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();n.BitStream=s},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(1),o=i(2);function a(u,d,p,E){var m;d.degree()<p.degree()&&(m=[p,d],d=m[0],p=m[1]);for(var f=d,h=p,B=u.zero,A=u.one;h.degree()>=E/2;){var g=f,D=B;if(f=h,B=A,f.isZero())return null;h=g;for(var v=u.zero,_=f.getCoefficient(f.degree()),b=u.inverse(_);h.degree()>=f.degree()&&!h.isZero();){var C=h.degree()-f.degree(),M=u.multiply(h.getCoefficient(h.degree()),b);v=v.addOrSubtract(u.buildMonomial(C,M)),h=h.addOrSubtract(f.multiplyByMonomial(C,M))}if(A=v.multiplyPoly(B).addOrSubtract(D),h.degree()>=f.degree())return null}var R=A.getCoefficient(0);if(R===0)return null;var N=u.inverse(R);return[A.multiply(N),h.multiply(N)]}function x(u,d){var p=d.degree();if(p===1)return[d.getCoefficient(1)];for(var E=new Array(p),m=0,f=1;f<u.size&&m<p;f++)d.evaluateAt(f)===0&&(E[m]=u.inverse(f),m++);return m!==p?null:E}function c(u,d,p){for(var E=p.length,m=new Array(E),f=0;f<E;f++){for(var h=u.inverse(p[f]),B=1,A=0;A<E;A++)f!==A&&(B=u.multiply(B,s.addOrSubtractGF(1,u.multiply(p[A],h))));m[f]=u.multiply(d.evaluateAt(h),u.inverse(B)),u.generatorBase!==0&&(m[f]=u.multiply(m[f],h))}return m}function l(u,d){var p=new Uint8ClampedArray(u.length);p.set(u);for(var E=new s.default(285,256,0),m=new o.default(E,p),f=new Uint8ClampedArray(d),h=!1,B=0;B<d;B++){var A=m.evaluateAt(E.exp(B+E.generatorBase));f[f.length-1-B]=A,A!==0&&(h=!0)}if(!h)return p;var g=new o.default(E,f),D=a(E,E.buildMonomial(d,1),g,d);if(D===null)return null;var v=x(E,D[0]);if(v==null)return null;for(var _=c(E,D[1],v),b=0;b<v.length;b++){var C=p.length-1-E.log(v[b]);if(C<0)return null;p[C]=s.addOrSubtractGF(p[C],_[b])}return p}n.decode=l},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(0);function o(l,u,d,p){var E=l.x-u.x+d.x-p.x,m=l.y-u.y+d.y-p.y;if(E===0&&m===0)return{a11:u.x-l.x,a12:u.y-l.y,a13:0,a21:d.x-u.x,a22:d.y-u.y,a23:0,a31:l.x,a32:l.y,a33:1};var f=u.x-d.x,h=p.x-d.x,B=u.y-d.y,A=p.y-d.y,g=f*A-h*B,D=(E*A-h*m)/g,v=(f*m-E*B)/g;return{a11:u.x-l.x+D*u.x,a12:u.y-l.y+D*u.y,a13:D,a21:p.x-l.x+v*p.x,a22:p.y-l.y+v*p.y,a23:v,a31:l.x,a32:l.y,a33:1}}function a(l,u,d,p){var E=o(l,u,d,p);return{a11:E.a22*E.a33-E.a23*E.a32,a12:E.a13*E.a32-E.a12*E.a33,a13:E.a12*E.a23-E.a13*E.a22,a21:E.a23*E.a31-E.a21*E.a33,a22:E.a11*E.a33-E.a13*E.a31,a23:E.a13*E.a21-E.a11*E.a23,a31:E.a21*E.a32-E.a22*E.a31,a32:E.a12*E.a31-E.a11*E.a32,a33:E.a11*E.a22-E.a12*E.a21}}function x(l,u){return{a11:l.a11*u.a11+l.a21*u.a12+l.a31*u.a13,a12:l.a12*u.a11+l.a22*u.a12+l.a32*u.a13,a13:l.a13*u.a11+l.a23*u.a12+l.a33*u.a13,a21:l.a11*u.a21+l.a21*u.a22+l.a31*u.a23,a22:l.a12*u.a21+l.a22*u.a22+l.a32*u.a23,a23:l.a13*u.a21+l.a23*u.a22+l.a33*u.a23,a31:l.a11*u.a31+l.a21*u.a32+l.a31*u.a33,a32:l.a12*u.a31+l.a22*u.a32+l.a32*u.a33,a33:l.a13*u.a31+l.a23*u.a32+l.a33*u.a33}}function c(l,u){for(var d=a({x:3.5,y:3.5},{x:u.dimension-3.5,y:3.5},{x:u.dimension-6.5,y:u.dimension-6.5},{x:3.5,y:u.dimension-3.5}),p=o(u.topLeft,u.topRight,u.alignmentPattern,u.bottomLeft),E=x(p,d),m=s.BitMatrix.createEmpty(u.dimension,u.dimension),f=function(v,_){var b=E.a13*v+E.a23*_+E.a33;return{x:(E.a11*v+E.a21*_+E.a31)/b,y:(E.a12*v+E.a22*_+E.a32)/b}},h=0;h<u.dimension;h++)for(var B=0;B<u.dimension;B++){var A=B+.5,g=h+.5,D=f(A,g);m.set(B,h,l.get(Math.floor(D.x),Math.floor(D.y)))}return{matrix:m,mappingFunction:f}}n.extract=c},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=4,o=.5,a=1.5,x=function(A,g){return Math.sqrt(Math.pow(g.x-A.x,2)+Math.pow(g.y-A.y,2))};function c(A){return A.reduce(function(g,D){return g+D})}function l(A,g,D){var v,_,b,C,M=x(A,g),R=x(g,D),N=x(A,D),K,T,P;return R>=M&&R>=N?(v=[g,A,D],K=v[0],T=v[1],P=v[2]):N>=R&&N>=M?(_=[A,g,D],K=_[0],T=_[1],P=_[2]):(b=[A,D,g],K=b[0],T=b[1],P=b[2]),(P.x-T.x)*(K.y-T.y)-(P.y-T.y)*(K.x-T.x)<0&&(C=[P,K],K=C[0],P=C[1]),{bottomLeft:K,topLeft:T,topRight:P}}function u(A,g,D,v){var _=(c(p(A,D,v,5))/7+c(p(A,g,v,5))/7+c(p(D,A,v,5))/7+c(p(g,A,v,5))/7)/4;if(_<1)throw new Error("Invalid module size");var b=Math.round(x(A,g)/_),C=Math.round(x(A,D)/_),M=Math.floor((b+C)/2)+7;switch(M%4){case 0:M++;break;case 2:M--;break}return{dimension:M,moduleSize:_}}function d(A,g,D,v){var _=[{x:Math.floor(A.x),y:Math.floor(A.y)}],b=Math.abs(g.y-A.y)>Math.abs(g.x-A.x),C,M,R,N;b?(C=Math.floor(A.y),M=Math.floor(A.x),R=Math.floor(g.y),N=Math.floor(g.x)):(C=Math.floor(A.x),M=Math.floor(A.y),R=Math.floor(g.x),N=Math.floor(g.y));for(var K=Math.abs(R-C),T=Math.abs(N-M),P=Math.floor(-K/2),O=C<R?1:-1,k=M<N?1:-1,j=!0,X=C,Z=M;X!==R+O;X+=O){var G=b?Z:X,ee=b?X:Z;if(D.get(G,ee)!==j&&(j=!j,_.push({x:G,y:ee}),_.length===v+1))break;if(P+=T,P>0){if(Z===N)break;Z+=k,P-=K}}for(var V=[],q=0;q<v;q++)_[q]&&_[q+1]?V.push(x(_[q],_[q+1])):V.push(0);return V}function p(A,g,D,v){var _,b=g.y-A.y,C=g.x-A.x,M=d(A,g,D,Math.ceil(v/2)),R=d(A,{x:A.x-C,y:A.y-b},D,Math.ceil(v/2)),N=M.shift()+R.shift()-1;return(_=R.concat(N)).concat.apply(_,M)}function E(A,g){var D=c(A)/c(g),v=0;return g.forEach(function(_,b){v+=Math.pow(A[b]-_*D,2)}),{averageSize:D,error:v}}function m(A,g,D){try{var v=p(A,{x:-1,y:A.y},D,g.length),_=p(A,{x:A.x,y:-1},D,g.length),b={x:Math.max(0,A.x-A.y)-1,y:Math.max(0,A.y-A.x)-1},C=p(A,b,D,g.length),M={x:Math.min(D.width,A.x+A.y)+1,y:Math.min(D.height,A.y+A.x)+1},R=p(A,M,D,g.length),N=E(v,g),K=E(_,g),T=E(C,g),P=E(R,g),O=Math.sqrt(N.error*N.error+K.error*K.error+T.error*T.error+P.error*P.error),k=(N.averageSize+K.averageSize+T.averageSize+P.averageSize)/4,j=(Math.pow(N.averageSize-k,2)+Math.pow(K.averageSize-k,2)+Math.pow(T.averageSize-k,2)+Math.pow(P.averageSize-k,2))/k;return O+j}catch{return 1/0}}function f(A,g){for(var D=Math.round(g.x);A.get(D,Math.round(g.y));)D--;for(var v=Math.round(g.x);A.get(v,Math.round(g.y));)v++;for(var _=(D+v)/2,b=Math.round(g.y);A.get(Math.round(_),b);)b--;for(var C=Math.round(g.y);A.get(Math.round(_),C);)C++;var M=(b+C)/2;return{x:_,y:M}}function h(A){for(var g=[],D=[],v=[],_=[],b=function(G){for(var ee=0,V=!1,q=[0,0,0,0,0],re=function(ae){var De=A.get(ae,G);if(De===V)ee++;else{q=[q[1],q[2],q[3],q[4],ee],ee=1,V=De;var me=c(q)/7,_e=Math.abs(q[0]-me)<me&&Math.abs(q[1]-me)<me&&Math.abs(q[2]-3*me)<3*me&&Math.abs(q[3]-me)<me&&Math.abs(q[4]-me)<me&&!De,Pe=c(q.slice(-3))/3,z=Math.abs(q[2]-Pe)<Pe&&Math.abs(q[3]-Pe)<Pe&&Math.abs(q[4]-Pe)<Pe&&De;if(_e){var xt=ae-q[3]-q[4],fe=xt-q[2],ge={startX:fe,endX:xt,y:G},ue=D.filter(function(S){return fe>=S.bottom.startX&&fe<=S.bottom.endX||xt>=S.bottom.startX&&fe<=S.bottom.endX||fe<=S.bottom.startX&&xt>=S.bottom.endX&&q[2]/(S.bottom.endX-S.bottom.startX)<a&&q[2]/(S.bottom.endX-S.bottom.startX)>o});ue.length>0?ue[0].bottom=ge:D.push({top:ge,bottom:ge})}if(z){var Ye=ae-q[4],Me=Ye-q[3],ge={startX:Me,y:G,endX:Ye},ue=_.filter(function(U){return Me>=U.bottom.startX&&Me<=U.bottom.endX||Ye>=U.bottom.startX&&Me<=U.bottom.endX||Me<=U.bottom.startX&&Ye>=U.bottom.endX&&q[2]/(U.bottom.endX-U.bottom.startX)<a&&q[2]/(U.bottom.endX-U.bottom.startX)>o});ue.length>0?ue[0].bottom=ge:_.push({top:ge,bottom:ge})}}},ce=-1;ce<=A.width;ce++)re(ce);g.push.apply(g,D.filter(function(ae){return ae.bottom.y!==G&&ae.bottom.y-ae.top.y>=2})),D=D.filter(function(ae){return ae.bottom.y===G}),v.push.apply(v,_.filter(function(ae){return ae.bottom.y!==G})),_=_.filter(function(ae){return ae.bottom.y===G})},C=0;C<=A.height;C++)b(C);g.push.apply(g,D.filter(function(G){return G.bottom.y-G.top.y>=2})),v.push.apply(v,_);var M=g.filter(function(G){return G.bottom.y-G.top.y>=2}).map(function(G){var ee=(G.top.startX+G.top.endX+G.bottom.startX+G.bottom.endX)/4,V=(G.top.y+G.bottom.y+1)/2;if(A.get(Math.round(ee),Math.round(V))){var q=[G.top.endX-G.top.startX,G.bottom.endX-G.bottom.startX,G.bottom.y-G.top.y+1],re=c(q)/q.length,ce=m({x:Math.round(ee),y:Math.round(V)},[1,1,3,1,1],A);return{score:ce,x:ee,y:V,size:re}}}).filter(function(G){return!!G}).sort(function(G,ee){return G.score-ee.score}).map(function(G,ee,V){if(ee>s)return null;var q=V.filter(function(ce,ae){return ee!==ae}).map(function(ce){return{x:ce.x,y:ce.y,score:ce.score+Math.pow(ce.size-G.size,2)/G.size,size:ce.size}}).sort(function(ce,ae){return ce.score-ae.score});if(q.length<2)return null;var re=G.score+q[0].score+q[1].score;return{points:[G].concat(q.slice(0,2)),score:re}}).filter(function(G){return!!G}).sort(function(G,ee){return G.score-ee.score});if(M.length===0)return null;var R=l(M[0].points[0],M[0].points[1],M[0].points[2]),N=R.topRight,K=R.topLeft,T=R.bottomLeft,P=B(A,v,N,K,T),O=[];P&&O.push({alignmentPattern:{x:P.alignmentPattern.x,y:P.alignmentPattern.y},bottomLeft:{x:T.x,y:T.y},dimension:P.dimension,topLeft:{x:K.x,y:K.y},topRight:{x:N.x,y:N.y}});var k=f(A,N),j=f(A,K),X=f(A,T),Z=B(A,v,k,j,X);return Z&&O.push({alignmentPattern:{x:Z.alignmentPattern.x,y:Z.alignmentPattern.y},bottomLeft:{x:X.x,y:X.y},topLeft:{x:j.x,y:j.y},topRight:{x:k.x,y:k.y},dimension:Z.dimension}),O.length===0?null:O}n.locate=h;function B(A,g,D,v,_){var b,C,M;try{b=u(v,D,_,A),C=b.dimension,M=b.moduleSize}catch{return null}var R={x:D.x-v.x+_.x,y:D.y-v.y+_.y},N=(x(v,_)+x(v,D))/2/M,K=1-3/N,T={x:v.x+K*(R.x-v.x),y:v.y+K*(R.y-v.y)},P=g.map(function(k){var j=(k.top.startX+k.top.endX+k.bottom.startX+k.bottom.endX)/4,X=(k.top.y+k.bottom.y+1)/2;if(A.get(Math.floor(j),Math.floor(X))){var Z=[k.top.endX-k.top.startX,k.bottom.endX-k.bottom.startX,k.bottom.y-k.top.y+1];c(Z)/Z.length;var G=m({x:Math.floor(j),y:Math.floor(X)},[1,1,1],A),ee=G+x({x:j,y:X},T);return{x:j,y:X,score:ee}}}).filter(function(k){return!!k}).sort(function(k,j){return k.score-j.score}),O=N>=15&&P.length?P[0]:T;return{alignmentPattern:O,dimension:C}}}]).default})})(y0);var Ix=y0.exports;const Nx=Lx(Ix);function Ux(r,e,t){const n=Nx(r,e,t);return n?{text:n.data,topLeftCorner:n.location.topLeftCorner,topRightCorner:n.location.topRightCorner,bottomLeftCorner:n.location.bottomLeftCorner,bottomRightCorner:n.location.bottomRightCorner}:null}function kx(r,e,t){return r===0?!0:e-r>=t}const Ox=640,zx=200;async function Hx(r){const{video:e,canvas:t,onDecoded:n,minIntervalMs:i=zx,scanWidth:s=Ox}=r,o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});e.srcObject=o,await e.play();const a=t.getContext("2d",{willReadFrequently:!0});if(!a)throw o.getTracks().forEach(E=>E.stop()),new Error("unable to get 2d canvas context");let x=0,c=0,l=!1,u=!1;const d=()=>{if(l)return;const E=performance.now();if(kx(x,E,i)){x=E;const m=s/e.videoWidth,f=Math.max(1,Math.round(e.videoHeight*m)),h=s;t.width=h,t.height=f,a.drawImage(e,0,0,h,f);const B=a.getImageData(0,0,h,f),A=Ux(B.data,h,f);if(A&&!u){u=!0,n(A.text,A),p();return}}c=requestAnimationFrame(d)},p=()=>{l||(l=!0,cancelAnimationFrame(c),o.getTracks().forEach(E=>E.stop()),e.srcObject=null)};return c=requestAnimationFrame(d),{stop:p}}function Gx(r,e){return r.models.find(t=>t.id===e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="160",Vx=0,bo=1,Wx=2,S0=1,Xx=2,un=3,pn=0,wt=1,Yt=2,bn=0,Ci=1,wo=2,Ro=3,Po=4,qx=5,Gn=100,Yx=101,jx=102,Lo=103,Io=104,Kx=200,Zx=201,$x=202,Jx=203,Gs=204,Vs=205,Qx=206,ec=207,tc=208,nc=209,ic=210,rc=211,sc=212,oc=213,ac=214,xc=0,cc=1,lc=2,Ur=3,uc=4,dc=5,hc=6,fc=7,T0=0,pc=1,Ec=2,wn=0,mc=1,Ac=2,gc=3,Cc=4,_c=5,Bc=6,No="attached",vc="detached",b0=300,vi=301,Di=302,Ws=303,Xs=304,Wr=306,Fi=1e3,kt=1001,kr=1002,pt=1003,qs=1004,Pr=1005,bt=1006,w0=1007,Zn=1008,Rn=1009,Dc=1010,Fc=1011,so=1012,R0=1013,Mn=1014,dn=1015,$i=1016,P0=1017,L0=1018,Yn=1020,Mc=1021,Ot=1023,yc=1024,Sc=1025,jn=1026,Mi=1027,Tc=1028,I0=1029,bc=1030,N0=1031,U0=1033,es=33776,ts=33777,ns=33778,is=33779,Uo=35840,ko=35841,Oo=35842,zo=35843,k0=36196,Ho=37492,Go=37496,Vo=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,jo=37813,Ko=37814,Zo=37815,$o=37816,Jo=37817,Qo=37818,ea=37819,ta=37820,na=37821,rs=36492,ia=36494,ra=36495,wc=36283,sa=36284,oa=36285,aa=36286,Ji=2300,yi=2301,ss=2302,xa=2400,ca=2401,la=2402,Rc=2500,Pc=0,O0=1,Ys=2,z0=3e3,Kn=3001,Lc=3200,Ic=3201,H0=0,Nc=1,zt="",st="srgb",Et="srgb-linear",oo="display-p3",Xr="display-p3-linear",Or="linear",et="srgb",zr="rec709",Hr="p3",ti=7680,ua=519,Uc=512,kc=513,Oc=514,G0=515,zc=516,Hc=517,Gc=518,Vc=519,js=35044,da="300 es",Ks=1035,hn=2e3,Gr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ha=1234567;const qi=Math.PI/180,Si=180/Math.PI;function jt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Bt(r,e,t){return Math.max(e,Math.min(t,r))}function ao(r,e){return(r%e+e)%e}function Wc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Xc(r,e,t){return r!==e?(t-r)/(e-r):0}function Yi(r,e,t){return(1-t)*r+t*e}function qc(r,e,t,n){return Yi(r,e,1-Math.exp(-t*n))}function Yc(r,e=1){return e-Math.abs(ao(r,e*2)-e)}function jc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Kc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Zc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $c(r,e){return r+Math.random()*(e-r)}function Jc(r){return r*(.5-Math.random())}function Qc(r){r!==void 0&&(ha=r);let e=ha+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function el(r){return r*qi}function tl(r){return r*Si}function Zs(r){return(r&r-1)===0&&r!==0}function nl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function il(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),x=o(t/2),c=s((e+n)/2),l=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),E=o((n-e)/2);switch(i){case"XYX":r.set(a*l,x*u,x*d,a*c);break;case"YZY":r.set(x*d,a*l,x*u,a*c);break;case"ZXZ":r.set(x*u,x*d,a*l,a*c);break;case"XZX":r.set(a*l,x*E,x*p,a*c);break;case"YXY":r.set(x*p,a*l,x*E,a*c);break;case"ZYZ":r.set(x*E,x*p,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rl={DEG2RAD:qi,RAD2DEG:Si,generateUUID:jt,clamp:Bt,euclideanModulo:ao,mapLinear:Wc,inverseLerp:Xc,lerp:Yi,damp:qc,pingpong:Yc,smoothstep:jc,smootherstep:Kc,randInt:Zc,randFloat:$c,randFloatSpread:Jc,seededRandom:Qc,degToRad:el,radToDeg:tl,isPowerOfTwo:Zs,ceilPowerOfTwo:nl,floorPowerOfTwo:Vr,setQuaternionFromProperEuler:il,normalize:Ke,denormalize:Jt};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,o,a,x,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,x,c)}set(e,t,n,i,s,o,a,x,c){const l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=s,l[5]=x,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],x=n[6],c=n[1],l=n[4],u=n[7],d=n[2],p=n[5],E=n[8],m=i[0],f=i[3],h=i[6],B=i[1],A=i[4],g=i[7],D=i[2],v=i[5],_=i[8];return s[0]=o*m+a*B+x*D,s[3]=o*f+a*A+x*v,s[6]=o*h+a*g+x*_,s[1]=c*m+l*B+u*D,s[4]=c*f+l*A+u*v,s[7]=c*h+l*g+u*_,s[2]=d*m+p*B+E*D,s[5]=d*f+p*A+E*v,s[8]=d*h+p*g+E*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],x=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*x+i*s*c-i*o*x}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],x=e[6],c=e[7],l=e[8],u=l*o-a*c,d=a*x-l*s,p=c*s-o*x,E=t*u+n*d+i*p;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/E;return e[0]=u*m,e[1]=(i*c-l*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(l*t-i*x)*m,e[5]=(i*s-a*t)*m,e[6]=p*m,e[7]=(n*x-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const x=Math.cos(s),c=Math.sin(s);return this.set(n*x,n*c,-n*(x*o+c*a)+o+e,-i*c,i*x,-i*(-c*o+x*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new ze;function V0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sl(){const r=Qi("canvas");return r.style.display="block",r}const fa={};function ji(r){r in fa||(fa[r]=!0,console.warn(r))}const pa=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ea=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[Et]:{transfer:Or,primaries:zr,toReference:r=>r,fromReference:r=>r},[st]:{transfer:et,primaries:zr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Xr]:{transfer:Or,primaries:Hr,toReference:r=>r.applyMatrix3(Ea),fromReference:r=>r.applyMatrix3(pa)},[oo]:{transfer:et,primaries:Hr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ea),fromReference:r=>r.applyMatrix3(pa).convertLinearToSRGB()}},ol=new Set([Et,Xr]),We={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ol.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=rr[e].toReference,i=rr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return rr[r].primaries},getTransfer:function(r){return r===zt?Or:rr[r].transfer}};function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function as(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ni;class W0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Qi("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let al=0;class X0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xs(i[o].image)):s.push(xs(i[o]))}else s=xs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?W0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xl=0;class At extends Ri{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=kt,i=kt,s=bt,o=Zn,a=Ot,x=Rn,c=At.DEFAULT_ANISOTROPY,l=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=jt(),this.name="",this.source=new X0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=x,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Kn?st:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?Kn:z0}set encoding(e){ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?st:zt}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=b0;At.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const x=e.elements,c=x[0],l=x[4],u=x[8],d=x[1],p=x[5],E=x[9],m=x[2],f=x[6],h=x[10];if(Math.abs(l-d)<.01&&Math.abs(u-m)<.01&&Math.abs(E-f)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+m)<.1&&Math.abs(E+f)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,g=(p+1)/2,D=(h+1)/2,v=(l+d)/4,_=(u+m)/4,b=(E+f)/4;return A>g&&A>D?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=v/n,s=_/n):g>D?g<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(g),n=v/i,s=b/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=_/s,i=b/s),this.set(n,i,s,t),this}let B=Math.sqrt((f-E)*(f-E)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(B)<.001&&(B=1),this.x=(f-E)/B,this.y=(u-m)/B,this.z=(d-l)/B,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cl extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?st:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new X0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class q0 extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let x=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],E=s[o+2],m=s[o+3];if(a===0){e[t+0]=x,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=E,e[t+3]=m;return}if(u!==m||x!==d||c!==p||l!==E){let f=1-a;const h=x*d+c*p+l*E+u*m,B=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const D=Math.sqrt(A),v=Math.atan2(D,h*B);f=Math.sin(f*v)/D,a=Math.sin(a*v)/D}const g=a*B;if(x=x*f+d*g,c=c*f+p*g,l=l*f+E*g,u=u*f+m*g,f===1-a){const D=1/Math.sqrt(x*x+c*c+l*l+u*u);x*=D,c*=D,l*=D,u*=D}}e[t]=x,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],x=n[i+1],c=n[i+2],l=n[i+3],u=s[o],d=s[o+1],p=s[o+2],E=s[o+3];return e[t]=a*E+l*u+x*p-c*d,e[t+1]=x*E+l*d+c*u-a*p,e[t+2]=c*E+l*p+a*d-x*u,e[t+3]=l*E-a*u-x*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,x=Math.sin,c=a(n/2),l=a(i/2),u=a(s/2),d=x(n/2),p=x(i/2),E=x(s/2);switch(o){case"XYZ":this._x=d*l*u+c*p*E,this._y=c*p*u-d*l*E,this._z=c*l*E+d*p*u,this._w=c*l*u-d*p*E;break;case"YXZ":this._x=d*l*u+c*p*E,this._y=c*p*u-d*l*E,this._z=c*l*E-d*p*u,this._w=c*l*u+d*p*E;break;case"ZXY":this._x=d*l*u-c*p*E,this._y=c*p*u+d*l*E,this._z=c*l*E+d*p*u,this._w=c*l*u-d*p*E;break;case"ZYX":this._x=d*l*u-c*p*E,this._y=c*p*u+d*l*E,this._z=c*l*E-d*p*u,this._w=c*l*u+d*p*E;break;case"YZX":this._x=d*l*u+c*p*E,this._y=c*p*u+d*l*E,this._z=c*l*E-d*p*u,this._w=c*l*u-d*p*E;break;case"XZY":this._x=d*l*u-c*p*E,this._y=c*p*u-d*l*E,this._z=c*l*E+d*p*u,this._w=c*l*u+d*p*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],x=t[9],c=t[2],l=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(l-x)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(l-x)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(x+l)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(x+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,x=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+i*c-s*x,this._y=i*l+o*x+s*a-n*c,this._z=s*l+o*c+n*x-i*a,this._w=o*l-n*a-i*x-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const x=1-a*a;if(x<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(x),l=Math.atan2(c,a),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,x=e.w,c=2*(o*i-a*n),l=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+x*c+o*u-a*l,this.y=n+x*l+a*c-s*u,this.z=i+x*u+s*l-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,x=t.z;return this.x=i*x-s*a,this.y=s*o-n*x,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cs.copy(this).projectOnVector(e),this.sub(cs)}reflect(e){return this.sub(cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new L,ma=new mt;class En{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),or.subVectors(this.max,ki),ii.subVectors(e.a,ki),ri.subVectors(e.b,ki),si.subVectors(e.c,ki),An.subVectors(ri,ii),gn.subVectors(si,ri),In.subVectors(ii,si);let t=[0,-An.z,An.y,0,-gn.z,gn.y,0,-In.z,In.y,An.z,0,-An.x,gn.z,0,-gn.x,In.z,0,-In.x,-An.y,An.x,0,-gn.y,gn.x,0,-In.y,In.x,0];return!ls(t,ii,ri,si,or)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,ii,ri,si,or))?!1:(ar.crossVectors(An,gn),t=[ar.x,ar.y,ar.z],ls(t,ii,ri,si,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new L,new L,new L,new L,new L,new L,new L,new L],Gt=new L,sr=new En,ii=new L,ri=new L,si=new L,An=new L,gn=new L,In=new L,ki=new L,or=new L,ar=new L,Nn=new L;function ls(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Nn.fromArray(r,s);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),x=e.dot(Nn),c=t.dot(Nn),l=n.dot(Nn);if(Math.max(-Math.max(x,c,l),Math.min(x,c,l))>a)return!1}return!0}const ul=new En,Oi=new L,us=new L;class tn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ul.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(us)),this.expandByPoint(Oi.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new L,ds=new L,xr=new L,Cn=new L,hs=new L,cr=new L,fs=new L;class qr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ds.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ds);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=Cn.dot(this.direction),x=-Cn.dot(xr),c=Cn.lengthSq(),l=Math.abs(1-o*o);let u,d,p,E;if(l>0)if(u=o*x-a,d=o*a-x,E=s*l,u>=0)if(d>=-E)if(d<=E){const m=1/l;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*x)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*x)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*x)+c;else d<=-E?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-x),s),p=-u*u+d*(d+2*x)+c):d<=E?(u=0,d=Math.min(Math.max(-s,-x),s),p=d*(d+2*x)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-x),s),p=-u*u+d*(d+2*x)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*x)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ds).addScaledVector(xr,d),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,x=n+o;return x<0?null:a<0?this.at(x,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,x;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),l>=0?(s=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(s=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,x=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,x=(e.min.z-d.z)*u),n>x||a>i)||((a>n||n!==n)&&(n=a),(x<i||i!==i)&&(i=x),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,s){hs.subVectors(t,e),cr.subVectors(n,e),fs.crossVectors(hs,cr);let o=this.direction.dot(fs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const x=a*this.direction.dot(cr.crossVectors(Cn,cr));if(x<0)return null;const c=a*this.direction.dot(hs.cross(Cn));if(c<0||x+c>o)return null;const l=-a*Cn.dot(fs);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,n,i,s,o,a,x,c,l,u,d,p,E,m,f){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,x,c,l,u,d,p,E,m,f)}set(e,t,n,i,s,o,a,x,c,l,u,d,p,E,m,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=o,h[9]=a,h[13]=x,h[2]=c,h[6]=l,h[10]=u,h[14]=d,h[3]=p,h[7]=E,h[11]=m,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/oi.setFromMatrixColumn(e,0).length(),s=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),x=Math.cos(i),c=Math.sin(i),l=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*l,p=o*u,E=a*l,m=a*u;t[0]=x*l,t[4]=-x*u,t[8]=c,t[1]=p+E*c,t[5]=d-m*c,t[9]=-a*x,t[2]=m-d*c,t[6]=E+p*c,t[10]=o*x}else if(e.order==="YXZ"){const d=x*l,p=x*u,E=c*l,m=c*u;t[0]=d+m*a,t[4]=E*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=p*a-E,t[6]=m+d*a,t[10]=o*x}else if(e.order==="ZXY"){const d=x*l,p=x*u,E=c*l,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=E+p*a,t[1]=p+E*a,t[5]=o*l,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*x}else if(e.order==="ZYX"){const d=o*l,p=o*u,E=a*l,m=a*u;t[0]=x*l,t[4]=E*c-p,t[8]=d*c+m,t[1]=x*u,t[5]=m*c+d,t[9]=p*c-E,t[2]=-c,t[6]=a*x,t[10]=o*x}else if(e.order==="YZX"){const d=o*x,p=o*c,E=a*x,m=a*c;t[0]=x*l,t[4]=m-d*u,t[8]=E*u+p,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=p*u+E,t[10]=d-m*u}else if(e.order==="XZY"){const d=o*x,p=o*c,E=a*x,m=a*c;t[0]=x*l,t[4]=-u,t[8]=c*l,t[1]=d*u+m,t[5]=o*l,t[9]=p*u-E,t[2]=E*u-p,t[6]=a*l,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dl,e,hl)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),_n.crossVectors(n,Pt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),_n.crossVectors(n,Pt)),_n.normalize(),lr.crossVectors(Pt,_n),i[0]=_n.x,i[4]=lr.x,i[8]=Pt.x,i[1]=_n.y,i[5]=lr.y,i[9]=Pt.y,i[2]=_n.z,i[6]=lr.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],x=n[8],c=n[12],l=n[1],u=n[5],d=n[9],p=n[13],E=n[2],m=n[6],f=n[10],h=n[14],B=n[3],A=n[7],g=n[11],D=n[15],v=i[0],_=i[4],b=i[8],C=i[12],M=i[1],R=i[5],N=i[9],K=i[13],T=i[2],P=i[6],O=i[10],k=i[14],j=i[3],X=i[7],Z=i[11],G=i[15];return s[0]=o*v+a*M+x*T+c*j,s[4]=o*_+a*R+x*P+c*X,s[8]=o*b+a*N+x*O+c*Z,s[12]=o*C+a*K+x*k+c*G,s[1]=l*v+u*M+d*T+p*j,s[5]=l*_+u*R+d*P+p*X,s[9]=l*b+u*N+d*O+p*Z,s[13]=l*C+u*K+d*k+p*G,s[2]=E*v+m*M+f*T+h*j,s[6]=E*_+m*R+f*P+h*X,s[10]=E*b+m*N+f*O+h*Z,s[14]=E*C+m*K+f*k+h*G,s[3]=B*v+A*M+g*T+D*j,s[7]=B*_+A*R+g*P+D*X,s[11]=B*b+A*N+g*O+D*Z,s[15]=B*C+A*K+g*k+D*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],x=e[9],c=e[13],l=e[2],u=e[6],d=e[10],p=e[14],E=e[3],m=e[7],f=e[11],h=e[15];return E*(+s*x*u-i*c*u-s*a*d+n*c*d+i*a*p-n*x*p)+m*(+t*x*p-t*c*d+s*o*d-i*o*p+i*c*l-s*x*l)+f*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*l-n*c*l)+h*(-i*a*l-t*x*u+t*a*d+i*o*u-n*o*d+n*x*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],x=e[6],c=e[7],l=e[8],u=e[9],d=e[10],p=e[11],E=e[12],m=e[13],f=e[14],h=e[15],B=u*f*c-m*d*c+m*x*p-a*f*p-u*x*h+a*d*h,A=E*d*c-l*f*c-E*x*p+o*f*p+l*x*h-o*d*h,g=l*m*c-E*u*c+E*a*p-o*m*p-l*a*h+o*u*h,D=E*u*x-l*m*x-E*a*d+o*m*d+l*a*f-o*u*f,v=t*B+n*A+i*g+s*D;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=B*_,e[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*h-n*d*h)*_,e[2]=(a*f*s-m*x*s+m*i*c-n*f*c-a*i*h+n*x*h)*_,e[3]=(u*x*s-a*d*s-u*i*c+n*d*c+a*i*p-n*x*p)*_,e[4]=A*_,e[5]=(l*f*s-E*d*s+E*i*p-t*f*p-l*i*h+t*d*h)*_,e[6]=(E*x*s-o*f*s-E*i*c+t*f*c+o*i*h-t*x*h)*_,e[7]=(o*d*s-l*x*s+l*i*c-t*d*c-o*i*p+t*x*p)*_,e[8]=g*_,e[9]=(E*u*s-l*m*s-E*n*p+t*m*p+l*n*h-t*u*h)*_,e[10]=(o*m*s-E*a*s+E*n*c-t*m*c-o*n*h+t*a*h)*_,e[11]=(l*a*s-o*u*s-l*n*c+t*u*c+o*n*p-t*a*p)*_,e[12]=D*_,e[13]=(l*m*i-E*u*i+E*n*d-t*m*d-l*n*f+t*u*f)*_,e[14]=(E*a*i-o*m*i-E*n*x+t*m*x+o*n*f-t*a*f)*_,e[15]=(o*u*i-l*a*i+l*n*x-t*u*x-o*n*d+t*a*d)*_,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,x=e.z,c=s*o,l=s*a;return this.set(c*o+n,c*a-i*x,c*x+i*a,0,c*a+i*x,l*a+n,l*x-i*o,0,c*x-i*a,l*x+i*o,s*x*x+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,x=t._w,c=s+s,l=o+o,u=a+a,d=s*c,p=s*l,E=s*u,m=o*l,f=o*u,h=a*u,B=x*c,A=x*l,g=x*u,D=n.x,v=n.y,_=n.z;return i[0]=(1-(m+h))*D,i[1]=(p+g)*D,i[2]=(E-A)*D,i[3]=0,i[4]=(p-g)*v,i[5]=(1-(d+h))*v,i[6]=(f+B)*v,i[7]=0,i[8]=(E+A)*_,i[9]=(f-B)*_,i[10]=(1-(d+m))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=oi.set(i[0],i[1],i[2]).length();const o=oi.set(i[4],i[5],i[6]).length(),a=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const c=1/s,l=1/o,u=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=hn){const x=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,E;if(a===hn)p=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Gr)p=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return x[0]=c,x[4]=0,x[8]=u,x[12]=0,x[1]=0,x[5]=l,x[9]=d,x[13]=0,x[2]=0,x[6]=0,x[10]=p,x[14]=E,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=hn){const x=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),d=(t+e)*c,p=(n+i)*l;let E,m;if(a===hn)E=(o+s)*u,m=-2*u;else if(a===Gr)E=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return x[0]=2*c,x[4]=0,x[8]=0,x[12]=-d,x[1]=0,x[5]=2*l,x[9]=0,x[13]=-p,x[2]=0,x[6]=0,x[10]=m,x[14]=-E,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new L,Vt=new we,dl=new L(0,0,0),hl=new L(1,1,1),_n=new L,lr=new L,Pt=new L,Aa=new we,ga=new mt;class Yr{constructor(e=0,t=0,n=0,i=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],x=i[1],c=i[5],l=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(x,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(x,s));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(x,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fl=0;const Ca=new L,ai=new mt,an=new we,ur=new L,zi=new L,pl=new L,El=new mt,_a=new L(1,0,0),Ba=new L(0,1,0),va=new L(0,0,1),ml={type:"added"},Al={type:"removed"};class nt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new L,t=new Yr,n=new mt,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new ze}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(zi,ur,this.up):an.lookAt(ur,zi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(an),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ml)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Al)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,pl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,El,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,x){return a[x.uuid]===void 0&&(a[x.uuid]=x.toJSON(e)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const x=a.shapes;if(Array.isArray(x))for(let c=0,l=x.length;c<l;c++){const u=x[c];s(e.shapes,u)}else s(e.shapes,x)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let x=0,c=this.material.length;x<c;x++)a.push(s(e.materials,this.material[x]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const x=this.animations[a];i.animations.push(s(e.animations,x))}}if(t){const a=o(e.geometries),x=o(e.materials),c=o(e.textures),l=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),E=o(e.nodes);a.length>0&&(n.geometries=a),x.length>0&&(n.materials=x),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),E.length>0&&(n.nodes=E)}return n.object=i,n;function o(a){const x=[];for(const c in a){const l=a[c];delete l.metadata,x.push(l)}return x}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DEFAULT_UP=new L(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new L,xn=new L,ps=new L,cn=new L,xi=new L,ci=new L,Da=new L,Es=new L,ms=new L,As=new L;let dr=!1;class qt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),xn.subVectors(n,t),ps.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(xn),x=Wt.dot(ps),c=xn.dot(xn),l=xn.dot(ps),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*x-a*l)*d,E=(o*l-a*x)*d;return s.set(1-p-E,E,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,s,o,a,x){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(e,t,n,i,s,o,a,x)}static getInterpolation(e,t,n,i,s,o,a,x){return this.getBarycoord(e,t,n,i,cn)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(s,cn.x),x.addScaledVector(o,cn.y),x.addScaledVector(a,cn.z),x)}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),xn.subVectors(e,t),Wt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Wt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;xi.subVectors(i,n),ci.subVectors(s,n),Es.subVectors(e,n);const x=xi.dot(Es),c=ci.dot(Es);if(x<=0&&c<=0)return t.copy(n);ms.subVectors(e,i);const l=xi.dot(ms),u=ci.dot(ms);if(l>=0&&u<=l)return t.copy(i);const d=x*u-l*c;if(d<=0&&x>=0&&l<=0)return o=x/(x-l),t.copy(n).addScaledVector(xi,o);As.subVectors(e,s);const p=xi.dot(As),E=ci.dot(As);if(E>=0&&p<=E)return t.copy(s);const m=p*c-x*E;if(m<=0&&c>=0&&E<=0)return a=c/(c-E),t.copy(n).addScaledVector(ci,a);const f=l*E-p*u;if(f<=0&&u-l>=0&&p-E>=0)return Da.subVectors(s,i),a=(u-l)/(u-l+(p-E)),t.copy(i).addScaledVector(Da,a);const h=1/(f+m+d);return o=m*h,a=d*h,t.copy(n).addScaledVector(xi,o).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function gs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=ao(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gs(o,s,e+1/3),this.g=gs(o,s,e),this.b=gs(o,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=st){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const n=j0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return We.fromWorkingColorSpace(_t.copy(this),e),Math.round(Bt(_t.r*255,0,255))*65536+Math.round(Bt(_t.g*255,0,255))*256+Math.round(Bt(_t.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,s=_t.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let x,c;const l=(a+o)/2;if(a===o)x=0,c=0;else{const u=o-a;switch(c=l<=.5?u/(o+a):u/(2-o-a),o){case n:x=(i-s)/u+(i<s?6:0);break;case i:x=(s-n)/u+2;break;case s:x=(n-i)/u+4;break}x/=6}return e.h=x,e.s=c,e.l=l,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=st){We.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(hr);const n=Yi(Bn.h,hr.h,t),i=Yi(Bn.s,hr.s,t),s=Yi(Bn.l,hr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Te;Te.NAMES=j0;let gl=0;class en extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=jt(),this.name="",this.type="Material",this.blending=Ci,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Vs,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const x=s[a];delete x.metadata,o.push(x)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new L,fr=new Ve;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),e}}class K0 extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Z0 extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cl=0;const Nt=new we,Cs=new nt,li=new L,Lt=new En,Hi=new En,ft=new L;class Kt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V0(e)?Z0:K0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Hi.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Hi.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Hi.min),Lt.expandByPoint(Hi.max))}Lt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],x=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)ft.fromBufferAttribute(a,c),x&&(li.fromBufferAttribute(e,c),ft.add(li)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const x=this.getAttribute("tangent").array,c=[],l=[];for(let M=0;M<a;M++)c[M]=new L,l[M]=new L;const u=new L,d=new L,p=new L,E=new Ve,m=new Ve,f=new Ve,h=new L,B=new L;function A(M,R,N){u.fromArray(i,M*3),d.fromArray(i,R*3),p.fromArray(i,N*3),E.fromArray(o,M*2),m.fromArray(o,R*2),f.fromArray(o,N*2),d.sub(u),p.sub(u),m.sub(E),f.sub(E);const K=1/(m.x*f.y-f.x*m.y);isFinite(K)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(K),B.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(K),c[M].add(h),c[R].add(h),c[N].add(h),l[M].add(B),l[R].add(B),l[N].add(B))}let g=this.groups;g.length===0&&(g=[{start:0,count:n.length}]);for(let M=0,R=g.length;M<R;++M){const N=g[M],K=N.start,T=N.count;for(let P=K,O=K+T;P<O;P+=3)A(n[P+0],n[P+1],n[P+2])}const D=new L,v=new L,_=new L,b=new L;function C(M){_.fromArray(s,M*3),b.copy(_);const R=c[M];D.copy(R),D.sub(_.multiplyScalar(_.dot(R))).normalize(),v.crossVectors(b,R);const K=v.dot(l[M])<0?-1:1;x[M*4]=D.x,x[M*4+1]=D.y,x[M*4+2]=D.z,x[M*4+3]=K}for(let M=0,R=g.length;M<R;++M){const N=g[M],K=N.start,T=N.count;for(let P=K,O=K+T;P<O;P+=3)C(n[P+0]),C(n[P+1]),C(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,x=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const E=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,E),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,f),l.subVectors(o,s),u.subVectors(i,s),l.cross(u),a.fromBufferAttribute(n,E),x.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(l),x.add(l),c.add(l),n.setXYZ(E,a.x,a.y,a.z),n.setXYZ(m,x.x,x.y,x.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,s),u.subVectors(i,s),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,x){const c=a.array,l=a.itemSize,u=a.normalized,d=new c.constructor(x.length*l);let p=0,E=0;for(let m=0,f=x.length;m<f;m++){a.isInterleavedBufferAttribute?p=x[m]*a.data.stride+a.offset:p=x[m]*l;for(let h=0;h<l;h++)d[E++]=c[p++]}return new Tt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,i=this.attributes;for(const a in i){const x=i[a],c=e(x,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const x=[],c=s[a];for(let l=0,u=c.length;l<u;l++){const d=c[l],p=e(d,n);x.push(p)}t.morphAttributes[a]=x}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,x=o.length;a<x;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const x=this.parameters;for(const c in x)x[c]!==void 0&&(e[c]=x[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const x in n){const c=n[x];e.data.attributes[x]=c.toJSON(e.data)}const i={};let s=!1;for(const x in this.morphAttributes){const c=this.morphAttributes[x],l=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];l.push(p.toJSON(e.data))}l.length>0&&(i[x]=l,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],u=s[c];for(let d=0,p=u.length;d<p;d++)l.push(u[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const x=e.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new we,Un=new qr,pr=new tn,Ma=new L,ui=new L,di=new L,hi=new L,_s=new L,Er=new L,mr=new Ve,Ar=new Ve,gr=new Ve,ya=new L,Sa=new L,Ta=new L,Cr=new L,_r=new L;class St extends nt{constructor(e=new Kt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let x=0,c=s.length;x<c;x++){const l=a[x],u=s[x];l!==0&&(_s.fromBufferAttribute(u,e),o?Er.addScaledVector(_s,l):Er.addScaledVector(_s.sub(t),l))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(pr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(pr,Ma)===null||Un.origin.distanceToSquared(Ma)>(e.far-e.near)**2))&&(Fa.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,x=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,m=d.length;E<m;E++){const f=d[E],h=o[f.materialIndex],B=Math.max(f.start,p.start),A=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let g=B,D=A;g<D;g+=3){const v=a.getX(g),_=a.getX(g+1),b=a.getX(g+2);i=Br(this,h,e,n,c,l,u,v,_,b),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const E=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let f=E,h=m;f<h;f+=3){const B=a.getX(f),A=a.getX(f+1),g=a.getX(f+2);i=Br(this,o,e,n,c,l,u,B,A,g),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(x!==void 0)if(Array.isArray(o))for(let E=0,m=d.length;E<m;E++){const f=d[E],h=o[f.materialIndex],B=Math.max(f.start,p.start),A=Math.min(x.count,Math.min(f.start+f.count,p.start+p.count));for(let g=B,D=A;g<D;g+=3){const v=g,_=g+1,b=g+2;i=Br(this,h,e,n,c,l,u,v,_,b),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const E=Math.max(0,p.start),m=Math.min(x.count,p.start+p.count);for(let f=E,h=m;f<h;f+=3){const B=f,A=f+1,g=f+2;i=Br(this,o,e,n,c,l,u,B,A,g),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function _l(r,e,t,n,i,s,o,a){let x;if(e.side===wt?x=n.intersectTriangle(o,s,i,!0,a):x=n.intersectTriangle(i,s,o,e.side===pn,a),x===null)return null;_r.copy(a),_r.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:r}}function Br(r,e,t,n,i,s,o,a,x,c){r.getVertexPosition(a,ui),r.getVertexPosition(x,di),r.getVertexPosition(c,hi);const l=_l(r,e,t,n,ui,di,hi,Cr);if(l){i&&(mr.fromBufferAttribute(i,a),Ar.fromBufferAttribute(i,x),gr.fromBufferAttribute(i,c),l.uv=qt.getInterpolation(Cr,ui,di,hi,mr,Ar,gr,new Ve)),s&&(mr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,x),gr.fromBufferAttribute(s,c),l.uv1=qt.getInterpolation(Cr,ui,di,hi,mr,Ar,gr,new Ve),l.uv2=l.uv1),o&&(ya.fromBufferAttribute(o,a),Sa.fromBufferAttribute(o,x),Ta.fromBufferAttribute(o,c),l.normal=qt.getInterpolation(Cr,ui,di,hi,ya,Sa,Ta,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:x,c,normal:new L,materialIndex:0};qt.getNormal(ui,di,hi,u.normal),l.face=u}return l}class ei extends Kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const x=[],c=[],l=[],u=[];let d=0,p=0;E("z","y","x",-1,-1,n,t,e,o,s,0),E("z","y","x",1,-1,n,t,-e,o,s,1),E("x","z","y",1,1,e,n,t,i,o,2),E("x","z","y",1,-1,e,n,-t,i,o,3),E("x","y","z",1,-1,e,t,n,i,s,4),E("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(x),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(u,2));function E(m,f,h,B,A,g,D,v,_,b,C){const M=g/_,R=D/b,N=g/2,K=D/2,T=v/2,P=_+1,O=b+1;let k=0,j=0;const X=new L;for(let Z=0;Z<O;Z++){const G=Z*R-K;for(let ee=0;ee<P;ee++){const V=ee*M-N;X[m]=V*B,X[f]=G*A,X[h]=T,c.push(X.x,X.y,X.z),X[m]=0,X[f]=0,X[h]=v>0?1:-1,l.push(X.x,X.y,X.z),u.push(ee/_),u.push(1-Z/b),k+=1}}for(let Z=0;Z<b;Z++)for(let G=0;G<_;G++){const ee=d+G+P*Z,V=d+G+P*(Z+1),q=d+(G+1)+P*(Z+1),re=d+(G+1)+P*Z;x.push(ee,V,re),x.push(V,q,re),j+=6}a.addGroup(p,j,C),p+=j,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const n=Ti(r[t]);for(const i in n)e[i]=n[i]}return e}function Bl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $0(r){return r.getRenderTarget()===null?r.outputColorSpace:We.workingColorSpace}const vl={clone:Ti,merge:Mt};var Dl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dl,this.fragmentShader=Fl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Bl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class J0 extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends J0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Si*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Si*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const x=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/x,t-=o.offsetY*n/c,i*=o.width/x,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Ml extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yt(fi,pi,e,t);i.layers=this.layers,this.add(i);const s=new yt(fi,pi,e,t);s.layers=this.layers,this.add(s);const o=new yt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new yt(fi,pi,e,t);a.layers=this.layers,this.add(a);const x=new yt(fi,pi,e,t);x.layers=this.layers,this.add(x);const c=new yt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,x]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,x,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,x),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(u,d,p),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Q0 extends At{constructor(e,t,n,i,s,o,a,x,c,l){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,n,i,s,o,a,x,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yl extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?st:zt),this.texture=new Q0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:bn});s.uniforms.tEquirect.value=t;const o=new St(i,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=bt),new Ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Bs=new L,Sl=new L,Tl=new ze;class zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bs.subVectors(n,t).cross(Sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tl.getNormalMatrix(e),i=this.coplanarPoint(Bs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new tn,vr=new L;class xo{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,o=new zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],x=i[3],c=i[4],l=i[5],u=i[6],d=i[7],p=i[8],E=i[9],m=i[10],f=i[11],h=i[12],B=i[13],A=i[14],g=i[15];if(n[0].setComponents(x-s,d-c,f-p,g-h).normalize(),n[1].setComponents(x+s,d+c,f+p,g+h).normalize(),n[2].setComponents(x+o,d+l,f+E,g+B).normalize(),n[3].setComponents(x-o,d-l,f-E,g-B).normalize(),n[4].setComponents(x-a,d-u,f-m,g-A).normalize(),t===hn)n[5].setComponents(x+a,d+u,f+m,g+A).normalize();else if(t===Gr)n[5].setComponents(a,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vr.x=i.normal.x>0?e.max.x:e.min.x,vr.y=i.normal.y>0?e.max.y:e.min.y,vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ex(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,l){const u=c.array,d=c.usage,p=u.byteLength,E=r.createBuffer();r.bindBuffer(l,E),r.bufferData(l,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:E,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,l,u){const d=l.array,p=l._updateRange,E=l.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&E.length===0&&r.bufferSubData(u,0,d),E.length!==0){for(let m=0,f=E.length;m<f;m++){const h=E[m];t?r.bufferSubData(u,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):r.bufferSubData(u,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}l.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(r.deleteBuffer(l.buffer),n.delete(c))}function x(c,l){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:o,remove:a,update:x}}class co extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),x=Math.floor(i),c=a+1,l=x+1,u=e/a,d=t/x,p=[],E=[],m=[],f=[];for(let h=0;h<l;h++){const B=h*d-o;for(let A=0;A<c;A++){const g=A*u-s;E.push(g,-B,0),m.push(0,0,1),f.push(A/a),f.push(1-h/x)}}for(let h=0;h<x;h++)for(let B=0;B<a;B++){const A=B+c*h,g=B+c*(h+1),D=B+1+c*(h+1),v=B+1+c*h;p.push(A,g,v),p.push(g,D,v)}this.setIndex(p),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}var wl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rl=`#ifdef USE_ALPHAHASH
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
#endif`,Pl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ll=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Il=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ul=`#ifdef USE_AOMAP
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
#endif`,kl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ol=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,zl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wl=`#ifdef USE_IRIDESCENCE
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
#endif`,Xl=`#ifdef USE_BUMPMAP
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
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
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
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,au="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,gu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
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
#endif`,bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,wu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qu=`#ifdef USE_NORMALMAP
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
#endif`,ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,kd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
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
}`,Xd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qd=`#define LAMBERT
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
}`,Yd=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jd=`#define MATCAP
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
}`,Kd=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zd=`#define NORMAL
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
}`,$d=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
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
}`,Qd=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eh=`#define STANDARD
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
}`,th=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nh=`#define TOON
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
}`,ih=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rh=`uniform float size;
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
}`,sh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ah=`uniform vec3 color;
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
}`,xh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ch=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ie={alphahash_fragment:wl,alphahash_pars_fragment:Rl,alphamap_fragment:Pl,alphamap_pars_fragment:Ll,alphatest_fragment:Il,alphatest_pars_fragment:Nl,aomap_fragment:Ul,aomap_pars_fragment:kl,batching_pars_vertex:Ol,batching_vertex:zl,begin_vertex:Hl,beginnormal_vertex:Gl,bsdfs:Vl,iridescence_fragment:Wl,bumpmap_pars_fragment:Xl,clipping_planes_fragment:ql,clipping_planes_pars_fragment:Yl,clipping_planes_pars_vertex:jl,clipping_planes_vertex:Kl,color_fragment:Zl,color_pars_fragment:$l,color_pars_vertex:Jl,color_vertex:Ql,common:eu,cube_uv_reflection_fragment:tu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:ou,colorspace_fragment:au,colorspace_pars_fragment:xu,envmap_fragment:cu,envmap_common_pars_fragment:lu,envmap_pars_fragment:uu,envmap_pars_vertex:du,envmap_physical_pars_fragment:Du,envmap_vertex:hu,fog_vertex:fu,fog_pars_vertex:pu,fog_fragment:Eu,fog_pars_fragment:mu,gradientmap_pars_fragment:Au,lightmap_fragment:gu,lightmap_pars_fragment:Cu,lights_lambert_fragment:_u,lights_lambert_pars_fragment:Bu,lights_pars_begin:vu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Mu,lights_phong_fragment:yu,lights_phong_pars_fragment:Su,lights_physical_fragment:Tu,lights_physical_pars_fragment:bu,lights_fragment_begin:wu,lights_fragment_maps:Ru,lights_fragment_end:Pu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Uu,map_fragment:ku,map_pars_fragment:Ou,map_particle_fragment:zu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Vu,morphcolor_vertex:Wu,morphnormal_vertex:Xu,morphtarget_pars_vertex:qu,morphtarget_vertex:Yu,normal_fragment_begin:ju,normal_fragment_maps:Ku,normal_pars_fragment:Zu,normal_pars_vertex:$u,normal_vertex:Ju,normalmap_pars_fragment:Qu,clearcoat_normal_fragment_begin:ed,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:nd,iridescence_pars_fragment:id,opaque_fragment:rd,packing:sd,premultiplied_alpha_fragment:od,project_vertex:ad,dithering_fragment:xd,dithering_pars_fragment:cd,roughnessmap_fragment:ld,roughnessmap_pars_fragment:ud,shadowmap_pars_fragment:dd,shadowmap_pars_vertex:hd,shadowmap_vertex:fd,shadowmask_pars_fragment:pd,skinbase_vertex:Ed,skinning_pars_vertex:md,skinning_vertex:Ad,skinnormal_vertex:gd,specularmap_fragment:Cd,specularmap_pars_fragment:_d,tonemapping_fragment:Bd,tonemapping_pars_fragment:vd,transmission_fragment:Dd,transmission_pars_fragment:Fd,uv_pars_fragment:Md,uv_pars_vertex:yd,uv_vertex:Sd,worldpos_vertex:Td,background_vert:bd,background_frag:wd,backgroundCube_vert:Rd,backgroundCube_frag:Pd,cube_vert:Ld,cube_frag:Id,depth_vert:Nd,depth_frag:Ud,distanceRGBA_vert:kd,distanceRGBA_frag:Od,equirect_vert:zd,equirect_frag:Hd,linedashed_vert:Gd,linedashed_frag:Vd,meshbasic_vert:Wd,meshbasic_frag:Xd,meshlambert_vert:qd,meshlambert_frag:Yd,meshmatcap_vert:jd,meshmatcap_frag:Kd,meshnormal_vert:Zd,meshnormal_frag:$d,meshphong_vert:Jd,meshphong_frag:Qd,meshphysical_vert:eh,meshphysical_frag:th,meshtoon_vert:nh,meshtoon_frag:ih,points_vert:rh,points_frag:sh,shadow_vert:oh,shadow_frag:ah,sprite_vert:xh,sprite_frag:ch},ie={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},$t={basic:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Mt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Mt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Mt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Mt([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Mt([ie.lights,ie.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};$t.physical={uniforms:Mt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Dr={r:0,b:0,g:0};function lh(r,e,t,n,i,s,o){const a=new Te(0);let x=s===!0?0:1,c,l,u=null,d=0,p=null;function E(f,h){let B=!1,A=h.isScene===!0?h.background:null;A&&A.isTexture&&(A=(h.backgroundBlurriness>0?t:e).get(A)),A===null?m(a,x):A&&A.isColor&&(m(A,1),B=!0);const g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,o):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||B)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Wr)?(l===void 0&&(l=new St(new ei(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ti($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,v,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=We.getTransfer(A.colorSpace)!==et,(u!==A||d!==A.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new St(new co(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ti($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=We.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,h){f.getRGB(Dr,$0(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(f,h=1){a.set(f),x=h,m(a,x)},getClearAlpha:function(){return x},setClearAlpha:function(f){x=f,m(a,x)},render:E}}function uh(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},x=f(null);let c=x,l=!1;function u(T,P,O,k,j){let X=!1;if(o){const Z=m(k,O,P);c!==Z&&(c=Z,p(c.object)),X=h(T,k,O,j),X&&B(T,k,O,j)}else{const Z=P.wireframe===!0;(c.geometry!==k.id||c.program!==O.id||c.wireframe!==Z)&&(c.geometry=k.id,c.program=O.id,c.wireframe=Z,X=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(X||l)&&(l=!1,b(T,P,O,k),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(T){return n.isWebGL2?r.bindVertexArray(T):s.bindVertexArrayOES(T)}function E(T){return n.isWebGL2?r.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function m(T,P,O){const k=O.wireframe===!0;let j=a[T.id];j===void 0&&(j={},a[T.id]=j);let X=j[P.id];X===void 0&&(X={},j[P.id]=X);let Z=X[k];return Z===void 0&&(Z=f(d()),X[k]=Z),Z}function f(T){const P=[],O=[],k=[];for(let j=0;j<i;j++)P[j]=0,O[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:T,attributes:{},index:null}}function h(T,P,O,k){const j=c.attributes,X=P.attributes;let Z=0;const G=O.getAttributes();for(const ee in G)if(G[ee].location>=0){const q=j[ee];let re=X[ee];if(re===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;Z++}return c.attributesNum!==Z||c.index!==k}function B(T,P,O,k){const j={},X=P.attributes;let Z=0;const G=O.getAttributes();for(const ee in G)if(G[ee].location>=0){let q=X[ee];q===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(q=T.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),j[ee]=re,Z++}c.attributes=j,c.attributesNum=Z,c.index=k}function A(){const T=c.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function g(T){D(T,0)}function D(T,P){const O=c.newAttributes,k=c.enabledAttributes,j=c.attributeDivisors;O[T]=1,k[T]===0&&(r.enableVertexAttribArray(T),k[T]=1),j[T]!==P&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,P),j[T]=P)}function v(){const T=c.newAttributes,P=c.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function _(T,P,O,k,j,X,Z){Z===!0?r.vertexAttribIPointer(T,P,O,j,X):r.vertexAttribPointer(T,P,O,k,j,X)}function b(T,P,O,k){if(n.isWebGL2===!1&&(T.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const j=k.attributes,X=O.getAttributes(),Z=P.defaultAttributeValues;for(const G in X){const ee=X[G];if(ee.location>=0){let V=j[G];if(V===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(V=T.instanceColor)),V!==void 0){const q=V.normalized,re=V.itemSize,ce=t.get(V);if(ce===void 0)continue;const ae=ce.buffer,De=ce.type,me=ce.bytesPerElement,_e=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||V.gpuType===R0);if(V.isInterleavedBufferAttribute){const Pe=V.data,z=Pe.stride,xt=V.offset;if(Pe.isInstancedInterleavedBuffer){for(let fe=0;fe<ee.locationSize;fe++)D(ee.location+fe,Pe.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let fe=0;fe<ee.locationSize;fe++)g(ee.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let fe=0;fe<ee.locationSize;fe++)_(ee.location+fe,re/ee.locationSize,De,q,z*me,(xt+re/ee.locationSize*fe)*me,_e)}else{if(V.isInstancedBufferAttribute){for(let Pe=0;Pe<ee.locationSize;Pe++)D(ee.location+Pe,V.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Pe=0;Pe<ee.locationSize;Pe++)g(ee.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let Pe=0;Pe<ee.locationSize;Pe++)_(ee.location+Pe,re/ee.locationSize,De,q,re*me,re/ee.locationSize*Pe*me,_e)}}else if(Z!==void 0){const q=Z[G];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(ee.location,q);break;case 3:r.vertexAttrib3fv(ee.location,q);break;case 4:r.vertexAttrib4fv(ee.location,q);break;default:r.vertexAttrib1fv(ee.location,q)}}}}v()}function C(){N();for(const T in a){const P=a[T];for(const O in P){const k=P[O];for(const j in k)E(k[j].object),delete k[j];delete P[O]}delete a[T]}}function M(T){if(a[T.id]===void 0)return;const P=a[T.id];for(const O in P){const k=P[O];for(const j in k)E(k[j].object),delete k[j];delete P[O]}delete a[T.id]}function R(T){for(const P in a){const O=a[P];if(O[T.id]===void 0)continue;const k=O[T.id];for(const j in k)E(k[j].object),delete k[j];delete O[T.id]}}function N(){K(),l=!0,c!==x&&(c=x,p(c.object))}function K(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:u,reset:N,resetDefaultState:K,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:g,disableUnusedAttributes:v}}function dh(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function x(l,u,d){if(d===0)return;let p,E;if(i)p=r,E="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[E](s,l,u,d),t.update(u,s,d)}function c(l,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let E=0;E<d;E++)this.render(l[E],u[E]);else{p.multiDrawArraysWEBGL(s,l,0,u,0,d);let E=0;for(let m=0;m<d;m++)E+=u[m];t.update(E,s,1)}}this.setMode=o,this.render=a,this.renderInstances=x,this.renderMultiDraw=c}function hh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const x=s(a);x!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",x,"instead."),a=x);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),h=r.getParameter(r.MAX_VARYING_VECTORS),B=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,g=o||e.has("OES_texture_float"),D=A&&g,v=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:E,maxAttributes:m,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:B,vertexTextures:A,floatFragmentTextures:g,floatVertexTextures:D,maxSamples:v}}function fh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zn,a=new ze,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,p){const E=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,h=r.get(u);if(!i||E===null||E.length===0||s&&!f)s?l(null):c();else{const B=s?0:n,A=B*4;let g=h.clippingState||null;x.value=g,g=l(E,d,A,p);for(let D=0;D!==A;++D)g[D]=t[D];h.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=B}};function c(){x.value!==t&&(x.value=t,x.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,p,E){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=x.value,E!==!0||f===null){const h=p+m*4,B=d.matrixWorldInverse;a.getNormalMatrix(B),(f===null||f.length<h)&&(f=new Float32Array(h));for(let A=0,g=p;A!==m;++A,g+=4)o.copy(u[A]).applyMatrix4(B,a),o.normal.toArray(f,g),f[g+3]=o.constant}x.value=f,x.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function ph(r){let e=new WeakMap;function t(o,a){return a===Ws?o.mapping=vi:a===Xs&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ws||a===Xs)if(e.has(o)){const x=e.get(o).texture;return t(x,o.mapping)}else{const x=o.image;if(x&&x.height>0){const c=new yl(x.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const x=e.get(a);x!==void 0&&(e.delete(a),x.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class lo extends J0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,x=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=l*this.view.offsetY,x=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,ba=[.125,.215,.35,.446,.526,.582],Vn=20,vs=new lo,wa=new Te;let Ds=null,Fs=0,Ms=0;const Hn=(1+Math.sqrt(5))/2,Ei=1/Hn,Ra=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Hn,Ei),new L(0,Hn,-Ei),new L(Ei,0,Hn),new L(-Ei,0,Hn),new L(Hn,Ei,0),new L(-Hn,Ei,0)];class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ds=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Fs,Ms),e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:$i,format:Ot,colorSpace:Et,depthBuffer:!1},i=La(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eh(s)),this._blurMaterial=mh(s,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),x=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(wa),l.toneMapping=wn,l.autoClear=!1;const p=new yn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),E=new St(new ei,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(wa),m=!0);for(let h=0;h<6;h++){const B=h%3;B===0?(a.up.set(0,x[h],0),a.lookAt(c[h],0,0)):B===1?(a.up.set(0,0,x[h]),a.lookAt(0,c[h],0)):(a.up.set(0,x[h],0),a.lookAt(0,0,c[h]));const A=this._cubeSize;Fr(i,B*A,h>2?A:0,A,A),l.setRenderTarget(i),m&&l.render(E,a),l.render(e,a)}E.geometry.dispose(),E.material.dispose(),l.toneMapping=d,l.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vi||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const x=this._cubeSize;Fr(t,0,0,3*x,2*x),n.setRenderTarget(t),n.render(o,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ra[(i-1)%Ra.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const x=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new St(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),m=s/E,f=isFinite(s)?1+Math.floor(l*m):Vn;f>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vn}`);const h=[];let B=0;for(let _=0;_<Vn;++_){const b=_/m,C=Math.exp(-b*b/2);h.push(C),_===0?B+=C:_<f&&(B+=2*C)}for(let _=0;_<h.length;_++)h[_]=h[_]/B;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=E,d.mipInt.value=A-n;const g=this._sizeLods[i],D=3*g*(i>A-Ai?i-A+Ai:0),v=4*(this._cubeSize-g);Fr(t,D,v,3*g,2*g),x.setRenderTarget(t),x.render(u,vs)}}function Eh(r){const e=[],t=[],n=[];let i=r;const s=r-Ai+1+ba.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let x=1/a;o>r-Ai?x=ba[o-r+Ai-1]:o===0&&(x=0),n.push(x);const c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,E=6,m=3,f=2,h=1,B=new Float32Array(m*E*p),A=new Float32Array(f*E*p),g=new Float32Array(h*E*p);for(let v=0;v<p;v++){const _=v%3*2/3-1,b=v>2?0:-1,C=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];B.set(C,m*E*v),A.set(d,f*E*v);const M=[v,v,v,v,v,v];g.set(M,h*E*v)}const D=new Kt;D.setAttribute("position",new Tt(B,m)),D.setAttribute("uv",new Tt(A,f)),D.setAttribute("faceIndex",new Tt(g,h)),e.push(D),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function La(r,e,t){const n=new $n(r,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mh(r,e,t){const n=new Float32Array(Vn),i=new L(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ia(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Na(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function Ah(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const x=a.mapping,c=x===Ws||x===Xs,l=x===vi||x===Di;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Pa(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||l&&u&&i(u)){t===null&&(t=new Pa(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let x=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&x++;return x===c}function s(a){const x=a.target;x.removeEventListener("dispose",s);const c=e.get(x);c!==void 0&&(e.delete(x),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ch(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const E in d.attributes)e.remove(d.attributes[E]);for(const E in d.morphAttributes){const m=d.morphAttributes[E];for(let f=0,h=m.length;f<h;f++)e.remove(m[f])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function x(u){const d=u.attributes;for(const E in d)e.update(d[E],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const E in p){const m=p[E];for(let f=0,h=m.length;f<h;f++)e.update(m[f],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,E=u.attributes.position;let m=0;if(p!==null){const B=p.array;m=p.version;for(let A=0,g=B.length;A<g;A+=3){const D=B[A+0],v=B[A+1],_=B[A+2];d.push(D,v,v,_,_,D)}}else if(E!==void 0){const B=E.array;m=E.version;for(let A=0,g=B.length/3-1;A<g;A+=3){const D=A+0,v=A+1,_=A+2;d.push(D,v,v,_,_,D)}}else return;const f=new(V0(d)?Z0:K0)(d,1);f.version=m;const h=s.get(u);h&&e.remove(h),s.set(u,f)}function l(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:x,getWireframeAttribute:l}}function _h(r,e,t,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,x;function c(p){a=p.type,x=p.bytesPerElement}function l(p,E){r.drawElements(s,E,a,p*x),t.update(E,s,1)}function u(p,E,m){if(m===0)return;let f,h;if(i)f=r,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,E,a,p*x,m),t.update(E,s,m)}function d(p,E,m){if(m===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<m;h++)this.render(p[h]/x,E[h]);else{f.multiDrawElementsWEBGL(s,E,0,a,p,0,m);let h=0;for(let B=0;B<m;B++)h+=E[B];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Bh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vh(r,e){return r[0]-e[0]}function Dh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function x(c,l,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,E=p!==void 0?p.length:0;let m=s.get(l);if(m===void 0||m.count!==E){let T=function(){N.dispose(),s.delete(l),l.removeEventListener("dispose",T)};m!==void 0&&m.texture.dispose();const B=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,D=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let b=0;B===!0&&(b=1),A===!0&&(b=2),g===!0&&(b=3);let C=l.attributes.position.count*b,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*M*4*E),N=new q0(R,C,M,E);N.type=dn,N.needsUpdate=!0;const K=b*4;for(let P=0;P<E;P++){const O=D[P],k=v[P],j=_[P],X=C*M*4*P;for(let Z=0;Z<O.count;Z++){const G=Z*K;B===!0&&(o.fromBufferAttribute(O,Z),R[X+G+0]=o.x,R[X+G+1]=o.y,R[X+G+2]=o.z,R[X+G+3]=0),A===!0&&(o.fromBufferAttribute(k,Z),R[X+G+4]=o.x,R[X+G+5]=o.y,R[X+G+6]=o.z,R[X+G+7]=0),g===!0&&(o.fromBufferAttribute(j,Z),R[X+G+8]=o.x,R[X+G+9]=o.y,R[X+G+10]=o.z,R[X+G+11]=j.itemSize===4?o.w:1)}}m={count:E,texture:N,size:new Ve(C,M)},s.set(l,m),l.addEventListener("dispose",T)}let f=0;for(let B=0;B<d.length;B++)f+=d[B];const h=l.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",h),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const p=d===void 0?0:d.length;let E=n[l.id];if(E===void 0||E.length!==p){E=[];for(let A=0;A<p;A++)E[A]=[A,0];n[l.id]=E}for(let A=0;A<p;A++){const g=E[A];g[0]=A,g[1]=d[A]}E.sort(Dh);for(let A=0;A<8;A++)A<p&&E[A][1]?(a[A][0]=E[A][0],a[A][1]=E[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(vh);const m=l.morphAttributes.position,f=l.morphAttributes.normal;let h=0;for(let A=0;A<8;A++){const g=a[A],D=g[0],v=g[1];D!==Number.MAX_SAFE_INTEGER&&v?(m&&l.getAttribute("morphTarget"+A)!==m[D]&&l.setAttribute("morphTarget"+A,m[D]),f&&l.getAttribute("morphNormal"+A)!==f[D]&&l.setAttribute("morphNormal"+A,f[D]),i[A]=v,h+=v):(m&&l.hasAttribute("morphTarget"+A)===!0&&l.deleteAttribute("morphTarget"+A),f&&l.hasAttribute("morphNormal"+A)===!0&&l.deleteAttribute("morphNormal"+A),i[A]=0)}const B=l.morphTargetsRelative?1:1-h;u.getUniforms().setValue(r,"morphTargetBaseInfluence",B),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:x}}function Mh(r,e,t,n){let i=new WeakMap;function s(x){const c=n.render.frame,l=x.geometry,u=e.get(x,l);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),x.isInstancedMesh&&(x.hasEventListener("dispose",a)===!1&&x.addEventListener("dispose",a),i.get(x)!==c&&(t.update(x.instanceMatrix,r.ARRAY_BUFFER),x.instanceColor!==null&&t.update(x.instanceColor,r.ARRAY_BUFFER),i.set(x,c))),x.isSkinnedMesh){const d=x.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(x){const c=x.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class tx extends At{constructor(e,t,n,i,s,o,a,x,c,l){if(l=l!==void 0?l:jn,l!==jn&&l!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===jn&&(n=Mn),n===void 0&&l===Mi&&(n=Yn),super(null,i,s,o,a,x,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=x!==void 0?x:pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nx=new At,ix=new tx(1,1);ix.compareFunction=G0;const rx=new q0,sx=new ll,ox=new Q0,Ua=[],ka=[],Oa=new Float32Array(16),za=new Float32Array(9),Ha=new Float32Array(4);function Pi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ua[i];if(s===void 0&&(s=new Float32Array(i),Ua[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function jr(r,e){let t=ka[e];t===void 0&&(t=new Int32Array(e),ka[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function Th(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function bh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function wh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;Ha.set(n),r.uniformMatrix2fv(this.addr,!1,Ha),ut(t,n)}}function Rh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;za.set(n),r.uniformMatrix3fv(this.addr,!1,za),ut(t,n)}}function Ph(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;Oa.set(n),r.uniformMatrix4fv(this.addr,!1,Oa),ut(t,n)}}function Lh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ih(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function Nh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function Uh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function kh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Oh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function zh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function Hh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function Gh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?ix:nx;t.setTexture2D(e||s,i)}function Vh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sx,i)}function Wh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ox,i)}function Xh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rx,i)}function qh(r){switch(r){case 5126:return yh;case 35664:return Sh;case 35665:return Th;case 35666:return bh;case 35674:return wh;case 35675:return Rh;case 35676:return Ph;case 5124:case 35670:return Lh;case 35667:case 35671:return Ih;case 35668:case 35672:return Nh;case 35669:case 35673:return Uh;case 5125:return kh;case 36294:return Oh;case 36295:return zh;case 36296:return Hh;case 35678:case 36198:case 36298:case 36306:case 35682:return Gh;case 35679:case 36299:case 36307:return Vh;case 35680:case 36300:case 36308:case 36293:return Wh;case 36289:case 36303:case 36311:case 36292:return Xh}}function Yh(r,e){r.uniform1fv(this.addr,e)}function jh(r,e){const t=Pi(e,this.size,2);r.uniform2fv(this.addr,t)}function Kh(r,e){const t=Pi(e,this.size,3);r.uniform3fv(this.addr,t)}function Zh(r,e){const t=Pi(e,this.size,4);r.uniform4fv(this.addr,t)}function $h(r,e){const t=Pi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Jh(r,e){const t=Pi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qh(r,e){const t=Pi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ef(r,e){r.uniform1iv(this.addr,e)}function tf(r,e){r.uniform2iv(this.addr,e)}function nf(r,e){r.uniform3iv(this.addr,e)}function rf(r,e){r.uniform4iv(this.addr,e)}function sf(r,e){r.uniform1uiv(this.addr,e)}function of(r,e){r.uniform2uiv(this.addr,e)}function af(r,e){r.uniform3uiv(this.addr,e)}function xf(r,e){r.uniform4uiv(this.addr,e)}function cf(r,e,t){const n=this.cache,i=e.length,s=jr(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nx,s[o])}function lf(r,e,t){const n=this.cache,i=e.length,s=jr(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||sx,s[o])}function uf(r,e,t){const n=this.cache,i=e.length,s=jr(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ox,s[o])}function df(r,e,t){const n=this.cache,i=e.length,s=jr(t,i);lt(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rx,s[o])}function hf(r){switch(r){case 5126:return Yh;case 35664:return jh;case 35665:return Kh;case 35666:return Zh;case 35674:return $h;case 35675:return Jh;case 35676:return Qh;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return sf;case 36294:return of;case 36295:return af;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}class ff{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qh(t.type)}}class pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function Ga(r,e){r.seq.push(e),r.map[e.id]=e}function mf(r,e,t){const n=r.name,i=n.length;for(ys.lastIndex=0;;){const s=ys.exec(n),o=ys.lastIndex;let a=s[1];const x=s[2]==="]",c=s[3];if(x&&(a=a|0),c===void 0||c==="["&&o+2===i){Ga(t,c===void 0?new ff(a,r,e):new pf(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Ef(a),Ga(t,u)),t=u}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);mf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],x=n[a.id];x.needsUpdate!==!1&&a.setValue(e,x.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Va(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Af=37297;let gf=0;function Cf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _f(r){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(r);let n;switch(e===t?n="":e===Hr&&t===zr?n="LinearDisplayP3ToLinearSRGB":e===zr&&t===Hr&&(n="LinearSRGBToLinearDisplayP3"),r){case Et:case Xr:return[n,"LinearTransferOETF"];case st:case oo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Wa(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cf(r.getShaderSource(e),o)}else return i}function Bf(r,e){const t=_f(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vf(r,e){let t;switch(e){case mc:t="Linear";break;case Ac:t="Reinhard";break;case gc:t="OptimizedCineon";break;case Cc:t="ACESFilmic";break;case Bc:t="AgX";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Df(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Ff(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gi).join(`
`)}function Mf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yf(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gi(r){return r!==""}function Xa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sf=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(r){return r.replace(Sf,bf)}const Tf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bf(r,e){let t=Ie[e];if(t===void 0){const n=Tf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $s(t)}const wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(r){return r.replace(wf,Rf)}function Rf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ja(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Lf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vi:case Di:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function If(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Nf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case T0:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Uf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const x=Pf(t),c=Lf(t),l=If(t),u=Nf(t),d=Uf(t),p=t.isWebGL2?"":Df(t),E=Ff(t),m=Mf(s),f=i.createProgram();let h,B,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gi).join(`
`),h.length>0&&(h+=`
`),B=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gi).join(`
`),B.length>0&&(B+=`
`)):(h=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),B=[p,ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==wn?vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Bf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),o=$s(o),o=Xa(o,t),o=qa(o,t),a=$s(a),a=Xa(a,t),a=qa(a,t),o=Ya(o),a=Ya(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,h=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,B=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+B);const g=A+h+o,D=A+B+a,v=Va(i,i.VERTEX_SHADER,g),_=Va(i,i.FRAGMENT_SHADER,D);i.attachShader(f,v),i.attachShader(f,_),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function b(N){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(f).trim(),T=i.getShaderInfoLog(v).trim(),P=i.getShaderInfoLog(_).trim();let O=!0,k=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,v,_);else{const j=Wa(i,v,"vertex"),X=Wa(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+j+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(T===""||P==="")&&(k=!1);k&&(N.diagnostics={runnable:O,programLog:K,vertexShader:{log:T,prefix:h},fragmentShader:{log:P,prefix:B}})}i.deleteShader(v),i.deleteShader(_),C=new Lr(i,f),M=yf(i,f)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(f,Af)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=_,this}let Of=0;class zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hf(e),t.set(e,n)),n}}class Hf{constructor(e){this.id=Of++,this.code=e,this.usedTimes=0}}function Gf(r,e,t,n,i,s,o){const a=new Y0,x=new zf,c=[],l=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(C){return C===0?"uv":`uv${C}`}function f(C,M,R,N,K){const T=N.fog,P=K.geometry,O=C.isMeshStandardMaterial?N.environment:null,k=(C.isMeshStandardMaterial?t:e).get(C.envMap||O),j=k&&k.mapping===Wr?k.image.height:null,X=E[C.type];C.precision!==null&&(p=i.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=Z!==void 0?Z.length:0;let ee=0;P.morphAttributes.position!==void 0&&(ee=1),P.morphAttributes.normal!==void 0&&(ee=2),P.morphAttributes.color!==void 0&&(ee=3);let V,q,re,ce;if(X){const vt=$t[X];V=vt.vertexShader,q=vt.fragmentShader}else V=C.vertexShader,q=C.fragmentShader,x.update(C),re=x.getVertexShaderID(C),ce=x.getFragmentShaderID(C);const ae=r.getRenderTarget(),De=K.isInstancedMesh===!0,me=K.isBatchedMesh===!0,_e=!!C.map,Pe=!!C.matcap,z=!!k,xt=!!C.aoMap,fe=!!C.lightMap,ge=!!C.bumpMap,ue=!!C.normalMap,Ye=!!C.displacementMap,Me=!!C.emissiveMap,S=!!C.metalnessMap,F=!!C.roughnessMap,U=C.anisotropy>0,Q=C.clearcoat>0,J=C.iridescence>0,te=C.sheen>0,pe=C.transmission>0,xe=U&&!!C.anisotropyMap,de=Q&&!!C.clearcoatMap,ve=Q&&!!C.clearcoatNormalMap,Ne=Q&&!!C.clearcoatRoughnessMap,$=J&&!!C.iridescenceMap,je=J&&!!C.iridescenceThicknessMap,He=te&&!!C.sheenColorMap,Se=te&&!!C.sheenRoughnessMap,Ae=!!C.specularMap,he=!!C.specularColorMap,Le=!!C.specularIntensityMap,Xe=pe&&!!C.transmissionMap,it=pe&&!!C.thicknessMap,ke=!!C.gradientMap,ne=!!C.alphaMap,w=C.alphaTest>0,se=!!C.alphaHash,oe=!!C.extensions,Fe=!!P.attributes.uv1,Ce=!!P.attributes.uv2,$e=!!P.attributes.uv3;let Je=wn;return C.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Je=r.toneMapping),{isWebGL2:l,shaderID:X,shaderType:C.type,shaderName:C.name,vertexShader:V,fragmentShader:q,defines:C.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:me,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Et,map:_e,matcap:Pe,envMap:z,envMapMode:z&&k.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:fe,bumpMap:ge,normalMap:ue,displacementMap:d&&Ye,emissiveMap:Me,normalMapObjectSpace:ue&&C.normalMapType===Nc,normalMapTangentSpace:ue&&C.normalMapType===H0,metalnessMap:S,roughnessMap:F,anisotropy:U,anisotropyMap:xe,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:je,sheen:te,sheenColorMap:He,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:he,specularIntensityMap:Le,transmission:pe,transmissionMap:Xe,thicknessMap:it,gradientMap:ke,opaque:C.transparent===!1&&C.blending===Ci,alphaMap:ne,alphaTest:w,alphaHash:se,combine:C.combine,mapUv:_e&&m(C.map.channel),aoMapUv:xt&&m(C.aoMap.channel),lightMapUv:fe&&m(C.lightMap.channel),bumpMapUv:ge&&m(C.bumpMap.channel),normalMapUv:ue&&m(C.normalMap.channel),displacementMapUv:Ye&&m(C.displacementMap.channel),emissiveMapUv:Me&&m(C.emissiveMap.channel),metalnessMapUv:S&&m(C.metalnessMap.channel),roughnessMapUv:F&&m(C.roughnessMap.channel),anisotropyMapUv:xe&&m(C.anisotropyMap.channel),clearcoatMapUv:de&&m(C.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&m(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(C.iridescenceMap.channel),iridescenceThicknessMapUv:je&&m(C.iridescenceThicknessMap.channel),sheenColorMapUv:He&&m(C.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(C.sheenRoughnessMap.channel),specularMapUv:Ae&&m(C.specularMap.channel),specularColorMapUv:he&&m(C.specularColorMap.channel),specularIntensityMapUv:Le&&m(C.specularIntensityMap.channel),transmissionMapUv:Xe&&m(C.transmissionMap.channel),thicknessMapUv:it&&m(C.thicknessMap.channel),alphaMapUv:ne&&m(C.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ue||U),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ce,vertexUv3s:$e,pointsUvs:K.isPoints===!0&&!!P.attributes.uv&&(_e||ne),fog:!!T,useFog:C.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:_e&&C.map.isVideoTexture===!0&&We.getTransfer(C.map.colorSpace)===et,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yt,flipSided:C.side===wt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:oe&&C.extensions.derivatives===!0,extensionFragDepth:oe&&C.extensions.fragDepth===!0,extensionDrawBuffers:oe&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&C.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function h(C){const M=[];if(C.shaderID?M.push(C.shaderID):(M.push(C.customVertexShaderID),M.push(C.customFragmentShaderID)),C.defines!==void 0)for(const R in C.defines)M.push(R),M.push(C.defines[R]);return C.isRawShaderMaterial===!1&&(B(M,C),A(M,C),M.push(r.outputColorSpace)),M.push(C.customProgramCacheKey),M.join()}function B(C,M){C.push(M.precision),C.push(M.outputColorSpace),C.push(M.envMapMode),C.push(M.envMapCubeUVHeight),C.push(M.mapUv),C.push(M.alphaMapUv),C.push(M.lightMapUv),C.push(M.aoMapUv),C.push(M.bumpMapUv),C.push(M.normalMapUv),C.push(M.displacementMapUv),C.push(M.emissiveMapUv),C.push(M.metalnessMapUv),C.push(M.roughnessMapUv),C.push(M.anisotropyMapUv),C.push(M.clearcoatMapUv),C.push(M.clearcoatNormalMapUv),C.push(M.clearcoatRoughnessMapUv),C.push(M.iridescenceMapUv),C.push(M.iridescenceThicknessMapUv),C.push(M.sheenColorMapUv),C.push(M.sheenRoughnessMapUv),C.push(M.specularMapUv),C.push(M.specularColorMapUv),C.push(M.specularIntensityMapUv),C.push(M.transmissionMapUv),C.push(M.thicknessMapUv),C.push(M.combine),C.push(M.fogExp2),C.push(M.sizeAttenuation),C.push(M.morphTargetsCount),C.push(M.morphAttributeCount),C.push(M.numDirLights),C.push(M.numPointLights),C.push(M.numSpotLights),C.push(M.numSpotLightMaps),C.push(M.numHemiLights),C.push(M.numRectAreaLights),C.push(M.numDirLightShadows),C.push(M.numPointLightShadows),C.push(M.numSpotLightShadows),C.push(M.numSpotLightShadowsWithMaps),C.push(M.numLightProbes),C.push(M.shadowMapType),C.push(M.toneMapping),C.push(M.numClippingPlanes),C.push(M.numClipIntersection),C.push(M.depthPacking)}function A(C,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),C.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),C.push(a.mask)}function g(C){const M=E[C.type];let R;if(M){const N=$t[M];R=vl.clone(N.uniforms)}else R=C.uniforms;return R}function D(C,M){let R;for(let N=0,K=c.length;N<K;N++){const T=c[N];if(T.cacheKey===M){R=T,++R.usedTimes;break}}return R===void 0&&(R=new kf(r,M,C,s),c.push(R)),R}function v(C){if(--C.usedTimes===0){const M=c.indexOf(C);c[M]=c[c.length-1],c.pop(),C.destroy()}}function _(C){x.remove(C)}function b(){x.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:g,acquireProgram:D,releaseProgram:v,releaseShaderCache:_,programs:c,dispose:b}}function Vf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ka(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Za(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,E,m,f){let h=r[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:p,groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},r[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=p,h.groupOrder=E,h.renderOrder=u.renderOrder,h.z=m,h.group=f),e++,h}function a(u,d,p,E,m,f){const h=o(u,d,p,E,m,f);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):t.push(h)}function x(u,d,p,E,m,f){const h=o(u,d,p,E,m,f);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function c(u,d){t.length>1&&t.sort(u||Wf),n.length>1&&n.sort(d||Ka),i.length>1&&i.sort(d||Ka)}function l(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:x,finish:l,sort:c}}function Xf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Za,r.set(n,[o])):i>=s.length?(o=new Za,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Yf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jf=0;function Kf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Zf(r,e){const t=new qf,n=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,o=new we,a=new we;function x(l,u){let d=0,p=0,E=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,f=0,h=0,B=0,A=0,g=0,D=0,v=0,_=0,b=0,C=0;l.sort(Kf);const M=u===!0?Math.PI:1;for(let N=0,K=l.length;N<K;N++){const T=l[N],P=T.color,O=T.intensity,k=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=P.r*O*M,p+=P.g*O*M,E+=P.b*O*M;else if(T.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(T.sh.coefficients[X],O);C++}else if(T.isDirectionalLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity*M),T.castShadow){const Z=T.shadow,G=n.get(T);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=T.shadow.matrix,g++}i.directional[m]=X,m++}else if(T.isSpotLight){const X=t.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(P).multiplyScalar(O*M),X.distance=k,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,i.spot[h]=X;const Z=T.shadow;if(T.map&&(i.spotLightMap[_]=T.map,_++,Z.updateMatrices(T),T.castShadow&&b++),i.spotLightMatrix[h]=Z.matrix,T.castShadow){const G=n.get(T);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[h]=G,i.spotShadowMap[h]=j,v++}h++}else if(T.isRectAreaLight){const X=t.get(T);X.color.copy(P).multiplyScalar(O),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),i.rectArea[B]=X,B++}else if(T.isPointLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity*M),X.distance=T.distance,X.decay=T.decay,T.castShadow){const Z=T.shadow,G=n.get(T);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[f]=G,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=T.shadow.matrix,D++}i.point[f]=X,f++}else if(T.isHemisphereLight){const X=t.get(T);X.skyColor.copy(T.color).multiplyScalar(O*M),X.groundColor.copy(T.groundColor).multiplyScalar(O*M),i.hemi[A]=X,A++}}B>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=E;const R=i.hash;(R.directionalLength!==m||R.pointLength!==f||R.spotLength!==h||R.rectAreaLength!==B||R.hemiLength!==A||R.numDirectionalShadows!==g||R.numPointShadows!==D||R.numSpotShadows!==v||R.numSpotMaps!==_||R.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=h,i.rectArea.length=B,i.point.length=f,i.hemi.length=A,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=v+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,R.directionalLength=m,R.pointLength=f,R.spotLength=h,R.rectAreaLength=B,R.hemiLength=A,R.numDirectionalShadows=g,R.numPointShadows=D,R.numSpotShadows=v,R.numSpotMaps=_,R.numLightProbes=C,i.version=jf++)}function c(l,u){let d=0,p=0,E=0,m=0,f=0;const h=u.matrixWorldInverse;for(let B=0,A=l.length;B<A;B++){const g=l[B];if(g.isDirectionalLight){const D=i.directional[d];D.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),d++}else if(g.isSpotLight){const D=i.spot[E];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),E++}else if(g.isRectAreaLight){const D=i.rectArea[m];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(h),a.identity(),o.copy(g.matrixWorld),o.premultiply(h),a.extractRotation(o),D.halfWidth.set(g.width*.5,0,0),D.halfHeight.set(0,g.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),m++}else if(g.isPointLight){const D=i.point[p];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(h),p++}else if(g.isHemisphereLight){const D=i.hemi[f];D.direction.setFromMatrixPosition(g.matrixWorld),D.direction.transformDirection(h),f++}}}return{setup:x,setupView:c,state:i}}function $a(r,e){const t=new Zf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function x(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:x,setupLightsView:c,pushLight:o,pushShadow:a}}function $f(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let x;return a===void 0?(x=new $a(r,e),t.set(s,[x])):o>=a.length?(x=new $a(r,e),a.push(x)):x=a[o],x}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jf extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
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
}`;function np(r,e,t){let n=new xo;const i=new Ve,s=new Ve,o=new Ze,a=new Jf({depthPacking:Ic}),x=new Qf,c={},l=t.maxTextureSize,u={[pn]:wt,[wt]:pn,[Yt]:Yt},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ep,fragmentShader:tp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const E=new Kt;E.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(E,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let h=this.type;this.render=function(v,_,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const C=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const K=h!==un&&this.type===un,T=h===un&&this.type!==un;for(let P=0,O=v.length;P<O;P++){const k=v[P],j=k.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const X=j.getFrameExtents();if(i.multiply(X),s.copy(j.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(s.x=Math.floor(l/X.x),i.x=s.x*X.x,j.mapSize.x=s.x),i.y>l&&(s.y=Math.floor(l/X.y),i.y=s.y*X.y,j.mapSize.y=s.y)),j.map===null||K===!0||T===!0){const G=this.type!==un?{minFilter:pt,magFilter:pt}:{};j.map!==null&&j.map.dispose(),j.map=new $n(i.x,i.y,G),j.map.texture.name=k.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Z=j.getViewportCount();for(let G=0;G<Z;G++){const ee=j.getViewport(G);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),N.viewport(o),j.updateMatrices(k,G),n=j.getFrustum(),g(_,b,j.camera,k,this.type)}j.isPointLightShadow!==!0&&this.type===un&&B(j,b),j.needsUpdate=!1}h=this.type,f.needsUpdate=!1,r.setRenderTarget(C,M,R)};function B(v,_){const b=e.update(m);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new $n(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(_,null,b,d,m,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(_,null,b,p,m,null)}function A(v,_,b,C){let M=null;const R=b.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0)M=R;else if(M=b.isPointLight===!0?x:a,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const N=M.uuid,K=_.uuid;let T=c[N];T===void 0&&(T={},c[N]=T);let P=T[K];P===void 0&&(P=M.clone(),T[K]=P,_.addEventListener("dispose",D)),M=P}if(M.visible=_.visible,M.wireframe=_.wireframe,C===un?M.side=_.shadowSide!==null?_.shadowSide:_.side:M.side=_.shadowSide!==null?_.shadowSide:u[_.side],M.alphaMap=_.alphaMap,M.alphaTest=_.alphaTest,M.map=_.map,M.clipShadows=_.clipShadows,M.clippingPlanes=_.clippingPlanes,M.clipIntersection=_.clipIntersection,M.displacementMap=_.displacementMap,M.displacementScale=_.displacementScale,M.displacementBias=_.displacementBias,M.wireframeLinewidth=_.wireframeLinewidth,M.linewidth=_.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=r.properties.get(M);N.light=b}return M}function g(v,_,b,C,M){if(v.visible===!1)return;if(v.layers.test(_.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===un)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld);const K=e.update(v),T=v.material;if(Array.isArray(T)){const P=K.groups;for(let O=0,k=P.length;O<k;O++){const j=P[O],X=T[j.materialIndex];if(X&&X.visible){const Z=A(v,X,C,M);v.onBeforeShadow(r,v,_,b,K,Z,j),r.renderBufferDirect(b,null,K,Z,v,j),v.onAfterShadow(r,v,_,b,K,Z,j)}}}else if(T.visible){const P=A(v,T,C,M);v.onBeforeShadow(r,v,_,b,K,P,null),r.renderBufferDirect(b,null,K,P,v,null),v.onAfterShadow(r,v,_,b,K,P,null)}}const N=v.children;for(let K=0,T=N.length;K<T;K++)g(N[K],_,b,C,M)}function D(v){v.target.removeEventListener("dispose",D);for(const b in c){const C=c[b],M=v.target.uuid;M in C&&(C[M].dispose(),delete C[M])}}}function ip(r,e,t){const n=t.isWebGL2;function i(){let w=!1;const se=new Ze;let oe=null;const Fe=new Ze(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!w&&(r.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){w=Ce},setClear:function(Ce,$e,Je,dt,vt){vt===!0&&(Ce*=dt,$e*=dt,Je*=dt),se.set(Ce,$e,Je,dt),Fe.equals(se)===!1&&(r.clearColor(Ce,$e,Je,dt),Fe.copy(se))},reset:function(){w=!1,oe=null,Fe.set(-1,0,0,0)}}}function s(){let w=!1,se=null,oe=null,Fe=null;return{setTest:function(Ce){Ce?me(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(Ce){se!==Ce&&!w&&(r.depthMask(Ce),se=Ce)},setFunc:function(Ce){if(oe!==Ce){switch(Ce){case xc:r.depthFunc(r.NEVER);break;case cc:r.depthFunc(r.ALWAYS);break;case lc:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case uc:r.depthFunc(r.EQUAL);break;case dc:r.depthFunc(r.GEQUAL);break;case hc:r.depthFunc(r.GREATER);break;case fc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Ce}},setLocked:function(Ce){w=Ce},setClear:function(Ce){Fe!==Ce&&(r.clearDepth(Ce),Fe=Ce)},reset:function(){w=!1,se=null,oe=null,Fe=null}}}function o(){let w=!1,se=null,oe=null,Fe=null,Ce=null,$e=null,Je=null,dt=null,vt=null;return{setTest:function(Qe){w||(Qe?me(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!w&&(r.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Dt,Zt){(oe!==Qe||Fe!==Dt||Ce!==Zt)&&(r.stencilFunc(Qe,Dt,Zt),oe=Qe,Fe=Dt,Ce=Zt)},setOp:function(Qe,Dt,Zt){($e!==Qe||Je!==Dt||dt!==Zt)&&(r.stencilOp(Qe,Dt,Zt),$e=Qe,Je=Dt,dt=Zt)},setLocked:function(Qe){w=Qe},setClear:function(Qe){vt!==Qe&&(r.clearStencil(Qe),vt=Qe)},reset:function(){w=!1,se=null,oe=null,Fe=null,Ce=null,$e=null,Je=null,dt=null,vt=null}}}const a=new i,x=new s,c=new o,l=new WeakMap,u=new WeakMap;let d={},p={},E=new WeakMap,m=[],f=null,h=!1,B=null,A=null,g=null,D=null,v=null,_=null,b=null,C=new Te(0,0,0),M=0,R=!1,N=null,K=null,T=null,P=null,O=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=X>=2);let G=null,ee={};const V=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),re=new Ze().fromArray(V),ce=new Ze().fromArray(q);function ae(w,se,oe,Fe){const Ce=new Uint8Array(4),$e=r.createTexture();r.bindTexture(w,$e),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<oe;Je++)n&&(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(se+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return $e}const De={};De[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),x.setClear(1),c.setClear(0),me(r.DEPTH_TEST),x.setFunc(Ur),Me(!1),S(bo),me(r.CULL_FACE),ue(bn);function me(w){d[w]!==!0&&(r.enable(w),d[w]=!0)}function _e(w){d[w]!==!1&&(r.disable(w),d[w]=!1)}function Pe(w,se){return p[w]!==se?(r.bindFramebuffer(w,se),p[w]=se,n&&(w===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=se),w===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function z(w,se){let oe=m,Fe=!1;if(w)if(oe=E.get(se),oe===void 0&&(oe=[],E.set(se,oe)),w.isWebGLMultipleRenderTargets){const Ce=w.texture;if(oe.length!==Ce.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,Je=Ce.length;$e<Je;$e++)oe[$e]=r.COLOR_ATTACHMENT0+$e;oe.length=Ce.length,Fe=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Fe=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function xt(w){return f!==w?(r.useProgram(w),f=w,!0):!1}const fe={[Gn]:r.FUNC_ADD,[Yx]:r.FUNC_SUBTRACT,[jx]:r.FUNC_REVERSE_SUBTRACT};if(n)fe[Lo]=r.MIN,fe[Io]=r.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(fe[Lo]=w.MIN_EXT,fe[Io]=w.MAX_EXT)}const ge={[Kx]:r.ZERO,[Zx]:r.ONE,[$x]:r.SRC_COLOR,[Gs]:r.SRC_ALPHA,[ic]:r.SRC_ALPHA_SATURATE,[tc]:r.DST_COLOR,[Qx]:r.DST_ALPHA,[Jx]:r.ONE_MINUS_SRC_COLOR,[Vs]:r.ONE_MINUS_SRC_ALPHA,[nc]:r.ONE_MINUS_DST_COLOR,[ec]:r.ONE_MINUS_DST_ALPHA,[rc]:r.CONSTANT_COLOR,[sc]:r.ONE_MINUS_CONSTANT_COLOR,[oc]:r.CONSTANT_ALPHA,[ac]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(w,se,oe,Fe,Ce,$e,Je,dt,vt,Qe){if(w===bn){h===!0&&(_e(r.BLEND),h=!1);return}if(h===!1&&(me(r.BLEND),h=!0),w!==qx){if(w!==B||Qe!==R){if((A!==Gn||v!==Gn)&&(r.blendEquation(r.FUNC_ADD),A=Gn,v=Gn),Qe)switch(w){case Ci:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wo:r.blendFunc(r.ONE,r.ONE);break;case Ro:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Po:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ci:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ro:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Po:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}g=null,D=null,_=null,b=null,C.set(0,0,0),M=0,B=w,R=Qe}return}Ce=Ce||se,$e=$e||oe,Je=Je||Fe,(se!==A||Ce!==v)&&(r.blendEquationSeparate(fe[se],fe[Ce]),A=se,v=Ce),(oe!==g||Fe!==D||$e!==_||Je!==b)&&(r.blendFuncSeparate(ge[oe],ge[Fe],ge[$e],ge[Je]),g=oe,D=Fe,_=$e,b=Je),(dt.equals(C)===!1||vt!==M)&&(r.blendColor(dt.r,dt.g,dt.b,vt),C.copy(dt),M=vt),B=w,R=!1}function Ye(w,se){w.side===Yt?_e(r.CULL_FACE):me(r.CULL_FACE);let oe=w.side===wt;se&&(oe=!oe),Me(oe),w.blending===Ci&&w.transparent===!1?ue(bn):ue(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),x.setFunc(w.depthFunc),x.setTest(w.depthTest),x.setMask(w.depthWrite),a.setMask(w.colorWrite);const Fe=w.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),U(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(w){N!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),N=w)}function S(w){w!==Vx?(me(r.CULL_FACE),w!==K&&(w===bo?r.cullFace(r.BACK):w===Wx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),K=w}function F(w){w!==T&&(j&&r.lineWidth(w),T=w)}function U(w,se,oe){w?(me(r.POLYGON_OFFSET_FILL),(P!==se||O!==oe)&&(r.polygonOffset(se,oe),P=se,O=oe)):_e(r.POLYGON_OFFSET_FILL)}function Q(w){w?me(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function J(w){w===void 0&&(w=r.TEXTURE0+k-1),G!==w&&(r.activeTexture(w),G=w)}function te(w,se,oe){oe===void 0&&(G===null?oe=r.TEXTURE0+k-1:oe=G);let Fe=ee[oe];Fe===void 0&&(Fe={type:void 0,texture:void 0},ee[oe]=Fe),(Fe.type!==w||Fe.texture!==se)&&(G!==oe&&(r.activeTexture(oe),G=oe),r.bindTexture(w,se||De[w]),Fe.type=w,Fe.texture=se)}function pe(){const w=ee[G];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(w){re.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),re.copy(w))}function Xe(w){ce.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),ce.copy(w))}function it(w,se){let oe=u.get(se);oe===void 0&&(oe=new WeakMap,u.set(se,oe));let Fe=oe.get(w);Fe===void 0&&(Fe=r.getUniformBlockIndex(se,w.name),oe.set(w,Fe))}function ke(w,se){const Fe=u.get(se).get(w);l.get(se)!==Fe&&(r.uniformBlockBinding(se,Fe,w.__bindingPointIndex),l.set(se,Fe))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},G=null,ee={},p={},E=new WeakMap,m=[],f=null,h=!1,B=null,A=null,g=null,D=null,v=null,_=null,b=null,C=new Te(0,0,0),M=0,R=!1,N=null,K=null,T=null,P=null,O=null,re.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),a.reset(),x.reset(),c.reset()}return{buffers:{color:a,depth:x,stencil:c},enable:me,disable:_e,bindFramebuffer:Pe,drawBuffers:z,useProgram:xt,setBlending:ue,setMaterial:Ye,setFlipSided:Me,setCullFace:S,setLineWidth:F,setPolygonOffset:U,setScissorTest:Q,activeTexture:J,bindTexture:te,unbindTexture:pe,compressedTexImage2D:xe,compressedTexImage3D:de,texImage2D:Ae,texImage3D:he,updateUBOMapping:it,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:Se,texSubImage2D:ve,texSubImage3D:Ne,compressedTexSubImage2D:$,compressedTexSubImage3D:je,scissor:Le,viewport:Xe,reset:ne}}function rp(r,e,t,n,i,s,o){const a=i.isWebGL2,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,F){return p?new OffscreenCanvas(S,F):Qi("canvas")}function m(S,F,U,Q){let J=1;if((S.width>Q||S.height>Q)&&(J=Q/Math.max(S.width,S.height)),J<1||F===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=F?Vr:Math.floor,pe=te(J*S.width),xe=te(J*S.height);u===void 0&&(u=E(pe,xe));const de=U?E(pe,xe):u;return de.width=pe,de.height=xe,de.getContext("2d").drawImage(S,0,0,pe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+pe+"x"+xe+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return Zs(S.width)&&Zs(S.height)}function h(S){return a?!1:S.wrapS!==kt||S.wrapT!==kt||S.minFilter!==pt&&S.minFilter!==bt}function B(S,F){return S.generateMipmaps&&F&&S.minFilter!==pt&&S.minFilter!==bt}function A(S){r.generateMipmap(S)}function g(S,F,U,Q,J=!1){if(a===!1)return F;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=F;if(F===r.RED&&(U===r.FLOAT&&(te=r.R32F),U===r.HALF_FLOAT&&(te=r.R16F),U===r.UNSIGNED_BYTE&&(te=r.R8)),F===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(te=r.R8UI),U===r.UNSIGNED_SHORT&&(te=r.R16UI),U===r.UNSIGNED_INT&&(te=r.R32UI),U===r.BYTE&&(te=r.R8I),U===r.SHORT&&(te=r.R16I),U===r.INT&&(te=r.R32I)),F===r.RG&&(U===r.FLOAT&&(te=r.RG32F),U===r.HALF_FLOAT&&(te=r.RG16F),U===r.UNSIGNED_BYTE&&(te=r.RG8)),F===r.RGBA){const pe=J?Or:We.getTransfer(Q);U===r.FLOAT&&(te=r.RGBA32F),U===r.HALF_FLOAT&&(te=r.RGBA16F),U===r.UNSIGNED_BYTE&&(te=pe===et?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(S,F,U){return B(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==pt&&S.minFilter!==bt?Math.log2(Math.max(F.width,F.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?F.mipmaps.length:1}function v(S){return S===pt||S===qs||S===Pr?r.NEAREST:r.LINEAR}function _(S){const F=S.target;F.removeEventListener("dispose",_),C(F),F.isVideoTexture&&l.delete(F)}function b(S){const F=S.target;F.removeEventListener("dispose",b),R(F)}function C(S){const F=n.get(S);if(F.__webglInit===void 0)return;const U=S.source,Q=d.get(U);if(Q){const J=Q[F.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(S),Object.keys(Q).length===0&&d.delete(U)}n.remove(S)}function M(S){const F=n.get(S);r.deleteTexture(F.__webglTexture);const U=S.source,Q=d.get(U);delete Q[F.__cacheKey],o.memory.textures--}function R(S){const F=S.texture,U=n.get(S),Q=n.get(F);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let te=0;te<U.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(U.__webglFramebuffer[J][te]);else r.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)r.deleteFramebuffer(U.__webglFramebuffer[J]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,te=F.length;J<te;J++){const pe=n.get(F[J]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(F),n.remove(S)}let N=0;function K(){N=0}function T(){const S=N;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),N+=1,S}function P(S){const F=[];return F.push(S.wrapS),F.push(S.wrapT),F.push(S.wrapR||0),F.push(S.magFilter),F.push(S.minFilter),F.push(S.anisotropy),F.push(S.internalFormat),F.push(S.format),F.push(S.type),F.push(S.generateMipmaps),F.push(S.premultiplyAlpha),F.push(S.flipY),F.push(S.unpackAlignment),F.push(S.colorSpace),F.join()}function O(S,F){const U=n.get(S);if(S.isVideoTexture&&Ye(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,S,F);return}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+F)}function k(S,F){const U=n.get(S);if(S.version>0&&U.__version!==S.version){re(U,S,F);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+F)}function j(S,F){const U=n.get(S);if(S.version>0&&U.__version!==S.version){re(U,S,F);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+F)}function X(S,F){const U=n.get(S);if(S.version>0&&U.__version!==S.version){ce(U,S,F);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+F)}const Z={[Fi]:r.REPEAT,[kt]:r.CLAMP_TO_EDGE,[kr]:r.MIRRORED_REPEAT},G={[pt]:r.NEAREST,[qs]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[bt]:r.LINEAR,[w0]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},ee={[Uc]:r.NEVER,[Vc]:r.ALWAYS,[kc]:r.LESS,[G0]:r.LEQUAL,[Oc]:r.EQUAL,[Gc]:r.GEQUAL,[zc]:r.GREATER,[Hc]:r.NOTEQUAL};function V(S,F,U){if(U?(r.texParameteri(S,r.TEXTURE_WRAP_S,Z[F.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,Z[F.wrapT]),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,Z[F.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,G[F.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,G[F.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(F.wrapS!==kt||F.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,v(F.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,v(F.minFilter)),F.minFilter!==pt&&F.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),F.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,ee[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(F.magFilter===pt||F.minFilter!==Pr&&F.minFilter!==Zn||F.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&F.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(F.anisotropy>1||n.get(F).__currentAnisotropy)&&(r.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,i.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy)}}function q(S,F){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,F.addEventListener("dispose",_));const Q=F.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const te=P(F);if(te!==S.__cacheKey){J[te]===void 0&&(J[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[te].usedTimes++;const pe=J[S.__cacheKey];pe!==void 0&&(J[S.__cacheKey].usedTimes--,pe.usedTimes===0&&M(F)),S.__cacheKey=te,S.__webglTexture=J[te].texture}return U}function re(S,F,U){let Q=r.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),F.isData3DTexture&&(Q=r.TEXTURE_3D);const J=q(S,F),te=F.source;t.bindTexture(Q,S.__webglTexture,r.TEXTURE0+U);const pe=n.get(te);if(te.version!==pe.__version||J===!0){t.activeTexture(r.TEXTURE0+U);const xe=We.getPrimaries(We.workingColorSpace),de=F.colorSpace===zt?null:We.getPrimaries(F.colorSpace),ve=F.colorSpace===zt||xe===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,F.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,F.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=h(F)&&f(F.image)===!1;let $=m(F.image,Ne,!1,i.maxTextureSize);$=Me(F,$);const je=f($)||a,He=s.convert(F.format,F.colorSpace);let Se=s.convert(F.type),Ae=g(F.internalFormat,He,Se,F.colorSpace,F.isVideoTexture);V(Q,F,je);let he;const Le=F.mipmaps,Xe=a&&F.isVideoTexture!==!0&&Ae!==k0,it=pe.__version===void 0||J===!0,ke=D(F,$,je);if(F.isDepthTexture)Ae=r.DEPTH_COMPONENT,a?F.type===dn?Ae=r.DEPTH_COMPONENT32F:F.type===Mn?Ae=r.DEPTH_COMPONENT24:F.type===Yn?Ae=r.DEPTH24_STENCIL8:Ae=r.DEPTH_COMPONENT16:F.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===jn&&Ae===r.DEPTH_COMPONENT&&F.type!==so&&F.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=Mn,Se=s.convert(F.type)),F.format===Mi&&Ae===r.DEPTH_COMPONENT&&(Ae=r.DEPTH_STENCIL,F.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=Yn,Se=s.convert(F.type))),it&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,Ae,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,Ae,$.width,$.height,0,He,Se,null));else if(F.isDataTexture)if(Le.length>0&&je){Xe&&it&&t.texStorage2D(r.TEXTURE_2D,ke,Ae,Le[0].width,Le[0].height);for(let ne=0,w=Le.length;ne<w;ne++)he=Le[ne],Xe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,Se,he.data):t.texImage2D(r.TEXTURE_2D,ne,Ae,he.width,he.height,0,He,Se,he.data);F.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(r.TEXTURE_2D,ke,Ae,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,He,Se,$.data)):t.texImage2D(r.TEXTURE_2D,0,Ae,$.width,$.height,0,He,Se,$.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Xe&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ae,Le[0].width,Le[0].height,$.depth);for(let ne=0,w=Le.length;ne<w;ne++)he=Le[ne],F.format!==Ot?He!==null?Xe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,$.depth,He,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ae,he.width,he.height,$.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,$.depth,He,Se,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ae,he.width,he.height,$.depth,0,He,Se,he.data)}else{Xe&&it&&t.texStorage2D(r.TEXTURE_2D,ke,Ae,Le[0].width,Le[0].height);for(let ne=0,w=Le.length;ne<w;ne++)he=Le[ne],F.format!==Ot?He!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,Se,he.data):t.texImage2D(r.TEXTURE_2D,ne,Ae,he.width,he.height,0,He,Se,he.data)}else if(F.isDataArrayTexture)Xe?(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ae,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,He,Se,$.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,$.width,$.height,$.depth,0,He,Se,$.data);else if(F.isData3DTexture)Xe?(it&&t.texStorage3D(r.TEXTURE_3D,ke,Ae,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,He,Se,$.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,$.width,$.height,$.depth,0,He,Se,$.data);else if(F.isFramebufferTexture){if(it)if(Xe)t.texStorage2D(r.TEXTURE_2D,ke,Ae,$.width,$.height);else{let ne=$.width,w=$.height;for(let se=0;se<ke;se++)t.texImage2D(r.TEXTURE_2D,se,Ae,ne,w,0,He,Se,null),ne>>=1,w>>=1}}else if(Le.length>0&&je){Xe&&it&&t.texStorage2D(r.TEXTURE_2D,ke,Ae,Le[0].width,Le[0].height);for(let ne=0,w=Le.length;ne<w;ne++)he=Le[ne],Xe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,He,Se,he):t.texImage2D(r.TEXTURE_2D,ne,Ae,He,Se,he);F.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(r.TEXTURE_2D,ke,Ae,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Se,$)):t.texImage2D(r.TEXTURE_2D,0,Ae,He,Se,$);B(F,je)&&A(Q),pe.__version=te.version,F.onUpdate&&F.onUpdate(F)}S.__version=F.version}function ce(S,F,U){if(F.image.length!==6)return;const Q=q(S,F),J=F.source;t.bindTexture(r.TEXTURE_CUBE_MAP,S.__webglTexture,r.TEXTURE0+U);const te=n.get(J);if(J.version!==te.__version||Q===!0){t.activeTexture(r.TEXTURE0+U);const pe=We.getPrimaries(We.workingColorSpace),xe=F.colorSpace===zt?null:We.getPrimaries(F.colorSpace),de=F.colorSpace===zt||pe===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,F.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,F.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ve=F.isCompressedTexture||F.image[0].isCompressedTexture,Ne=F.image[0]&&F.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!ve&&!Ne?$[ne]=m(F.image[ne],!1,!0,i.maxCubemapSize):$[ne]=Ne?F.image[ne].image:F.image[ne],$[ne]=Me(F,$[ne]);const je=$[0],He=f(je)||a,Se=s.convert(F.format,F.colorSpace),Ae=s.convert(F.type),he=g(F.internalFormat,Se,Ae,F.colorSpace),Le=a&&F.isVideoTexture!==!0,Xe=te.__version===void 0||Q===!0;let it=D(F,je,He);V(r.TEXTURE_CUBE_MAP,F,He);let ke;if(ve){Le&&Xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,it,he,je.width,je.height);for(let ne=0;ne<6;ne++){ke=$[ne].mipmaps;for(let w=0;w<ke.length;w++){const se=ke[w];F.format!==Ot?Se!==null?Le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w,0,0,se.width,se.height,Se,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w,0,0,se.width,se.height,Se,Ae,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w,he,se.width,se.height,0,Se,Ae,se.data)}}}else{ke=F.mipmaps,Le&&Xe&&(ke.length>0&&it++,t.texStorage2D(r.TEXTURE_CUBE_MAP,it,he,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Ne){Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Se,Ae,$[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,$[ne].width,$[ne].height,0,Se,Ae,$[ne].data);for(let w=0;w<ke.length;w++){const oe=ke[w].image[ne].image;Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w+1,0,0,oe.width,oe.height,Se,Ae,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w+1,he,oe.width,oe.height,0,Se,Ae,oe.data)}}else{Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Se,Ae,$[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,Se,Ae,$[ne]);for(let w=0;w<ke.length;w++){const se=ke[w];Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w+1,0,0,Se,Ae,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,w+1,he,Se,Ae,se.image[ne])}}}B(F,He)&&A(r.TEXTURE_CUBE_MAP),te.__version=J.version,F.onUpdate&&F.onUpdate(F)}S.__version=F.version}function ae(S,F,U,Q,J,te){const pe=s.convert(U.format,U.colorSpace),xe=s.convert(U.type),de=g(U.internalFormat,pe,xe,U.colorSpace);if(!n.get(F).__hasExternalTextures){const Ne=Math.max(1,F.width>>te),$=Math.max(1,F.height>>te);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,te,de,Ne,$,F.depth,0,pe,xe,null):t.texImage2D(J,te,de,Ne,$,0,pe,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),ue(F)?x.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,0,ge(F)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(S,F,U){if(r.bindRenderbuffer(r.RENDERBUFFER,S),F.depthBuffer&&!F.stencilBuffer){let Q=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(U||ue(F)){const J=F.depthTexture;J&&J.isDepthTexture&&(J.type===dn?Q=r.DEPTH_COMPONENT32F:J.type===Mn&&(Q=r.DEPTH_COMPONENT24));const te=ge(F);ue(F)?x.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,Q,F.width,F.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,Q,F.width,F.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,F.width,F.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(F.depthBuffer&&F.stencilBuffer){const Q=ge(F);U&&ue(F)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,F.width,F.height):ue(F)?x.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,F.width,F.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{const Q=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let J=0;J<Q.length;J++){const te=Q[J],pe=s.convert(te.format,te.colorSpace),xe=s.convert(te.type),de=g(te.internalFormat,pe,xe,te.colorSpace),ve=ge(F);U&&ue(F)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,de,F.width,F.height):ue(F)?x.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,de,F.width,F.height):r.renderbufferStorage(r.RENDERBUFFER,de,F.width,F.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(S,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,S),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),O(F.depthTexture,0);const Q=n.get(F.depthTexture).__webglTexture,J=ge(F);if(F.depthTexture.format===jn)ue(F)?x.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(F.depthTexture.format===Mi)ue(F)?x.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function _e(S){const F=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!F.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");me(F.__webglFramebuffer,S)}else if(U){F.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer[Q]),F.__webglDepthbuffer[Q]=r.createRenderbuffer(),De(F.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer=r.createRenderbuffer(),De(F.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(S,F,U){const Q=n.get(S);F!==void 0&&ae(Q.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&_e(S)}function z(S){const F=S.texture,U=n.get(S),Q=n.get(F);S.addEventListener("dispose",b),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=F.version,o.memory.textures++);const J=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,pe=f(S)||a;if(J){U.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&F.mipmaps&&F.mipmaps.length>0){U.__webglFramebuffer[xe]=[];for(let de=0;de<F.mipmaps.length;de++)U.__webglFramebuffer[xe][de]=r.createFramebuffer()}else U.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(a&&F.mipmaps&&F.mipmaps.length>0){U.__webglFramebuffer=[];for(let xe=0;xe<F.mipmaps.length;xe++)U.__webglFramebuffer[xe]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const xe=S.texture;for(let de=0,ve=xe.length;de<ve;de++){const Ne=n.get(xe[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ue(S)===!1){const xe=te?F:[F];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let de=0;de<xe.length;de++){const ve=xe[de];U.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[de]);const Ne=s.convert(ve.format,ve.colorSpace),$=s.convert(ve.type),je=g(ve.internalFormat,Ne,$,ve.colorSpace,S.isXRRenderTarget===!0),He=ge(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,je,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,U.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),De(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),V(r.TEXTURE_CUBE_MAP,F,pe);for(let xe=0;xe<6;xe++)if(a&&F.mipmaps&&F.mipmaps.length>0)for(let de=0;de<F.mipmaps.length;de++)ae(U.__webglFramebuffer[xe][de],S,F,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,de);else ae(U.__webglFramebuffer[xe],S,F,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);B(F,pe)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const xe=S.texture;for(let de=0,ve=xe.length;de<ve;de++){const Ne=xe[de],$=n.get(Ne);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),V(r.TEXTURE_2D,Ne,pe),ae(U.__webglFramebuffer,S,Ne,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),B(Ne,pe)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?xe=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,Q.__webglTexture),V(xe,F,pe),a&&F.mipmaps&&F.mipmaps.length>0)for(let de=0;de<F.mipmaps.length;de++)ae(U.__webglFramebuffer[de],S,F,r.COLOR_ATTACHMENT0,xe,de);else ae(U.__webglFramebuffer,S,F,r.COLOR_ATTACHMENT0,xe,0);B(F,pe)&&A(xe),t.unbindTexture()}S.depthBuffer&&_e(S)}function xt(S){const F=f(S)||a,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,J=U.length;Q<J;Q++){const te=U[Q];if(B(te,F)){const pe=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,xe=n.get(te).__webglTexture;t.bindTexture(pe,xe),A(pe),t.unbindTexture()}}}function fe(S){if(a&&S.samples>0&&ue(S)===!1){const F=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,Q=S.height;let J=r.COLOR_BUFFER_BIT;const te=[],pe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(S),de=S.isWebGLMultipleRenderTargets===!0;if(de)for(let ve=0;ve<F.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<F.length;ve++){te.push(r.COLOR_ATTACHMENT0+ve),S.depthBuffer&&te.push(pe);const Ne=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ne===!1&&(S.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]),Ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),de){const $=n.get(F[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,U,Q,0,0,U,Q,J,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<F.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Ne=n.get(F[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ge(S){return Math.min(i.maxSamples,S.samples)}function ue(S){const F=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function Ye(S){const F=o.render.frame;l.get(S)!==F&&(l.set(S,F),S.update())}function Me(S,F){const U=S.colorSpace,Q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ks||U!==Et&&U!==zt&&(We.getTransfer(U)===et?a===!1?e.has("EXT_sRGB")===!0&&Q===Ot?(S.format=Ks,S.minFilter=bt,S.generateMipmaps=!1):F=W0.sRGBToLinear(F):(Q!==Ot||J!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),F}this.allocateTextureUnit=T,this.resetTextureUnits=K,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Pe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ue}function sp(r,e,t){const n=t.isWebGL2;function i(s,o=zt){let a;const x=We.getTransfer(o);if(s===Rn)return r.UNSIGNED_BYTE;if(s===P0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===L0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Dc)return r.BYTE;if(s===Fc)return r.SHORT;if(s===so)return r.UNSIGNED_SHORT;if(s===R0)return r.INT;if(s===Mn)return r.UNSIGNED_INT;if(s===dn)return r.FLOAT;if(s===$i)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mc)return r.ALPHA;if(s===Ot)return r.RGBA;if(s===yc)return r.LUMINANCE;if(s===Sc)return r.LUMINANCE_ALPHA;if(s===jn)return r.DEPTH_COMPONENT;if(s===Mi)return r.DEPTH_STENCIL;if(s===Ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Tc)return r.RED;if(s===I0)return r.RED_INTEGER;if(s===bc)return r.RG;if(s===N0)return r.RG_INTEGER;if(s===U0)return r.RGBA_INTEGER;if(s===es||s===ts||s===ns||s===is)if(x===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uo||s===ko||s===Oo||s===zo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===k0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ho||s===Go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ho)return x===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Go)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vo||s===Wo||s===Xo||s===qo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo||s===Qo||s===ea||s===ta||s===na)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ko)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$o)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qo)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ea)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ta)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===na)return x===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rs||s===ia||s===ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rs)return x===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ia)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wc||s===sa||s===oa||s===aa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yn?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class op extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ap={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,x=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n),h=this._getHandJoint(c,m);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),p=.02,E=.005;c.inputState.pinching&&d>p+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else x!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(x.matrix.fromArray(s.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,s.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(s.linearVelocity)):x.hasLinearVelocity=!1,s.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(s.angularVelocity)):x.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=i!==null),x!==null&&(x.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xp extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",x=1,c=null,l=null,u=null,d=null,p=null,E=null;const m=t.getContextAttributes();let f=null,h=null;const B=[],A=[],g=new Ve;let D=null;const v=new yt;v.layers.enable(1),v.viewport=new Ze;const _=new yt;_.layers.enable(2),_.viewport=new Ze;const b=[v,_],C=new op;C.layers.enable(1),C.layers.enable(2);let M=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=B[V];return q===void 0&&(q=new Ss,B[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=B[V];return q===void 0&&(q=new Ss,B[V]=q),q.getGripSpace()},this.getHand=function(V){let q=B[V];return q===void 0&&(q=new Ss,B[V]=q),q.getHandSpace()};function N(V){const q=A.indexOf(V.inputSource);if(q===-1)return;const re=B[q];re!==void 0&&(re.update(V.inputSource,V.frame,c||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",T);for(let V=0;V<B.length;V++){const q=A[V];q!==null&&(A[V]=null,B[V].disconnect(q))}M=null,R=null,e.setRenderTarget(f),p=null,d=null,u=null,i=null,h=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(g.width,g.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return E},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",K),i.addEventListener("inputsourceschange",T),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(g),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new $n(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,re=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?Mi:jn,re=m.stencil?Yn:Mn);const ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new $n(d.textureWidth,d.textureHeight,{format:Ot,type:Rn,depthTexture:new tx(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(x),c=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function T(V){for(let q=0;q<V.removed.length;q++){const re=V.removed[q],ce=A.indexOf(re);ce>=0&&(A[ce]=null,B[ce].disconnect(re))}for(let q=0;q<V.added.length;q++){const re=V.added[q];let ce=A.indexOf(re);if(ce===-1){for(let De=0;De<B.length;De++)if(De>=A.length){A.push(re),ce=De;break}else if(A[De]===null){A[De]=re,ce=De;break}if(ce===-1)break}const ae=B[ce];ae&&ae.connect(re)}}const P=new L,O=new L;function k(V,q,re){P.setFromMatrixPosition(q.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const ce=P.distanceTo(O),ae=q.projectionMatrix.elements,De=re.projectionMatrix.elements,me=ae[14]/(ae[10]-1),_e=ae[14]/(ae[10]+1),Pe=(ae[9]+1)/ae[5],z=(ae[9]-1)/ae[5],xt=(ae[8]-1)/ae[0],fe=(De[8]+1)/De[0],ge=me*xt,ue=me*fe,Ye=ce/(-xt+fe),Me=Ye*-xt;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Me),V.translateZ(Ye),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const S=me+Ye,F=_e+Ye,U=ge-Me,Q=ue+(ce-Me),J=Pe*_e/F*S,te=z*_e/F*S;V.projectionMatrix.makePerspective(U,Q,J,te,S,F),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;C.near=_.near=v.near=V.near,C.far=_.far=v.far=V.far,(M!==C.near||R!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,R=C.far);const q=V.parent,re=C.cameras;j(C,q);for(let ce=0;ce<re.length;ce++)j(re[ce],q);re.length===2?k(C,v,_):C.projectionMatrix.copy(v.projectionMatrix),X(V,C,q)};function X(V,q,re){re===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Si*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return x},this.setFoveation=function(V){x=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Z=null;function G(V,q){if(l=q.getViewerPose(c||o),E=q,l!==null){const re=l.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;re.length!==C.cameras.length&&(C.cameras.length=0,ce=!0);for(let ae=0;ae<re.length;ae++){const De=re[ae];let me=null;if(p!==null)me=p.getViewport(De);else{const Pe=u.getViewSubImage(d,De);me=Pe.viewport,ae===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let _e=b[ae];_e===void 0&&(_e=new yt,_e.layers.enable(ae),_e.viewport=new Ze,b[ae]=_e),_e.matrix.fromArray(De.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(De.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(me.x,me.y,me.width,me.height),ae===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ce===!0&&C.cameras.push(_e)}}for(let re=0;re<B.length;re++){const ce=A[re],ae=B[re];ce!==null&&ae!==void 0&&ae.update(ce,q,c||o)}Z&&Z(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),E=null}const ee=new ex;ee.setAnimationLoop(G),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function cp(r,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,$0(r)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function i(f,h,B,A,g){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),u(f,h)):h.isMeshPhongMaterial?(s(f,h),l(f,h)):h.isMeshStandardMaterial?(s(f,h),d(f,h),h.isMeshPhysicalMaterial&&p(f,h,g)):h.isMeshMatcapMaterial?(s(f,h),E(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),m(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?x(f,h,B,A):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===wt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===wt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const B=e.get(h).envMap;if(B&&(f.envMap.value=B,f.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*A,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function x(f,h,B,A){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*B,f.scale.value=A*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,B){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=B.texture,f.transmissionSamplerSize.value.set(B.width,B.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,h){h.matcap&&(f.matcap.value=h.matcap)}function m(f,h){const B=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(B.matrixWorld),f.nearDistance.value=B.shadow.camera.near,f.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function x(B,A){const g=A.program;n.uniformBlockBinding(B,g)}function c(B,A){let g=i[B.id];g===void 0&&(E(B),g=l(B),i[B.id]=g,B.addEventListener("dispose",f));const D=A.program;n.updateUBOMapping(B,D);const v=e.render.frame;s[B.id]!==v&&(d(B),s[B.id]=v)}function l(B){const A=u();B.__bindingPointIndex=A;const g=r.createBuffer(),D=B.__size,v=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,D,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,g),g}function u(){for(let B=0;B<a;B++)if(o.indexOf(B)===-1)return o.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(B){const A=i[B.id],g=B.uniforms,D=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let v=0,_=g.length;v<_;v++){const b=Array.isArray(g[v])?g[v]:[g[v]];for(let C=0,M=b.length;C<M;C++){const R=b[C];if(p(R,v,C,D)===!0){const N=R.__offset,K=Array.isArray(R.value)?R.value:[R.value];let T=0;for(let P=0;P<K.length;P++){const O=K[P],k=m(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,N+T,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,T),T+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(B,A,g,D){const v=B.value,_=A+"_"+g;if(D[_]===void 0)return typeof v=="number"||typeof v=="boolean"?D[_]=v:D[_]=v.clone(),!0;{const b=D[_];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return D[_]=v,!0}else if(b.equals(v)===!1)return b.copy(v),!0}return!1}function E(B){const A=B.uniforms;let g=0;const D=16;for(let _=0,b=A.length;_<b;_++){const C=Array.isArray(A[_])?A[_]:[A[_]];for(let M=0,R=C.length;M<R;M++){const N=C[M],K=Array.isArray(N.value)?N.value:[N.value];for(let T=0,P=K.length;T<P;T++){const O=K[T],k=m(O),j=g%D;j!==0&&D-j<k.boundary&&(g+=D-j),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=k.storage}}}const v=g%D;return v>0&&(g+=D-v),B.__size=g,B.__cache={},this}function m(B){const A={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(A.boundary=4,A.storage=4):B.isVector2?(A.boundary=8,A.storage=8):B.isVector3||B.isColor?(A.boundary=16,A.storage=12):B.isVector4?(A.boundary=16,A.storage=16):B.isMatrix3?(A.boundary=48,A.storage=48):B.isMatrix4?(A.boundary=64,A.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),A}function f(B){const A=B.target;A.removeEventListener("dispose",f);const g=o.indexOf(A.__bindingPointIndex);o.splice(g,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function h(){for(const B in i)r.deleteBuffer(i[B]);o=[],i={},s={}}return{bind:x,update:c,dispose:h}}class ax{constructor(e={}){const{canvas:t=sl(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),E=new Int32Array(4);let m=null,f=null;const h=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const A=this;let g=!1,D=0,v=0,_=null,b=-1,C=null;const M=new Ze,R=new Ze;let N=null;const K=new Te(0);let T=0,P=t.width,O=t.height,k=1,j=null,X=null;const Z=new Ze(0,0,P,O),G=new Ze(0,0,P,O);let ee=!1;const V=new xo;let q=!1,re=!1,ce=null;const ae=new we,De=new Ve,me=new L,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return _===null?k:1}let z=n;function xt(y,I){for(let W=0;W<y.length;W++){const Y=y[W],H=t.getContext(Y,I);if(H!==null)return H}return null}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:x,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",se,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&I.shift(),z=xt(I,y),z===null)throw xt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let fe,ge,ue,Ye,Me,S,F,U,Q,J,te,pe,xe,de,ve,Ne,$,je,He,Se,Ae,he,Le,Xe;function it(){fe=new gh(z),ge=new hh(z,fe,e),fe.init(ge),he=new sp(z,fe,ge),ue=new ip(z,fe,ge),Ye=new Bh(z),Me=new Vf,S=new rp(z,fe,ue,Me,ge,he,Ye),F=new ph(A),U=new Ah(A),Q=new bl(z,ge),Le=new uh(z,fe,Q,ge),J=new Ch(z,Q,Ye,Le),te=new Mh(z,J,Q,Ye),He=new Fh(z,ge,S),Ne=new fh(Me),pe=new Gf(A,F,U,fe,ge,Le,Ne),xe=new cp(A,Me),de=new Xf,ve=new $f(fe,ge),je=new lh(A,F,U,ue,te,d,x),$=new np(A,te,ge),Xe=new lp(z,Ye,ge,ue),Se=new dh(z,fe,Ye,ge),Ae=new _h(z,fe,Ye,ge),Ye.programs=pe.programs,A.capabilities=ge,A.extensions=fe,A.properties=Me,A.renderLists=de,A.shadowMap=$,A.state=ue,A.info=Ye}it();const ke=new xp(A,z);this.xr=ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(P,O,!1))},this.getSize=function(y){return y.set(P,O)},this.setSize=function(y,I,W=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=y,O=I,t.width=Math.floor(y*k),t.height=Math.floor(I*k),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(P*k,O*k).floor()},this.setDrawingBufferSize=function(y,I,W){P=y,O=I,k=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,I,W,Y){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,I,W,Y),ue.viewport(M.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(y){return y.copy(G)},this.setScissor=function(y,I,W,Y){y.isVector4?G.set(y.x,y.y,y.z,y.w):G.set(y,I,W,Y),ue.scissor(R.copy(G).multiplyScalar(k).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(y){ue.setScissorTest(ee=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(y=!0,I=!0,W=!0){let Y=0;if(y){let H=!1;if(_!==null){const le=_.texture.format;H=le===U0||le===N0||le===I0}if(H){const le=_.texture.type,Ee=le===Rn||le===Mn||le===so||le===Yn||le===P0||le===L0,Be=je.getClearColor(),ye=je.getClearAlpha(),Ue=Be.r,be=Be.g,Re=Be.b;Ee?(p[0]=Ue,p[1]=be,p[2]=Re,p[3]=ye,z.clearBufferuiv(z.COLOR,0,p)):(E[0]=Ue,E[1]=be,E[2]=Re,E[3]=ye,z.clearBufferiv(z.COLOR,0,E))}else Y|=z.COLOR_BUFFER_BIT}I&&(Y|=z.DEPTH_BUFFER_BIT),W&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),ve.dispose(),Me.dispose(),F.dispose(),U.dispose(),te.dispose(),Le.dispose(),Xe.dispose(),pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",vt),ke.removeEventListener("sessionend",Qe),ce&&(ce.dispose(),ce=null),Dt.stop()};function ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const y=Ye.autoReset,I=$.enabled,W=$.autoUpdate,Y=$.needsUpdate,H=$.type;it(),Ye.autoReset=y,$.enabled=I,$.autoUpdate=W,$.needsUpdate=Y,$.type=H}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){const I=y.target;I.removeEventListener("dispose",oe),Fe(I)}function Fe(y){Ce(y),Me.remove(y)}function Ce(y){const I=Me.get(y).programs;I!==void 0&&(I.forEach(function(W){pe.releaseProgram(W)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,Y,H,le){I===null&&(I=_e);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Be=_x(y,I,W,Y,H);ue.setMaterial(Y,Ee);let ye=W.index,Ue=1;if(Y.wireframe===!0){if(ye=J.getWireframeAttribute(W),ye===void 0)return;Ue=2}const be=W.drawRange,Re=W.attributes.position;let at=be.start*Ue,Rt=(be.start+be.count)*Ue;le!==null&&(at=Math.max(at,le.start*Ue),Rt=Math.min(Rt,(le.start+le.count)*Ue)),ye!==null?(at=Math.max(at,0),Rt=Math.min(Rt,ye.count)):Re!=null&&(at=Math.max(at,0),Rt=Math.min(Rt,Re.count));const ht=Rt-at;if(ht<0||ht===1/0)return;Le.setup(H,Y,Be,W,ye);let rn,tt=Se;if(ye!==null&&(rn=Q.get(ye),tt=Ae,tt.setIndex(rn)),H.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*Pe()),tt.setMode(z.LINES)):tt.setMode(z.TRIANGLES);else if(H.isLine){let Oe=Y.linewidth;Oe===void 0&&(Oe=1),ue.setLineWidth(Oe*Pe()),H.isLineSegments?tt.setMode(z.LINES):H.isLineLoop?tt.setMode(z.LINE_LOOP):tt.setMode(z.LINE_STRIP)}else H.isPoints?tt.setMode(z.POINTS):H.isSprite&&tt.setMode(z.TRIANGLES);if(H.isBatchedMesh)tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)tt.renderInstances(at,ht,H.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Zr=Math.min(W.instanceCount,Oe);tt.renderInstances(at,ht,Zr)}else tt.render(at,ht)};function $e(y,I,W){y.transparent===!0&&y.side===Yt&&y.forceSinglePass===!1?(y.side=wt,y.needsUpdate=!0,ir(y,I,W),y.side=pn,y.needsUpdate=!0,ir(y,I,W),y.side=Yt):ir(y,I,W)}this.compile=function(y,I,W=null){W===null&&(W=y),f=ve.get(W),f.init(),B.push(f),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(A._useLegacyLights);const Y=new Set;return y.traverse(function(H){const le=H.material;if(le)if(Array.isArray(le))for(let Ee=0;Ee<le.length;Ee++){const Be=le[Ee];$e(Be,W,H),Y.add(Be)}else $e(le,W,H),Y.add(le)}),B.pop(),f=null,Y},this.compileAsync=function(y,I,W=null){const Y=this.compile(y,I,W);return new Promise(H=>{function le(){if(Y.forEach(function(Ee){Me.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){H(y);return}setTimeout(le,10)}fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Je=null;function dt(y){Je&&Je(y)}function vt(){Dt.stop()}function Qe(){Dt.start()}const Dt=new ex;Dt.setAnimationLoop(dt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(y){Je=y,ke.setAnimationLoop(y),y===null?Dt.stop():Dt.start()},ke.addEventListener("sessionstart",vt),ke.addEventListener("sessionend",Qe),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,I,_),f=ve.get(y,B.length),f.init(),B.push(f),ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(ae),re=this.localClippingEnabled,q=Ne.init(this.clippingPlanes,re),m=de.get(y,h.length),m.init(),h.push(m),Zt(y,I,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(j,X),this.info.render.frame++,q===!0&&Ne.beginShadows();const W=f.state.shadowsArray;if($.render(W,y,I),q===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(m,y),f.setupLights(A._useLegacyLights),I.isArrayCamera){const Y=I.cameras;for(let H=0,le=Y.length;H<le;H++){const Ee=Y[H];_o(m,y,Ee,Ee.viewport)}}else _o(m,y,I);_!==null&&(S.updateMultisampleRenderTarget(_),S.updateRenderTargetMipmap(_)),y.isScene===!0&&y.onAfterRender(A,y,I),Le.resetDefaultState(),b=-1,C=null,B.pop(),B.length>0?f=B[B.length-1]:f=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function Zt(y,I,W,Y){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){Y&&me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ae);const Ee=te.update(y),Be=y.material;Be.visible&&m.push(y,Ee,Be,W,me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const Ee=te.update(y),Be=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),me.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),me.copy(Ee.boundingSphere.center)),me.applyMatrix4(y.matrixWorld).applyMatrix4(ae)),Array.isArray(Be)){const ye=Ee.groups;for(let Ue=0,be=ye.length;Ue<be;Ue++){const Re=ye[Ue],at=Be[Re.materialIndex];at&&at.visible&&m.push(y,Ee,at,W,me.z,Re)}}else Be.visible&&m.push(y,Ee,Be,W,me.z,null)}}const le=y.children;for(let Ee=0,Be=le.length;Ee<Be;Ee++)Zt(le[Ee],I,W,Y)}function _o(y,I,W,Y){const H=y.opaque,le=y.transmissive,Ee=y.transparent;f.setupLightsView(W),q===!0&&Ne.setGlobalState(A.clippingPlanes,W),le.length>0&&Cx(H,le,I,W),Y&&ue.viewport(M.copy(Y)),H.length>0&&nr(H,I,W),le.length>0&&nr(le,I,W),Ee.length>0&&nr(Ee,I,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Cx(y,I,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const le=ge.isWebGL2;ce===null&&(ce=new $n(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?$i:Rn,minFilter:Zn,samples:le?4:0})),A.getDrawingBufferSize(De),le?ce.setSize(De.x,De.y):ce.setSize(Vr(De.x),Vr(De.y));const Ee=A.getRenderTarget();A.setRenderTarget(ce),A.getClearColor(K),T=A.getClearAlpha(),T<1&&A.setClearColor(16777215,.5),A.clear();const Be=A.toneMapping;A.toneMapping=wn,nr(y,W,Y),S.updateMultisampleRenderTarget(ce),S.updateRenderTargetMipmap(ce);let ye=!1;for(let Ue=0,be=I.length;Ue<be;Ue++){const Re=I[Ue],at=Re.object,Rt=Re.geometry,ht=Re.material,rn=Re.group;if(ht.side===Yt&&at.layers.test(Y.layers)){const tt=ht.side;ht.side=wt,ht.needsUpdate=!0,Bo(at,W,Y,Rt,ht,rn),ht.side=tt,ht.needsUpdate=!0,ye=!0}}ye===!0&&(S.updateMultisampleRenderTarget(ce),S.updateRenderTargetMipmap(ce)),A.setRenderTarget(Ee),A.setClearColor(K,T),A.toneMapping=Be}function nr(y,I,W){const Y=I.isScene===!0?I.overrideMaterial:null;for(let H=0,le=y.length;H<le;H++){const Ee=y[H],Be=Ee.object,ye=Ee.geometry,Ue=Y===null?Ee.material:Y,be=Ee.group;Be.layers.test(W.layers)&&Bo(Be,I,W,ye,Ue,be)}}function Bo(y,I,W,Y,H,le){y.onBeforeRender(A,I,W,Y,H,le),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(A,I,W,Y,y,le),H.transparent===!0&&H.side===Yt&&H.forceSinglePass===!1?(H.side=wt,H.needsUpdate=!0,A.renderBufferDirect(W,I,Y,H,y,le),H.side=pn,H.needsUpdate=!0,A.renderBufferDirect(W,I,Y,H,y,le),H.side=Yt):A.renderBufferDirect(W,I,Y,H,y,le),y.onAfterRender(A,I,W,Y,H,le)}function ir(y,I,W){I.isScene!==!0&&(I=_e);const Y=Me.get(y),H=f.state.lights,le=f.state.shadowsArray,Ee=H.state.version,Be=pe.getParameters(y,H.state,le,I,W),ye=pe.getProgramCacheKey(Be);let Ue=Y.programs;Y.environment=y.isMeshStandardMaterial?I.environment:null,Y.fog=I.fog,Y.envMap=(y.isMeshStandardMaterial?U:F).get(y.envMap||Y.environment),Ue===void 0&&(y.addEventListener("dispose",oe),Ue=new Map,Y.programs=Ue);let be=Ue.get(ye);if(be!==void 0){if(Y.currentProgram===be&&Y.lightsStateVersion===Ee)return Do(y,Be),be}else Be.uniforms=pe.getUniforms(y),y.onBuild(W,Be,A),y.onBeforeCompile(Be,A),be=pe.acquireProgram(Be,ye),Ue.set(ye,be),Y.uniforms=Be.uniforms;const Re=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=Ne.uniform),Do(y,Be),Y.needsLights=vx(y),Y.lightsStateVersion=Ee,Y.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=be,Y.uniformsList=null,be}function vo(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Lr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Do(y,I){const W=Me.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function _x(y,I,W,Y,H){I.isScene!==!0&&(I=_e),S.resetTextureUnits();const le=I.fog,Ee=Y.isMeshStandardMaterial?I.environment:null,Be=_===null?A.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Et,ye=(Y.isMeshStandardMaterial?U:F).get(Y.envMap||Ee),Ue=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,be=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let ht=wn;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(ht=A.toneMapping);const rn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=rn!==void 0?rn.length:0,Oe=Me.get(Y),Zr=f.state.lights;if(q===!0&&(re===!0||y!==C)){const It=y===C&&Y.id===b;Ne.setState(Y,y,It)}let rt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Zr.state.version||Oe.outputColorSpace!==Be||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||Oe.envMap!==ye||Y.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ne.numPlanes||Oe.numIntersection!==Ne.numIntersection)||Oe.vertexAlphas!==Ue||Oe.vertexTangents!==be||Oe.morphTargets!==Re||Oe.morphNormals!==at||Oe.morphColors!==Rt||Oe.toneMapping!==ht||ge.isWebGL2===!0&&Oe.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Oe.__version=Y.version);let Pn=Oe.currentProgram;rt===!0&&(Pn=ir(Y,I,H));let Fo=!1,Ui=!1,$r=!1;const gt=Pn.getUniforms(),Ln=Oe.uniforms;if(ue.useProgram(Pn.program)&&(Fo=!0,Ui=!0,$r=!0),Y.id!==b&&(b=Y.id,Ui=!0),Fo||C!==y){gt.setValue(z,"projectionMatrix",y.projectionMatrix),gt.setValue(z,"viewMatrix",y.matrixWorldInverse);const It=gt.map.cameraPosition;It!==void 0&&It.setValue(z,me.setFromMatrixPosition(y.matrixWorld)),ge.logarithmicDepthBuffer&&gt.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),C!==y&&(C=y,Ui=!0,$r=!0)}if(H.isSkinnedMesh){gt.setOptional(z,H,"bindMatrix"),gt.setOptional(z,H,"bindMatrixInverse");const It=H.skeleton;It&&(ge.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),gt.setValue(z,"boneTexture",It.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(gt.setOptional(z,H,"batchingTexture"),gt.setValue(z,"batchingTexture",H._matricesTexture,S));const Jr=W.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&ge.isWebGL2===!0)&&He.update(H,W,Pn),(Ui||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,gt.setValue(z,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=ye,Ln.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Ui&&(gt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&Bx(Ln,$r),le&&Y.fog===!0&&xe.refreshFogUniforms(Ln,le),xe.refreshMaterialUniforms(Ln,Y,k,O,ce),Lr.upload(z,vo(Oe),Ln,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Lr.upload(z,vo(Oe),Ln,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(z,"center",H.center),gt.setValue(z,"modelViewMatrix",H.modelViewMatrix),gt.setValue(z,"normalMatrix",H.normalMatrix),gt.setValue(z,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const It=Y.uniformsGroups;for(let Qr=0,Dx=It.length;Qr<Dx;Qr++)if(ge.isWebGL2){const Mo=It[Qr];Xe.update(Mo,Pn),Xe.bind(Mo,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Bx(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function vx(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(y,I,W){Me.get(y.texture).__webglTexture=I,Me.get(y.depthTexture).__webglTexture=W;const Y=Me.get(y);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const W=Me.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){_=y,D=I,v=W;let Y=!0,H=null,le=!1,Ee=!1;if(y){const ye=Me.get(y);ye.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):ye.__webglFramebuffer===void 0?S.setupRenderTarget(y):ye.__hasExternalTextures&&S.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);const be=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[I])?H=be[I][W]:H=be[I],le=!0):ge.isWebGL2&&y.samples>0&&S.useMultisampledRTT(y)===!1?H=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,M.copy(y.viewport),R.copy(y.scissor),N=y.scissorTest}else M.copy(Z).multiplyScalar(k).floor(),R.copy(G).multiplyScalar(k).floor(),N=ee;if(ue.bindFramebuffer(z.FRAMEBUFFER,H)&&ge.drawBuffers&&Y&&ue.drawBuffers(y,H),ue.viewport(M),ue.scissor(R),ue.setScissorTest(N),le){const ye=Me.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,W)}else if(Ee){const ye=Me.get(y.texture),Ue=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,Ue)}b=-1},this.readRenderTargetPixels=function(y,I,W,Y,H,le,Ee){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){ue.bindFramebuffer(z.FRAMEBUFFER,Be);try{const ye=y.texture,Ue=ye.format,be=ye.type;if(Ue!==Ot&&he.convert(Ue)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=be===$i&&(fe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&fe.has("EXT_color_buffer_float"));if(be!==Rn&&he.convert(be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===dn&&(ge.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-Y&&W>=0&&W<=y.height-H&&z.readPixels(I,W,Y,H,he.convert(Ue),he.convert(be),le)}finally{const ye=_!==null?Me.get(_).__webglFramebuffer:null;ue.bindFramebuffer(z.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(y,I,W=0){const Y=Math.pow(2,-W),H=Math.floor(I.image.width*Y),le=Math.floor(I.image.height*Y);S.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,y.x,y.y,H,le),ue.unbindTexture()},this.copyTextureToTexture=function(y,I,W,Y=0){const H=I.image.width,le=I.image.height,Ee=he.convert(W.format),Be=he.convert(W.type);S.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,y.x,y.y,H,le,Ee,Be,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,Ee,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,y.x,y.y,Ee,Be,I.image),Y===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,I,W,Y,H=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=y.max.x-y.min.x+1,Ee=y.max.y-y.min.y+1,Be=y.max.z-y.min.z+1,ye=he.convert(Y.format),Ue=he.convert(Y.type);let be;if(Y.isData3DTexture)S.setTexture3D(Y,0),be=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)S.setTexture2DArray(Y,0),be=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Re=z.getParameter(z.UNPACK_ROW_LENGTH),at=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Rt=z.getParameter(z.UNPACK_SKIP_PIXELS),ht=z.getParameter(z.UNPACK_SKIP_ROWS),rn=z.getParameter(z.UNPACK_SKIP_IMAGES),tt=W.isCompressedTexture?W.mipmaps[H]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,tt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,y.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,y.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(be,H,I.x,I.y,I.z,le,Ee,Be,ye,Ue,tt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(be,H,I.x,I.y,I.z,le,Ee,Be,ye,tt.data)):z.texSubImage3D(be,H,I.x,I.y,I.z,le,Ee,Be,ye,Ue,tt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Re),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,at),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rn),H===0&&Y.generateMipmaps&&z.generateMipmap(be),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){D=0,v=0,_=null,ue.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oo?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Xr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?Kn:z0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?st:Et}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class up extends ax{}up.prototype.isWebGL1Renderer=!0;class dp extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new L;class ho{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ho(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ja=new L,Qa=new Ze,e0=new Ze,fp=new L,t0=new we,Mr=new L,Ts=new tn,n0=new we,bs=new qr;class pp extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=No,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mr),this.boundingBox.expandByPoint(Mr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mr),this.boundingSphere.expandByPoint(Mr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(i),e.ray.intersectsSphere(Ts)!==!1&&(n0.copy(i).invert(),bs.copy(e.ray).applyMatrix4(n0),!(this.boundingBox!==null&&bs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===No?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qa.fromBufferAttribute(i.attributes.skinIndex,e),e0.fromBufferAttribute(i.attributes.skinWeight,e),Ja.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=e0.getComponent(s);if(o!==0){const a=Qa.getComponent(s);t0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fp.copy(Ja).applyMatrix4(t0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class xx extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ep extends At{constructor(e=null,t=1,n=1,i,s,o,a,x,c=pt,l=pt,u,d){super(null,o,a,x,c,l,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const i0=new we,mp=new we;class fo{constructor(e=[],t=[]){this.uuid=jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:mp;i0.multiplyMatrices(a,t[s]),i0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ep(t,e,e,Ot,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new xx),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Js extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new we,r0=new we,yr=[],s0=new En,Ap=new we,Gi=new St,Vi=new tn;class gp extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),s0.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Vi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mi),r0.multiplyMatrices(n,mi),Gi.matrixWorld=r0,Gi.raycast(e,yr);for(let o=0,a=yr.length;o<a;o++){const x=yr[o];x.instanceId=s,x.object=this,t.push(x)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class cx extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const o0=new L,a0=new L,x0=new we,ws=new qr,Sr=new tn;class po extends nt{constructor(e=new Kt,t=new cx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)o0.fromBufferAttribute(t,i-1),a0.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=o0.distanceTo(a0);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=s,e.ray.intersectsSphere(Sr)===!1)return;x0.copy(i).invert(),ws.copy(e.ray).applyMatrix4(x0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),x=a*a,c=new L,l=new L,u=new L,d=new L,p=this.isLineSegments?2:1,E=n.index,f=n.attributes.position;if(E!==null){const h=Math.max(0,o.start),B=Math.min(E.count,o.start+o.count);for(let A=h,g=B-1;A<g;A+=p){const D=E.getX(A),v=E.getX(A+1);if(c.fromBufferAttribute(f,D),l.fromBufferAttribute(f,v),ws.distanceSqToSegment(c,l,d,u)>x)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),B=Math.min(f.count,o.start+o.count);for(let A=h,g=B-1;A<g;A+=p){if(c.fromBufferAttribute(f,A),l.fromBufferAttribute(f,A+1),ws.distanceSqToSegment(c,l,d,u)>x)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const c0=new L,l0=new L;class Cp extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)c0.fromBufferAttribute(t,i),l0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+c0.distanceTo(l0);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _p extends po{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lx extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u0=new we,Qs=new qr,Tr=new tn,br=new L;class Bp extends nt{constructor(e=new Kt,t=new lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=s,e.ray.intersectsSphere(Tr)===!1)return;u0.copy(i).invert(),Qs.copy(e.ray).applyMatrix4(u0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),x=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let E=d,m=p;E<m;E++){const f=c.getX(E);br.fromBufferAttribute(u,f),d0(br,f,x,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let E=d,m=p;E<m;E++)br.fromBufferAttribute(u,E),d0(br,E,x,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function d0(r,e,t,n,i,s,o){const a=Qs.distanceSqToPoint(r);if(a<t){const x=new L;Qs.closestPointToPoint(r,x),x.applyMatrix4(n);const c=i.ray.origin.distanceTo(x);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:x,index:e,face:null,object:o})}}class Eo extends Kt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],x=[],c=[],l=[];let u=e;const d=(t-e)/i,p=new L,E=new Ve;for(let m=0;m<=i;m++){for(let f=0;f<=n;f++){const h=s+f/n*o;p.x=u*Math.cos(h),p.y=u*Math.sin(h),x.push(p.x,p.y,p.z),c.push(0,0,1),E.x=(p.x/t+1)/2,E.y=(p.y/t+1)/2,l.push(E.x,E.y)}u+=d}for(let m=0;m<i;m++){const f=m*(n+1);for(let h=0;h<n;h++){const B=h+f,A=B,g=B+n+1,D=B+n+2,v=B+1;a.push(A,g,v),a.push(g,D,v)}}this.setIndex(a),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class er extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mn extends er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function wr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dp(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function h0(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let x=0;x!==e;++x)i[o++]=r[a+x]}return i}function ux(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let x=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===x)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fp extends tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xa,endingEnd:xa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],x=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ca:s=e,a=2*t-n;break;case la:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(x===void 0)switch(this.getSettings_().endingEnd){case ca:o=e,x=2*n-t;break;case la:o=1,x=n+i[1]-i[0];break;default:o=e-1,x=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(x-n),this._offsetPrev=s*l,this._offsetNext=o*l}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,x=e*a,c=x-a,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,E=(n-t)/(i-t),m=E*E,f=m*E,h=-d*f+2*d*m-d*E,B=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*E+1,A=(-1-p)*f+(1.5+p)*m+.5*E,g=p*f-p*m;for(let D=0;D!==a;++D)s[D]=h*o[l+D]+B*o[c+D]+A*o[x+D]+g*o[u+D];return s}}class Mp extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,x=e*a,c=x-a,l=(n-t)/(i-t),u=1-l;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[x+d]*l;return s}}class yp extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case yi:t=this.InterpolantFactoryMethodLinear;break;case ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return yi;case this.InterpolantFactoryMethodSmooth:return ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const x=n[a];if(typeof x=="number"&&isNaN(x)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,x),e=!1;break}if(o!==null&&o>x){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,x,o),e=!1;break}o=x}if(i!==void 0&&vp(i))for(let a=0,x=i.length;a!==x;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ss,s=e.length-1;let o=1;for(let a=1;a<s;++a){let x=!1;const c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(i)x=!0;else{const u=a*n,d=u-n,p=u+n;for(let E=0;E!==n;++E){const m=t[u+E];if(m!==t[d+E]||m!==t[p+E]){x=!0;break}}}if(x){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,x=o*n,c=0;c!==n;++c)t[x+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=yi;class Li extends nn{}Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ji;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class dx extends nn{}dx.prototype.ValueTypeName="color";class bi extends nn{}bi.prototype.ValueTypeName="number";class Sp extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,x=(n-t)/(i-t);let c=e*a;for(let l=c+a;c!==l;c+=4)mt.slerpFlat(s,0,o,c-a,o,c,x);return s}}class Qn extends nn{InterpolantFactoryMethodLinear(e){return new Sp(this.times,this.values,this.getValueSize(),e)}}Qn.prototype.ValueTypeName="quaternion";Qn.prototype.DefaultInterpolation=yi;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends nn{}Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ji;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class wi extends nn{}wi.prototype.ValueTypeName="vector";class Tp{constructor(e,t=-1,n,i=Rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wp(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let x=[],c=[];x.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const l=Dp(x);x=h0(x,1,l),c=h0(c,1,l),!i&&x[0]===0&&(x.push(s),c.push(c[0])),o.push(new bi(".morphTargetInfluences["+t[a].name+"]",x,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,x=e.length;a<x;a++){const c=e[a],l=c.name.match(s);if(l&&l.length>1){const u=l[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,E,m){if(p.length!==0){const f=[],h=[];ux(p,f,h,E),f.length!==0&&m.push(new u(d,f,h))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let x=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let E;for(E=0;E<d.length;E++)if(d[E].morphTargets)for(let m=0;m<d[E].morphTargets.length;m++)p[d[E].morphTargets[m]]=-1;for(const m in p){const f=[],h=[];for(let B=0;B!==d[E].morphTargets.length;++B){const A=d[E];f.push(A.time),h.push(A.morphTarget===m?1:0)}i.push(new bi(".morphTargetInfluence["+m+"]",f,h))}x=p.length*o}else{const p=".bones["+t[u].name+"]";n(wi,p+".position",d,"pos",i),n(Qn,p+".quaternion",d,"rot",i),n(wi,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,x,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return dx;case"quaternion":return Qn;case"bool":case"boolean":return Li;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function wp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bp(r.type);if(r.times===void 0){const t=[],n=[];ux(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Tn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,x;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&i.onStart!==void 0&&i.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return x?x(l):l},this.setURLModifier=function(l){return x=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],E=c[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return E}return null}}}const Pp=new Rp;class Ni{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const ln={};class Lp extends Error{constructor(e,t){super(e),this.response=t}}class hx extends Ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:i});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,x=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const l=ln[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,E=p!==0;let m=0;const f=new ReadableStream({start(h){B();function B(){u.read().then(({done:A,value:g})=>{if(A)h.close();else{m+=g.byteLength;const D=new ProgressEvent("progress",{lengthComputable:E,loaded:m,total:p});for(let v=0,_=l.length;v<_;v++){const b=l[v];b.onProgress&&b.onProgress(D)}h.enqueue(g),B()}})}}});return new Response(f)}else throw new Lp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(x){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(E=>p.decode(E))}}}).then(c=>{Tn.add(e,c);const l=ln[e];delete ln[e];for(let u=0,d=l.length;u<d;u++){const p=l[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const l=ln[e];if(l===void 0)throw this.manager.itemError(e),c;delete ln[e];for(let u=0,d=l.length;u<d;u++){const p=l[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ip extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qi("img");function x(){l(),Tn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){l(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",x,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",x,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Np extends Ni{constructor(e){super(e)}load(e,t,n,i){const s=new At,o=new Ip(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Kr extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rs=new we,f0=new L,p0=new L;class mo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;f0.setFromMatrixPosition(e.matrixWorld),t.position.copy(f0),p0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p0),t.updateMatrixWorld(),Rs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Up extends mo{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Si*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kp extends Kr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Up}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const E0=new we,Wi=new L,Ps=new L;class Op extends mo{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Ps.copy(n.position),Ps.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ps),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),E0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E0)}}class zp extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hp extends mo{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fx extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Hp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gp extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ki{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vp extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const x=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Tn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Tn.add(e,x),s.manager.itemStart(e)}}const Ao="\\[\\]\\.:\\/",Wp=new RegExp("["+Ao+"]","g"),go="[^"+Ao+"]",Xp="[^"+Ao.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",go),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go),Zp=new RegExp("^"+qp+Yp+jp+Kp+"$"),$p=["material","materials","bones","map"];class Jp{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){const t=Zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$p.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const x=n(a.children);if(x)return x}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let x=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}x=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(x=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(x=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[x],this.setValue=this.SetterByBindingTypeAndVersioning[x][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=Jp;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function Qp(r,e){const t=new mt(r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w),n=new mt(e.quaternion.x,e.quaternion.y,e.quaternion.z,e.quaternion.w),i=t.clone().invert(),s=i.clone().multiply(n),o=new L(r.position.x,r.position.y,r.position.z),x=new L(e.position.x,e.position.y,e.position.z).sub(o).applyQuaternion(i);return{position:{x:x.x,y:x.y,z:x.z},quaternion:{x:s.x,y:s.y,z:s.z,w:s.w}}}function m0(r,e){const t=new mt(r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w),n=new mt(e.qQrToModel.x,e.qQrToModel.y,e.qQrToModel.z,e.qQrToModel.w),i=t.clone().multiply(n),o=new L(e.tQrToModel.x,e.tQrToModel.y,e.tQrToModel.z).applyQuaternion(t).add(new L(r.position.x,r.position.y,r.position.z));return{position:{x:o.x,y:o.y,z:o.z},quaternion:{x:i.x,y:i.y,z:i.z,w:i.w}}}function eE(r,e){const n=r.map((i,s)=>[...i,e[s]]);for(let i=0;i<8;i+=1){let s=-1;for(let a=i;a<8;a+=1)if(Math.abs(n[a][i])>1e-12){s=a;break}if(s===-1)return null;if(s!==i){const a=n[i];n[i]=n[s],n[s]=a}const o=n[i][i];for(let a=i;a<=8;a+=1)n[i][a]/=o;for(let a=0;a<8;a+=1){if(a===i)continue;const x=n[a][i];if(!(Math.abs(x)<1e-12))for(let c=i;c<=8;c+=1)n[a][c]-=x*n[i][c]}}return n.map(i=>i[8])}function tE(r,e){if(r.length!==4||e.length!==4)return null;const t=[],n=[];for(let s=0;s<4;s+=1){const{x:o,y:a}=r[s],{x,y:c}=e[s];t.push([o,a,1,0,0,0,-x*o,-x*a]),n.push(x),t.push([0,0,0,o,a,1,-c*o,-c*a]),n.push(c)}const i=eE(t,n);return i?[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],1]:null}function nE(r,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let n=0;n<3;n+=1)for(let i=0;i<3;i+=1)t[n][i]=r[n][0]*e[0][i]+r[n][1]*e[1][i]+r[n][2]*e[2][i];return t}function A0(r){return Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2])}function iE(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function g0(r,e,t,n,i){if(r.length!==4||n<=0||i<=0)return null;const s=n/2,o=[{x:-s,y:-s},{x:s,y:-s},{x:s,y:s},{x:-s,y:s}],a=tE(o,r);if(!a)return null;const x=e/2,c=t/2,l=[[1/i,0,-x/i],[0,1/i,-c/i],[0,0,1]],u=[[a[0],a[1],a[2]],[a[3],a[4],a[5]],[a[6],a[7],a[8]]],d=nE(l,u),p=[d[0][0],d[1][0],d[2][0]],E=[d[0][1],d[1][1],d[2][1]],m=[d[0][2],d[1][2],d[2][2]],f=(A0(p)+A0(E))/2;if(f<1e-9)return null;const h=p.map(_=>_/f),B=E.map(_=>_/f),A=m.map(_=>_/f);let g=iE(h,B);return h[0]*(B[1]*g[2]-B[2]*g[1])-h[1]*(B[0]*g[2]-B[2]*g[0])+h[2]*(B[0]*g[1]-B[1]*g[0])<0&&(g=g.map(_=>-_)),{rotation:[[h[0],B[0],g[0]],[h[1],B[1],g[1]],[h[2],B[2],g[2]]],translation:A}}let Ls=null;async function rE(){return Ls||(Ls=(async()=>{const r=await M0(()=>import("./opencv-BefZ2gI0.js").then(t=>t.o),[],import.meta.url),e=r.default??r;return e instanceof Promise?await e:(e.Mat||await new Promise(t=>{e.onRuntimeInitialized=()=>t()}),e)})()),Ls}async function sE(r,e,t,n,i){if(r.length!==4||n<=0||i<=0)return null;const s=await rE(),o=n/2,a=s.matFromArray(4,3,s.CV_64FC1,[-o,-o,0,o,-o,0,o,o,0,-o,o,0]),x=s.matFromArray(4,2,s.CV_64FC1,[r[0].x,r[0].y,r[1].x,r[1].y,r[2].x,r[2].y,r[3].x,r[3].y]),c=s.matFromArray(3,3,s.CV_64FC1,[i,0,e/2,0,i,t/2,0,0,1]),l=s.matFromArray(1,5,s.CV_64FC1,[0,0,0,0,0]),u=new s.Mat,d=new s.Mat;try{if(!s.solvePnP(a,x,c,l,u,d))return null;const E=new s.Mat;s.Rodrigues(u,E);const m=[[E.data64F[0],E.data64F[1],E.data64F[2]],[E.data64F[3],E.data64F[4],E.data64F[5]],[E.data64F[6],E.data64F[7],E.data64F[8]]],f=[d.data64F[0],d.data64F[1],d.data64F[2]];return E.delete(),{rotation:m,translation:f}}finally{a.delete(),x.delete(),c.delete(),l.delete(),u.delete(),d.delete()}}async function oE(){if(!navigator.xr)throw new Error("WebXR is not supported in this browser");return await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}})}function C0(r,e){if(e===Pc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ys||e===O0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let x=0;x<a.count;x++)o.push(x);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ys)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class aE extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new FE(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ki.extractUrlBase(e);o=Ki.resolveURL(c,this.path)}else o=Ki.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},x=new hx(this.manager);x.setPath(this.path),x.setResponseType("arraybuffer"),x.setRequestHeader(this.requestHeader),x.setWithCredentials(this.withCredentials),x.load(e,function(c){try{s.parse(c,o,function(l){t(l),s.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},x=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(x.decode(new Uint8Array(e,0,4))===px){try{o[Ge.KHR_BINARY_GLTF]=new ME(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(x.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new OE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){const u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new lE;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new yE(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new SE;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new TE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function xE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cE{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,x=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const l=new Te(16777215);x.color!==void 0&&l.setRGB(x.color[0],x.color[1],x.color[2],Et);const u=x.range!==void 0?x.range:0;switch(x.type){case"directional":c=new fx(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zp(l),c.distance=u;break;case"spot":c=new kp(l),c.distance=u,x.spot=x.spot||{},x.spot.innerConeAngle=x.spot.innerConeAngle!==void 0?x.spot.innerConeAngle:0,x.spot.outerConeAngle=x.spot.outerConeAngle!==void 0?x.spot.outerConeAngle:Math.PI/4,c.angle=x.spot.outerConeAngle,c.penumbra=1-x.spot.innerConeAngle/x.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+x.type)}return c.position.set(0,0,0),c.decay=2,Dn(c,x),x.intensity!==void 0&&(c.intensity=x.intensity),c.name=t.createUniqueName(x.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(x){return n._getNodeRef(t.cache,a,x)})}}class lE{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Et),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,st))}return Promise.all(i)}}class uE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class dE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(s)}}class hE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class fE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Et)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,st)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class pE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Et),Promise.all(s)}}class mE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Et),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,st)),Promise.all(s)}}class gE{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class _E{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class BE{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let x=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(x=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,x);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vE{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let x=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(x=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,x);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DE{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const x=i.byteOffset||0,c=i.byteLength||0,l=i.count,u=i.byteStride,d=new Uint8Array(a,x,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(l*u);return o.decodeGltfBuffer(new Uint8Array(p),l,u,d,i.mode,i.filter),p})})}else return null}}class FE{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ut.TRIANGLES&&c.mode!==Ut.TRIANGLE_STRIP&&c.mode!==Ut.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],x={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(l=>(x[c]=l,x[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const l=c.pop(),u=l.isGroup?l.children:[l],d=c[0].count,p=[];for(const E of u){const m=new we,f=new L,h=new mt,B=new L(1,1,1),A=new gp(E.geometry,E.material,d);for(let g=0;g<d;g++)x.TRANSLATION&&f.fromBufferAttribute(x.TRANSLATION,g),x.ROTATION&&h.fromBufferAttribute(x.ROTATION,g),x.SCALE&&B.fromBufferAttribute(x.SCALE,g),A.setMatrixAt(g,m.compose(f,h,B));for(const g in x)if(g==="_COLOR_0"){const D=x[g];A.instanceColor=new Js(D.array,D.itemSize,D.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&E.geometry.setAttribute(g,x[g]);nt.prototype.copy.call(A,E),this.parser.assignFinalMaterial(A),p.push(A)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}}const px="glTF",Xi=12,_0={JSON:1313821514,BIN:5130562};class ME{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==px)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xi,s=new DataView(e,Xi);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const x=s.getUint32(o,!0);if(o+=4,x===_0.JSON){const c=new Uint8Array(e,Xi+o,a);this.content=n.decode(c)}else if(x===_0.BIN){const c=Xi+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},x={},c={};for(const l in o){const u=eo[l]||l.toLowerCase();a[u]=o[l]}for(const l in e.attributes){const u=eo[l]||l.toLowerCase();if(o[l]!==void 0){const d=n.accessors[e.attributes[l]],p=Bi[d.componentType];c[u]=p.name,x[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(u,d){i.decodeDracoFile(l,function(p){for(const E in p.attributes){const m=p.attributes[E],f=x[E];f!==void 0&&(m.normalized=f)}u(p)},a,c,Et,d)})})}}class SE{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TE{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Ex extends tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,x=a*2,c=a*3,l=i-t,u=(n-t)/l,d=u*u,p=d*u,E=e*c,m=E-c,f=-2*p+3*d,h=p-d,B=1-f,A=h-d+u;for(let g=0;g!==a;g++){const D=o[m+g+a],v=o[m+g+x]*l,_=o[E+g+a],b=o[E+g]*l;s[g]=B*D+A*v+f*_+h*b}return s}}const bE=new mt;class wE extends Ex{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return bE.fromArray(s).normalize().toArray(s),s}}const Ut={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},B0={9728:pt,9729:bt,9984:qs,9985:w0,9986:Pr,9987:Zn},v0={33071:kt,33648:kr,10497:Fi},Is={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RE={CUBICSPLINE:void 0,LINEAR:yi,STEP:Ji},Ns={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),r.DefaultMaterial}function On(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],x=[];for(let c=0,l=e.length;c<l;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;x.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(x)]).then(function(c){const l=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function IE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NE(r){let e;const t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Us(t.attributes):e=r.indices+":"+Us(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Us(r.targets[n]);return e}function Us(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function to(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function UE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const kE=new we;class OE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Np(this.options.manager):this.textureLoader=new Vp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return On(s,a,i),Dn(a,i),Promise.all(n._invokeAll(function(x){return x.afterRoot&&x.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,x=o.length;a<x;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const x=this.associations.get(o);x!=null&&this.associations.set(a,x);for(const[c,l]of o.children.entries())s(l,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ki.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Is[i.type],a=Bi[i.componentType],x=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Tt(c,o,x))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],x=Is[i.type],c=Bi[i.componentType],l=c.BYTES_PER_ELEMENT,u=l*x,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,E=i.normalized===!0;let m,f;if(p&&p!==u){const h=Math.floor(d/p),B="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+h+":"+i.count;let A=t.cache.get(B);A||(m=new c(a,h*p,i.count*p/l),A=new hp(m,p/l),t.cache.add(B,A)),f=new ho(A,x,d%p/l,E)}else a===null?m=new c(i.count*x):m=new c(a,d,i.count*x),f=new Tt(m,x,E);if(i.sparse!==void 0){const h=Is.SCALAR,B=Bi[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,g=i.sparse.values.byteOffset||0,D=new B(o[1],A,i.sparse.count*h),v=new c(o[2],g,i.sparse.count*x);a!==null&&(f=new Tt(f.array.slice(),f.itemSize,f.normalized));for(let _=0,b=D.length;_<b;_++){const C=D[_];if(f.setX(C,v[_*x]),x>=2&&f.setY(C,v[_*x+1]),x>=3&&f.setZ(C,v[_*x+2]),x>=4&&f.setW(C,v[_*x+3]),x>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const x=n.manager.getHandler(o.uri);x!==null&&(a=x)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],x=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[x])return this.textureCache[x];const c=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return l.magFilter=B0[d.magFilter]||bt,l.minFilter=B0[d.minFilter]||Zn,l.wrapS=v0[d.wrapS]||Fi,l.wrapT=v0[d.wrapT]||Fi,i.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[x]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let x=o.uri||"",c=!1;if(o.bufferView!==void 0)x=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return x=a.createObjectURL(d),x});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(x).then(function(u){return new Promise(function(d,p){let E=d;t.isImageBitmapLoader===!0&&(E=function(m){const f=new At(m);f.needsUpdate=!0,d(f)}),t.load(Ki.resolveURL(u,s.path),E,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(x),u.userData.mimeType=o.mimeType||UE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",x),u});return this.sourceCache[e]=l,l}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const x=s.associations.get(o);o=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,x)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let x=this.cache.get(a);x||(x=new lx,en.prototype.copy.call(x,n),x.color.copy(n.color),x.map=n.map,x.sizeAttenuation=!1,this.cache.add(a,x)),n=x}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let x=this.cache.get(a);x||(x=new cx,en.prototype.copy.call(x,n),x.color.copy(n.color),x.map=n.map,this.cache.add(a,x)),n=x}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let x=this.cache.get(a);x||(x=n.clone(),s&&(x.vertexColors=!0),o&&(x.flatShading=!0),i&&(x.normalScale&&(x.normalScale.y*=-1),x.clearcoatNormalScale&&(x.clearcoatNormalScale.y*=-1)),this.cache.add(a,x),this.associations.set(x,this.associations.get(n))),n=x}e.material=n}getMaterialType(){return er}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},x=s.extensions||{},c=[];if(x[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Et),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,st)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yt);const l=s.alphaMode||Ns.OPAQUE;if(l===Ns.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===Ns.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yn){const u=s.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],Et)}return s.emissiveTexture!==void 0&&o!==yn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,st)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Dn(u,s),t.associations.set(u,{materials:e}),s.extensions&&On(i,u,s),u})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(x){return D0(x,a,t)})}const o=[];for(let a=0,x=e.length;a<x;a++){const c=e[a],l=NE(c),u=i[l];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=D0(new Kt,c,t),i[l]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let x=0,c=o.length;x<c;x++){const l=o[x].material===void 0?PE(this.cache):this.getDependency("material",o[x].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(x){const c=x.slice(0,x.length-1),l=x[x.length-1],u=[];for(let p=0,E=l.length;p<E;p++){const m=l[p],f=o[p];let h;const B=c[p];if(f.mode===Ut.TRIANGLES||f.mode===Ut.TRIANGLE_STRIP||f.mode===Ut.TRIANGLE_FAN||f.mode===void 0)h=s.isSkinnedMesh===!0?new pp(m,B):new St(m,B),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),f.mode===Ut.TRIANGLE_STRIP?h.geometry=C0(h.geometry,O0):f.mode===Ut.TRIANGLE_FAN&&(h.geometry=C0(h.geometry,Ys));else if(f.mode===Ut.LINES)h=new Cp(m,B);else if(f.mode===Ut.LINE_STRIP)h=new po(m,B);else if(f.mode===Ut.LINE_LOOP)h=new _p(m,B);else if(f.mode===Ut.POINTS)h=new Bp(m,B);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(h.geometry.morphAttributes).length>0&&IE(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Dn(h,s),f.extensions&&On(i,h,f),t.assignFinalMaterial(h),u.push(h)}for(let p=0,E=u.length;p<E;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&On(i,u[0],s),u[0];const d=new Sn;s.extensions&&On(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,E=u.length;p<E;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(rl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],x=[];for(let c=0,l=o.length;c<l;c++){const u=o[c];if(u){a.push(u);const d=new we;s!==null&&d.fromArray(s.array,c*16),x.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fo(a,x)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],x=[],c=[],l=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],E=i.samplers[p.sampler],m=p.target,f=m.node,h=i.parameters!==void 0?i.parameters[E.input]:E.input,B=i.parameters!==void 0?i.parameters[E.output]:E.output;m.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",h)),x.push(this.getDependency("accessor",B)),c.push(E),l.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(x),Promise.all(c),Promise.all(l)]).then(function(u){const d=u[0],p=u[1],E=u[2],m=u[3],f=u[4],h=[];for(let B=0,A=d.length;B<A;B++){const g=d[B],D=p[B],v=E[B],_=m[B],b=f[B];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();const C=n._createAnimationTracks(g,D,v,_,b);if(C)for(let M=0;M<C.length;M++)h.push(C[M])}return new Tp(s,void 0,h)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let x=0,c=i.weights.length;x<c;x++)a.morphTargetInfluences[x]=i.weights[x]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,l=a.length;c<l;c++)o.push(n.getDependency("node",a[c]));const x=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),x]).then(function(c){const l=c[0],u=c[1],d=c[2];d!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(d,kE)});for(let p=0,E=u.length;p<E;p++)l.add(u[p]);return l})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],x=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return x&&a.push(x),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let l;if(s.isBone===!0?l=new xx:c.length>1?l=new Sn:c.length===1?l=c[0]:l=new nt,l!==c[0])for(let u=0,d=c.length;u<d;u++)l.add(c[u]);if(s.name&&(l.userData.name=s.name,l.name=o),Dn(l,s),s.extensions&&On(n,l,s),s.matrix!==void 0){const u=new we;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Sn;n.name&&(s.name=i.createUniqueName(n.name)),Dn(s,n),n.extensions&&On(t,s,n);const o=n.nodes||[],a=[];for(let x=0,c=o.length;x<c;x++)a.push(i.getDependency("node",o[x]));return Promise.all(a).then(function(x){for(let l=0,u=x.length;l<u;l++)s.add(x[l]);const c=l=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof en||d instanceof At)&&u.set(d,p);return l.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,x=[];vn[s.path]===vn.weights?e.traverse(function(d){d.morphTargetInfluences&&x.push(d.name?d.name:d.uuid)}):x.push(a);let c;switch(vn[s.path]){case vn.weights:c=bi;break;case vn.rotation:c=Qn;break;case vn.position:case vn.scale:c=wi;break;default:switch(n.itemSize){case 1:c=bi;break;case 2:case 3:default:c=wi;break}break}const l=i.interpolation!==void 0?RE[i.interpolation]:yi,u=this._getArrayFromAccessor(n);for(let d=0,p=x.length;d<p;d++){const E=new c(x[d]+"."+vn[s.path],t.array,u,l);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),o.push(E)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=to(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qn?wE:Ex;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zE(r,e,t){const n=e.attributes,i=new En;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],x=a.min,c=a.max;if(x!==void 0&&c!==void 0){if(i.set(new L(x[0],x[1],x[2]),new L(c[0],c[1],c[2])),a.normalized){const l=to(Bi[a.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,x=new L;for(let c=0,l=s.length;c<l;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,E=d.max;if(p!==void 0&&E!==void 0){if(x.setX(Math.max(Math.abs(p[0]),Math.abs(E[0]))),x.setY(Math.max(Math.abs(p[1]),Math.abs(E[1]))),x.setZ(Math.max(Math.abs(p[2]),Math.abs(E[2]))),d.normalized){const m=to(Bi[d.componentType]);x.multiplyScalar(m)}a.max(x)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function D0(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(x){r.setAttribute(a,x)})}for(const o in n){const a=eo[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return We.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Dn(r,e),zE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?LE(r,e.targets,t):r})}function HE(r){const e=new ax({canvas:r,antialias:!0,alpha:!0});e.xr.enabled=!0,e.setClearColor(0,0),e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight);const t=new dp,n=new yt(70,window.innerWidth/window.innerHeight,.01,100);t.add(n);const i=new fx(16777215,1);i.position.set(1,2,1),t.add(i);const s=new Gp(16777215,.5);t.add(s);let o=null;return{renderer:e,scene:t,camera:n,model:o,setModel:p=>{o=p,t.add(p)},setModelOpacity:p=>{o&&o.traverse(E=>{const m=E;if(!m.isMesh)return;const f=Array.isArray(m.material)?m.material:[m.material];for(const h of f)h.transparent=!0,h.opacity=p,h.depthWrite=p>=1,h.needsUpdate=!0})},setModelTransform:(p,E)=>{o&&(o.position.copy(p),o.quaternion.copy(E))},nudgeModel:(p,E,m)=>{o&&(o.position.x+=p,o.position.y+=E,o.position.z+=m)},rotateModelY:p=>{o&&o.rotateY(p)},dispose:()=>{e.dispose()}}}async function GE(r){const e=new aE;try{return(await e.loadAsync(r)).scene}catch{const t=new St(new ei(1,1,1),new er({color:3900150,transparent:!0,opacity:.8}));return t.name="fallback-model",t}}async function VE(r,e){let t=null;try{const n=await r.requestReferenceSpace("viewer"),i=r.requestHitTestSource;i&&(t=await i({space:n})??null)}catch{t=null}return{update(n){if(!t)return null;const i=n.getHitTestResults(t);if(i.length===0)return null;const s=i[0].getPose(e);if(!s)return null;const o=new L(s.transform.position.x,s.transform.position.y,s.transform.position.z),a=new mt(s.transform.orientation.x,s.transform.orientation.y,s.transform.orientation.z,s.transform.orientation.w);return{position:o,quaternion:a}},dispose(){if(t)try{t.cancel()}catch{}}}}function WE(r){const e=r.rotation,t=r.translation,n=new we().set(e[0][0],e[0][1],e[0][2],t[0],e[1][0],e[1][1],e[1][2],t[1],e[2][0],e[2][1],e[2][2],t[2],0,0,0,1),i=new we().set(1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1);return new we().multiplyMatrices(i,n)}async function XE(r,e,t,n={}){const i=await oE(),s=HE(r),o=s.renderer;o.xr.setReferenceSpaceType("local"),await o.xr.setSession(i);const a=["local-floor","local","viewer"];let x=null;for(const f of a)try{x=await i.requestReferenceSpace(f);break}catch{}if(!x)throw new Error("This browser does not support any WebXR reference space");const c=await VE(i,x);let l;if(n.cubeSizeMeters&&n.cubeSizeMeters>0){const f=new Sn,h=n.cubeSizeMeters,B=new St(new ei(h,h,h),new er({color:3900150,transparent:!0,opacity:.8}));B.position.z=h/2,f.add(B),l=f}else l=await GE(e);s.setModel(l),s.setModelOpacity(.8);const u=new St(new Eo(.15,.2,32),new yn({color:65280,side:Yt}));u.visible=!1,s.scene.add(u);let d=!1,p=null,E=null;const m=()=>{const f=s.model;if(!f)throw new Error("model is not loaded");return{position:{x:f.position.x,y:f.position.y,z:f.position.z},quaternion:{x:f.quaternion.x,y:f.quaternion.y,z:f.quaternion.z,w:f.quaternion.w}}};return o.setAnimationLoop((f,h)=>{if(h){if(n.qrPoseInCamera&&!d){const A=h.getViewerPose(x);if(A){const g=new we().fromArray(A.transform.matrix),D=WE(n.qrPoseInCamera),v=g.multiply(D),_=new L().setFromMatrixPosition(v),b=new L().setFromMatrixPosition(g),C=_.clone().sub(b);if(C.length()<.15){const T=b.clone().add(C.normalize().multiplyScalar(.3));v.setPosition(T),_.copy(T)}const R=new mt().setFromRotationMatrix(v),N={position:{x:_.x,y:_.y,z:_.z},quaternion:{x:R.x,y:R.y,z:R.z,w:R.w}};p=N;const K=t?m0(N,t):N;s.setModelTransform(new L(K.position.x,K.position.y,K.position.z),new mt(K.quaternion.x,K.quaternion.y,K.quaternion.z,K.quaternion.w)),d=!0}}const B=c.update(h);if(B&&(E={position:B.position.clone(),quaternion:B.quaternion.clone()},u.visible=!0,u.position.copy(B.position),u.quaternion.copy(B.quaternion),t&&!d)){d=!0;const A={position:{x:B.position.x,y:B.position.y,z:B.position.z},quaternion:{x:B.quaternion.x,y:B.quaternion.y,z:B.quaternion.z,w:B.quaternion.w}};p=A;const g=m0(A,t);s.setModelTransform(new L(g.position.x,g.position.y,g.position.z),new mt(g.quaternion.x,g.quaternion.y,g.quaternion.z,g.quaternion.w))}}o.render(s.scene,s.camera)}),{setModelOpacity:s.setModelOpacity,nudge:s.nudgeModel,rotateY:s.rotateModelY,getAnchorPose:()=>{if(!p)throw new Error("anchor pose is not available yet");return p},getModelPose:m,placeModelAtPose:f=>{s.setModelTransform(new L(f.position.x,f.position.y,f.position.z),new mt(f.quaternion.x,f.quaternion.y,f.quaternion.z,f.quaternion.w))},placeAtReticle:()=>E?(p={position:{x:E.position.x,y:E.position.y,z:E.position.z},quaternion:{x:E.quaternion.x,y:E.quaternion.y,z:E.quaternion.z,w:E.quaternion.w}},s.setModelTransform(E.position.clone(),E.quaternion.clone()),d=!0,!0):!1,async stop(){o.setAnimationLoop(null),c.dispose(),s.dispose();try{await i.end()}catch{}}}}function qE(r,e,t){const n=r>=e;return t&&!n?{step:!0,nowAbove:!1}:{step:!1,nowAbove:n}}function YE(r){const e=r.threshold??10;let t=!1,n=0,i=!1;const s=a=>{const x=a.accelerationIncludingGravity;if(!x||x.x==null||x.y==null||x.z==null)return;const c=Math.sqrt(x.x**2+x.y**2+x.z**2),l=qE(c,e,t);t=l.nowAbove,l.step&&r.onStep(n)},o=a=>{a.alpha!=null&&(n=a.alpha*Math.PI/180),r.onHeading?.(n)};return window.addEventListener("devicemotion",s),window.addEventListener("deviceorientation",o),{stop(){i||(i=!0,window.removeEventListener("devicemotion",s),window.removeEventListener("deviceorientation",o))}}}yx({immediate:!0});const no=document.querySelector("#scan-section"),io=document.querySelector("#ar-section"),Ir=document.querySelector("#scan-video"),Xt=document.querySelector("#scan-canvas"),mx=document.querySelector("#ar-canvas"),Wn=document.querySelector("#scan-btn"),Zi=document.querySelector("#enter-ar-btn"),jE=document.querySelector("#exit-ar-btn"),KE=document.querySelector("#save-binding-btn"),Nr=document.querySelector("#pdr-btn"),F0=document.querySelector("#ar-toggle-btn"),ks=document.querySelector("#ar-controls"),ZE=document.querySelector("#place-btn"),Fn=document.querySelector("#scan-status"),fn=document.querySelector("#ar-status"),Os=document.querySelector("#opacity-slider"),Ax="ar-demo-bindings";let Rr=null,gx="/models/demo-room.glb",Qt=null,Xn=null,ot=null,qn=null,zs=!1;function Co(){const r=localStorage.getItem(Ax);if(!r)return{};try{return JSON.parse(r)}catch{return{}}}function $E(r){localStorage.setItem(Ax,JSON.stringify(r))}async function JE(){if(Rr)return Rr;const r=await fetch("config/site.json");if(!r.ok)throw new Error(`failed to load site config: ${r.status}`);return Rr=bx(await r.text()),Rr}function QE(r){return[{x:r.topLeftCorner.x,y:r.topLeftCorner.y},{x:r.topRightCorner.x,y:r.topRightCorner.y},{x:r.bottomRightCorner.x,y:r.bottomRightCorner.y},{x:r.bottomLeftCorner.x,y:r.bottomLeftCorner.y}]}function em(){const r=Ir.srcObject,t=(r instanceof MediaStream?r.getVideoTracks()[0]:void 0)?.getSettings(),n=t?.width||Ir.videoWidth||Xt.width,i=t?.height||Ir.videoHeight||Xt.height;if(!n||!i)return Xt.width*.8;const s=65*Math.PI/180;return i/2/Math.tan(s/2)*(Xt.width/n)}Wn.addEventListener("click",async()=>{Wn.disabled=!0,Fn.textContent="正在启动摄像头...";try{const r=await JE();await Hx({video:Ir,canvas:Xt,onDecoded:(e,t)=>{let n;try{n=Rx(e)}catch{Fn.textContent="二维码内容无效，请重试",Wn.disabled=!1;return}const i=Gx(r,n.model);if(!i){Fn.textContent=`未找到模型: ${n.model}`,Wn.disabled=!1;return}Qt=n,gx=i.path;const s=QE(t),o=em();Xn=null;const a=n.qrId?Co()[n.qrId]:void 0;Fn.textContent=`已识别模型: ${i.id}，正在计算位姿...`,Zi.hidden=!1,(async()=>{try{Xn=await sE(s,Xt.width,Xt.height,n.sizeCm/100,o)??g0(s,Xt.width,Xt.height,n.sizeCm/100,o)}catch{Xn=g0(s,Xt.width,Xt.height,n.sizeCm/100,o)}Fn.textContent=`已识别模型: ${i.id}${Xn?"（已获取二维码位姿）":""}${a?"（已绑定）":""}，可以进入 AR`})()}})}catch(r){Fn.textContent=`摄像头启动失败: ${String(r)}`,Wn.disabled=!1}});Zi.addEventListener("click",async()=>{if(!zs){if(ot){try{await ot.stop()}catch(r){console.error("stop previous AR session failed",r)}ot=null}zs=!0,Zi.disabled=!0,no.hidden=!0,io.hidden=!1;try{const r=Qt?.qrId?Co()[Qt.qrId]:void 0,e={};Xn&&(e.qrPoseInCamera=Xn),Qt&&(e.cubeSizeMeters=Qt.sizeCm/100),ot=await XE(mx,gx,r,e),fn.textContent=r?"已从空白码绑定恢复位姿":"移动手机让准星对准平面，然后点击屏幕放置模型",ot.setModelOpacity(Number(Os.value)),Os.oninput=()=>{ot&&ot.setModelOpacity(Number(Os.value))}}catch(r){no.hidden=!1,io.hidden=!0,Fn.textContent=`AR 启动失败: ${String(r)}`,Wn.disabled=!1}finally{zs=!1,Zi.disabled=!1}}});F0.addEventListener("click",()=>{ks.hidden=!ks.hidden,F0.textContent=ks.hidden?"⚙ 控制":"✕ 收起"});ZE.addEventListener("click",()=>{if(!ot)return;const r=ot.placeAtReticle();fn.textContent=r?"模型已放置到准星，可微调":"请先让准星对准平面"});mx.addEventListener("click",()=>{if(!ot)return;ot.placeAtReticle()&&(fn.textContent="模型已放置到准星，可微调")});document.querySelectorAll("[data-nudge]").forEach(r=>{r.addEventListener("click",()=>{if(!ot||!r.dataset.nudge)return;const[e,t,n]=r.dataset.nudge.split(",").map(Number);ot.nudge(e,t,n)})});document.querySelectorAll("[data-rotate]").forEach(r=>{r.addEventListener("click",()=>{!ot||!r.dataset.rotate||ot.rotateY(Number(r.dataset.rotate))})});Nr.addEventListener("click",()=>{if(!ot)return;if(qn){qn.stop(),qn=null,Nr.textContent="启用 PDR 估算",fn.textContent="PDR 估算已关闭";return}let r=0;qn=YE({onStep:()=>{r+=1,fn.textContent=`PDR 估算：步数 ${r}（仅显示，不移动模型）`}}),Nr.textContent="关闭 PDR 估算",fn.textContent="PDR 估算已启用（仅显示步数，不移动模型）"});KE.addEventListener("click",()=>{if(!ot||!Qt){fn.textContent="请先进入 AR 并完成模型放置";return}const r=Qt.qrId??"blank-001",e=Qp(ot.getAnchorPose(),ot.getModelPose()),t={qrId:r,modelId:Qt.model,qrSizeCm:Qt.sizeCm,tQrToModel:e.position,qQrToModel:e.quaternion},n=Co();n[r]=t,$E(n),fn.textContent=`已保存绑定 ${r}，下次扫同一二维码可恢复位姿`});jE.addEventListener("click",async()=>{if(qn&&(qn.stop(),qn=null,Nr.textContent="启用 PDR 估算"),ot){try{await ot.stop()}catch(r){console.error("stop AR session failed",r)}ot=null}io.hidden=!0,no.hidden=!1,Wn.disabled=!1,Zi.hidden=!0,Qt=null,Xn=null,fn.textContent="",Fn.textContent="请对准二维码"});export{Lx as a,tm as g};
