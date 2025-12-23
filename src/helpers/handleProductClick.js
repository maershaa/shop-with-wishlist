import { createModal } from './createModal';
import { findProduct } from './findProduct.js';
import { toggleFavourite } from './toggleFavourite.js';
import { addToBasket } from './addToBasket.js';
function handleProductClick(evt) {
  evt.preventDefault();
  const el = evt.target; //html эл по которому кликнули

  if (el.classList.contains('js-info')) {
    const product = findProduct(el);
    createModal(product);
  }

  if (el.classList.contains('js-favourite')) {
    const product = findProduct(el);

    toggleFavourite(product);
  }

  if (el.classList.contains('js-basket')) {
    const product = findProduct(el);
    addToBasket(product);
  }
}

export { handleProductClick };
