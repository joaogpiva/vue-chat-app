(function(){"use strict";var e={4889:function(e,t,n){n.d(t,{F:function(){return s},I:function(){return c}});var r=n(7795),o=n(3854),a=n(7130);const i={apiKey:"AIzaSyBudRm9evsbuME9LJ_qywN36LVLB86c_sg",authDomain:"vue-chat-app-828f7.firebaseapp.com",projectId:"vue-chat-app-828f7",storageBucket:"vue-chat-app-828f7.appspot.com",messagingSenderId:"382612903067",appId:"1:382612903067:web:8928429b274a074b73223e",databaseURL:"https://vue-chat-app-828f7-default-rtdb.firebaseio.com/"},u=(0,r.ZF)(i),c=(0,o.v0)(u),s=(0,a.N8)(u)},9783:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var i=n(89);const u={},c=(0,i.Z)(u,[["render",a]]);var s=c,f=n(3824),l=n(7627);(0,r.ri)(s).use(l.Z).use(f.Z).mount("#app")},3824:function(e,t,n){var r=n(2483);const o=[{path:"/",name:"redirector",component:()=>n.e(425).then(n.bind(n,5425))},{path:"/login",name:"login",component:()=>n.e(247).then(n.bind(n,2247))},{path:"/register",name:"register",component:()=>n.e(226).then(n.bind(n,5226))},{path:"/home",name:"home",component:()=>n.e(464).then(n.bind(n,464))}],a=(0,r.p7)({history:(0,r.PO)("/vue-chat-app/"),routes:o});t["Z"]=a},7627:function(e,t,n){n(7658);var r=n(65),o=n(3824),a=n(4889),i=n(3854),u=n(2415);t["Z"]=(0,r.MT)({plugins:[(0,u.Z)({storage:window.sessionStorage})],state:{user:null},getters:{},mutations:{SET_USER(e,t){e.user=t},CLEAR_USER(e){e.user=null,sessionStorage.clear()}},actions:{async login({commit:e},t){try{await(0,i.e5)(a.I,t.email,t.password)}catch(n){console.log(n)}e("SET_USER",a.I.currentUser),o.Z.replace("/")},async register({commit:e},t){try{await(0,i.Xb)(a.I,t.email,t.password),await(0,i.ck)(a.I.currentUser,{displayName:t.name})}catch(n){console.log(n)}e("SET_USER",a.I.currentUser),o.Z.replace("/")},async logout({commit:e}){await(0,i.w7)(a.I),e("CLEAR_USER"),o.Z.replace("/")},async fetchUser({commit:e}){a.I.onAuthStateChanged((t=>{t?(e("SET_USER",t),o.Z.push("/home")):(e("CLEAR_USER"),o.Z.push("/login"))}))}},modules:{}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{226:"d05915bd",247:"a76e0991",425:"68f0981a",464:"bacfef76"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{226:"fcb4b690",247:"7747e438"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-chat-app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-chat-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={226:1,247:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkvue_chat_app"]=self["webpackChunkvue_chat_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9783)}));r=n.O(r)})();
//# sourceMappingURL=app.57a0a60a.js.map