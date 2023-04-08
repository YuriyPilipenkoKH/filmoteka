// export { onScroll, onToTop, renderBtn };

window.addEventListener('scroll', onScroll);
function onScroll() {
  const toTop = document.querySelector('.back-to-top');
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    toTop.classList.add('visible');
  }
  if (scrolled < coords) {
    toTop.classList.remove('visible');
  }
}
function onToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderBtn() {
  const markup = `
<svg viewBox="-3 -5 40 36"  height="50" width="50" class="back-to-top">
<path fill="#ff7600" style="fill: var(--color1, #ff7600)" d="M16.731 5.426l5.581-0.030c3.087-0.030 5.809-0.030 6.052 0s0.76 0.122 1.14 0.213 1.064 0.35 1.521 0.578c0.456 0.228 1.186 0.684 1.612 1.004 0.426 0.335 0.943 0.791 1.156 1.049 0.198 0.243 0.623 0.973 0.912 1.597l0.010 0.021c0.301 0.616 0.599 1.227 0.72 2.032 0.122 0.813 0.122 1.445 0.122 1.445s-0.016 0.555-0.092 1.239c0 0-0.079 1.168-0.228 1.901-0.229 1.127-0.76 2.456-0.942 2.79-0.106 0.213-0.563 0.73-1.019 1.156-0.441 0.426-1.125 0.958-1.521 1.186-0.411 0.213-0.73 0.365-0.73 0.319s-0.152 0.015-0.334 0.137c-0.198 0.122-0.73 0.304-1.186 0.411-0.471 0.106-1.825 0.198-5.322 0.213v-1.718c0-1.384 0.030-1.779 0.030-1.779v-1.27c0-0.304 0.761-0.479 1.232-0.479l1.718-0.228c0.395-0.205 0.319-0.129 0.623-0.357s0.502-0.479 0.684-0.684c0.182-0.205 0.304-0.456 0.304-0.456l0.137-0.912v-0.783c0-0.593-0.091-1.308-0.182-1.597-0.106-0.289-0.395-0.76-0.654-1.034s-0.776-0.593-1.156-0.715c-0.426-0.152-1.247-0.228-2.159-0.228-1.414 0-1.49 0.015-1.566 0.335-0.046 0.198-0.076 1.749-0.076 1.749l0.152 4.554-0.046 0.456-0.091 0.661-0.015 1.293 0.030 1.521c0.015 0.836 0.015 1.855-0.015 2.281-0.015 0.411-0.137 1.171-0.274 1.673s-0.487 1.384-0.791 1.962c-0.304 0.578-0.958 1.445-1.46 1.977-0.578 0.563-1.353 1.14-2.022 1.49-0.608 0.319-1.186 0.563-1.277 0.547-0.106 0-0.441 0.091-0.73 0.228-0.289 0.122-1.247 0.319-2.129 0.426-0.928 0.106-2.159 0.137-2.919 0.076-0.882-0.061-1.308-0.221-1.566-0.319s-0.274-0.129-0.411-0.228-0.016-0.129 0.060-0.129c0.076 0 0.152 0.076 0.532 0s0.304-0.076 0.304-0.076 0.532-0.152 0.684-0.228c0.152-0.076 0.381-0.145 0.685-0.297 0.304-0.137 1.064-0.699 1.673-1.247s1.201-1.156 1.308-1.369c0.106-0.213 0.38-0.684 0.593-1.064s0.502-1.125 0.623-1.673c0.137-0.547 0.35-1.946 0.487-3.117s0.274-2.707 0.304-4.714c0-0.669 0.091-2.387 0-2.357 0 0 0.046-1.019-0.076-9.428z"></path>
<path fill="#272425" style="fill: var(--color2, #272425)" d="M2.391 3.853c1.384-1.84 2.585-3.482 2.691-3.649s0.243-0.243 0.304-0.182c0.061 0.061 1.308 1.718 5.459 7.253l-2.22 0.152-0.076 2.235c-0.046 1.216-0.046 2.95 0 3.832s0.030 1.612-0.030 1.612c-0.076 0-0.091 0.593-0.046 1.323 0.046 0.745 0.091 1.779 0.091 2.327s0.076 1.673 0.167 2.509c0.076 0.836 0.289 1.901 0.471 2.357s0.502 1.034 0.715 1.277c0.213 0.243 0.654 0.578 0.988 0.745 0.471 0.243 0.897 0.319 1.825 0.319 0.669 0 1.368-0.076 1.566-0.182 0.304-0.167 0.335-0.152 0.243 0.152-0.061 0.198-0.274 0.684-0.502 1.095-0.213 0.411-0.715 1.095-1.095 1.521-0.395 0.426-1.186 1.095-1.749 1.49-0.623 0.426-1.369 0.791-1.809 0.882-0.684 0.152-0.852 0.137-1.673-0.182-0.502-0.198-1.323-0.639-1.809-0.973-0.502-0.319-1.171-0.897-1.49-1.277s-0.776-1.064-1.019-1.521c-0.243-0.456-0.593-1.353-0.76-1.977-0.243-0.973-0.304-1.87-0.411-5.93-0.046-2.631-0.076-4.851-0.061-4.942s0.061-1.642 0.152-6.767h-1.095c-0.608 0-1.156-0.030-1.216-0.076-0.076-0.046 1.004-1.581 2.387-3.421z"></path>
<path fill="#333232" style="fill: var(--color3, #333232)" d="M2.269 12.14c-0.015 0.928-0.046 0.198-0.046-1.597s0.030-2.555 0.046-1.673c0.030 0.882 0.030 2.342 0 3.269z"></path>
<path fill="#333232" style="fill: var(--color3, #333232)" d="M2.269 21.567c-0.030 0.593-0.046 0.167-0.046-0.912s0.015-1.566 0.046-1.064c0.030 0.502 0.030 1.384 0 1.977z"></path>
<path fill="#fe7f01" style="fill: var(--color4, #fe7f01)" d="M19.452 18.070c-0.030 0.502-0.046 0.167-0.046-0.76s0.015-1.338 0.046-0.912c0.030 0.411 0.030 1.171 0 1.673z"></path>
<path fill="#fe7f01" style="fill: var(--color4, #fe7f01)" d="M32.537 16.306c-0.89-0.015-0.919-0.016-0.51-0.198 0.243-0.106 0.654-0.152 0.912-0.122s0.487 0.122 0.517 0.198c0.015 0.076-0.395 0.137-0.912 0.122l-0.007-0z"></path>
</svg>
`;
  document.querySelector('body').insertAdjacentHTML('beforeend', markup);
}

renderBtn();
document.querySelector('.back-to-top').addEventListener('click', onToTop);
onScroll();
