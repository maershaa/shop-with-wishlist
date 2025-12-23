// Подключаем стандартный helper Vite для создания конфигурации
import { defineConfig } from 'vite';

// Модуль path нужен, чтобы корректно формировать абсолютные пути
// (работает на Windows/Mac/Linux одинаково)
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Настройки сборки через Rollup (Vite использует Rollup под капотом)
    rollupOptions: {
      // Здесь мы вручную указываем все HTML-файлы,
      // которые должны стать ОТДЕЛЬНЫМИ страницами проекта.
      //
      // Если их не указать — Vite соберёт только index.html,
      // а остальные просто проигнорирует.
      input: {
        // Главная страница
        main: resolve(__dirname, 'index.html'),

        // Страница "Избранное"
        favourites: resolve(__dirname, 'favourites.html'),

        // Страница "Оформление заказа"
        checkout: resolve(__dirname, 'checkout.html'),
      },
    },
  },
});
