!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("kzQwM"),r("26XG5"),r("kvC6y");var l=r("jcFG7"),i={queueBtn:document.querySelectorAll(".header__btn-queue")[0],watchedBtn:document.querySelectorAll(".header__btn-watched")[0],watchedBtnMobile:document.querySelectorAll(".header__btn-watched")[1],queueBtnMobile:document.querySelectorAll(".header__btn-queue")[1]};function s(){i.queueBtn.classList.add("header__btn-category--current"),i.watchedBtn.classList.remove("header__btn-category--current"),i.queueBtnMobile.classList.add("header__btn-category--current"),i.watchedBtnMobile.classList.remove("header__btn-category--current"),(0,l.renderMovieCardsToQueue)()}function c(){i.queueBtn.classList.remove("header__btn-category--current"),i.watchedBtn.classList.add("header__btn-category--current"),i.queueBtnMobile.classList.remove("header__btn-category--current"),i.watchedBtnMobile.classList.add("header__btn-category--current"),(0,l.renderMovieCardsToWatched)()}i.queueBtn.addEventListener("click",s),i.watchedBtn.addEventListener("click",c),i.watchedBtnMobile.addEventListener("click",c),i.queueBtnMobile.addEventListener("click",s),(0,l.renderMovieCardsToQueue)(),r("jcFG7"),r("dK7Kq"),r("kvep9"),r("3fYJa"),r("ibuZW"),r("euASI");var o=r("1VFfL"),d=r("4Nugj"),u=document.querySelector("#library_submit"),m=document.getElementById("pagination"),g=document.querySelector(".header__btn-queue"),p=document.querySelector(".header__btn-watched");function h(t,a){var n=(JSON.parse(localStorage.getItem(a))||[]).filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase().trim())}));return d.refs.galleryList.innerHTML='<li class="img-library"><span class="text-library">there are no similar films in this category</span></li>',""===t.trim()?(m.style.display="none",void(d.refs.galleryList.innerHTML='<li class="img-library"><span class="text-library">The search query should not be empty</span></li>')):0===n.length?(m.style.display="none",void(d.refs.galleryList.innerHTML='<li class="img-library"><span class="text-library">There are no similar movies in this category</span></li>')):(function(t){var a=t||[];if(0===a.length){var n='<li class="img-library"><span class="text-library">Please select a movie on the main page</span></li>';document.querySelector(".gallery-list").innerHTML=n}else{var r="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",l=20,i=a.length,s=(Math.ceil(i/l),document.querySelector(".gallery-list")),c=document.getElementById("pagination"),u=new(e(o))(c,{totalItems:i,itemsPerPage:l,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},usageStatistics:!1});u.on("afterMove",(function(e){s.innerHTML="";var t=(e.page-1)*l,n=t+l,i=a.slice(t,n),c="https://image.tmdb.org/t/p/w500",o=i.map((function(e){var t=e.poster_path,a=e.title,n=e.genres,l=e.id,i=e.release_date.split("").splice(0,4).join(""),s="",o=n.length,d=t?"".concat(c).concat(t):r;return 1===o?s="".concat(n[0].name):2===o?s="".concat(n[0].name,", ").concat(n[1].name):o>2&&(s="".concat(n[0].name,", ").concat(n[1].name,", other")),'<li class="film-card">\n      <a href="modal-film.html" class="film-card__link" >\n        <div class="film-card__img">\n          <img src="'.concat(d,'" alt="').concat(a,'" loading="lazy" data-id="').concat(l,'"/>\n        </div>\n        <div class="film-card__info">\n          <p class="film-card__title">').concat(a,'</p>\n          <p class="film-card__description">').concat(s," | ").concat(i,"</p>\n        </div>\n      </a>\n    </li>")})).join("");d.refs.galleryList.innerHTML=o})),u.movePageTo(1)}}(n),void(m.style.display="flex"))}0===(JSON.parse(localStorage.getItem("queue"))||[]).length&&(u.elements[0].disabled=!0,u.elements[1].disabled=!0),document.addEventListener("click",(function(){var e=document.querySelector("#library_submit"),t=JSON.parse(localStorage.getItem("queue"))||[],a=JSON.parse(localStorage.getItem("watched"))||[];g.classList.contains("header__btn-category--current")&&0!==t.length||p.classList.contains("header__btn-category--current")&&0!==a.length?(e.elements[0].disabled=!1,e.elements[1].disabled=!1):(e.elements[0].disabled=!0,e.elements[1].disabled=!0)})),u.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;g.classList.contains("header__btn-category--current")?h(t,"queue"):p.classList.contains("header__btn-category--current")&&h(t,"watched")}))}();
//# sourceMappingURL=my-library.1f52e346.js.map
