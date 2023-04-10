const ref = document.querySelector('.pagination');
const back = document.querySelector('button[data-value="back"]');
const first = document.querySelector('button[data-value="first"]');
const second = document.querySelector('button[data-value="second"]');
const third = document.querySelector('button[data-value="third"]');
const fourth = document.querySelector('button[data-value="fourth"]');
const fifth = document.querySelector('button[data-value="fifth"]');

let curentPageNumber = 1;

arrowInteractiv(curentPageNumber);
addActivePageClass(curentPageNumber);

ref.addEventListener('click', onPaginationClick);

function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const pushedButtonData = e.target.dataset.value;

  if (pushedButtonData === 'back') {
    if (curentPageNumber > 1) {
      curentPageNumber -= 1;
    }
    console.log(curentPageNumber);
    // тут нужен фетч для запроса на страницу под номером curentPageNumber
    // или запрос в localStorage in library
    return changePaginTextContent(curentPageNumber);
  }

  if (pushedButtonData === 'forvard') {
    curentPageNumber = Number(curentPageNumber) + 1;
    console.log(curentPageNumber);
    // тут нужен фетч для запроса на страницу под номером curentPageNumber
    // или запрос в localStorage in library
    return changePaginTextContent(curentPageNumber);
  }

  if (pushedButtonData !== 'back' && pushedButtonData !== 'forvard') {
    curentPageNumber = e.target.textContent;
    console.log(curentPageNumber);
    // тут нужен фетч для запроса на страницу под номером curentPageNumber
    // или запрос в localStorage in library
    return changePaginTextContent(curentPageNumber);
  }
}

function changePaginTextContent(val) {
  if (val <= 2) {
    first.textContent = 1;
    second.textContent = 2;
    third.textContent = 3;
    fourth.textContent = 4;
    fifth.textContent = 5;

    arrowInteractiv(val);
    addActivePageClass(val);
    return;
  }

  first.textContent = Number(val) - 2;
  second.textContent = Number(val) - 1;
  third.textContent = Number(val);
  fourth.textContent = Number(val) + 1;
  fifth.textContent = Number(val) + 2;

  arrowInteractiv(val);
  addActivePageClass(val);
}

function arrowInteractiv(activePageNumber) {
  if (activePageNumber == 1) {
    back.setAttribute('disabled', 'disabled');
  }

  if (activePageNumber > 1) {
    back.removeAttribute('disabled');
  }
}

function addActivePageClass(activePageNumber) {
  if (activePageNumber == 1) {
    second.classList.remove('activePage');
    third.classList.remove('activePage');
    first.classList.add('activePage');
  }

  if (activePageNumber == 2) {
    first.classList.remove('activePage');
    third.classList.remove('activePage');
    second.classList.add('activePage');
  }

  if (activePageNumber > 2) {
    first.classList.remove('activePage');
    second.classList.remove('activePage');
    third.classList.add('activePage');
  }
}
