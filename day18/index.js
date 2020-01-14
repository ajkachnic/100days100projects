const reset = document.getElementById('reset')
const startStop = document.getElementById('start-stop');
const time = document.getElementById('time');
let running = false;
let timer;

const round = num => {
    return Math.round(num * 100) / 100
}

startStop.addEventListener('click', () => {
if(running === false) {
    running = true
    timer = setInterval(() => {
        time.innerText = round(parseFloat(time.innerText) + 0.01)
    }, 10)
}
else if(running === true) {
    clearInterval(timer)
    running = false
}
})

reset.addEventListener('click', () => {
    time.innerText = "0.00"

})