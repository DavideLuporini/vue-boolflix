(function(e){function t(t){for(var s,a,o=t[0],c=t[1],u=t[2],I=0,p=[];I<o.length;I++)a=o[I],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},r={app:0},n=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"17b5":function(e,t){e.exports="data:image/png;base64,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"},"17f2":function(e,t,i){"use strict";i("9a00")},2118:function(e,t,i){"use strict";i("9ed9")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.movies.length&&e.series.length?i("Header",{on:{"query-movie":e.setQueryMovies,"query-series":e.setQuerySeries}}):e._e(),i("Main",{attrs:{movies:e.movies,series:e.series},on:{"query-movie":e.setQueryMovies,"query-series":e.setQuerySeries}})],1)},n=[],a=i("bc3a"),o=i.n(a),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar"},[i("div",{staticClass:"container-fluid"},[i("a",{staticClass:"text-uppercase h1",attrs:{id:"header-title",role:"button"},on:{click:e.returnHome}},[e._v(" boolFlix ")]),i("div",{staticClass:"d-flex"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],staticClass:"h-100 rounded text-black input-search",attrs:{type:"text",placeholder:"cerca un film"},domProps:{value:e.searched},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.startSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searched=t.target.value)}}})]),i("button",{staticClass:"btn btn-outline-danger ms-2",attrs:{type:"submit"},on:{click:e.startSearch}},[e._v(" Cerca ")])])])])},u=[],l={name:"Header",props:["query"],data:function(){return{searched:""}},methods:{startSearch:function(){this.$emit("query-movie",this.searched),this.$emit("query-series",this.searched),this.searched=""},returnHome:function(){this.$emit("query-movie",this.searched),this.$emit("query-series",this.searched),this.searched=""}}},I=l,p=(i("c613"),i("2877")),v=Object(p["a"])(I,c,u,!1,null,"9fcedd2e",null),f=v.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("div",{staticClass:"container d-flex justify-content-center align-items-center"},[e.movies.length||e.series.length?i("div",[i("h1",{staticClass:"text-uppercase text-white text-center my-5 title"},[e._v("Film")]),i("div",{staticClass:"row g-3"},e._l(e.movies,(function(e){return i("Card",{key:e.id,staticClass:"col-3 p-2",attrs:{item:e}})})),1),i("h1",{staticClass:"text-uppercase text-white text-center my-5 title"},[e._v("Serie tv")]),i("div",{staticClass:"row g-3"},e._l(e.series,(function(e){return i("Card",{key:e.id,staticClass:"col-3 p-2",attrs:{item:e}})})),1)]):i("div",{staticClass:"\n        h-100\n        flex-column\n        d-flex\n        align-items-center\n        justify-content-center\n      "},[i("div",{staticClass:"text-uppercase logo-main"},[e._v("boolFlix")]),i("h1",{staticClass:"text-uppercase text-white title-none mb-5"},[e._v(" cerca un film o una serie tv! ")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],staticClass:"h-100 rounded text-black input-search",attrs:{type:"text",placeholder:"cerca un film"},domProps:{value:e.searched},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.startSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searched=t.target.value)}}})])])])])},h=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"d-flex flex-wrap p-0"},[e.item.poster_path?s("img",{staticClass:"poster img-fluid h-100",attrs:{src:e.bgImage+e.item.poster_path,alt:""}}):s("img",{staticClass:"poster img-fluid h-100",attrs:{src:i("9e73"),alt:""}}),s("ul",{staticClass:"description col img-fluid"},[s("li",{},[s("span",{staticClass:"text-title text-uppercase bold text"},[e._v("Titolo: ")]),s("span",{staticClass:"mx-2"},[e._v(e._s(e.item.title))])]),s("li",[s("span",{staticClass:"text-title text-uppercase bold origin"},[e._v(" originale:")]),s("span",{staticClass:"mx-2"},[e._v(e._s(e.item.original_title))])]),s("li",["en"===e.item.original_language||"it"===e.item.original_language?s("img",{staticClass:"mx-2 flag",attrs:{src:i("b967")("./"+e.item.original_language+".png"),alt:""}}):e._e()]),s("li",[s("span",{staticClass:"text-title text-uppercase bold vote"},[e._v("Voto:")]),s("span",{staticClass:"mx-2"},[e._v(e._s(e.item.vote_average))])]),s("li",[s("div",{staticClass:"rating"},e._l(5,(function(t){return s("i",{key:"piena-"+t,staticClass:"fa-star mb-3",class:e.numRating(e.item.vote_average)>t?" fas ":" far "})})),0)]),s("li",[s("span",{staticClass:"text-title text-uppercase bold len"},[e._v("overview:")]),s("div",{staticClass:"overview"},[e._v(e._s(e.item.overview))])])])])},g=[],A={name:"Cards",props:["item"],data:function(){return{bgImage:"https://image.tmdb.org/t/p/w342",defaultImage:"../assets/img/defaultImg.png"}},methods:{numRating:function(e){var t=Math.ceil(e/2);return t}}},y=A,C=(i("2118"),Object(p["a"])(y,m,g,!1,null,"7e058b75",null)),x=C.exports,b={components:{Card:x},name:"Main",props:["movies","series","query"],data:function(){return{searched:""}},methods:{startSearch:function(){this.$emit("query-movie",this.searched),this.$emit("query-series",this.searched),this.searched=""}}},w=b,E=(i("17f2"),Object(p["a"])(w,d,h,!1,null,null,null)),M=E.exports,O={name:"App",components:{Header:f,Main:M},data:function(){return{movies:[],series:[],api_key:"e4cc14ea008833d36afcac865db5b00b",query:""}},methods:{searchMovie:function(){var e=this,t={params:{api_key:this.api_key,query:this.query,language:"it-IT",baseUri:"https://api.themoviedb.org/3/search"}};o.a.get("https://api.themoviedb.org/3/search/movie",t).then((function(t){e.movies=t.data.results}))},setQueryMovies:function(e){e?(this.query=e,this.searchMovie()):this.movies=[]},searchSeries:function(){var e=this,t={params:{api_key:this.api_key,query:this.query,language:"it-IT"}};o.a.get("https://api.themoviedb.org/3/search/tv",t).then((function(t){e.series=t.data.results}))},setQuerySeries:function(e){e?(this.query=e,this.searchSeries()):this.series=[]}}},j=O,Q=(i("5c0b"),Object(p["a"])(j,r,n,!1,null,null,null)),B=Q.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(B)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"9a00":function(e,t,i){},"9c0c":function(e,t,i){},"9e73":function(e,t,i){e.exports=i.p+"img/defaultImg.2b6aeab4.png"},"9ed9":function(e,t,i){},b967:function(e,t,i){var s={"./defaultImg.png":"9e73","./en.png":"17b5","./it.png":"e33f"};function r(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="b967"},c613:function(e,t,i){"use strict";i("fd61")},e33f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},fd61:function(e,t,i){}});
//# sourceMappingURL=app.ed32a79d.js.map