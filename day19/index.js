const rockDOM = document.getElementById('rock')
const paperDOM = document.getElementById('paper')
const scissorsDOM = document.getElementById('scissors')
const choiceDOM = document.getElementById('choice')
const resultDOM = document.getElementById('result')
const opponentDOM = document.getElementById('opponent');
const playerDOM = document.getElementById('player');
const resultHeaderDOM = document.getElementById('result-header')
const againDOM = document.getElementById('again');
const scoreDOM = document.getElementById('score');

let score = {
    opponent:0,
    player:0
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

let choices = ["rock", "paper", "scissors"]
let playerChoice = ""

const calcResult = (player, opponent) => {
    if (player === opponent) {
        return ['Tie', 0]
    }

    if (player === "rock") {
        if (opponent === "paper") {
            return ['Opponent Wins', 1]
        }
        if (opponent === "scissors") {
            return ['Player Wins', 2]
        }
    }
    if (player === "paper") {
        if (opponent === "scissors") {
            return ['Opponent Wins', 1]
        }
        if (opponent === "rock") {
            return ['Player Wins', 2]
        }
    }
    if (player === "scissors") {
        if (opponent === "rock") {
            return ['Opponent Wins', 1]
        }
        if (opponent === "paper") {
            return ['Player Wins', 2]
        }
    }
}
const stageTwo = (choice) => {
    choiceDOM.classList.add('hidden')
    resultDOM.classList.remove('hidden')

    let randomChoice = choices.random()

    opponentDOM.innerHTML = `<img src='${randomChoice}.svg'>`
    playerDOM.innerHTML = `<img src='${choice}.svg'>`
    resultHeaderDOM.classList.remove('hidden')
    let resultCalced = calcResult(choice, randomChoice)
    resultHeaderDOM.innerText = resultCalced[0];


    againDOM.classList.remove('hidden')

    if(resultCalced[1] == 1) {
        score.opponent += 1
    }

    if(resultCalced[1] == 2) {
        score.player += 1
    }

    scoreDOM.innerText = `${score.opponent}:${score.player}`
}


rockDOM.addEventListener('click', () => {
    stageTwo('rock')
})
paperDOM.addEventListener('click', () => {
    stageTwo('paper')
})
scissorsDOM.addEventListener('click', () => {
    stageTwo('scissors')
})

const reset = () => {
    playerChoice = ""
    choiceDOM.classList.remove('hidden')
    resultDOM.classList.add('hidden')


    opponentDOM.innerHTML = ''
    playerDOM.innerHTML = ''
    resultHeaderDOM.classList.add('hidden')

    resultHeaderDOM.innerText = '' 
    againDOM.classList.add('hidden')
}

againDOM.addEventListener('click', () => {
    reset()
})