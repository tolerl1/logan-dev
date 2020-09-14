(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about",error:"error"}[t]||t)+"-legacy."+{about:"a30a3dfb",error:"a9d5ba1b"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"03c4":function(t,e,r){},"076e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("footer",[r("div",{staticClass:"content has-text-centered"},[r("p",[r("strong",[t._v("© 2020 Logan Toler")])])])])])}],o={name:"footer"},i=o,s=(r("13ce"),r("2877")),u=Object(s["a"])(i,n,a,!1,null,"5a3da78c",null);e["a"]=u.exports},"13ce":function(t,e,r){"use strict";var n=r("03c4"),a=r.n(n);a.a},"2b3a":function(t,e,r){t.exports=r.p+"img/brand.66844879.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{slot:"burger","fixed-top":!0,type:"is-light",transparent:!0},slot:"burger"},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[n("img",{attrs:{src:r("2b3a"),alt:"Logan Toler",width:"112",height:"28"}})])],1),n("template",{attrs:{"aria-label":"menu","aria-expanded":"false"},slot:"start"},[n("b-navbar-item",{staticClass:"is-active",attrs:{tag:"router-link",to:"/",exact:""}},[t._v(" Home ")]),n("b-navbar-item",{staticClass:"is-active",attrs:{tag:"router-link",to:"/about",exact:""}},[t._v(" About ")])],1)],2)],1),n("router-view")],1)},o=[],i=(r("5c0b"),r("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("banner"),r("body",[r("foot")],1)],1)},p=[],d=r("b9ad"),b=r("076e"),v={name:"Home",components:{banner:d["a"],foot:b["a"]}},m=v,h=Object(i["a"])(m,f,p,!1,null,null,null),g=h.exports;n["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"*",name:"Error",component:function(){return r.e("error").then(r.bind(null,"dda8"))}}],_=new l["a"]({mode:"history",base:"/",routes:y}),w=_,x=r("068f");n["a"].use(x["a"]),n["a"].config.productionTip=!1,new n["a"]({router:w,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){},b9ad:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("section",{staticClass:"hero is-medium is-primary is-bold"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v(" Logan Toler ")]),r("h2",{staticClass:"subtitle"},[t._v(" Cincinnati, OH | Charlotte, NC ")])])])])])}],o={name:"banner"},i=o,s=r("2877"),u=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=u.exports}});