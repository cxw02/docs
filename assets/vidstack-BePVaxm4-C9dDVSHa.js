var y=Object.defineProperty;var g=s=>{throw TypeError(s)};var w=(s,t,i)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var c=(s,t,i)=>w(s,typeof t!="symbol"?t+"":t,i),h=(s,t,i)=>t.has(s)||g("Cannot "+i);var e=(s,t,i)=>(h(s,t,"read from private field"),i?i.call(s):t.get(s)),u=(s,t,i)=>t.has(s)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,i),p=(s,t,i,a)=>(h(s,t,"write to private field"),a?a.call(s,i):t.set(s,i),i),l=(s,t,i)=>(h(s,t,"access private method"),i);import{a3 as M,as as f,$ as A,_ as P,af as O,Y as S}from"./app-DqblKm8F.js";var r,o,b,m;class J{constructor(t){u(this,o);u(this,r);c(this,"src",M(""));c(this,"referrerPolicy",null);p(this,r,t),t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),this.referrerPolicy!==null&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return e(this,r)}setup(){f(window,"message",l(this,o,m).bind(this)),f(e(this,r),"load",this.onLoad.bind(this)),A(l(this,o,b).bind(this))}postMessage(t,i){var a;(a=e(this,r).contentWindow)==null||a.postMessage(JSON.stringify(t),i??"*")}}r=new WeakMap,o=new WeakSet,b=function(){const t=this.src();if(!t.length){e(this,r).setAttribute("src","");return}const i=P(()=>this.buildParams());e(this,r).setAttribute("src",O(t,i))},m=function(t){var d;const i=this.getOrigin();if((t.source===null||t.source===((d=e(this,r))==null?void 0:d.contentWindow))&&(!S(i)||i===t.origin)){try{const n=JSON.parse(t.data);n&&this.onMessage(n,t);return}catch{}t.data&&this.onMessage(t.data,t)}};export{J as E};
