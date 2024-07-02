document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Your product has been added to the cart!');
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('card-hover');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('card-hover');
    });
});
