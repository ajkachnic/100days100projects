const flicker = document.getElementById('flicker');
//flicker.classList.toggle('glow');
const rand = () => Math.round(Math.random())
const loop = () => {
    const num = rand()
    console.log(num)
    if(num == 1) {
        if(rand()) {
            flicker.classList.toggle('glow');
        }
    }
}

setInterval(loop, 40)