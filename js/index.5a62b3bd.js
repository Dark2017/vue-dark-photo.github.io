(function(e){function t(t){for(var o,u,c=t[0],l=t[1],a=t[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={index:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:e.show1}},[e._v("组件形式打开")]),n("button",{on:{click:e.show2}},[e._v("调用方法打开")]),n("VDPhoto",{ref:"VDPhoto",attrs:{imgData:e.imgData,imgName:e.imgName,width:"500px"},on:{publish:e.publish,close:e.close}})],1)},i=[],u={data:function(){return{imgData:n("ceec"),imgName:"图片名"}},methods:{show1:function(){this.$refs.VDPhoto.show()},show2:function(){this.$VDPhoto.show({imgData:n("5b62"),imgName:"图片名",title:"",width:"500px"})},publish:function(e){console.log(e,"--val--")},close:function(){console.log("close")}}},c=u,l=n("2877"),a=Object(l["a"])(c,r,i,!1,null,null,null),s=a.exports,f=n("0bbd"),p=n.n(f);n("bbe5");o["default"].use(p.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(s)}}).$mount("#app")},"5b62":function(e,t,n){e.exports="https://dark2017.github.io/vue-dark-photo.github.io/img/logo.82b9c7a5.png"},ceec:function(e,t,n){e.exports="https://dark2017.github.io/vue-dark-photo.github.io/img/demo1.03e26b03.gif"}});
