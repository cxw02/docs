var l=i=>{throw TypeError(i)};var c=(i,t,s)=>t.has(i)||l("Cannot "+s);var r=(i,t,s)=>(c(i,t,"read from private field"),s?s.call(i):t.get(i)),e=(i,t,s)=>t.has(i)?l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),h=(i,t,s,f)=>(c(i,t,"write to private field"),f?f.call(i,s):t.set(i,s),s),m=(i,t,s)=>(c(i,t,"access private method"),s);import{bo as p,aZ as u}from"./app-DqblKm8F.js";var o,a,n,d;class A{constructor(t){e(this,n);e(this,o);e(this,a);h(this,a,t)}start(){p(r(this,o))&&m(this,n,d).call(this)}stop(){u(r(this,o))&&window.cancelAnimationFrame(r(this,o)),h(this,o,void 0)}}o=new WeakMap,a=new WeakMap,n=new WeakSet,d=function(){h(this,o,window.requestAnimationFrame(()=>{p(r(this,o))||(r(this,a).call(this),m(this,n,d).call(this))}))};export{A as R};