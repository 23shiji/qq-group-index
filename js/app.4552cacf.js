(function(t){function e(e){for(var r,a,i=e[0],s=e[1],c=e[2],d=0,l=[];d<i.length;d++)a=i[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(l.length)l.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/qq-group-index/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2856:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("2856"),o=n.n(r);o.a},"857e":function(t,e,n){t.exports=n.p+"index/3f21480201df0a2de6477d3f4d9c6c79.json"},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$store.state.tree?[n("router-view")]:t._e()],2)},u=[],a=(n("5c0b"),n("2877")),i={},s=Object(a["a"])(i,o,u,!1,null,null,null);s.options.__file="App.vue";var c=s.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("category-node",{attrs:{node:t.$store.state.tree,expanded:!0,frozen:!0},on:{"update:node":function(e){t.$set(t.$store.state,"tree",e)}}})],1)},l=[],f=n("c665"),g=n("dc0a"),v=n("d328"),h=n("11d9"),b=n("9ab4"),_=n("60a3"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("h1",{on:{click:function(e){t.switchExpandedStatus()}}},[t._v(t._s(t.node.name)),t.frozen?t._e():[t.expandedStatus?t._e():n("span",[t._v("+")]),t.expandedStatus?n("span",[t._v(" -")]):t._e()]],2),t.expandedStatus?n("div",{staticClass:"children-container"},[n("div",{staticClass:"group-container"},[t._l(t.groups,function(t){return[n("group-info",{attrs:{group:t}})]})],2),n("div",{staticClass:"category-container"},t._l(t.node.children,function(t){return n("div",{staticClass:"category-info"},[n("category-node",{attrs:{node:t},on:{"update:node":function(e){t=e}}})],1)}))]):t._e()])},j=[],O=n("aa9a"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-info"},[n("router-link",{attrs:{to:"/group/"+t.group.id}},[n("p",[t._v(t._s(t.group.name)+"("+t._s(t.group.number)+")")])])],1)},x=[],G=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments)),t.expandedStatus=!1,t}return Object(g["a"])(e,t),e}(_["c"]);b["a"]([Object(_["b"])()],G.prototype,"group",void 0),G=b["a"]([Object(_["a"])({components:{CategoryNode:G}})],G);var w=G,$=w,k=Object(a["a"])($,y,x,!1,null,null,null);k.options.__file="GroupInfo.vue";var C=k.exports,I=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments)),t.expandedStatus=!1,t}return Object(O["a"])(e,[{key:"created",value:function(){this.expandedStatus=this.expanded}},{key:"switchExpandedStatus",value:function(){this.frozen||(this.expandedStatus=!this.expandedStatus)}},{key:"groups",get:function(){var t=this;return this.node.groups.map(function(e){return t.$store.getters.getGroupIndex(e)})}}]),Object(g["a"])(e,t),e}(_["c"]);b["a"]([Object(_["b"])()],I.prototype,"node",void 0),b["a"]([Object(_["b"])({default:!1})],I.prototype,"expanded",void 0),b["a"]([Object(_["b"])({default:!1})],I.prototype,"frozen",void 0),I=b["a"]([Object(_["a"])({components:{CategoryNode:I,GroupInfo:C}})],I);var S=I,E=S,P=Object(a["a"])(E,m,j,!1,null,null,null);P.options.__file="CategoryNode.vue";var T=P.exports,M=function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),e}(_["c"]);M=b["a"]([Object(_["a"])({components:{CategoryNode:T}})],M);var N=M,z=N,q=Object(a["a"])(z,d,l,!1,null,null,null);q.options.__file="Home.vue";var H=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-view"},[n("h1",[t._v(t._s(t.tag.name))]),t._l(t.groups,function(t){return[n("group-info",{attrs:{group:t}})]})],2)},A=[],L=(n("7f7f"),function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(O["a"])(e,[{key:"mounted",value:function(){this.$store.dispatch("updateIndex")}},{key:"name",get:function(){return this.$route.params.name}},{key:"tag",get:function(){return this.$store.getters.getTagInfo(this.name)}},{key:"groups",get:function(){var t=this;return this.tag.groups.map(function(e){return t.$store.getters.getGroupIndex(e)})}}]),Object(g["a"])(e,t),e}(_["c"]));L=b["a"]([Object(_["a"])({components:{GroupInfo:C}})],L);var R=L,U=R,V=Object(a["a"])(U,J,A,!1,null,null,null);V.options.__file="TagView.vue";var B=V.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-view"},[t.group?[n("h1",[t._v(t._s(t.group.name)+"\n("),t.group.url?n("a",{attrs:{href:t.group.url,target:"_blank"}},[t._v(t._s(t.group.number))]):n("span",[t._v(t._s(t.group.number))]),t._v(")")]),n("h5",[t._l(t.group.tags,function(e){return[n("router-link",{attrs:{to:"/tag/"+e}},[t._v(t._s(e))]),t._v(", ")]})],2),t.group.description?n("div",{domProps:{innerHTML:t._s(t.group.description)}}):t._e()]:t._e()],2)},F=[],K=function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(O["a"])(e,[{key:"updateGroup",value:function(){console.log(23333),this.$store.dispatch("updateGroup",this.id)}},{key:"mounted",value:function(){this.updateGroup()}},{key:"beforeRouterUpdate",value:function(t,e,n){this.updateGroup(),n()}},{key:"id",get:function(){return parseInt(this.$route.params.id)}},{key:"group",get:function(){return this.$store.state.currentGroup}}]),Object(g["a"])(e,t),e}(_["c"]);K=b["a"]([Object(_["a"])({components:{CategoryNode:T}})],K);var Q=K,W=Q,X=Object(a["a"])(W,D,F,!1,null,null,null);X.options.__file="Group.vue";var Y=X.exports;r["default"].use(p["a"]);var Z=new p["a"]({routes:[{path:"/",name:"home",component:H},{path:"/tag/:name",name:"tag-view",component:B},{path:"/group/:id",name:"group",component:Y}]}),tt=(n("ac6a"),n("f400"),n("2f62")),et=n("bc3a"),nt=n.n(et),rt=n("857e"),ot=rt;r["default"].use(tt["a"]);var ut=new tt["a"].Store({state:{tree:null,tags:{},groupIndex:[],groups:new Map,currentGroup:null},getters:{getGroupIndex:function(t){return function(e){return t.groupIndex[e]}},getTagInfo:function(t){return function(e){return t.tags[e]}}},mutations:{setIndex:function(t,e){var n=e.tree,r=e.tags,o=e.index;console.log(n),t.tree=n,t.tags=r,t.groupIndex=o},resetCurrentGroup:function(t,e){t.currentGroup=null},setCurrentGroup:function(t,e){t.currentGroup=e}},actions:{updateIndex:function(t){var e=t.commit;nt.a.get(ot).then(function(t){return t.data}).then(function(t){return e("setIndex",t)})},updateGroup:function(t,e){var n=t.commit,r=t.getters;n("resetCurrentGroup");var o=r.getGroupIndex(e);nt.a.get(o.src).then(function(t){return t.data}).then(function(t){return n("setCurrentGroup",t)})}}});r["default"].config.productionTip=!1,new r["default"]({router:Z,store:ut,render:function(t){return t(c)},mounted:function(){this.$store.dispatch("updateIndex")}}).$mount("#app")}});
//# sourceMappingURL=app.4552cacf.js.map