const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('expanded');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('expanded');
  });

  card.addEventListener('touchstart', () => {
    card.classList.toggle('expanded');

    cards.forEach(c => {
      if (c !== card && c.classList.contains('expanded')) {
        c.classList.remove('expanded');
      }
    });
  });
});