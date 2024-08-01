"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=a(function(h,u){
var y=require('@stdlib/stats-base-dsempn/dist');function x(e,r,i,s){return y(e,r,i,s)}u.exports=x
});var d=a(function(k,v){
var f=require('@stdlib/stats-base-dsempn/dist').ndarray;function j(e,r,i,s,c){return f(e,r,i,s,c)}v.exports=j
});var o=a(function(w,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),R=d();l(q,"ndarray",R);m.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,p=E(_(__dirname,"./native.js"));O(p)?t=b:t=p;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
