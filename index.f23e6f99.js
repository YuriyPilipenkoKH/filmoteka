var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var o=r("2shzp"),i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,g=d||f||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return g.Date.now()};function y(e,t,n){var a,r,o,i,c,s,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,o=r;return a=r=void 0,u=t,i=e.apply(o,n)}function v(e){return u=e,c=setTimeout(N,t),l?g(e):i}function y(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=o}function N(){var e=h();if(y(e))return _(e);c=setTimeout(N,function(e){var n=t-(e-s);return d?m(n,o-(e-u)):n}(e))}function _(e){return c=void 0,f&&a?g(e):(a=r=void 0,i)}function w(){var e=h(),n=y(e);if(a=arguments,r=this,s=e,n){if(void 0===c)return v(s);if(d)return c=setTimeout(N,t),g(s)}return void 0===c&&(c=setTimeout(N,t)),i}return t=$(t)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?p($(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==c&&clearTimeout(c),u=0,a=s=r=c=void 0},w.flush=function(){return void 0===c?i:_(h())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):c.test(e)?NaN:+e}var N=r("krGWQ");N=r("krGWQ");function _(e,t){try{const n=e.find((e=>e.id===t));if(n)return n.name}catch(e){console.log(e)}}function w(e){const t=e.data.results,n=JSON.parse(localStorage.getItem("genres")),a=t.map((({poster_path:e,title:t,genre_ids:a,id:r,release_date:o})=>{const i=a.length,c=o.split("").splice(0,4).join("");let s="";const u=e?`https://image.tmdb.org/t/p/w500${e}`:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";return 1===i?s=_(n,a[0]):2===i?s=`${_(n,a[0])}, ${_(n,a[1])}`:i>2&&(s=`${_(n,a[0])}, ${_(n,a[1])}, Other`),`<li class="film-card">\n      <a href="modal-film.html" class="film-card__link" >\n        <div class="film-card__img">\n          <img src="${u}" alt="${t}" loading="lazy" data-id="${r}"/>\n        </div>\n        <div class="film-card__info">\n          <p class="film-card__title">${t}</p>\n          <p class="film-card__description">${s} | ${c}</p>\n        </div>\n      </a>\n    </li>`})).join("");N.refs.galleryList.innerHTML=a}class x{constructor(e){this.page=1}async fetchTrendingMovies(){const e="https://api.themoviedb.org/",t="90c7ff0c6a89140d8ec65b5296dfcca2";try{return await o.default.get(`${e}3/trending/movie/day?api_key=${t}&page=${this.page}`)}catch(e){console.log(e)}}incrementPage(){this.page+=1}resetPage(){this.page=1}}new x({page:1});N=r("krGWQ"),o=r("2shzp");o=r("2shzp");var L=r("c72bu");r("aSWUZ");var P=r("fb9GJ");const k=new x({searchQuery:"",page:1});document.getElementById("pagination");new(t(P))("pagination",{totalItems:500,itemsPerPage:10,visiblePages:5,page:1}).on("beforeMove",(e=>{const t=e.page;t&&(k.page=t,k.fetchTrendingMovies().then(w))}));var q=r("iQIUW");P=r("fb9GJ");const S=document.querySelector(".backdrop-loader");function O(){S.classList.add("backdrop-loader--is-hidden")}(N=r("krGWQ")).refs.moviesSearchForm.addEventListener("submit",(async function(e){e.preventDefault(),T.resetPage();const{query:n}=e.target.elements,a=n.value.trim();if(T.query=a,""===a)return void q.Notify.info("Enter something");S.classList.remove("backdrop-loader--is-hidden");try{T.fetchMoviesByName().then(w),O();new(t(P))("pagination",{totalItems:500,itemsPerPage:10,visiblePages:5,page:1}).on("beforeMove",(e=>{const t=e.page;T.page=t,T.fetchMoviesByName().then(w),O()}))}catch(e){console.log(e)}}));const T=new class{constructor(e){this.searchQuery="",this.page=1}async fetchMoviesByName(){const e="https://api.themoviedb.org/",t="90c7ff0c6a89140d8ec65b5296dfcca2";try{const n=await(0,o.default)(`${e}3/search/movie?api_key=${t}&include_adult=false&query=${this.searchQuery}&page=${this.page}`);return 0===n.data.results.length?(Notify.info(`Nothing was found for your '${query}' request`),void stopLoader()):n}catch(e){console.log(e)}}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}({page:1,searchQuery:""});r("dmm04"),r("g5Htb"),r("aSWUZ"),r("hanWB");const j=document.querySelector(".pagination"),C=document.querySelector('button[data-value="back"]'),M=document.querySelector('button[data-value="first"]'),Q=document.querySelector('button[data-value="second"]'),W=document.querySelector('button[data-value="third"]'),E=document.querySelector('button[data-value="fourth"]'),I=document.querySelector('button[data-value="fifth"]');let G=1;function B(e){if(e<=2)return M.textContent=1,Q.textContent=2,W.textContent=3,E.textContent=4,I.textContent=5,U(e),void z(e);M.textContent=Number(e)-2,Q.textContent=Number(e)-1,W.textContent=Number(e),E.textContent=Number(e)+1,I.textContent=Number(e)+2,U(e),z(e)}function U(e){1==e&&C.setAttribute("disabled","disabled"),e>1&&C.removeAttribute("disabled")}function z(e){1==e&&(Q.classList.remove("activePage"),W.classList.remove("activePage"),M.classList.add("activePage")),2==e&&(M.classList.remove("activePage"),W.classList.remove("activePage"),Q.classList.add("activePage")),e>2&&(M.classList.remove("activePage"),Q.classList.remove("activePage"),W.classList.add("activePage"))}U(G),z(G),j.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.value;if("back"===t)return G>1&&(G-=1),console.log(G),B(G);if("forvard"===t)return G=Number(G)+1,console.log(G),B(G);if("back"!==t&&"forvard"!==t)return G=e.target.textContent,console.log(G),B(G)})),r("4MLyg"),r("37v9V"),async function(){const e=(await(0,o.default)("https://api.themoviedb.org/3/genre/movie/list?api_key=90c7ff0c6a89140d8ec65b5296dfcca2")).data.genres;localStorage.setItem("genres",JSON.stringify(e))}(),async function(e=1){try{return await(0,o.default)(`https://api.themoviedb.org/3/trending/movie/day?api_key=90c7ff0c6a89140d8ec65b5296dfcca2&page=${e}`)}catch(e){console.log(e)}}().then(w),N.refs.galleryList.addEventListener("click",L.onGalleryItemClick);
//# sourceMappingURL=index.f23e6f99.js.map
