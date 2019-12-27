const min = document.getElementById('min');
const max = document.getElementById('max');
const gen = document.getElementById('generate')
const result = document.getElementById('result')
function generateInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

gen.addEventListener('click', () => {
    result.innerText = generateInt(min.value, max.value)
})