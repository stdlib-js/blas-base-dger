"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var j=c(function(ar,T){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist');function P(e,r,i,m,g,u,l,a,s,o,v,t,w){var n,q,f,h,x,z,F,E,b,R,p,y;for(K([v,t])?(h=r,x=e,q=t,f=v-h*t,n=m,m=l,l=n,n=g,g=a,a=n,n=u,u=s,s=n):(h=e,x=r,q=v,f=t-h*v),z=g,F=a,b=u,R=s,E=w,y=0;y<x;y++){if(l[R]===0)E+=q*h;else for(n=i*l[R],b=u,p=0;p<h;p++)o[E]+=m[b]*n,b+=z,E+=q;R+=F,E+=f}return o}T.exports=P
});var O=c(function(nr,C){
var Q=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),U=require('@stdlib/blas-base-assert-is-layout/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),W=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=j();function $(e,r,i,m,g,u,l,a,s,o){var v,t,w,n,q,f;if(!U(e))throw new TypeError(d('1uVFx',e));if(r<0)throw new RangeError(d('1uVGE',r));if(i<0)throw new RangeError(d('1uVFz',i));if(u===0)throw new RangeError(d('1uVGB',u));if(a===0)throw new RangeError(d('1uVG0',a));if(v=Q(e),v?t=r:t=i,o<W(1,t))throw new RangeError(d('1uVGC',t,o));return r===0||i===0||m===0?s:(q=_(r,u),f=_(i,a),v?(w=1,n=o):(w=o,n=1),Z(r,i,m,g,u,q,l,a,f,s,w,n,0))}C.exports=$
});var B=c(function(ir,k){
var V=require('@stdlib/error-tools-fmtprodmsg/dist'),L=j();function D(e,r,i,m,g,u,l,a,s,o,v,t,w){if(e<0)throw new RangeError(V('1uVG7',e));if(r<0)throw new RangeError(V('1uVGE',r));if(g===0)throw new RangeError(V('1uVGF',g));if(a===0)throw new RangeError(V('1uVG0',a));return e===0||r===0||i===0?o:L(e,r,i,m,g,u,l,a,s,o,v,t,w)}k.exports=D
});var I=c(function(ur,H){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=O(),N=B();M(G,"ndarray",N);H.exports=G
});var Y=require("path").join,X=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=I(),S,J=X(Y(__dirname,"./native.js"));A(J)?S=rr:S=J;module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
