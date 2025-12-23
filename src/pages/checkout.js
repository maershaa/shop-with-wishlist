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

const listEl = document.querySelector('.js-checkout-list');
const totalEl = document.querySelector('.total');

createMarkup(state.basketArray, listEl);

// если корзина пуста:
if (state.basketArray.length === 0) {
  showEmptyState('basket');
} else {
  getTotalPrice(state.basketArray);
}
function getTotalPrice(arr) {
  const totalPrice = arr.reduce((acc, prod) => {
    acc += prod.price;
    return acc;
  }, 0);

  totalEl.innerHTML = `
  <div class="total-wrapper">
    <span class="total-label">Total:</span>
    <span class="total-value">$${totalPrice.toFixed(2)}</span>
  </div>
`;
}

listEl.addEventListener('click', handleProductClick);
