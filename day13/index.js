const squareOne = document.getElementById('square-one')
const squareTwo = document.getElementById('square-two')
const squareThree = document.getElementById('square-three')
const squareFour = document.getElementById('square-four')

let order = []
let clicked = []
let count = 1

let toggle = (element, name) => element.classList.toggle(name)
let add = (element, name) => element.classList.add(name)
let remove = (element, name) => element.classList.remove(name)
let wait = ms => new Promise((r, j) => setTimeout(r, ms))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const randSquare = async () => {
    let rand = getRandomInt(1, 4);
    let element, name, n;
    switch (rand) {
        case 1:
            element = squareOne
            name = 'square-one-glow'
            n = 'squareOne'
            break
        case 2:
            element = squareTwo
            name = 'square-two-glow'
            n = 'squareTwo'
            break
        case 3:
            element = squareThree
            name = 'square-three-glow'
            n = 'squareThree'
            break
        case 4:
            element = squareFour
            name = 'square-four-glow'
            n = 'squareFour'
            break
    }

    add(element, name);
    order.push(n)
    setTimeout(() => {
        remove(element, name)
    }, 1000)

    return;
}
window.addEventListener('load', async () => {
    for (let i = 0; i < count; i++) {
        await randSquare()
        await wait(1500)
    }
    count++


})

function turnDone() {
    if (clicked.length == order.length) {
        return true
    } else {
        setTimeout(turnDone, 300); // try again in 300 milliseconds
    }

}

function turnCorrect() {
    if (JSON.stringify(clicked) === JSON.stringify(order)) {
        return true
    } else {
        return false
    }
}


//randSquare()

async function playOrder() {
    for (let i in order) {
        switch (order[i]) {
            case 'squareOne':
                element = squareOne
                name = 'square-one-glow'
                n = 'squareOne'
            case 'squareTwo':
                element = squareTwo
                name = 'square-two-glow'
                n = 'squareTwo'
                break
            case 'squareThree':
                element = squareThree
                name = 'square-three-glow'
                n = 'squareThree'
                break
            case 'squareFour':
                element = squareFour
                name = 'square-four-glow'
                n = 'squareFour'
                break
        }

        add(element, name);
        setTimeout(() => {
            remove(element, name)
        }, 1000)
        await wait(1500)
    }
}

squareOne.addEventListener('click', async () => {
    let element = squareOne
    let name = 'square-one-glow'
    clicked.push('squareOne')

    if (turnDone()) {
        if (turnCorrect()) {
            clicked = []
            await playOrder()
            randSquare()
            await wait(1500)
        } else {
            alert('You\'ve Lost')
            location.reload()
        }
    }

    add(element, name);
    setTimeout(() => {
        remove(element, name)
    }, 500)
})

squareTwo.addEventListener('click', async () => {
    let element = squareTwo
    let name = 'square-two-glow'
    clicked.push('squareTwo')

    if (turnDone()) {
        if (turnCorrect()) {
            clicked = []
            await playOrder()
            randSquare()
            await wait(1500)
        } else {
            alert('You\'ve Lost')
            location.reload()
        }
    }
    add(element, name);
    setTimeout(() => {
        remove(element, name)
    }, 500)

})

squareThree.addEventListener('click', async () => {
    let element = squareThree
    let name = 'square-three-glow'
    clicked.push('squareThree')

    if (turnDone()) {
        if (turnCorrect()) {
            clicked = []
            await playOrder()
            randSquare()
            await wait(1500)
        } else {
            alert('You\'ve Lost')
            location.reload()
        }
    }
    add(element, name);
    setTimeout(() => {
        remove(element, name)
    }, 500)
})

squareFour.addEventListener('click', async () => {
    let element = squareFour
    let name = 'square-four-glow'
    clicked.push('squareFour')

    if (turnDone()) {
        if (turnCorrect()) {
            clicked = []
            await playOrder()
            randSquare()
            await wait(1500)
        } else {
            alert('You\'ve Lost')
            location.reload()
        }
    }
    add(element, name);
    setTimeout(() => {
        remove(element, name)
    }, 500)
})