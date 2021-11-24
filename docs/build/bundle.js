var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function s(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(m)}function p(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=v("style");return function(t,e){p(t.head||t,e)}(h(t),e),e}function _(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function y(){return x(" ")}function A(){return x("")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const D=new Set;let E,H=0;function S(t,e,n,o,r,c,i,l=0){const s=16.666/o;let a="{\n";for(let t=0;t<=1;t+=s){const o=e+(n-e)*c(t);a+=100*t+`%{${i(o,1-o)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=h(t);D.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${d} ${o}ms linear ${r}ms 1 both`,H+=1,d}function k(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),H-=r,H||d((()=>{H||(D.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),D.clear())})))}function z(t){E=t}const U=[],C=[],F=[],I=[],R=Promise.resolve();let M=!1;function N(t){F.push(t)}let T=!1;const j=new Set;function V(){if(!T){T=!0;do{for(let t=0;t<U.length;t+=1){const e=U[t];z(e),L(e.$$)}for(z(null),U.length=0;C.length;)C.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];j.has(e)||(j.add(e),e())}F.length=0}while(U.length);for(;I.length;)I.pop()();M=!1,T=!1,j.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let P;function W(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const O=new Set;let K;function X(){K={r:0,c:[],p:K}}function q(){K.r||r(K.c),K=K.p}function J(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),K.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Z={duration:0};function G(n,o,i,l){let s=o(n,i),a=l?0:1,p=null,h=null,g=null;function _(){g&&k(n,g)}function $(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(o){const{delay:c=0,duration:i=300,easing:l=e,tick:b=t,css:v}=s||Z,x={start:u()+c,b:o};o||(x.group=K,K.r+=1),p||h?h=x:(v&&(_(),g=S(n,a,o,i,c,l,v)),o&&b(0,1),p=$(x,i),N((()=>W(n,o,"start"))),function(t){let e;0===f.size&&d(m),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(h&&t>h.start&&(p=$(h,i),h=null,W(n,p.b,"start"),v&&(_(),g=S(n,a,p.b,p.duration,0,l,s.css))),p)if(t>=p.end)b(a=p.b,1-a),W(n,p.b,"end"),h||(p.b?_():--p.group.r||r(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;a=p.a+p.d*l(e/p.duration),b(a,1-a)}return!(!p&&!h)})))}return{run(t){c(s)?(P||(P=Promise.resolve(),P.then((()=>{P=null}))),P).then((()=>{s=s(),b(t)})):b(t)},end(){_(),p=h=null}}}function Y(t,e,o,i){const{fragment:l,on_mount:s,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,o),i||N((()=>{const e=s.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(N)}function tt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(U.push(t),M||(M=!0,R.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,c,i,l,s,a,u=[-1]){const d=E;z(e);const f=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let m=!1;if(f.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&et(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&J(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),V()}z(d)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(t){const e=t-1;return e*e*e+1}function ct(t,{delay:e=0,duration:n=400,easing:o=rt}={}){const r=getComputedStyle(t),c=+r.opacity,i=parseFloat(r.height),l=parseFloat(r.paddingTop),s=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*c};height: ${t*i}px;padding-top: ${t*l}px;padding-bottom: ${t*s}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function it(t,e,n){const o=t.slice();return o[4]=e[n][0],o[5]=e[n][1],o}function lt(t,e,n){const o=t.slice();return o[8]=e[n],o}function st(t){let e,n,o,r=Object.entries(t[0]),c=[];for(let e=0;e<r.length;e+=1)c[e]=mt(it(t,r,e));return{c(){e=v("div");for(let t=0;t<c.length;t+=1)c[t].c();w(e,"class","accordion-body svelte-10tedm2")},m(t,n){_(t,e,n);for(let t=0;t<c.length;t+=1)c[t].m(e,null);o=!0},p(t,n){if(5&n){let o;for(r=Object.entries(t[0]),o=0;o<r.length;o+=1){const i=it(t,r,o);c[o]?c[o].p(i,n):(c[o]=mt(i),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},i(t){o||(N((()=>{n||(n=G(e,ct,{duration:500},!0)),n.run(1)})),o=!0)},o(t){n||(n=G(e,ct,{duration:500},!1)),n.run(0),o=!1},d(t){t&&$(e),b(c,t),t&&n&&n.end()}}}function at(t){let e,n,o,r,c,i,l=t[2][t[4]]+"";function s(t,e){return"object"==typeof t[5]?dt:ut}let a=s(t),u=a(t);return{c(){e=v("div"),n=v("div"),o=x(l),r=y(),c=v("div"),u.c(),i=y(),w(n,"class","accordion-body_label svelte-10tedm2"),w(c,"class","accordion-body_value svelte-10tedm2"),w(e,"class","accordion-body_group svelte-10tedm2")},m(t,l){_(t,e,l),p(e,n),p(n,o),p(e,r),p(e,c),u.m(c,null),p(e,i)},p(t,e){1&e&&l!==(l=t[2][t[4]]+"")&&B(o,l),a===(a=s(t))&&u?u.p(t,e):(u.d(1),u=a(t),u&&(u.c(),u.m(c,null)))},d(t){t&&$(e),u.d()}}}function ut(t){let e,n=t[5]+"";return{c(){e=x(n)},m(t,n){_(t,e,n)},p(t,o){1&o&&n!==(n=t[5]+"")&&B(e,n)},d(t){t&&$(e)}}}function dt(t){let e,n=t[5],o=[];for(let e=0;e<n.length;e+=1)o[e]=ft(lt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=A()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);_(t,e,n)},p(t,r){if(1&r){let c;for(n=t[5],c=0;c<n.length;c+=1){const i=lt(t,n,c);o[c]?o[c].p(i,r):(o[c]=ft(i),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){b(o,t),t&&$(e)}}}function ft(t){let e,n,o,r=t[8]+"";return{c(){e=v("p"),n=x(r),o=y()},m(t,r){_(t,e,r),p(e,n),p(e,o)},p(t,e){1&e&&r!==(r=t[8]+"")&&B(n,r)},d(t){t&&$(e)}}}function mt(t){let e,n=t[2][t[4]]&&at(t);return{c(){n&&n.c(),e=A()},m(t,o){n&&n.m(t,o),_(t,e,o)},p(t,o){t[2][t[4]]?n?n.p(t,o):(n=at(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&$(e)}}}function pt(t){let e,n,o,r,c,i,l,a,u,d,f,m,h,g,b,A,D,E,H,S,k=t[0].name+"",z=t[0].price+"",U=t[1]&&st(t);return{c(){e=v("div"),n=v("div"),o=v("div"),r=v("h1"),c=v("a"),i=x(k),l=x(" | "),a=x(z),d=y(),f=v("div"),m=v("img"),b=y(),A=v("div"),A.innerHTML='<button class="svelte-10tedm2">Показати всю інформацію</button>',D=y(),U&&U.c(),w(c,"href",u=t[0].url),w(c,"target","_blank"),w(o,"class","accordion-head_title"),s(m.src,h=t[0].image)||w(m,"src",h),w(m,"alt",g=t[0].name),w(m,"width","100%"),w(f,"class","accordion-head_img"),w(A,"class","accordion-head_more svelte-10tedm2"),w(n,"class","accordion-head svelte-10tedm2"),w(e,"class","accordion svelte-10tedm2")},m(s,u){var h,g,$,v;_(s,e,u),p(e,n),p(n,o),p(o,r),p(r,c),p(c,i),p(c,l),p(c,a),p(n,d),p(n,f),p(f,m),p(n,b),p(n,A),p(e,D),U&&U.m(e,null),E=!0,H||(h=A,g="click",$=t[3],h.addEventListener(g,$,v),S=()=>h.removeEventListener(g,$,v),H=!0)},p(t,[n]){(!E||1&n)&&k!==(k=t[0].name+"")&&B(i,k),(!E||1&n)&&z!==(z=t[0].price+"")&&B(a,z),(!E||1&n&&u!==(u=t[0].url))&&w(c,"href",u),(!E||1&n&&!s(m.src,h=t[0].image))&&w(m,"src",h),(!E||1&n&&g!==(g=t[0].name))&&w(m,"alt",g),t[1]?U?(U.p(t,n),2&n&&J(U,1)):(U=st(t),U.c(),J(U,1),U.m(e,null)):U&&(X(),Q(U,1,1,(()=>{U=null})),q())},i(t){E||(J(U),E=!0)},o(t){Q(U),E=!1},d(t){t&&$(e),U&&U.d(),H=!1,S()}}}function ht(t,e,n){let{data:o}=e,r=!1;const c={inch:"Діагональ екрана",resolution:"Роздільна здатність",size:"Розміри без підставки",features:"Функції",ports:"Роз'єми (порти)",complectation:"Комплект постачання"};return t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o,r,c,()=>n(1,r=!r)]}class gt extends ot{constructor(t){super(),nt(this,t,ht,pt,i,{data:0})}}function _t(t,e,n){const o=t.slice();return o[1]=e[n],o}function $t(e){let n,o;return n=new gt({props:{data:e[1]}}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){Y(n,t,e),o=!0},p:t,i(t){o||(J(n.$$.fragment,t),o=!0)},o(t){Q(n.$$.fragment,t),o=!1},d(t){tt(n,t)}}}function bt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=$t(_t(t,o,e));const c=t=>Q(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=A()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);_(t,e,o),n=!0},p(t,[n]){if(1&n){let i;for(o=t[0],i=0;i<o.length;i+=1){const c=_t(t,o,i);r[i]?(r[i].p(c,n),J(r[i],1)):(r[i]=$t(c),r[i].c(),J(r[i],1),r[i].m(e.parentNode,e))}for(X(),i=o.length;i<r.length;i+=1)c(i);q()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)J(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Q(r[t]);n=!1},d(t){b(r,t),t&&$(e)}}}function vt(t){return[[{name:"Samsung UE55AU7100UXUA",inch:'55"',resolution:"3840x2160",size:"1230.5 x 707.2 x 59.9 мм",features:["Bluetooth","HDR","WI-Fi","Smart TV","DVB-C","DVB-S2","DVB-T2"],ports:["3 x HDMI","1 x USB","1 x Ethernet","1 x CI слот","1 x Антенный вход","1 x Антенный вход (спутниковый)"],complectation:["Телевизор","Пульт ДУ с батарейками","Документация"],price:"14 999 UAH",image:"https://content.rozetka.com.ua/goods/images/big/194918836.jpg",url:"https://rozetka.com.ua/samsung_ue55au7100uxua/p310629788/"},{name:"HAIER 50 SMART TV BX",inch:'50"',resolution:"3840x2160",size:"1115 x 642 x 60 мм",features:["Smart TV","Ultra HD 4K","телевизор с Wi-Fi","управление голосом","Android ОС","DVB-T2","Bluetooth"],ports:["HDMI","Композитный вход","Цифровые аудио","USB","Выход на наушники","Ethernet"],complectation:["Телевизор","Пульт ДУ с батарейками","Документация"],price:"8 999 UAH",image:"https://i.eldorado.ua//goods_images/1038962/7459753-1635253009.jpg",url:"https://eldorado.ua/televizor-led-haier-50-smart-tv-bx/p71304325/?utm_source=google&utm_medium=cpc&utm_campaign=Promodo_ukr_dsa_all_CE_%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D1%8B&utm_term=&utm_content=cid|10502564392|televizory&gclid=CjwKCAiAv_KMBhAzEiwAs-rX1NMj4yZ9JpVbyhLuKyhPYH-nUqAycTDARrWxBdgHcSAr5LsHZVRE5hoCJFQQAvD_BwE"},{name:"LG 43UN71006LB",inch:'43"',resolution:"3840x2160",size:"975 x 574 x 80.3 мм",features:["Bluetooth","HDR","WI-Fi"],ports:["3 x HDMI 2.0","2 х USB 2.0","CI слот","Оптичний вхід","Компонентний вхід","Композитний вхід (AV)","Антенний вхід","Антенний вхід (супутниковий)","LAN"],complectation:["Телевізор","Пульт дистанційного керування","Кабель живлення","2 батарейки AA","Інструкція"],price:"12 499 UAH",image:"https://content2.rozetka.com.ua/goods/images/big/183197009.jpg",url:"https://rozetka.com.ua/ua/lg_43un71006lb/p220852963/"},{name:'Xiaomi Mi TV 4S 50" UHD 4K',inch:'50"',resolution:"3840x2160",size:"1117,8 х 250,9 х 709,7 мм",features:["HDR","WI-Fi"],ports:["3 x HDMI","2 x USB","Слот CI/PCMCIA","AV-вход","Ethernet","Разъем для наушников","Цифровой аудиовыход (оптический) S/PDIF"],complectation:["Телевизор","Пульт ДУ","Кабель питания","Документация"],price:"11 499 UAH",image:"https://i.citrus.ua/imgcache/size_800/uploads/shop/9/4/94e958be2797124d1934dec22551607e.jpg",url:"https://www.citrus.ua/televizory/tv4s-50-671630.html?"},{name:"HISENSE 50A7100F",inch:'50"',resolution:"3840x2160",size:"1116 х 226 х 709 мм",features:["WI-Fi"],ports:["HDMI 2.0","USB","LAN (Ethernet)","композитний (AV)","оптичний (цифровий)","антенний вхід (RF)","CI","аудіовхід L/R","для супутникової антени"],complectation:["пульт ДУ","елементи живлення для пульта ДУ","кабель живлення"],price:"11 999 UAH",image:"https://files.foxtrot.com.ua/PhotoNew/img_0_977_3694_0_1.webp",url:"https://www.foxtrot.com.ua/uk/shop/led_televizory_hisense_50a7100f.html"}]]}return new class extends ot{constructor(t){super(),nt(this,t,vt,bt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
