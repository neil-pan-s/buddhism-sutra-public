(function(e){function t(t){for(var r,a,s=t[0],o=t[1],i=t[2],u=0,h=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(h.length)h.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={index:0},c={index:0},l=[];function s(e){return o.p+"js/"+({}[e]||e)+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-fd2e5cc6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",c=o.p+r,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===c))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){i=h[s],u=i.getAttribute("data-href");if(u===r||u===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete a[e],d.parentNode.removeChild(d),n(l)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=l);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(e);var h=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=self["webpackJsonp"]=self["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var d=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("a026"),a=n("8c4f");r["a"].use(a["a"]);var c=new a["a"]({routes:[{path:"/:sutra",component:function(){return n.e("chunk-fd2e5cc6").then(n.bind(null,"6d21"))}},{path:"/",component:function(){return n.e("chunk-fd2e5cc6").then(n.bind(null,"6d21"))}}]}),l=c,s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"nav"},[e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/")},attrs:{href:"#/"}},[e._v(" 礼佛 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/阿弥陀佛心咒"),show:e.isShowMenu},attrs:{href:"#/阿弥陀佛心咒"}},[e._v(" 阿弥陀佛心咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/大悲咒"),show:e.isShowMenu},attrs:{href:"#/大悲咒"}},[e._v(" 大悲咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/楞严咒"),show:e.isShowMenu},attrs:{href:"#/楞严咒"}},[e._v(" 楞严咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/六字大明咒"),show:e.isShowMenu},attrs:{href:"#/六字大明咒"}},[e._v(" 六字大明咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/绿度母心咒"),show:e.isShowMenu},attrs:{href:"#/绿度母心咒"}},[e._v(" 绿度母心咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/往生咒"),show:e.isShowMenu},attrs:{href:"#/往生咒"}},[e._v(" 往生咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/药师佛心咒"),show:e.isShowMenu},attrs:{href:"#/药师佛心咒"}},[e._v(" 药师佛心咒 ")]),e.isFullScreen?e._e():t("a",{class:{selected:e.isNavSelected("#/准提咒"),show:e.isShowMenu},attrs:{href:"#/准提咒"}},[e._v(" 准提咒 ")]),t("div",{staticClass:"more"},[e.isFullScreen?e._e():t("a",{attrs:{href:"https://www.xiaohongshu.com/user/profile/64318ec3000000002a0097ba",title:"购买念珠",target:"_blank"}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3300",width:"30",height:"30"}},[t("path",{attrs:{d:"M970.296891 531.869536l-0.793062-245.3745c0 0-3.594875-73.835635-68.066235-73.835635l-682.776502 0.911766-15.051811-36.226063c0 0-15.246239-107.796098-88.63162-107.796098 0 0-88.649016 0-88.649016 106.172111l74.343195-0.109494c0 0 91.01797 517.018294 91.01797 532.596084 0 19.543102 15.910365 70.701249 35.553751 70.701249l671.559019 0c19.652596 0 35.56296-33.478486 35.56296-53.021587 0-19.523659-15.910365-53.038984-35.56296-53.038984l-622.620423 0-17.679661-70.499657 642.199341-2.803859C900.700813 599.546915 970.296891 600.358397 970.296891 531.869536zM329.545528 496.056889c0 19.533892-15.920598 35.368532-35.57217 35.368532l-1.115404 0c-19.652596 0-35.580357-15.835663-35.580357-35.368532l0-35.341926c0-19.531845 15.927761-35.368532 35.580357-35.368532l1.115404 0c19.652596 0 35.57217 15.836687 35.57217 35.368532L329.545528 496.056889zM329.545528 354.62574c0 19.543102-15.920598 35.368532-35.57217 35.368532l-35.582403 0c-19.643386 0-35.580357-15.82543-35.580357-35.368532l0-35.352159c0-19.531845 15.936971-35.359322 35.580357-35.359322l35.582403 0c19.652596 0 35.57217 15.827477 35.57217 35.359322L329.545528 354.62574zM471.852628 496.056889c0 19.533892-15.920598 35.368532-35.57217 35.368532l-35.57217 0c-19.652596 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.582403-35.368532l35.57217 0c19.652596 0 35.57217 15.836687 35.57217 35.368532L471.852628 496.056889zM471.852628 354.62574c0 19.543102-15.920598 35.368532-35.57217 35.368532l-35.57217 0c-19.652596 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.582403-35.359322l35.57217 0c19.652596 0 35.57217 15.827477 35.57217 35.359322L471.852628 354.62574zM614.167914 496.056889c0 19.533892-15.927761 35.368532-35.580357 35.368532l-35.582403 0c-19.643386 0-35.57217-15.835663-35.57217-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.57217-35.368532l35.582403 0c19.652596 0 35.580357 15.836687 35.580357 35.368532L614.167914 496.056889zM614.167914 354.62574c0 19.543102-15.927761 35.368532-35.580357 35.368532l-35.582403 0c-19.643386 0-35.57217-15.82543-35.57217-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.57217-35.359322l35.582403 0c19.652596 0 35.580357 15.827477 35.580357 35.359322L614.167914 354.62574zM756.475014 496.056889c0 19.533892-15.927761 35.368532-35.580357 35.368532l-35.56296 0c-19.652596 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.929808-35.368532 35.582403-35.368532l35.56296 0c19.652596 0 35.580357 15.836687 35.580357 35.368532L756.475014 496.056889zM756.475014 354.62574c0 19.543102-15.927761 35.368532-35.580357 35.368532l-35.56296 0c-19.652596 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.929808-35.359322 35.582403-35.359322l35.56296 0c19.652596 0 35.580357 15.827477 35.580357 35.359322L756.475014 354.62574zM898.783137 496.056889c0 19.533892-15.927761 35.368532-35.56296 35.368532l-35.580357 0c-19.654642 0-35.582403-15.835663-35.582403-35.368532l0-35.341926c0-19.531845 15.927761-35.368532 35.582403-35.368532l35.580357 0c19.635199 0 35.56296 15.836687 35.56296 35.368532L898.783137 496.056889zM898.783137 354.62574c0 19.543102-15.927761 35.368532-35.56296 35.368532l-35.580357 0c-19.654642 0-35.582403-15.82543-35.582403-35.368532l0-35.352159c0-19.531845 15.927761-35.359322 35.582403-35.359322l35.580357 0c19.635199 0 35.56296 15.827477 35.56296 35.359322L898.783137 354.62574zM720.895681 814.288744c-39.895639 0-72.251557 31.04711-72.251557 70.702272 0 39.693024 32.355919 71.845305 72.251557 71.845305 39.913035 0 72.268954-32.152281 72.268954-71.845305C793.163611 845.335854 760.807692 814.288744 720.895681 814.288744zM327.33314 814.288744c-39.915082 0-70.065775 29.940916-70.065775 69.614497s30.150694 71.826885 70.065775 71.826885c39.904849 0 72.268954-32.152281 72.268954-71.826885S367.237989 814.288744 327.33314 814.288744z",fill:"#fff","p-id":"3301"}})])]),t("a",{attrs:{title:"全屏"},on:{click:e.toggleFullScreen}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2941",width:"30",height:"30"}},[t("path",{attrs:{d:"M256 874.666667a21.333333 21.333333 0 0 1-21.333333 21.333333H96a53.393333 53.393333 0 0 1-53.333333-53.333333v-138.666667a21.333333 21.333333 0 0 1 42.666666 0v138.666667a10.666667 10.666667 0 0 0 10.666667 10.666666h138.666667a21.333333 21.333333 0 0 1 21.333333 21.333334zM42.666667 320V181.333333a53.393333 53.393333 0 0 1 53.333333-53.333333h138.666667a21.333333 21.333333 0 0 1 0 42.666667H96a10.666667 10.666667 0 0 0-10.666667 10.666666v138.666667a21.333333 21.333333 0 0 1-42.666666 0z m938.666666-138.666667v138.666667a21.333333 21.333333 0 0 1-42.666666 0V181.333333a10.666667 10.666667 0 0 0-10.666667-10.666666h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a53.393333 53.393333 0 0 1 53.333333 53.333333z m0 522.666667v138.666667a53.393333 53.393333 0 0 1-53.333333 53.333333h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a10.666667 10.666667 0 0 0 10.666667-10.666666v-138.666667a21.333333 21.333333 0 0 1 42.666666 0z",fill:"#fff","p-id":"2942"}})])])]),t("svg",{staticClass:"menu",attrs:{viewBox:"0 0 16 16",version:"1.1",height:"24",width:"24"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[t("path",{attrs:{fill:"burlywood","fill-rule":"evenodd",d:"M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"}})])]),t("router-view"),e._m(0)],1)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav copyright"},[t("a",{attrs:{href:"https://neil-pan.com",target:"_blank"}},[e._v("© NEIL PAN 2023")])])}],i=n("93bf"),u=n.n(i),h={name:"App",data:function(){return{isFullScreen:!1,isShowMenu:!1}},mounted:function(){var e=this;window.addEventListener("hashchange",(function(){return e.isShowMenu=!1}))},methods:{isNavSelected:function(e){return location.hash==encodeURI(e)},toggleFullScreen:function(){u.a.isEnabled&&(u.a.toggle(document.querySelector("body")),this.isFullScreen=!this.isFullScreen)}}},d=h,f=(n("a0a9"),n("2877")),v=Object(f["a"])(d,s,o,!1,null,null,null),p=v.exports;r["a"].config.productionTip=!1;var w=new r["a"]({router:l,render:function(e){return e(p)}}).$mount("#app");console.info("Buddhism-Sutra [".concat(20240702122252,"] Works ..."));t["default"]=w},a0a9:function(e,t,n){"use strict";n("bc7a")},bc7a:function(e,t,n){}});