/**
 * @type {HTMLElement[]}
 */
const modales = document.querySelectorAll('.modale');

/**
 * @type {HTMLElement[]}
 */
const btnsClose = document.querySelectorAll('.btn-close');


/**
 * @param {HTMLElement} modale
 * @returns {void}
 */
function handleModaleClose(modale) {
    modale.setAttribute('close', '');
}


modales.forEach(modale => {
    modale.addEventListener('click', () => {
        handleModaleClose(modale);
    });
    /**
     * @type {HTMLElement[]}
     */
    const childrens = modale.querySelectorAll('& > *');
    childrens.forEach(children => {
        children.addEventListener('click', e => {
            e.stopImmediatePropagation();
        });
    });
});


/**
 * @returns {void}
 */
btnsClose.forEach(btnClose => {
    btnClose.addEventListener('click', () => {
        modales.forEach(modale => {
            handleModaleClose(modale);
        })
    })
})