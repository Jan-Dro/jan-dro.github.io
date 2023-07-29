const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('expanded');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('expanded');
  });
});
