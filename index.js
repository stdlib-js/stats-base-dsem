// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).dsem=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var _,m="function"==typeof Symbol?Symbol.toStringTag:"";_=v()?function(r){var t,e,n,o,i;if(null==r)return d.call(r);e=r[m],i=m,t=null!=(o=r)&&j.call(o,i);try{r[m]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[m]=e:delete r[m],n}:function(r){return d.call(r)};var g=_,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function E(r){return s(r)||O(r)}function S(){return new Function("return this;")()}y(E,"isPrimitive",s),y(E,"isObject",O);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var q=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=q.document&&q.document.childNodes,N=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var k,C=/^\s*function\s*([^(]*)/i;y(x,"REGEXP",C),k=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var M=k;function V(r){return null!==r&&"object"==typeof r}var F=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!M(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(V);function G(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(V,"isObjectLikeArray",F);var L="function"==typeof p||"object"==typeof N||"function"==typeof B?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};var R,$,D=Object.getPrototypeOf;$=Object.getPrototypeOf,R="function"===L($)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var I=R;function J(r){return null==r?null:(r=Object(r),I(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}function X(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var z=Math.floor;function H(r,t,e,n){var o,i,u,a,f,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=e;return b}if(r<=128){for(i=t[o],u=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,s=r%8,d=8;d<r-s;d+=8)i+=t[o],u+=t[o+e],a+=t[o+2*e],f+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],y+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(b=i+u+(a+f)+(c+l+(y+p));d<r;d++)b+=t[o],o+=e;return b}return v=z(r/2),H(v-=v%8,t,e,o)+H(r-v,t,e,o+v*e)}function K(r,t,e){var n,o,i;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,i=0;i<r;i++)o+=t[n],n+=e;return o}return H(r,t,e,n)}y(K,"ndarray",H);var Q,W=X((0,r.join)(__dirname,"./native.js")),Y=Q=U(W)?K:W;const{ndarray:Z}=Q;function rr(r,t,e,n){var o,i,u,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(o=Y(r,e,n)/r,i=n<0?(1-r)*n:0,u=0,a=0,l=0;l<r;l++)u+=(f=e[i]-o)*f,a+=f,i+=n;return u/c-a/r*(a/c)}y(rr,"ndarray",(function(r,t,e,n,o){var i,u,a,f,c,l,y;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(i=Z(r,e,n,o)/r,u=o,a=0,f=0,y=0;y<r;y++)a+=(c=e[u]-i)*c,f+=c,u+=n;return a/l-f/r*(f/l)}));var tr,er=X((0,r.join)(__dirname,"./native.js")),nr=tr=er instanceof Error?rr:er;const{ndarray:or}=tr;var ir=Math.sqrt;function ur(r,t,e,n){return ir(nr(r,t,e,n)/r)}y(ur,"ndarray",(function(r,t,e,n,o){return ir(or(r,t,e,n,o)/r)}));var ar,fr=X((0,r.join)(__dirname,"./native.js")),cr=ar=fr instanceof Error?ur:fr;const{ndarray:lr}=ar;function yr(r,t,e,n){return cr(r,t,e,n)}return y(yr,"ndarray",(function(r,t,e,n,o){return lr(r,t,e,n,o)})),yr}));
//# sourceMappingURL=index.js.map
