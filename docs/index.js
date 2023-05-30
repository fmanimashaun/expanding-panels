const cards = document.querySelectorAll('.panel');
const parent = document.querySelector('.jscontainer');

parent.addEventListener('click', function (e) {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
  e.target.classList.add('active');
});
