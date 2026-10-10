document.querySelectorAll('.e-n-accordion-item').forEach(d => {
  d.addEventListener('toggle', () => d.querySelector('summary').setAttribute('aria-expanded', String(d.open)));
  d.querySelector('summary').addEventListener('keydown', e => {
    if (e.key === 'Escape') d.open = false;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = [...document.querySelectorAll('.e-n-accordion-item summary')];
      items[(items.indexOf(e.currentTarget) + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
    }
  });
});
