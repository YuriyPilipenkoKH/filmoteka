function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n("8emQL");var i=n("c9UGP"),o=(n("c9UGP"),n("krGWQ")),c=n("2shzp");c=n("2shzp");var l=n("c72bu"),s=n("fb9GJ"),d=n("8emQL");i=n("c9UGP");const u=new(0,d.MoviesService)({searchQuery:"",page:1});document.getElementById("pagination");new(e(s))("pagination",{totalItems:500,itemsPerPage:10,visiblePages:5,page:1}).on("beforeMove",(e=>{const t=e.page;t&&(u.page=t,u.fetchTrendingMovies().then(i.renderMoviesMarkup))})),n("jgBY9"),n("gjiCh"),n("dmm04"),n("g5Htb"),n("aSWUZ"),n("hanWB");const f=document.querySelector(".pagination"),v=document.querySelector('button[data-value="back"]'),g=document.querySelector('button[data-value="first"]'),m=document.querySelector('button[data-value="second"]'),p=document.querySelector('button[data-value="third"]'),y=document.querySelector('button[data-value="fourth"]'),b=document.querySelector('button[data-value="fifth"]');let h=1;function k(e){if(e<=2)return g.textContent=1,m.textContent=2,p.textContent=3,y.textContent=4,b.textContent=5,L(e),void w(e);g.textContent=Number(e)-2,m.textContent=Number(e)-1,p.textContent=Number(e),y.textContent=Number(e)+1,b.textContent=Number(e)+2,L(e),w(e)}function L(e){1==e&&v.setAttribute("disabled","disabled"),e>1&&v.removeAttribute("disabled")}function w(e){1==e&&(m.classList.remove("activePage"),p.classList.remove("activePage"),g.classList.add("activePage")),2==e&&(g.classList.remove("activePage"),p.classList.remove("activePage"),m.classList.add("activePage")),e>2&&(g.classList.remove("activePage"),m.classList.remove("activePage"),p.classList.add("activePage"))}L(h),w(h),f.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.value;if("back"===t)return h>1&&(h-=1),console.log(h),k(h);if("forvard"===t)return h=Number(h)+1,console.log(h),k(h);if("back"!==t&&"forvard"!==t)return h=e.target.textContent,console.log(h),k(h)}));c=n("2shzp");async function x(e){try{return await(0,c.default)(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=90c7ff0c6a89140d8ec65b5296dfcca2`)}catch(e){console.log(e)}}o=n("krGWQ");var P=n("iQIUW");function C(){document.querySelector(".trailer-video").src="",o.refs.modal.classList.toggle("visually-hidden"),o.refs.trailerBackdrop.classList.toggle("visually-hidden"),o.refs.backdropModalFilm.removeEventListener("click",S)}function S(e){e.currentTarget===e.target&&C()}let T;(o=n("krGWQ")).refs.trailerBackdrop.addEventListener("click",S),o.refs.trailerBtn&&o.refs.trailerBtn.addEventListener("click",(async function(e){const t=(await x(e)).data.results;if(T=function(){for(let e=0;e<t.length;e+=1)if("Official Trailer"===t[e].name||t[e].name.includes("Official Trailer")||t[e].name.includes("Trailer"))return t[e].key;return null}(),T){const e=`<iframe\n        class="trailer-video"\n        width="100%"\n        height="100%"\n        src="https://www.youtube.com/embed/${T}"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n        allowfullscreen\n      ></iframe>`;o.refs.trailerWindow.innerHTML=e;o.refs.trailerWindow.querySelector(".trailer-video").src+="?autoplay=1",o.refs.backdropModalFilm.classList.toggle("visually-hidden"),o.refs.trailerBackdrop.classList.toggle("visually-hidden"),o.refs.body.style.overflow="hidden"}else P.Notify.info("Sorry. 👀 There is no trailer for this movie yet.")})),async function(){const e=(await(0,c.default)("https://api.themoviedb.org/3/genre/movie/list?api_key=90c7ff0c6a89140d8ec65b5296dfcca2")).data.genres;localStorage.setItem("genres",JSON.stringify(e))}(),async function(e=1){try{return await(0,c.default)(`https://api.themoviedb.org/3/trending/movie/day?api_key=90c7ff0c6a89140d8ec65b5296dfcca2&page=${e}`)}catch(e){console.log(e)}}().then(i.renderMoviesMarkup),o.refs.galleryList.addEventListener("click",l.onGalleryItemClick);
//# sourceMappingURL=index.6ab79a23.js.map
