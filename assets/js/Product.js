export default class Product {
    /**
     * @param {string} img 
     * @param {string} title
     * @param {string} price
     * @param {string} desc 
     */
    constructor(img, title, price, desc) {
        /**
         * @type {string}
        */
        this.img = img;
        /**
         * @type {string}
        */
        this.title = title;
        /**
         * @type {string}
        */
        this.price = price;
        /**
         * @type {string}
        */
        this.desc = desc;
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    toHtml() {
        const cardHtml = document.createElement('div');
        const imgHtml = document.createElement('img')
        const divInfoHtml = document.createElement('div');
        const titleHtml = document.createElement('h3');
        const priceHtml = document.createElement('p');
        const descHtml = document.createElement('p');
        const btnAddHtml = document.createElement('button');

        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);

        cardHtml.className = 'card';
        imgHtml.className = 'card-img';
        divInfoHtml.className = 'div-info';
        titleHtml.className = 'card-title';
        priceHtml.className = 'card-price';
        btnAddHtml.className = 'btn-primary';

        titleHtml.textContent = this.title;
        priceHtml.textContent = this.price;
        descHtml.textContent = this.desc;
        btnAddHtml.textContent = 'Ajouter au panier';

        cardHtml.appendChild(imgHtml);
        cardHtml.appendChild(divInfoHtml);
        divInfoHtml.appendChild(titleHtml);
        divInfoHtml.appendChild(priceHtml);
        divInfoHtml.appendChild(descHtml);
        cardHtml.appendChild(btnAddHtml);

        return cardHtml;
    }
}