var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var d={id:e,exports:{}};return o[e]=d,t.call(d.exports,d,d.exports),d.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){r[e]=o},e.parcelRequired7c6=t),t.register("aSWUZ",(function(e,o){var r=t("krGWQ");function d(){window.removeEventListener("keydown",n),r.refs.body.style.overflow="",r.refs.backdropModalTeam.classList.add("is-hidden")}function n(e){"Escape"===e.code&&d()}r.refs.linkByStudents.addEventListener("click",(function(e){window.addEventListener("keydown",n),r.refs.body.style.overflow="hidden",r.refs.backdropModalTeam.classList.remove("is-hidden")})),r.refs.backdropModalTeam.addEventListener("click",(function(e){e.currentTarget===e.target&&d()}))})),t.register("krGWQ",(function(e,o){var r,t,d,n;r=e.exports,t="refs",d=function(){return a},Object.defineProperty(r,t,{get:d,set:n,enumerable:!0,configurable:!0});const a={galleryList:document.querySelector(".gallery-list"),moviesSearchForm:document.querySelector(".header__form"),linkByStudents:document.querySelector(".about-team"),backdropModalTeam:document.querySelector(".backdrop__modal-team"),movieModal:document.querySelector(".modal__container"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdropModalFilm:document.querySelector(".backdrop__modal-film"),body:document.querySelector("body")}})),t("aSWUZ");
//# sourceMappingURL=my-library.b5a48310.js.map