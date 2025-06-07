"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(k,n){
var y=require('@stdlib/stats-base-dsempn/dist').ndarray;function f(e,r,i,a,p){return y(e,r,i,a,p)}n.exports=f
});var d=s(function(w,v){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=t();function l(e,r,i,a){return j(e,r,i,a,x(e,a))}v.exports=l
});var m=s(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=t();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=m(),u,c=O(E(__dirname,"./native.js"));b(c)?u=g:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
