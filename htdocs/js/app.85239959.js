(function(e){function t(t){for(var o,a,i=t[0],u=t[1],l=t[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"da8e0e68"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f98":function(e,t,n){"use strict";n("2cfd")},"2cfd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["f"])("Menu");function a(e,t){var n=Object(o["w"])("router-link"),a=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["C"])((function(){return[c]})),_:1})]),Object(o["g"])(a)],64)}n("1f98");var i=n("6b0d"),u=n.n(i);const l={},s=u()(l,[["render",a]]);var d=s,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=(n("b0c0"),n("a4d3"),n("e01a"),function(e){return Object(o["s"])("data-v-cc7ae9e2"),e=e(),Object(o["q"])(),e}),f={class:"w-full h-screen sheet"},m={class:"container md m-auto pt-10 pb-50"},j={class:"bg-white rounded px-8 pt-6 pb-8 mb-4 wrapper"},O={class:"mb-4 is-print"},v=b((function(){return Object(o["e"])("label",{class:"block text-gray-700 text-sm font-bold mb-2 text-left",for:"name"}," Menu Name ",-1)})),h=["onUpdate:modelValue"],y={class:"mb-4 is-print"},g=b((function(){return Object(o["e"])("label",{class:"block text-gray-700 text-sm font-bold mb-2 text-left",for:"price"}," Menu Price ",-1)})),w=["onUpdate:modelValue"],x={class:"mb-4 is-print"},_=b((function(){return Object(o["e"])("label",{class:"block text-gray-700 text-sm font-bold mb-2 text-left",for:"description"}," Menu Description ",-1)})),k=["onUpdate:modelValue"],P={class:"mb-4"},M=b((function(){return Object(o["e"])("p",{class:"block text-gray-700 text-sm font-bold mb-2 text-left is-print",for:"price"}," Preview ",-1)})),D={class:"item"},C={class:""},A={class:""},U={class:"item__name"},V=Object(o["f"])(),S=b((function(){return Object(o["e"])("span",{class:"item__dollar"},"$",-1)})),E={class:"item__price"},T={class:"item__description"},q={class:"flex items-center justify-between my-10 is-print"},F=["onClick"],H=b((function(){return Object(o["e"])("input",{id:"new-name",type:"text"},null,-1)})),J={class:"flex items-center justify-between mt-10 is-print"};function L(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",f,[Object(o["e"])("div",m,[Object(o["e"])("div",j,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.elements,(function(e,n){return Object(o["p"])(),Object(o["d"])("div",{class:"menu",key:n},[Object(o["e"])("div",O,[v,Object(o["D"])(Object(o["e"])("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Menu Name","onUpdate:modelValue":function(t){return e.name=t}},null,8,h),[[o["A"],e.name]])]),Object(o["e"])("div",y,[g,Object(o["D"])(Object(o["e"])("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"number",placeholder:"0.00","onUpdate:modelValue":function(t){return e.price=t}},null,8,w),[[o["A"],e.price]])]),Object(o["e"])("div",x,[_,Object(o["D"])(Object(o["e"])("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",type:"text",placeholder:"Menu Description","onUpdate:modelValue":function(t){return e.description=t}},null,8,k),[[o["A"],e.description]])]),Object(o["e"])("div",P,[M,Object(o["e"])("div",D,[Object(o["e"])("div",C,[Object(o["e"])("p",A,[Object(o["e"])("span",U,Object(o["y"])(e.name),1),V,S,Object(o["e"])("span",E,Object(o["y"])(e.price),1)]),Object(o["e"])("p",T,Object(o["y"])(e.description),1)])])]),Object(o["e"])("div",q,[Object(o["e"])("div",{class:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mr-1 w-6/12",onClick:t[0]||(t[0]=function(){return a.append&&a.append.apply(a,arguments)})},"Add +"),Object(o["e"])("div",{class:"bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ml-1 w-6/12",onClick:function(e){return a.remove(n)}},"Remove",8,F)])])})),128)),H,Object(o["e"])("div",J,[Object(o["e"])("div",{class:"bg-gray-900 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-auto w-full",onClick:t[1]||(t[1]=function(){return a.getPrint&&a.getPrint.apply(a,arguments)})},"Export as PDF")])])])])}n("a434");var N=n("1157"),I=n.n(N),R={data:function(){return{elements:[{name:"",description:"",price:""}]}},methods:{append:function(){this.elements.push({name:I()("#new-name").val()}),I()("#new-name").val("")},remove:function(e){this.elements.splice(e,1)},getPrint:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),r=e.getHours(),c=e.getMinutes();document.title="menu_"+n+o+r+c+t,window.print()}}};n("7178");const Y=u()(R,[["render",L],["__scopeId","data-v-cc7ae9e2"]]);var $=Y,z=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],B=Object(p["a"])({history:Object(p["b"])("/"),routes:z}),G=B;n("a766");Object(o["c"])(d).use(G).mount("#app")},7178:function(e,t,n){"use strict";n("eee2")},a766:function(e,t,n){},eee2:function(e,t,n){}});
//# sourceMappingURL=app.85239959.js.map