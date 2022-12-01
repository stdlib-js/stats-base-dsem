// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,_,d;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(i.call(r,e)||a.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),_="get"in f,d="set"in f,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,f.get),d&&u&&u.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(r,e,t,n){var o,u,i,a,f,l,d,p,y,s,b,v,m;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(b=0,m=0;m<r;m++)b+=e[o],o+=t;return b}if(r<=128){for(u=e[o],i=e[o+t],a=e[o+2*t],f=e[o+3*t],l=e[o+4*t],d=e[o+5*t],p=e[o+6*t],y=e[o+7*t],o+=8*t,s=r%8,m=8;m<r-s;m+=8)u+=e[o],i+=e[o+t],a+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],d+=e[o+5*t],p+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(b=u+i+(a+f)+(l+d+(p+y));m<r;m++)b+=e[o],o+=t;return b}return v=c(r/2),_(v-=v%8,e,t,o)+_(r-v,e,t,o+v*t)}function d(r,e,t){var n,o,u;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,u=0;u<r;u++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function p(r,e,t,n){var o,u,i,a,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=d(r,t,n)/r,u=n<0?(1-r)*n:0,i=0,a=0,c=0;c<r;c++)i+=(f=t[u]-o)*f,a+=f,u+=n;return i/l-a/r*(a/l)}function y(r,e,t,n,o){var u,i,a,f,l,c,d;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(u=_(r,t,n,o)/r,i=o,a=0,f=0,d=0;d<r;d++)a+=(l=t[i]-u)*l,f+=l,i+=n;return a/c-f/r*(f/c)}l(d,"ndarray",_),l(p,"ndarray",y);var s=Math.sqrt;function b(r,e,t,n){return s(p(r,e,t,n)/r)}function v(r,e,t,n,o){return s(y(r,e,t,n,o)/r)}function m(r,e,t,n){return b(r,e,t,n)}return l(b,"ndarray",v),l(m,"ndarray",(function(r,e,t,n,o){return v(r,e,t,n,o)})),m},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dsem=e();
//# sourceMappingURL=browser.js.map
