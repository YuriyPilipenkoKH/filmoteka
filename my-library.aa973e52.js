var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var d=n("2nhTy");const a={queueBtn:document.querySelector(".header__btn-queue"),watchedBtn:document.querySelector(".header__btn-watched"),watchedBtnMobile:document.querySelectorAll(".header__btn-watched"),queueBtnMobile:document.querySelectorAll(".header__btn-queue")},c=a.queueBtnMobile[1],o=a.watchedBtnMobile[1];function u(){a.queueBtn.classList.add("header__btn-category--current"),a.watchedBtn.classList.remove("header__btn-category--current"),c.classList.add("header__btn-category--current"),o.classList.remove("header__btn-category--current"),(0,d.renderMovieCardsToQueue)()}function i(){a.queueBtn.classList.remove("header__btn-category--current"),a.watchedBtn.classList.add("header__btn-category--current"),c.classList.remove("header__btn-category--current"),o.classList.add("header__btn-category--current"),(0,d.renderMovieCardsToWatched)()}a.queueBtn.addEventListener("click",u),a.watchedBtn.addEventListener("click",i),o.addEventListener("click",i),c.addEventListener("click",u),(0,d.renderMovieCardsToQueue)(),n("2nhTy"),n("g5Htb"),n("aSWUZ"),n("hanWB"),n("dmm04"),n("c72bu");
//# sourceMappingURL=my-library.aa973e52.js.map
