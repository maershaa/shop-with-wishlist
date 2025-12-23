import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const modalMarkup = `
      <div class="modal">
            <button class="closeBtn js-close"> x </button>

        <img class="product-img" src="${product.img}" alt="${product.name}">
        <h2> ${product.name} </h2>
        <p class="price">${product.price} грн. </p>
        <p class="description">${product.description}</p>
        <div>
          <button class="js-favourite"> Add to favourite </button>
          <button class="js-basket"> Add to basket </button>
        </div>

      </div>
`;
  const instance = basicLightbox.create(modalMarkup, {
    onShow: instance => {
      // Клик по "Close"
      instance.element().querySelector('.js-close').onclick = () => {
        instance.close();
      };

      // Добавляем обработчик клавиш
      document.addEventListener('keydown', onKeyDown);
    },

    onClose: () => {
      document.removeEventListener('keydown', onKeyDown);
    },
  });

  instance.show();

  function onKeyDown(evt) {
    // Блокируем прокрутку пробелом
    if (evt.code === 'Space') {
      evt.preventDefault();
    }
    console.log(evt.code);
    if (evt.code === 'Space' || evt.code === 'Escape') {
      instance.close();
    }
  }
}

export { createModal };
