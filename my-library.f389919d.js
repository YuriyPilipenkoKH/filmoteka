function t(t){return t&&t.__esModule?t.default:t}const e={queueBtn:document.querySelector(".header__btn-queue"),watchedBtn:document.querySelector(".header__btn-watched")};e.queueBtn.addEventListener("click",o),e.watchedBtn.addEventListener("click",(function(){0!==n.length&&(document.querySelector(".libriary__gallery-list").innerHTML=r)}));document.querySelector(".libriary__gallery-list");let a=JSON.parse(localStorage.getItem("queue"))||[],n=JSON.parse(localStorage.getItem("watched"))||[],i=(console.log(a),a.map((t=>`<li class="film-card">\n      <a href="modal-film.html" class="film-card__link" >\n        <div class="film-card__img">\n          <img src=https://image.tmdb.org/t/p/w500${t.poster_path} alt="${t.title}" loading="lazy" data-id="${t.id}"/>\n        </div>\n        <div class="film-card__info">\n          <p class="film-card__title">${t.title}</p>\n          <p class="film-card__description">Geners | Date</p>\n        </div>\n      </a>\n    </li>`)).join("")),r=n.map((t=>`<li class="film-card">\n      <a href="modal-film.html" class="film-card__link" >\n        <div class="film-card__img">\n          <img src=https://image.tmdb.org/t/p/w500${t.poster_path} alt="${t.title}" loading="lazy" data-id="${t.id}"/>\n        </div>\n        <div class="film-card__info">\n          <p class="film-card__title">${t.title}</p>\n          <p class="film-card__description">Geners | Date</p>\n        </div>\n      </a>\n    </li>`)).join("");function o(){0!==a.length&&(document.querySelector(".libriary__gallery-list").innerHTML=i)}console.log(r),o();var l,u={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,l=function(){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="dist",a(a.s=10)}([function(t,e,a){t.exports=function(t,e){var a,n,i,r,o=Object.prototype.hasOwnProperty;for(i=1,r=arguments.length;i<r;i+=1)for(n in a=arguments[i])o.call(a,n)&&(t[n]=a[n]);return t}},function(t,e,a){t.exports=function(t){return void 0===t}},function(t,e,a){t.exports=function(t){return t instanceof Array}},function(t,e,a){var n=a(2),i=a(17),r=a(6);t.exports=function(t,e,a){n(t)?i(t,e,a):r(t,e,a)}},function(t,e,a){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,a){t.exports=function(t){return t instanceof Function}},function(t,e,a){t.exports=function(t,e,a){var n;for(n in a=a||null,t)if(t.hasOwnProperty(n)&&!1===e.call(a,t[n],n,t))break}},function(t,e,a){var n=a(18),i=a(0);t.exports=function(t,e){var a;return e||(e=t,t=null),a=e.init||function(){},t&&n(a,t),e.hasOwnProperty("static")&&(i(a,e.static),delete e.static),i(a.prototype,e),a}},function(t,e,a){var n=a(2);t.exports=function(t,e,a){var i,r;if(a=a||0,!n(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,a);for(r=e.length,i=a;a>=0&&i<r;i+=1)if(e[i]===t)return i;return-1}},function(t,e,a){var n=a(29),i=a(30),r=a(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var a=document.createElement("div"),i=r(t)?t(e):n(t,e);return a.innerHTML=i,a.firstChild},bind:function(t,e){var a,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(a=n.call(arguments,2),function(){return t.apply(e,a.length?a.concat(n.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=o},function(t,e,a){a(11),t.exports=a(12)},function(t,e,a){},function(t,e,a){var n=a(13),i=a(7),r=a(0),o=a(1),l=a(20),u=a(9),p={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},s=i({init:function(t,e){this._options=r({},p,e),this._currentPage=0,this._view=new l(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,a=this.getCurrentPage();return e?a-1:a+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),a=this._options.visiblePages,n="prev"===t;return this._options.centerAlign?n?e-1:e+a:n?(e-1)*a:e*a+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},a=this._getLastPage(),n=this._getPageIndex(t),i=this._getPageIndex(a),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=n>1,e.nextMore=n<i,e.page=t,e.currentPageIndex=t,e.lastPage=a,e.lastPageListIndex=a,e},_getEdge:function(t){var e,a,n,i=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(n=Math.floor(r/2),(a=(e=Math.max(t-n,1))+r-1)>i&&(e=Math.max(i-r+1,1),a=i)):(e=(o-1)*r+1,a=o*r,a=Math.min(a,i)),{left:e,right:a}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(s),t.exports=s},function(t,e,a){var n=a(0),i=a(14),r=a(4),o=a(16),l=a(2),u=a(5),p=a(3),s=/\s+/g;function g(){this.events=null,this.contexts=null}g.mixin=function(t){n(t.prototype,g.prototype)},g.prototype._getHandlerItem=function(t,e){var a={handler:t};return e&&(a.context=e),a},g.prototype._safeEvent=function(t){var e,a=this.events;return a||(a=this.events={}),t&&((e=a[t])||(e=[],a[t]=e),a=e),a},g.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},g.prototype._indexOfContext=function(t){for(var e=this._safeContext(),a=0;e[a];){if(t===e[a][0])return a;a+=1}return-1},g.prototype._memorizeContext=function(t){var e,a;i(t)&&(e=this._safeContext(),(a=this._indexOfContext(t))>-1?e[a][1]+=1:e.push([t,1]))},g.prototype._forgetContext=function(t){var e,a;i(t)&&(e=this._safeContext(),(a=this._indexOfContext(t))>-1&&(e[a][1]-=1,e[a][1]<=0&&e.splice(a,1)))},g.prototype._bindEvent=function(t,e,a){var n=this._safeEvent(t);this._memorizeContext(a),n.push(this._getHandlerItem(e,a))},g.prototype.on=function(t,e,a){var n=this;r(t)?(t=t.split(s),p(t,(function(t){n._bindEvent(t,e,a)}))):o(t)&&(a=e,p(t,(function(t,e){n.on(e,t,a)})))},g.prototype.once=function(t,e,a){var n=this;if(o(t))return a=e,void p(t,(function(t,e){n.once(e,t,a)}));this.on(t,(function i(){e.apply(a,arguments),n.off(t,i,a)}),a)},g.prototype._spliceMatches=function(t,e){var a,n=0;if(l(t))for(a=t.length;n<a;n+=1)!0===e(t[n])&&(t.splice(n,1),a-=1,n-=1)},g.prototype._matchHandler=function(t){var e=this;return function(a){var n=t===a.handler;return n&&e._forgetContext(a.context),n}},g.prototype._matchContext=function(t){var e=this;return function(a){var n=t===a.context;return n&&e._forgetContext(a.context),n}},g.prototype._matchHandlerAndContext=function(t,e){var a=this;return function(n){var i=t===n.handler,r=e===n.context,o=i&&r;return o&&a._forgetContext(n.context),o}},g.prototype._offByEventName=function(t,e){var a=this,n=u(e),i=a._matchHandler(e);t=t.split(s),p(t,(function(t){var e=a._safeEvent(t);n?a._spliceMatches(e,i):(p(e,(function(t){a._forgetContext(t.context)})),a.events[t]=[])}))},g.prototype._offByHandler=function(t){var e=this,a=this._matchHandler(t);p(this._safeEvent(),(function(t){e._spliceMatches(t,a)}))},g.prototype._offByObject=function(t,e){var a,n=this;this._indexOfContext(t)<0?p(t,(function(t,e){n.off(e,t)})):r(e)?(a=this._matchContext(t),n._spliceMatches(this._safeEvent(e),a)):u(e)?(a=this._matchHandlerAndContext(e,t),p(this._safeEvent(),(function(t){n._spliceMatches(t,a)}))):(a=this._matchContext(t),p(this._safeEvent(),(function(t){n._spliceMatches(t,a)})))},g.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},g.prototype.fire=function(t){this.invoke.apply(this,arguments)},g.prototype.invoke=function(t){var e,a,n,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),a=Array.prototype.slice.call(arguments,1),n=0;e[n];){if(!1===(i=e[n]).handler.apply(i.context,a))return!1;n+=1}return!0},g.prototype.hasListener=function(t){return this.getListenerLength(t)>0},g.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=g},function(t,e,a){var n=a(1),i=a(15);t.exports=function(t){return!n(t)&&!i(t)}},function(t,e,a){t.exports=function(t){return null===t}},function(t,e,a){t.exports=function(t){return t===Object(t)}},function(t,e,a){t.exports=function(t,e,a){var n=0,i=t.length;for(a=a||null;n<i&&!1!==e.call(a,t[n],n,t);n+=1);}},function(t,e,a){var n=a(19);t.exports=function(t,e){var a=n(e.prototype);a.constructor=t,t.prototype=a}},function(t,e,a){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,a){var n=a(3),i=a(7),r=a(21),o=a(22),l=a(24),u=a(25),p=a(0),s=a(4),g=a(28),d=a(9),c={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],_=["prev","next"],f=i({init:function(t,e,a){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=p({},c,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(a)},_setRootElement:function(t){if(s(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!g(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){n(h,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){n(h,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){n(_,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,a,n=t.leftPageNumber,i=t.rightPageNumber;for(a=n;a<=i;a+=1)a===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:a}):(e=d.createElementByTemplate(this._template.page,{page:a}),this._enabledPageElements.push(e)),a!==n||t.prevMore||u(e,this._firstItemClassName),a!==i||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var a,n,i=r(e);l(e),(n=this._getButtonType(i))||(a=this._getPageNumber(i)),t(n,a)}),this)},_getButtonType:function(t){var e,a=this._buttons;return n(a,(function(a,n){return!d.isContained(t,a)||(e=n,!1)}),this),e},_getPageNumber:function(t){var e,a=this._findPageElement(t);return a&&(e=parseInt(a.innerText,10)),e},_findPageElement:function(t){for(var e,a=0,n=this._enabledPageElements.length;a<n;a+=1)if(e=this._enabledPageElements[a],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=f},function(t,e,a){t.exports=function(t){return t.target||t.srcElement}},function(t,e,a){var n=a(4),i=a(3),r=a(23);function o(t,e,a,n){function o(e){a.call(n||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,a,n){var o=r(t,e),l=!1;i(o,(function(t){return t.handler!==a||(l=!0,!1)})),l||o.push({handler:a,wrappedHandler:n})}(t,e,a,o)}t.exports=function(t,e,a,r){n(e)?i(e.split(/\s+/g),(function(e){o(t,e,a,r)})):i(e,(function(e,n){o(t,n,e,a)}))}},function(t,e,a){var n="_feEventKey";t.exports=function(t,e){var a,i=t[n];return i||(i=t[n]={}),(a=i[e])||(a=i[e]=[]),a}},function(t,e,a){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,a){var n=a(3),i=a(8),r=a(26),o=a(27);t.exports=function(t){var e,a=Array.prototype.slice.call(arguments,1),l=t.classList,u=[];l?n(a,(function(e){t.classList.add(e)})):((e=r(t))&&(a=[].concat(e.split(/\s+/),a)),n(a,(function(t){i(t,u)<0&&u.push(t)})),o(t,u))}},function(t,e,a){var n=a(1);t.exports=function(t){return t&&t.className?n(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,a){var n=a(2),i=a(1);t.exports=function(t,e){e=(e=n(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,a){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,a){var n=a(8),i=a(3),r=a(2),o=a(4),l=a(0),u=/{{\s?|\s?}}/g,p=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,s=/\[\s?|\s?\]/,g=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,c=/^["']\w+["']$/,h=/"|'/g,_=/^-?\d+\.?\d*$/,f={if:function(t,e,a){var n=function(t,e){var a=[t],n=[],r=0,o=0;return i(e,(function(t,i){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(a.push("else"===t?["true"]:t.split(" ").slice(1)),n.push(e.slice(o,i)),o=i+1)})),n.push(e.slice(o)),{exps:a,sourcesInsideIf:n}}(t,e),r=!1,o="";return i(n.exps,(function(t,e){return(r=y(t,a))&&(o=k(n.sourcesInsideIf[e],a)),!r})),o},each:function(t,e,a){var n=y(t,a),o=r(n)?"@index":"@key",u={},p="";return i(n,(function(t,n){u[o]=n,u["@this"]=t,l(a,u),p+=k(e.slice(),a)})),p},with:function(t,e,a){var i=n("as",t),r=t[i+1],o=y(t.slice(0,i),a),u={};return u[r]=o,k(e,l(a,u))||""}},b=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var a,n,i=[],r=0;for(e.global||(e=new RegExp(e,"g")),a=e.exec(t);null!==a;)n=a.index,i.push(t.slice(r,n)),r=n+a[0].length,a=e.exec(t);return i.push(t.slice(r)),i};function m(t,e){var a,n=e[t];return"true"===t?n=!0:"false"===t?n=!1:c.test(t)?n=t.replace(h,""):p.test(t)?n=m((a=t.split(s))[0],e)[m(a[1],e)]:g.test(t)?n=m((a=t.split(d))[0],e)[a[1]]:_.test(t)&&(n=parseFloat(t)),n}function v(t,e,a){for(var n,i,r,l,u=f[t],p=1,s=2,g=e[s];p&&o(g);)0===g.indexOf(t)?p+=1:0===g.indexOf("/"+t)&&(p-=1,n=s),g=e[s+=2];if(p)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(i=0,r=n,(l=e.splice(i+1,r-i)).pop(),l),a),e}function y(t,e){var a=m(t[0],e);return a instanceof Function?function(t,e,a){var n=[];return i(e,(function(t){n.push(m(t,a))})),t.apply(null,n)}(a,t.slice(1),e):a}function k(t,e){for(var a,n,i,r=1,l=t[r];o(l);)n=(a=l.split(" "))[0],f[n]?(i=v(n,t.splice(r,t.length-r),e),t=t.concat(i)):t[r]=y(a,e),l=t[r+=2];return t.join("")}t.exports=function(t,e){return k(b(t,u),e)}},function(t,e,a){var n=a(1),i=a(31);t.exports=function(t,e){var a=location.hostname,r="TOAST UI "+t+" for "+a+": Statistics",o=window.localStorage.getItem(r);(n(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:a,dp:a,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,a){var n=a(6);t.exports=function(t,e){var a=document.createElement("img"),i="";return n(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),a.src=t+"?"+i,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}}])},u=l();const p=[{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"},{adult:!1,backdrop_path:"/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",id:594767,title:"Shazam! Fury of the Gods",original_language:"en"},{adult:!1,backdrop_path:"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",id:700391,title:"65",original_language:"en"},{adult:!1,backdrop_path:"/aityu1Gma509jInlspHstEt8Jg0.jpg",id:736790,title:"Chupa",original_language:"en"},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en"},{adult:!1,backdrop_path:"/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg",id:502356,title:"The Super Mario Bros. Movie",original_language:"en"},{adult:!1,backdrop_path:"/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",id:739405,title:"Operation Fortune: Ruse de Guerre",original_language:"en"},{adult:!1,backdrop_path:"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",id:677179,title:"Creed III",original_language:"en"},{adult:!1,backdrop_path:"/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg",id:830896,title:"The Portable Door",original_language:"en"},{adult:!1,backdrop_path:"/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",id:958196,title:"Inside",original_language:"en"},{adult:!1,backdrop_path:"/gslT8t964rYXyqRcqrxFh77ikyb.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en"},{adult:!1,backdrop_path:"/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",id:603692,title:"John Wick: Chapter 4",original_language:"en"}],s=p.length,g=(Math.ceil(s/20),document.querySelector(".gallery-list")),d=document.getElementById("pagination"),c=new(t(u))(d,{totalItems:s,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},usageStatistics:!1});c.on("afterMove",(function(t){g.innerHTML="";const e=20*(t.page-1),a=p.slice(e,e+20);markup=a.map((t=>`  \n      <div class="info">\n        <p class="info-item">\n          <b>likes</b>${t.title}\n        </p>\n      </div> \n    `)).join(""),g.innerHTML=markup})),c.movePageTo(1);const h=document.querySelector(".is-hidden");function _(){const t=document.querySelector(".back-to-top"),e=window.pageYOffset,a=document.documentElement.clientHeight;e>a&&t.classList.add("visible"),(e<a||!h)&&t.classList.remove("visible")}window.addEventListener("scroll",_),document.querySelector("body").insertAdjacentHTML("beforeend",'\n<svg viewBox="-3 -5 40 36"  height="50" width="50" class="back-to-top" id ="back">\n<path  d="M16.731 5.426l5.581-0.030c3.087-0.030 5.809-0.030 6.052 0s0.76 0.122 1.14 0.213 1.064 0.35 1.521 0.578c0.456 0.228 1.186 0.684 1.612 1.004 0.426 0.335 0.943 0.791 1.156 1.049 0.198 0.243 0.623 0.973 0.912 1.597l0.010 0.021c0.301 0.616 0.599 1.227 0.72 2.032 0.122 0.813 0.122 1.445 0.122 1.445s-0.016 0.555-0.092 1.239c0 0-0.079 1.168-0.228 1.901-0.229 1.127-0.76 2.456-0.942 2.79-0.106 0.213-0.563 0.73-1.019 1.156-0.441 0.426-1.125 0.958-1.521 1.186-0.411 0.213-0.73 0.365-0.73 0.319s-0.152 0.015-0.334 0.137c-0.198 0.122-0.73 0.304-1.186 0.411-0.471 0.106-1.825 0.198-5.322 0.213v-1.718c0-1.384 0.030-1.779 0.030-1.779v-1.27c0-0.304 0.761-0.479 1.232-0.479l1.718-0.228c0.395-0.205 0.319-0.129 0.623-0.357s0.502-0.479 0.684-0.684c0.182-0.205 0.304-0.456 0.304-0.456l0.137-0.912v-0.783c0-0.593-0.091-1.308-0.182-1.597-0.106-0.289-0.395-0.76-0.654-1.034s-0.776-0.593-1.156-0.715c-0.426-0.152-1.247-0.228-2.159-0.228-1.414 0-1.49 0.015-1.566 0.335-0.046 0.198-0.076 1.749-0.076 1.749l0.152 4.554-0.046 0.456-0.091 0.661-0.015 1.293 0.030 1.521c0.015 0.836 0.015 1.855-0.015 2.281-0.015 0.411-0.137 1.171-0.274 1.673s-0.487 1.384-0.791 1.962c-0.304 0.578-0.958 1.445-1.46 1.977-0.578 0.563-1.353 1.14-2.022 1.49-0.608 0.319-1.186 0.563-1.277 0.547-0.106 0-0.441 0.091-0.73 0.228-0.289 0.122-1.247 0.319-2.129 0.426-0.928 0.106-2.159 0.137-2.919 0.076-0.882-0.061-1.308-0.221-1.566-0.319s-0.274-0.129-0.411-0.228-0.016-0.129 0.060-0.129c0.076 0 0.152 0.076 0.532 0s0.304-0.076 0.304-0.076 0.532-0.152 0.684-0.228c0.152-0.076 0.381-0.145 0.685-0.297 0.304-0.137 1.064-0.699 1.673-1.247s1.201-1.156 1.308-1.369c0.106-0.213 0.38-0.684 0.593-1.064s0.502-1.125 0.623-1.673c0.137-0.547 0.35-1.946 0.487-3.117s0.274-2.707 0.304-4.714c0-0.669 0.091-2.387 0-2.357 0 0 0.046-1.019-0.076-9.428z"></path>\n<path  d="M2.391 3.853c1.384-1.84 2.585-3.482 2.691-3.649s0.243-0.243 0.304-0.182c0.061 0.061 1.308 1.718 5.459 7.253l-2.22 0.152-0.076 2.235c-0.046 1.216-0.046 2.95 0 3.832s0.030 1.612-0.030 1.612c-0.076 0-0.091 0.593-0.046 1.323 0.046 0.745 0.091 1.779 0.091 2.327s0.076 1.673 0.167 2.509c0.076 0.836 0.289 1.901 0.471 2.357s0.502 1.034 0.715 1.277c0.213 0.243 0.654 0.578 0.988 0.745 0.471 0.243 0.897 0.319 1.825 0.319 0.669 0 1.368-0.076 1.566-0.182 0.304-0.167 0.335-0.152 0.243 0.152-0.061 0.198-0.274 0.684-0.502 1.095-0.213 0.411-0.715 1.095-1.095 1.521-0.395 0.426-1.186 1.095-1.749 1.49-0.623 0.426-1.369 0.791-1.809 0.882-0.684 0.152-0.852 0.137-1.673-0.182-0.502-0.198-1.323-0.639-1.809-0.973-0.502-0.319-1.171-0.897-1.49-1.277s-0.776-1.064-1.019-1.521c-0.243-0.456-0.593-1.353-0.76-1.977-0.243-0.973-0.304-1.87-0.411-5.93-0.046-2.631-0.076-4.851-0.061-4.942s0.061-1.642 0.152-6.767h-1.095c-0.608 0-1.156-0.030-1.216-0.076-0.076-0.046 1.004-1.581 2.387-3.421z"></path>\n<path  d="M2.269 12.14c-0.015 0.928-0.046 0.198-0.046-1.597s0.030-2.555 0.046-1.673c0.030 0.882 0.030 2.342 0 3.269z"></path>\n<path  d="M2.269 21.567c-0.030 0.593-0.046 0.167-0.046-0.912s0.015-1.566 0.046-1.064c0.030 0.502 0.030 1.384 0 1.977z"></path>\n<path  d="M19.452 18.070c-0.030 0.502-0.046 0.167-0.046-0.76s0.015-1.338 0.046-0.912c0.030 0.411 0.030 1.171 0 1.673z"></path>\n<path  d="M32.537 16.306c-0.89-0.015-0.919-0.016-0.51-0.198 0.243-0.106 0.654-0.152 0.912-0.122s0.487 0.122 0.517 0.198c0.015 0.076-0.395 0.137-0.912 0.122l-0.007-0z"></path>\n</svg>\n'),document.querySelector(".back-to-top").addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),_();
//# sourceMappingURL=my-library.f389919d.js.map