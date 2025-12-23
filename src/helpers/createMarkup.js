import { state } from '../constants/state';

function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr.map(({ id, img, name, quantity }) => {
      const isInFavourite = state.favouriteArray.some(item => item.id === id);
      const markup = `
      <li data-id=${id} class="js-card">
        <img class="product-img" src="${img}" alt="${name}">
        <h2> ${name} </h2>
               ${quantity > 1 ? `<p> Количество: ${quantity} </p>` : ``} 
        <p > 
        <a href="#" class="js-info"> More information </a>
        </p>
        <div>
          <button class="js-favourite"> ${
            !isInFavourite ? 'Add to favourite' : 'Delete from favourite'
          } </button>
            <button class="js-basket">Add to basket</button>
        </div>

      </li>
`;
      return markup;
    });
  } else {
    markup = [
      ` 
    <div class="empty-state" id="emptyState">
  <p class="empty-icon" id="emptyIcon">🛒</p>
  <h2 class="empty-title" id="emptyTitle">Ваша корзина пуста</h2>
  <p class="empty-text" id="emptyText">Добавьте товары, чтобы они появились здесь.</p>
  <a href="#" class="empty-btn">Перейти к покупкам</a>
    </div>
  
`,
    ];
  }
  list.innerHTML = markup.join('');
}

export { createMarkup };
