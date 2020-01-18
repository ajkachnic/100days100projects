let root = document.getElementsByTagName('html')[0];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const password = document.getElementById('password');

const passwordStrength = pass => {
    let includes = {
        lower:false,
        upper:false,
        num:true,
        other:false
    }
    let score = 0;
    if(pass.length >= 20) {
        score = 50
    }
    else {
        score = pass.length * 2.5;
    }

    let chars = pass.split('');

    for(let i of chars) {
        if(lower.includes(i)) {
            includes.lower = true
        }
        else if(upper.includes(i)) {
            includes.upper = true
        }
        else if(num.includes(i)) {
            includes.num = true
        }
        else {
            includes.other = true
        }
    }

    if(includes.lower == true) {
        score += 12.5
    }
    if(includes.upper == true) {
        score += 12.5
    }
    if(includes.other == true) {
        score += 12.5
    }
    if(includes.num == true) {
        score += 12.5
    }
    return score
}

password.addEventListener('paste', () => {
    let score = passwordStrength(password.value)
    console.log(password.value)
    console.log(score)
    if(score  < 50) {
        root.style.setProperty('--color', "#e60000")
    }
    else if(score <= 75) {
        root.style.setProperty('--color', '#e6e600')
    }
    else {
        root.style.setProperty('--color', '#00e600')
    }
    score = score.toString() + "%"
    console.log(score)
    root.style.setProperty('--bar-width', score)
})

password.addEventListener('input', () => {
    let score = passwordStrength(password.value)
    console.log(password.value)
    console.log(score)
    if(score  < 50) {
        root.style.setProperty('--color', "#e60000")
    }
    else if(score <= 75) {
        root.style.setProperty('--color', '#e6e600')
    }
    else {
        root.style.setProperty('--color', '#00e600')
    }
    score = score.toString() + "%"
    console.log(score)
    root.style.setProperty('--bar-width', score)

    if(password.value.length == 0) {
        root.style.setProperty("--bar-width", "0%")
        root.style.setProperty('--color', "#e60000")
    }
})