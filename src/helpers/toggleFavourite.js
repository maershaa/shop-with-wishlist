import { storageKeys } from '../constants/storageKeys.js';
import { state } from '../constants/state.js';
function toggleFavourite(product) {
  const isFavourite = state.favouriteArray.some(({ id }) => product.id === id);

  if (isFavourite) {
    state.favouriteArray = state.favouriteArray.filter(
      ({ id }) => id !== product.id
    );
  } else {
    state.favouriteArray.push(product);
  }
  localStorage.setItem(
    storageKeys.KEY_FAVOURITE,
    JSON.stringify(state.favouriteArray)
  );
}

export { toggleFavourite };
