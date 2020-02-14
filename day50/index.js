const star = document.getElementById('star');
const like = document.getElementById('like');

star.addEventListener('click', () => {
    star.classList.toggle('card__footer__star-clicked')
})
like.addEventListener('click', () => {
    like.classList.toggle('card__footer__like-clicked')
})