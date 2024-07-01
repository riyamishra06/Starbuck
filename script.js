const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.getElementById('carousel');
let scrollAmount = 0;

prevButton.addEventListener('click', () => {
    carousel.style.animation = 'none';
    scrollAmount -= carousel.clientWidth / 5; 
    carousel.style.transform = `translateX(${scrollAmount}px)`;
    setTimeout(() => {
        carousel.style.animation = 'scroll 30s linear infinite';
    }, 1000);
});

nextButton.addEventListener('click', () => {
    carousel.style.animation = 'none';
    scrollAmount += carousel.clientWidth / 5; 
    carousel.style.transform = `translateX(${scrollAmount}px)`;
    setTimeout(() => {
        carousel.style.animation = 'scroll 30s linear infinite';
    }, 1000);
});
