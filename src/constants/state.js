import { storageKeys } from './storageKeys';

const state = {
  favouriteArray:
    JSON.parse(localStorage.getItem(storageKeys.KEY_FAVOURITE)) ?? [],

  basketArray: JSON.parse(localStorage.getItem(storageKeys.KEY_BASKET)) ?? [],
};

export { state };
