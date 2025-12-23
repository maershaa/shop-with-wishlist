import { storageKeys } from '../constants/storageKeys';
import { state } from '../constants/state.js';

function addToBasket(product) {
  const itemInBasket = state.basketArray.find(item => item.id === product.id);

  if (itemInBasket) {
    itemInBasket.quantity += 1;
  } else {
    state.basketArray.push(product);
  }
  localStorage.setItem(
    storageKeys.KEY_BASKET,
    JSON.stringify(state.basketArray)
  );
}

export { addToBasket };
