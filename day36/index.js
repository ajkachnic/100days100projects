const flipDom = document.getElementById('flip');
const outcomeDom = document.getElementById('outcome');
const imageContainer = document.getElementById('img-cont');

const imagePaths  = {
    heads: "heads.png",
    tails:"tails.png"
}

function flip() {
    let num = Math.random();
    if(num > .5) {
        imageContainer.innerHTML = `<img src="${imagePaths["heads"]}" width="500px" height="500px">`
        outcomeDom.innerText = "The coin landed on heads!"
    }
    else {
        imageContainer.innerHTML = `<img src="${imagePaths["tails"]}" width="500px" height="500px">`
        outcomeDom.innerText = "The coin landed on tails!"
    }
}

flipDom.addEventListener('click', () => {
    flip()
})