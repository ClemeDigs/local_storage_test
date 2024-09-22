import { products } from './products.js';

const cardContainer = document.querySelector('.card-container');

products.forEach(product => {
    cardContainer.appendChild(product.toHtml());
});