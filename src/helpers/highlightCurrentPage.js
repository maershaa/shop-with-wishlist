function highlightCurrentPage() {
  const currentPage = document.body.dataset.page;

  if (!currentPage) return; // защита, если data-page не задан

  document.querySelectorAll('.nav-list a').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // на всякий случай убираем с других
    }
  });
}

export { highlightCurrentPage };
