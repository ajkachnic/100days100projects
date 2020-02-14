const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    heart.classList.add('heart-beat');
    setTimeout(() => {
        heart.classList.remove('heart-beat')
    }, 1000)
})

document.addEventListener('load', () => {
    heart.classList.add('heart-beat');
    setTimeout(() => {
        heart.classList.remove('heart-beat')
    }, 1000)
})