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

// Function to handle the click and touch events
function handleCardInteraction(card) {
  card.classList.toggle('expanded');
}

// Add click and touch event listeners to each stack card
cards.forEach(card => {
  card.addEventListener('click', () => handleCardInteraction(card));
  card.addEventListener('touchstart', () => handleCardInteraction(card));
});