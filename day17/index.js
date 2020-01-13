let turn = "x"
const turnTxt = document.getElementById('turn')
const squareOne = document.getElementById('squareOne');
const squareOneMark = document.getElementById('squareOneMark');

const squareTwo = document.getElementById('squareTwo');
const squareTwoMark = document.getElementById('squareTwoMark');

const squareThree = document.getElementById('squareThree');
const squareThreeMark = document.getElementById('squareThreeMark');

const squareFour = document.getElementById('squareFour');
const squareFourMark = document.getElementById('squareFourMark');

const squareFive = document.getElementById('squareFive');
const squareFiveMark = document.getElementById('squareFiveMark');

const squareSix = document.getElementById('squareSix');
const squareSixMark = document.getElementById('squareSixMark');

const squareSeven = document.getElementById('squareSeven');
const squareSevenMark = document.getElementById('squareSevenMark');

const squareEight = document.getElementById('squareEight');
const squareEightMark = document.getElementById('squareEightMark');

const squareNine = document.getElementById('squareNine');
const squareNineMark = document.getElementById('squareNineMark');

function checkBoard() {
    const board = [
        [squareOneMark.innerText, squareTwoMark.innerText, squareThreeMark.innerText],
        [squareFourMark.innerText, squareFiveMark.innerText, squareSixMark.innerText],
        [squareSevenMark.innerText, squareEightMark.innerText, squareNineMark.innerText]
    ]

    console.log(board)

    for (let i of board) {
        if (i[0] == i[1] && i[1] == i[2]) {
            return i[0]
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
            return board[1][i]
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        return board[0][0]
    }
    if (board[2][0] == board[1][1] && board[1][1] == board[0][2]) {
        return board[2][0]
    }
    if(board[0][0] && board[0][1] && board[0][2]) {
        if(board[1][0] && board[1][1] && board[1][2]) {
            if(board[2][0] && board[2][1] && board[2][2]) {
                return 'nobody'
            }
        }
    }
    return false


}

function setSquare(sqr, val) {
    switch (sqr) {
        case "One":
            squareOneMark.innerText = val
            break;
        case "Two":
            squareTwoMark.innerText = val
            break;
        case "Three":
            squareThreeMark.innerText = val
            break;
        case "Four":
            squareFourMark.innerText = val
            break;
        case "Five":
            squareFiveMark.innerText = val
            break;
        case "Six":
            squareSixMark.innerText = val
            break;
        case "Seven":
            squareSevenMark.innerText = val
            break;
        case "Eight":
            squareEightMark.innerText = val
            break;
        case "Nine":
            squareNineMark.innerText = val
            break;
    }
}

squareOne.addEventListener('click', () => {
    if(squareOneMark.innerText == "") {
    setSquare('One', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareTwo.addEventListener('click', () => {
    if(squareTwoMark.innerText == "") {
    setSquare('Two', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareThree.addEventListener('click', () => {
    if(squareThreeMark.innerText == "") {
    setSquare('Three', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareFour.addEventListener('click', () => {
    if(squareFourMark.innerText == "") {
    setSquare('Four', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareFive.addEventListener('click', () => {
    if(squareFiveMark.innerText == "") {
    setSquare('Five', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareSix.addEventListener('click', () => {
    if(squareSixMark.innerText == "") {
    setSquare('Six', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareSeven.addEventListener('click', () => {
    if(squareSevenMark.innerText == "") {
    setSquare('Seven', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareEight.addEventListener('click', () => {
    if(squareEightMark.innerText == "") {
    setSquare('Eight', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})
squareNine.addEventListener('click', () => {
    if(squareNineMark.innerText == "") {
    setSquare('Nine', turn);
    const board = checkBoard()
    if(board) {
        alert(`${board} has won!`)
        location.reload()
    }

    if(turn == 'x') {
        turn = 'o'
    }
    else {
        turn = 'x'
    }

    turnTxt.innerText = `Current Turn: ${turn}`
}
})