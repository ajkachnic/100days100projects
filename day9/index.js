const encodeInput = document.getElementById('encode')
const decodeInput = document.getElementById('decode')
const chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
]

function encode(input) {
    let output = ""
    for (let i in input) {
        if (input[i] != " ") {
            const index = chars.indexOf(input[i])
            let newChar = ""
            for (let o = 0; o < index + 1; o++) {
                newChar += "a"
            }
            newChar += "h"

            output += newChar;
        }
        else {
            output += " "
        }
    }

    return output
}

function decode(input) {
    let output = ""
    let count = 0
    for (let i in input) {
        if(input[i] == "h") {
            output += chars[count - 1]

            count = 0
        }
        else if (input[i] != " ") {
            count ++
        }
        else {
            output += " "
        }
    }

    return output
}

encodeInput.addEventListener('input', () => {
    decodeInput.value = encode(encodeInput.value)
})
decodeInput.addEventListener('input', () => {
    encodeInput.value = decode(decodeInput.value)
})