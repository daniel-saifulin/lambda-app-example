var helloWorldWidget;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,d,f,c,p,h,v,m={160:(e,r,t)=>{var n={".":()=>Promise.all([t.e(373),t.e(315)]).then((()=>()=>t(315)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={exports:{}};return m[e].call(t.exports,t,t.exports,b),t.exports}b.m=m,b.c=g,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+"."+{107:"3aa812d7cd7b8f73f5c3",151:"54c987c1f26c6332a7e6",231:"78264818a7b935b10ab3",264:"28dc7b43fd87d9ee8d28",315:"602ea5a58feeb99ea7d3",373:"47b6adb670667e4f5d63",806:"8e71a3bbdf09fa15b24a",951:"1f009dad4d5d670363ca"}[e]+".js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},b.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var a,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==r){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.src=r),e[r]=[t];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],i=void 0,l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("binance-api-node","0.11.33",(()=>Promise.all([b.e(951),b.e(107)]).then((()=>()=>b(951))))),l("react-dom","17.0.2",(()=>Promise.all([b.e(151),b.e(373)]).then((()=>()=>b(151))))),l("react/jsx-runtime","17.0.2",(()=>Promise.all([b.e(373),b.e(264)]).then((()=>()=>b(264))))),l("react","17.0.2",(()=>b.e(231).then((()=>()=>b(231)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),r=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},t=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=t.length||"o"==(d=(typeof(s=t[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},a=(e,r)=>{var n=e[r];return Object.keys(n).reduce(((e,r)=>!e||!n[e].loaded&&t(e,r)?r:e),0)},i=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",l=(e,r,t,n)=>{var l=a(e,t);return o(n,l)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,l,n)),s(e[t][l])},u=(e,r,n)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(n,r)||e&&!t(e,r)?e:r),0))&&a[r]},s=e=>(e.loaded=1,e.get()),f=(d=e=>function(r,t,n,o){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,n,o)):e(r,b.S[r],t,n,o)})(((e,r,t,n,o)=>r&&b.o(r,t)?l(r,0,t,n):o())),c=d(((e,r,t,n,o)=>{var a=r&&b.o(r,t)&&u(r,t,n);return a?s(a):o()})),p={},h={373:()=>f("default","react",[1,17,0,2],(()=>b.e(231).then((()=>()=>b(231))))),296:()=>c("default","binance-api-node",[2,0,11,31],(()=>Promise.all([b.e(951),b.e(107)]).then((()=>()=>b(951))))),342:()=>f("default","react-dom",[1,17,0,2],(()=>b.e(151).then((()=>()=>b(151))))),592:()=>f("default","react/jsx-runtime",[1,17,0,2],(()=>b.e(806).then((()=>()=>b(264)))))},v={315:[296,342,592],373:[373]},b.f.consumes=(e,r)=>{b.o(v,e)&&v[e].forEach((e=>{if(b.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete p[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={560:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(373!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=b.p+b.u(r),i=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);l&&l(b)}for(r&&r(t);u<a.length;u++)o=a[u],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk=globalThis.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var y=b(160);helloWorldWidget=y})();