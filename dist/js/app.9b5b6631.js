(function(i){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],v=0,I=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&I.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s]);u&&u(e);while(I.length)I.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var i,e=0;e<r.length;e++){for(var t=r[e],s=!0,o=1;o<t.length;o++){var l=t[o];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),i=n(n.s=t[0]))}return i}var s={},a={app:0},r=[];function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=s,n.d=function(i,e,t){n.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,e){if(1&e&&(i=n(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var s in i)n.d(t,s,function(e){return i[e]}.bind(null,s));return t},n.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"17f2":function(i,e,t){"use strict";t("9a00")},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{on:{"query-movie":i.setQueryMovies,"query-series":i.setQuerySeries}}),t("Main",{attrs:{movies:i.movies,series:i.series}})],1)},r=[],n=t("bc3a"),o=t.n(n),l=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("nav",{staticClass:"navbar"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"text-uppercase h1",attrs:{id:"header-title"}},[i._v(" boolFlix ")]),t("div",{staticClass:"d-flex"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:i.searched,expression:"searched"}],staticClass:"h-100",attrs:{type:"text",placeholder:"cerca un film"},domProps:{value:i.searched},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.startSearch.apply(null,arguments)},input:function(e){e.target.composing||(i.searched=e.target.value)}}})]),t("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:i.startSearch}},[i._v("Cerca")])])])])},c=[],u={name:"Header",props:["query"],data:function(){return{searched:""}},methods:{startSearch:function(){this.$emit("query-movie",this.searched),this.$emit("query-series",this.searched)}}},v=u,I=(t("f5f0"),t("2877")),p=Object(I["a"])(v,l,c,!1,null,"877947bc",null),f=p.exports,g=function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("main",[s("div",{staticClass:"container d-flex justify-content-center align-items-center"},[s("div",{staticClass:"row w-100"},[!i.movies.length&!i.series.length?s("div",{staticClass:"h1 text-uppercase text-white"},[i._v("effettua una ricerca per cercare un film o una serie tv"),s("i",{staticClass:"fas fa-camera-movie"})]):s("div",[i.movies.length?s("li",[s("h1",{staticClass:"text-white text-uppercase"},[i._v("Film")])]):s("li",[s("h1",{staticClass:"text-white text-uppercase"})]),s("ul",{staticClass:"d-flex  flex-wrap p-0"},i._l(i.movies,(function(e,a){return s("li",{key:"nome-"+a,staticClass:"text-white col-3"},[e.poster_path?s("img",{staticClass:"poster img-fluid h-100",attrs:{src:i.bgImage+e.poster_path,alt:""}}):s("img",{staticClass:"poster img-fluid h-100",attrs:{src:i.defaultImage,alt:""}}),s("ul",{staticClass:"description"},[s("li",{},[s("span",{staticClass:"h5 text-uppercase bold text"},[i._v("Titolo: ")]),i._v(" "),s("span",{staticClass:"mx-2"},[i._v(i._s(e.title))])]),s("li",[s("span",{staticClass:"h5 text-uppercase bold origin"},[i._v(" originale:")]),s("span",{staticClass:"mx-2"},[i._v(i._s(e.original_title))])]),s("li",["en"===e.original_language||"it"===e.original_language?s("img",{staticClass:"mx-2 flag",attrs:{src:t("b967")("./"+e.original_language+".png"),alt:""}}):i._e()]),s("li",[s("span",{staticClass:"h5 text-uppercase bold vote"},[i._v("Voto:")]),s("span",{staticClass:"mx-2"},[i._v(i._s(e.vote_average))])]),s("li",[s("div",{staticClass:"star-rating"},[s("div",{staticClass:"rating"},i._l(5,(function(t){return s("i",{key:"piena-"+t,staticClass:"fa-star mb-3",class:i.numRating(e.vote_average)>t?" fas ":" far "})})),0),s("li",[s("span",{staticClass:"h5 text-uppercase bold len"},[i._v("overview:")]),i._v(" "),s("div",{staticClass:"overview"},[i._v(i._s(e.overview))])])])])])])})),0),i.series.length?s("li",[s("h1",{staticClass:"text-white text-uppercase"},[i._v("Serie tv")])]):s("li",[s("h1",{staticClass:"text-white text-uppercase"})]),s("ul",{staticClass:"d-flex flex-wrap"},i._l(i.series,(function(e,a){return s("li",{key:"serie-"+a,staticClass:"text-white col-3 ",style:i.bgImage+e.poster_path},[e.poster_path?s("img",{staticClass:"poster img-fluid h-100",attrs:{src:i.bgImage+e.poster_path,alt:""}}):s("img",{staticClass:"poster img-fluid h-100",attrs:{src:i.defaultImage,alt:""}}),s("ul",{staticClass:"description"},[s("li",{},[s("span",{staticClass:"h5 text-uppercase bold text"},[i._v("Titolo: ")]),s("span",{staticClass:"mx-2"},[i._v(i._s(e.name))])]),s("li",[s("span",{staticClass:"h5 text-uppercase bold origin"},[i._v(" originale:")]),s("span",{staticClass:"mx-2"},[i._v(i._s(e.original_name))])]),s("li",[s("span",{staticClass:"h5 text-uppercase bold len"},[i._v("Lingua:")]),s("span",{staticClass:"mx-2"},[i._v(" "+i._s(e.original_language))])]),s("li",["en"===e.original_language||"it"===e.original_language?s("img",{staticClass:"mx-2 flag",attrs:{src:t("b967")("./"+e.original_language+".png"),alt:""}}):i._e()]),s("li",[s("span",{staticClass:"h5 text-uppercase bold vote"},[i._v("Voto:")]),s("span",{staticClass:"mx-2"},[i._v(i._s(e.vote_average))])]),s("div",{staticClass:"star-rating"},[s("div",{staticClass:"rating"},[i._l(parseInt(i.numRating(e.vote_average)),(function(i){return s("i",{key:"piena-"+i,staticClass:"fas fa-star"})})),i._l(5-parseInt(i.numRating(e.vote_average)),(function(i){return s("i",{key:"vuota-"+i,staticClass:"far fa-star"})}))],2)]),s("li",[e.overview?s("span",{staticClass:"h5 text-uppercase bold "},[i._v("overview:")]):s("span",{staticClass:"h5 text-uppercase bold overview"},[i._v("overview not present")]),i._v(" "),s("div",{staticClass:"overview"},[i._v(i._s(e.overview))])]),s("li")])])})),0)])])])])},h=[],A={name:"Main",props:["movies","series"],data:function(){return{bgImage:"https://image.tmdb.org/t/p/w342",defaultImage:"https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440",n:10}},methods:{numRating:function(i){var e=Math.ceil(i/2);return e}}},d=A,m=(t("17f2"),Object(I["a"])(d,g,h,!1,null,null,null)),C=m.exports,x={name:"App",components:{Header:f,Main:C},data:function(){return{movies:[],series:[],api_key:"e4cc14ea008833d36afcac865db5b00b",query:""}},methods:{searchMovie:function(){var i=this,e={params:{api_key:this.api_key,query:this.query,language:"it-IT",baseUri:"https://api.themoviedb.org/3/search"}};o.a.get("https://api.themoviedb.org/3/search/movie",e).then((function(e){i.movies=e.data.results}))},setQueryMovies:function(i){i?(this.query=i,this.searchMovie()):this.movies=[]},searchSeries:function(){var i=this,e={params:{api_key:this.api_key,query:this.query,language:"it-IT"}};o.a.get("https://api.themoviedb.org/3/search/tv",e).then((function(e){i.series=e.data.results}))},setQuerySeries:function(i){i?(this.query=i,this.searchSeries()):this.series=[]}}},w=x,b=(t("5c0b"),Object(I["a"])(w,a,r,!1,null,null,null)),y=b.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(i){return i(y)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},"8b11":function(i,e,t){},"9a00":function(i,e,t){},"9c0c":function(i,e,t){},b967:function(i,e,t){var s={"./en.png":"17b5","./it.png":"e33f"};function a(i){var e=r(i);return t(e)}function r(i){if(!t.o(s,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return s[i]}a.keys=function(){return Object.keys(s)},a.resolve=r,i.exports=a,a.id="b967"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},f5f0:function(i,e,t){"use strict";t("8b11")}});
//# sourceMappingURL=app.9b5b6631.js.map