const cards = document.querySelectorAll(".card-content");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;
let interval;

function showCard(index) {
  cards.forEach((card, i) => {
    card.style.transform = translateX(${(i - index) * 100}%);
  });
}

function startAutoScroll() {
  interval = setInterval(() => {
    index = (index + 1) % cards.length;
    showCard(index);
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(interval);
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % cards.length;
  showCard(index);
});

carousel.addEventListener("mouseover", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);

showCard(index);
startAutoScroll()