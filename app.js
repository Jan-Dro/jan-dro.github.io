// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('mouseover', () => {
//     card.classList.add('expanded');
//   });

//   card.addEventListener('mouseout', () => {
//     card.classList.remove('expanded');
//   });
// });
const cards = document.querySelectorAll('.card');
let touchStartTime, touchEndTime;

function handleCardInteraction(card) {
  card.classList.toggle('expanded');
}

function onTouchStart(event, card) {
  touchStartTime = new Date().getTime();
  handleCardInteraction(card);
}

function onTouchEnd(event) {
  touchEndTime = new Date().getTime();
  const touchDuration = touchEndTime - touchStartTime;
  if (touchDuration < 300) {
    event.preventDefault();
  }
}

cards.forEach(card => {
  card.addEventListener('click', () => handleCardInteraction(card));
  card.addEventListener('touchstart', (event) => onTouchStart(event, card));
  card.addEventListener('touchend', onTouchEnd);
});
