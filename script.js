const eventCards = document.querySelectorAll('.event-card');

for (const card of eventCards) {
  const button = card.querySelector('.event-toggle');
  if (!button) continue;

  button.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
}
