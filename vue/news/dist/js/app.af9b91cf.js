(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],f=0,p=[];f<o.length;f++)s=o[f],i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"0694":function(t,e,n){"use strict";var a=n("fbf8"),i=n.n(a);i.a},1:function(t,e){},"25c2":function(t,e,n){},"2d3b":function(t,e,n){},"393b":function(t,e,n){"use strict";var a=n("2d3b"),i=n.n(a);i.a},"457d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("transition",{attrs:{name:t.transitionName}},[n("router-view",{staticClass:"content"})],1),n("tabnav")],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"app-header"}},[n("h1",[t._v("酷爱头条")])])}],c={name:"app-header"},u=c,l=(n("81ff"),n("2877")),f=Object(l["a"])(u,s,o,!1,null,"f7920aca",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"tabnav"}},[n("router-link",{attrs:{to:"/",tag:"div",exact:""}},[n("i",{staticClass:"iconfont icon-home"}),n("p",[t._v("首页")])]),n("router-link",{attrs:{to:"/user",tag:"div"}},[n("i",{staticClass:"iconfont icon-wo"}),n("p",[t._v("我")])])],1)},m=[],h={name:"tabnav"},v=h,b=(n("6817"),Object(l["a"])(v,d,m,!1,null,"3473f672",null)),_=b.exports,y={name:"app",data:function(){return{transitionName:"slide-right"}},watch:{$route:function(t,e){var n=this.$router.isBack;this.transitionName=n?"slide-right":"slide-left",this.$router.isBack=!1,console.log(this.$router)}},components:{"app-header":p,Tabnav:_},mounted:function(){window.addEventListener("backbutton",function(t){alert(0),t.preventDefault()})}},g=y,x=(n("034f"),Object(l["a"])(g,i,r,!1,null,null,null)),w=x.exports,j=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content",{attrs:{id:"home"}},[n("navigator",{on:{select:t.load}}),n("databox",{attrs:{dataList:t.dataList}})],1)},$=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"navigator"}},[n("ul",{staticClass:"list"},t._l(t.items,function(e,a){return n("li",{key:e.name,class:{active:e.isActive},on:{click:function(e){return t.changeClass(a)}}},[t._v(t._s(e.name))])}),0)])},A=[],E={name:"Navigator",data:function(){return{index:0,items:[{name:"头条",type:"top",isActive:!1},{name:"社会",type:"shehui",isActive:!1},{name:"国内",type:"guonei",isActive:!1},{name:"国际",type:"guoji",isActive:!1},{name:"娱乐",type:"yule",isActive:!1},{name:"体育",type:"tiyu",isActive:!1},{name:"军事",type:"junshi",isActive:!1},{name:"科技",type:"keji",isActive:!1},{name:"财经",type:"caijing",isActive:!1},{name:"时尚",type:"shishang",isActive:!1}]}},watch:{index:function(t,e){this.items[e].isActive=!1,this.items[t].isActive=!0,this.$emit("select",this.items[t].type)}},methods:{changeClass:function(t){this.index=t}},created:function(){this.items[this.index].isActive=!0}},C=E,L=(n("f42f"),Object(l["a"])(C,O,A,!1,null,"6a2b4220",null)),P=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"databox"}},[n("ul",{staticClass:"dataList"},t._l(t.dataList,function(e){return n("li",{key:e.uniquekey},[n("a",{staticClass:"link",attrs:{href:e.url}},[n("h4",{domProps:{textContent:t._s(e.title)}}),n("ul",{staticClass:"imgList"},[n("li",[n("img",{attrs:{src:e.thumbnail_pic_s,alt:""}})]),n("li",[n("img",{attrs:{src:e.thumbnail_pic_s02,alt:""}})]),n("li",[n("img",{attrs:{src:e.thumbnail_pic_s03,alt:""}})])]),n("p",[t._v(t._s(e.author_name)+" "+t._s(e.date))])])])}),0)])},S=[],B={name:"databox",props:["dataList"]},M=B,T=(n("8e90"),Object(l["a"])(M,N,S,!1,null,"784f3acb",null)),D=T.exports,J={name:"home",data:function(){return{dataList:[]}},components:{Navigator:P,Databox:D},methods:{load:function(t){var e=this,n={type:t,key:"fccd68b3e1dc0e75de5c4283139806e2"},a="http://v.juhe.cn/toutiao/index";this.$http.get(a,{params:n}).then(function(t){0==t.body.error_code&&t.body.result.data?e.dataList=t.body.result.data:alert(t.body.reason)})}},created:function(){this.load("top")}},q=J,z=Object(l["a"])(q,k,$,!1,null,"b3d5996a",null),F=z.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content",{attrs:{id:"user"}},[n("ul",[n("router-link",{attrs:{to:"/login",tag:"li"}},[n("span",[t._v("登录/注册")])])],1)])},H=[],I={name:"user"},K=I,Q=(n("73a3"),Object(l["a"])(K,G,H,!1,null,"4634411c",null)),R=Q.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("form",[n("input",{attrs:{type:"text",name:"username",placeholder:"用户名",autocomplete:"off"}}),n("input",{attrs:{type:"password",name:"password",placeholder:"密码",autocomplete:"off"}}),n("input",{attrs:{type:"submit",value:"登录"}})])])}],W={name:"login"},X=W,Y=(n("0694"),Object(l["a"])(X,U,V,!1,null,"11e0a262",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("form",[n("input",{attrs:{type:"text",name:"username",placeholder:"用户名"}}),n("input",{attrs:{type:"password",name:"password",placeholder:"密码"}}),n("input",{attrs:{type:"password",name:"password2",placeholder:"再次确认密码"}}),n("input",{attrs:{type:"submit",value:"注册"}})])])}],nt={name:"register"},at=nt,it=(n("393b"),Object(l["a"])(at,tt,et,!1,null,"40d46510",null)),rt=it.exports;a["a"].use(j["a"]),j["a"].prototype.goBack=function(){this.isBack=!0,alert("back"),window.history.go(-1)};var st=new j["a"]({routes:[{path:"",component:F},{path:"/user",component:R},{path:"/login",component:Z},{path:"/register",component:rt}]}),ot=n("28dd");n("be35");a["a"].use(ot["a"]),a["a"].config.productionTip=!1,new a["a"]({router:st,render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},6817:function(t,e,n){"use strict";var a=n("25c2"),i=n.n(a);i.a},"73a3":function(t,e,n){"use strict";var a=n("457d"),i=n.n(a);i.a},"81ff":function(t,e,n){"use strict";var a=n("b095"),i=n.n(a);i.a},"8e90":function(t,e,n){"use strict";var a=n("de8c"),i=n.n(a);i.a},b095:function(t,e,n){},be35:function(t,e,n){},d859:function(t,e,n){},de8c:function(t,e,n){},f42f:function(t,e,n){"use strict";var a=n("d859"),i=n.n(a);i.a},fbf8:function(t,e,n){}});
//# sourceMappingURL=app.af9b91cf.js.map