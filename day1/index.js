const min = document.getElementById('min');
const max = document.getElementById('max');
const gen = document.getElementById('generate')
const result = document.getElementById('result')
function generateInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function showInt() {
    result.innerText = generateInt(min.value, max.value)
}
gen.addEventListener('click', () => {
    showInt()
})

showInt()