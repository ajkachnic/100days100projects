"use strict";

function generateInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const loremP = document.getElementById('lorem')
const loremCount = document.getElementById('count')
const loremGenerate = document.getElementById('generate')
const loremType = document.getElementById('type')

const words = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras'
];

function generateWord(count) {
    if(!count) {
        count = 3
    }
    let totalWords = ""
    for(let i = 0; i < count; i ++) {
        const word = words[generateInt(0, words.length - 1)]
        totalWords += word + " "
    }
    return totalWords
}

/*
Expected Input
count: @int
*/
function generateSentence(count) {
    let sentences = ""
    for (let o = 0; o < count; o++) {
        var sentence = ""
        const randLen = generateInt(7, 9);
        for (let i = 0; i < randLen; i++) {
            let randWord = generateWord()
            if(i === 0) {
                randWord = capitalizeFirstLetter(randWord)
            }
            sentence += randWord + " "
        }
        sentences += sentence + ". "
    }
    return sentences
}

/*
Expected Input
count: @int
*/
function generateParagraph(count) {
    let paragraphs = ""
    for (let o = 0; o < count; o++) {
        const randLen = generateInt(7, 9);
        let paragraph = generateSentence(randLen);
        paragraphs += paragraph + "\n\n"
    }
    return paragraphs
}

/*
Expected Input
input: {
    length: @int,
    type: @string, ["paragraphs", "sentences", "words"]
}
*/
function generateLorem(input) {
    console.log(input.length)
    if (input.type === "paragraphs") {
        return generateParagraph(input.length)
    }

    if (input.type === "sentences") {
        return generateSentence(input.length)
    }

    if (input.type === "words") {
        return generateWord(input.length)
    }
}




loremGenerate.addEventListener('click', () => {
    const obj = {
        length: loremCount.value,
        type: loremType.value
    }
    loremP.innerText = generateLorem(obj)
})

loremCount.value = 3

const obj = {
    length: loremCount.value,
    type: loremType.value
}
loremP.innerText = generateLorem(obj)