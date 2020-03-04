let day = document.getElementById('day');

let i = 1;

const loop = setInterval(() => {
    day.innerText = parseInt(day.innerText) + 1;
    i++;
    if(i >= 68) {
        clearInterval(loop)
    }
}, 50)
