var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("8emQL"),n("c9UGP"),n("gjiCh"),n("jgBY9");var a=n("2nhTy");const d={queueBtn:document.querySelector(".header__btn-queue"),watchedBtn:document.querySelector(".header__btn-watched"),watchedBtnMobile:document.querySelectorAll(".header__btn-watched"),queueBtnMobile:document.querySelectorAll(".header__btn-queue")},c=d.queueBtnMobile[1],o=d.watchedBtnMobile[1];function u(){d.queueBtn.classList.add("header__btn-category--current"),d.watchedBtn.classList.remove("header__btn-category--current"),c.classList.add("header__btn-category--current"),o.classList.remove("header__btn-category--current"),(0,a.renderMovieCardsToQueue)()}function i(){d.queueBtn.classList.remove("header__btn-category--current"),d.watchedBtn.classList.add("header__btn-category--current"),c.classList.remove("header__btn-category--current"),o.classList.add("header__btn-category--current"),(0,a.renderMovieCardsToWatched)()}d.queueBtn.addEventListener("click",u),d.watchedBtn.addEventListener("click",i),o.addEventListener("click",i),c.addEventListener("click",u),(0,a.renderMovieCardsToQueue)(),n("2nhTy"),n("g5Htb"),n("aSWUZ"),n("hanWB"),n("dmm04"),n("c72bu"),n("corVz"),n("c9UGP"),n("gjiCh");var l=n("krGWQ");n("8emQL");var s=n("jgBY9");s=n("jgBY9");l.refs.librarySubmit.addEventListener("submit",(function(e){e.preventDefault,window.location.href="./index.html",(0,s.onFormSubmit)()})),console.log();
//# sourceMappingURL=my-library.a15a5dd8.js.map
