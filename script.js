const header = document.querySelector('[data-header]');

const syncHeader = () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 18 ? '0 10px 35px rgba(28,40,33,.06)' : 'none';
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});
