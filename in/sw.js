if(!self.define){let e,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const c=e=>r(e,n),d={module:{uri:n},exports:s,require:c};i[n]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(f(...e),s)))}}define(["./workbox-d4017b82"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"chinese_simplified.txt",revision:"0c5517ab8edb22ea7a61e44b28e96da7"},{url:"chinese_traditional.txt",revision:"00d0909e346b52006d1e9ef680b5a5fc"},{url:"czech.txt",revision:"38fd5e100d4604c2a844bb9bb9305975"},{url:"english.txt",revision:"f23506956964fa69c98fa3fb5c8823b5"},{url:"french.txt",revision:"f5905fd22fd0deb0be40f356204ba3fb"},{url:"fun.js",revision:"70b61c7cb617f1eb7fdf6de73accc6e3"},{url:"index.css",revision:"75973db0f8d8fbcf9de94ae00bbdf046"},{url:"index.html",revision:"1ad53e3a0c5588ce28fe1a98ea17ea0f"},{url:"italian.txt",revision:"fbe635509a2859b7b6de2c0f16f15ed8"},{url:"japanese.txt",revision:"c71fca9fd3fe9f85514cb38a58859de2"},{url:"korean.txt",revision:"ec271d4926b82ef5c02aefa7dd2daaf4"},{url:"spanish.txt",revision:"5171ee312f7709bec7660bc9ac07351a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map