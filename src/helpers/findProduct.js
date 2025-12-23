import { goods } from '../data/goods';

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return goods.find(({ id }) => id === productId);
}

export { findProduct };
