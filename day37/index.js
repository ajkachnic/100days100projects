const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const error = document.getElementById('error');

function btoaUTF16 (sString) {
    var aUTF16CodeUnits = new Uint16Array(sString.length);
    Array.prototype.forEach.call(aUTF16CodeUnits, function (el, idx, arr) { arr[idx] = sString.charCodeAt(idx); });
    return btoa(String.fromCharCode.apply(null, new Uint8Array(aUTF16CodeUnits.buffer)));

}

function atobUTF16 (sBase64) {
    var sBinaryString = atob(sBase64), aBinaryView = new Uint8Array(sBinaryString.length);
    Array.prototype.forEach.call(aBinaryView, function (el, idx, arr) { arr[idx] = sBinaryString.charCodeAt(idx); });
    return String.fromCharCode.apply(null, new Uint16Array(aBinaryView.buffer));
}

encode.addEventListener('input', () => {
    try {
        let conv = btoaUTF16(encode.value)
        decode.value = conv
        error.innerText = ""
    }
    catch(err) {
        error.innerText = "Invalid Base64"
    }
})
encode.addEventListener('paste', () => {
    try {
        let conv = btoaUTF16(encode.value)
        decode.value = conv
        error.innerText = ""
    }
    catch(err) {
        error.innerText = "Invalid Base64"
    }
})

decode.addEventListener('input', () => {
    try {
        let conv = atobUTF16(decode.value)
        encode.value = conv
        error.innerText = ""
    }
    catch(err) {
        error.innerText = "Invalid Base64"
    }
})
decode.addEventListener('paste', () => {
    try {
        let conv = atobUTF16(decode.value)
        encode.value = conv
        error.innerText = ""
    }
    catch(err) {
        error.innerText = "Invalid Base64"
    }
})