/**
 * @type {HTMLElement}
 */
const modaleFirstVisit = document.querySelector('.modale-first-visit');
/**
 * @type {HTMLElement}
 */
const btnClearStorage = document.querySelector('.clear-storage');


if (!localStorage.getItem('isFirstVisit')){
    localStorage.setItem('isFirstVisit', true);
}

/**
 * @type {string}
 */
let isFirstVisit = localStorage.getItem('isFirstVisit');


if(isFirstVisit === 'true') {
    modaleFirstVisit.setAttribute('open', '');
    localStorage.setItem('isFirstVisit', false);
} else {
    modaleFirstVisit.setAttribute('close', '');
}

btnClearStorage.addEventListener('click', () => {
    localStorage.clear();
})