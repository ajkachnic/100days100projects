let count
if(localStorage.getItem('count')) {
    count = localStorage.getItem('count')
} else {
    count = 0;
}

let cookie = document.getElementById('cookie');
let clicks = document.getElementById('clicks');
let reset = document.getElementById('reset')

function setClicks(cnt) {
    clicks.innerText = `${count} Clicks`
} 

cookie.addEventListener('click', () => {
    count ++;
    localStorage.setItem("count", count)
    setClicks(count)
})
reset.addEventListener('click', () => {
    localStorage.setItem("count", 0);
    count = 0;
    setClicks(count)
})
setClicks(clicks)

