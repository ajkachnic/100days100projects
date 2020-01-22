const get = document.getElementById('get');
const imageContainer = document.getElementById('image-container');
const width = document.getElementById('width');
const height = document.getElementById('height');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        imageContainer.innerHTML = ""
    imageContainer.innerHTML = `<img src="https://i.picsum.photos/id/${getRandomInt(1, 1000)}/${width.value}/${height.value}.jpg"></img>`
    }
})
get.addEventListener('click', () => {
    imageContainer.innerHTML = ""
    imageContainer.innerHTML = `<img src="https://i.picsum.photos/id/${getRandomInt(1, 1000)}/${width.value}/${height.value}.jpg"></img>`
})

width.value = 400;
height.value = 400;