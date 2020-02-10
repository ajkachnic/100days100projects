const percent = document.getElementById('percent');

function round(num) {
    return Math.round(num * 1000) / 1000
}
setInterval(() => {
    percent.innerText = round(parseFloat(percent.innerText) + 1) + "%"
    if(parseFloat(percent.innerText) >= 99) {
        percent.innerText = 0 + "%"
    }
}, 100);