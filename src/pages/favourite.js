import '../style.css';
import { state } from '../constants/state';
import { createMarkup } from '../helpers/createMarkup';

import { handleProductClick } from '../helpers/handleProductClick';

import { highlightCurrentPage } from '../helpers/highlightCurrentPage.js';
import { showEmptyState } from '../helpers/showEmptyState.js';

// Подсветка текущей странички
document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
});

const listEl = document.querySelector('.js-fav-list');

createMarkup(state.favouriteArray, listEl);

// Если список избранного пуст:
if (state.favouriteArray.length === 0) {
  showEmptyState('favourite');
}

listEl.addEventListener('click', handleProductClick);
