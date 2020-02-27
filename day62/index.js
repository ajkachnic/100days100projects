const imgOne = document.getElementById('img-one');
const imgTwo = document.getElementById('img-two');

imgOne.addEventListener('click', () => {
    imgOne.classList.toggle('selected');
    imgTwo.classList.remove('selected');
})
imgTwo.addEventListener('click', () => {
    imgTwo.classList.toggle('selected');
    imgOne.classList.remove('selected');
})