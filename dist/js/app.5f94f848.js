(function(e){function i(i){for(var a,n,o=i[0],l=i[1],c=i[2],v=0,I=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&I.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(i);while(I.length)I.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,i=0;i<r.length;i++){for(var t=r[i],a=!0,o=1;o<t.length;o++){var l=t[o];0!==s[l]&&(a=!1)}a&&(r.splice(i--,1),e=n(n.s=t[0]))}return e}var a={},s={app:0},r=[];function n(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)n.d(t,a,function(i){return e[i]}.bind(null,a));return t},n.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=i,o=o.slice();for(var c=0;c<o.length;c++)i(o[c]);var u=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"17b5":function(e,i){e.exports="data:image/png;base64,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"},"17f2":function(e,i,t){"use strict";t("9a00")},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("Header",{on:{"query-movie":e.setQueryMovies,"query-series":e.setQuerySeries}}),t("Main",{attrs:{movies:e.movies,series:e.series}})],1)},r=[],n=t("bc3a"),o=t.n(n),l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("nav",{staticClass:"navbar"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"text-uppercase h1",attrs:{id:"header-title"}},[e._v(" boolFlix ")]),t("div",{staticClass:"d-flex"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],staticClass:"h-100",attrs:{type:"text",placeholder:"cerca un film"},domProps:{value:e.searched},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.startSearch.apply(null,arguments)},input:function(i){i.target.composing||(e.searched=i.target.value)}}})]),t("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:e.startSearch}},[e._v("Cerca")])])])])},c=[],u={name:"Header",props:["query"],data:function(){return{searched:""}},methods:{startSearch:function(){this.$emit("query-movie",this.searched),this.$emit("query-series",this.searched)}}},v=u,I=(t("f5f0"),t("2877")),p=Object(I["a"])(v,l,c,!1,null,"877947bc",null),f=p.exports,g=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("main",[a("div",{staticClass:"container d-flex justify-content-center align-items-center"},[a("div",{staticClass:"row"},[!e.movies.length&!e.series.length?a("div",{staticClass:"h1 text-uppercase text-white"},[e._v("effettua una ricerca per cercare un film o una serie tv")]):a("div",[e._m(0),a("ul",{staticClass:"d-flex  flex-wrap"},e._l(e.movies,(function(i,s){return a("li",{key:"nome-"+s,staticClass:"text-white col-3",style:e.bgImage+i.poster_path},[i.poster_path?a("img",{staticClass:"poster img-fluid h-100",attrs:{src:e.bgImage+i.poster_path,alt:""}}):a("img",{staticClass:"poster img-fluid h-100",attrs:{src:e.defaultImage,alt:""}}),a("ul",{staticClass:"description"},[a("li",{},[a("span",{staticClass:"h5 text-uppercase bold text"},[e._v("Titolo: ")]),e._v(" "+e._s(i.title))]),a("li",[a("span",{staticClass:"h5 text-uppercase bold origin"},[e._v(" originale:")]),e._v(e._s(i.original_title))]),a("li",["en"===i.original_language||"it"===i.original_language?a("img",{staticClass:"mx-2 flag",attrs:{src:t("b967")("./"+i.original_language+".png"),alt:""}}):e._e()]),a("li",[a("span",{staticClass:"h5 text-uppercase bold vote"},[e._v("Voto:")]),e._v(e._s(i.vote_average))]),a("li",[a("div",{staticClass:"star-rating"},[a("div",{staticClass:"rating"},[e._l(parseInt(e.numRating(i.vote_average)),(function(e){return a("i",{key:"piena-"+e,staticClass:"fas fa-star"})})),e._l(5-parseInt(e.numRating(i.vote_average)),(function(e){return a("i",{key:"vuota-"+e,staticClass:"far fa-star"})}))],2),a("li",[a("span",{staticClass:"h5 text-uppercase bold len"},[e._v("overview:")]),e._v(" "),a("div",{staticClass:"overview"},[e._v(e._s(i.overview))])])])])])])})),0),e._m(1),a("ul",{staticClass:"d-flex flex-wrap"},e._l(e.series,(function(i,s){return a("li",{key:"serie-"+s,staticClass:"text-white col-3 ",style:e.bgImage+i.poster_path},[i.poster_path?a("img",{staticClass:"poster img-fluid h-100",attrs:{src:e.bgImage+i.poster_path,alt:""}}):a("img",{staticClass:"poster img-fluid h-100",attrs:{src:e.defaultImage,alt:""}}),a("ul",{staticClass:"description"},[a("li",{},[a("span",{staticClass:"h5 text-uppercase bold text"},[e._v("Titolo: ")]),e._v(" "+e._s(i.title))]),a("li",[a("span",{staticClass:"h5 text-uppercase bold origin"},[e._v(" originale:")]),e._v(e._s(i.original_title))]),a("li",[a("span",{staticClass:"h5 text-uppercase bold len"},[e._v("Lingua:")]),e._v(" "+e._s(i.original_language))]),a("li",["en"===i.original_language||"it"===i.original_language?a("img",{staticClass:"mx-2 flag",attrs:{src:t("b967")("./"+i.original_language+".png"),alt:""}}):e._e()]),a("li",[a("span",{staticClass:"h5 text-uppercase bold vote"},[e._v("Voto:")]),e._v(e._s(i.vote_average))]),a("div",{staticClass:"star-rating"},[a("div",{staticClass:"rating"},[e._l(parseInt(e.numRating(i.vote_average)),(function(e){return a("i",{key:"piena-"+e,staticClass:"fas fa-star"})})),e._l(5-parseInt(e.numRating(i.vote_average)),(function(e){return a("i",{key:"vuota-"+e,staticClass:"far fa-star"})}))],2)]),a("li",[i.overview?a("span",{staticClass:"h5 text-uppercase bold "},[e._v("overview:")]):a("span",{staticClass:"h5 text-uppercase bold overview"},[e._v("overview not present")]),e._v(" "),a("div",{staticClass:"overview"},[e._v(e._s(i.overview))])]),a("li")])])})),0)])])])])},h=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("li",[t("h1",{staticClass:"text-white text-uppercase"},[e._v("Film")])])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("li",[t("h1",{staticClass:"text-white text-uppercase"},[e._v("Serie tv")])])}],A={name:"Main",props:["movies","series"],data:function(){return{bgImage:"https://image.tmdb.org/t/p/w342",defaultImage:"https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440",n:10}},methods:{numRating:function(e){var i=Math.ceil(e/2);return i}}},d=A,m=(t("17f2"),Object(I["a"])(d,g,h,!1,null,null,null)),C=m.exports,w={name:"App",components:{Header:f,Main:C},data:function(){return{movies:[],series:[],api_key:"e4cc14ea008833d36afcac865db5b00b",query:""}},methods:{searchMovie:function(){var e=this,i={params:{api_key:this.api_key,query:this.query,language:"it-IT",baseUri:"https://api.themoviedb.org/3/search"}};o.a.get("https://api.themoviedb.org/3/search/movie",i).then((function(i){e.movies=i.data.results}))},setQueryMovies:function(e){e?(this.query=e,this.searchMovie()):this.movies=[]},searchSeries:function(){var e=this,i={params:{api_key:this.api_key,query:this.query,language:"it-IT"}};o.a.get("https://api.themoviedb.org/3/search/tv",i).then((function(i){e.series=i.data.results}))},setQuerySeries:function(e){e?(this.query=e,this.searchSeries()):this.series=[]}}},y=w,b=(t("5c0b"),Object(I["a"])(y,s,r,!1,null,null,null)),x=b.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"8b11":function(e,i,t){},"9a00":function(e,i,t){},"9c0c":function(e,i,t){},b967:function(e,i,t){var a={"./en.png":"17b5","./it.png":"e33f"};function s(e){var i=r(e);return t(i)}function r(e){if(!t.o(a,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="b967"},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},f5f0:function(e,i,t){"use strict";t("8b11")}});
//# sourceMappingURL=app.5f94f848.js.map