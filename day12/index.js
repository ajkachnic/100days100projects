let domShift = document.getElementById('shift');
let domText = document.getElementById('text');
let decrypt = document.getElementById('decrypt');
let encrypt = document.getElementById('encrypt');


const caesar = function (str, amount) {

    if (amount < 0)
        return caesar(str, amount + 26);

    var output = '';
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;

    }
    return output;

};

encrypt.addEventListener('click', () => {
    const text = domText.value;
    const newShift = -1 * domShift.value

    domText.value = caesar(text, newShift);
})

decrypt.addEventListener('click', () => {
    const text = domText.value;
    const newShift = domShift.value * 1;

    domText.value = caesar(text, newShift);
})

domShift.value = 13