/**
 * @type {HTMLElement}
 */
const modaleFirstVisit = document.querySelector('.modale-first-visit');

/**
 * @type {HTMLElement}
 */
const btnClearStorage = document.querySelector('.clear-storage');

/**
 * @type {string}
 */
let isFirstVisit = localStorage.getItem('isFirstVisit');


if (!localStorage.getItem('isFirstVisit')){
    modaleFirstVisit.setAttribute('open', '');
    localStorage.setItem('isFirstVisit', false);
} else {
    modaleFirstVisit.setAttribute('close', '');
};

btnClearStorage.addEventListener('click', () => {
    localStorage.clear();
});