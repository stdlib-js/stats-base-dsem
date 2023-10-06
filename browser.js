// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,i,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(i=(-s).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=s.toString(e),s||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,d,"e+0$1"),i=f.call(i,g,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):u.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var k=String.fromCharCode,E=isNaN,S=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,i,a,o,p,u,l,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",u=1,l=0;l<r.length;l++)if(c(i=r[l]))p+=i;else{if(e=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,E(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",u+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,i,n;for(t=[],n=0,i=T.exec(r);i;)(e=r.slice(n,T.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=T.lastIndex,i=T.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function A(r){return"string"==typeof r}function I(r){var e,t,i;if(!A(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var C=Object.prototype,N=C.toString,R=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||Z.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=Math.floor;function M(r,e,t,i){var n,a,o,s,c,p,u,l,f,d,g,h,w;if(r<=0)return 0;if(1===r||0===t)return e[i];if(n=i,r<8){for(g=0,w=0;w<r;w++)g+=e[n],n+=t;return g}if(r<=128){for(a=e[n],o=e[n+t],s=e[n+2*t],c=e[n+3*t],p=e[n+4*t],u=e[n+5*t],l=e[n+6*t],f=e[n+7*t],n+=8*t,d=r%8,w=8;w<r-d;w+=8)a+=e[n],o+=e[n+t],s+=e[n+2*t],c+=e[n+3*t],p+=e[n+4*t],u+=e[n+5*t],l+=e[n+6*t],f+=e[n+7*t],n+=8*t;for(g=a+o+(s+c)+(p+u+(l+f));w<r;w++)g+=e[n],n+=t;return g}return h=L(r/2),M(h-=h%8,e,t,n)+M(r-h,e,t,n+h*t)}function U(r,e,t){var i,n,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(i=t<0?(1-r)*t:0,r<8){for(n=0,a=0;a<r;a++)n+=e[i],i+=t;return n}return M(r,e,t,i)}function X(r,e,t,i){var n,a,o,s,c,p,u;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===i)return 0;for(n=U(r,t,i)/r,a=i<0?(1-r)*i:0,o=0,s=0,u=0;u<r;u++)o+=(c=t[a]-n)*c,s+=c,a+=i;return o/p-s/r*(s/p)}function q(r,e,t,i,n){var a,o,s,c,p,u,l;if(u=r-e,r<=0||u<=0)return NaN;if(1===r||0===i)return 0;for(a=M(r,t,i,n)/r,o=n,s=0,c=0,l=0;l<r;l++)s+=(p=t[o]-a)*p,c+=p,o+=i;return s/u-c/r*(c/u)}W(U,"ndarray",M),W(X,"ndarray",q);var z=Math.sqrt;function B(r,e,t,i){return z(X(r,e,t,i)/r)}function D(r,e,t,i,n){return z(q(r,e,t,i,n)/r)}function H(r,e,t,i){return B(r,e,t,i)}return W(B,"ndarray",D),W(H,"ndarray",(function(r,e,t,i,n){return D(r,e,t,i,n)})),H},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dsem=e();
//# sourceMappingURL=browser.js.map
