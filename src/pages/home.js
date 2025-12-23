import { goods } from '../data/goods.js';
import '../style.css';
import { handleProductClick } from '../helpers/handleProductClick';
import { storageKeys } from '../constants/storageKeys';
import { state } from '../constants/state.js';
import { createMarkup } from '../helpers/createMarkup';

import { highlightCurrentPage } from '../helpers/highlightCurrentPage.js';
const inputEl = document.querySelector('.js-search');
const goodsListEl = document.querySelector('.js-goods-list');

// Подсветка текущей странички
document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
});

createMarkup(goods, goodsListEl);

goodsListEl.addEventListener('click', handleProductClick);
