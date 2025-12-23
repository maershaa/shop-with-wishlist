function showEmptyState(type) {
  const iconEl = document.getElementById('emptyIcon');
  const titleEl = document.getElementById('emptyTitle');
  const textEl = document.getElementById('emptyText');

  if (type === 'favourite') {
    iconEl.textContent = '❤️';
    titleEl.textContent = 'Список избранного пуст';
    textEl.textContent = 'Добавьте любимые товары, чтобы они появились здесь.';
  } else if (type === 'basket') {
    iconEl.textContent = '🛒';
    titleEl.textContent = 'Ваша корзина пуста';
    textEl.textContent = 'Добавьте товары, чтобы они появились здесь.';
  }

  // показываем блок
  document.getElementById('emptyState').style.display = 'flex';
}

export { showEmptyState };
