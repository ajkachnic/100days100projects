const keyOut = document.getElementById('key')
const keyCodeOut = document.getElementById('keycode');
const codeOut = document.getElementById('code');
document.addEventListener('keydown', e => {
    const keyName = e.key;
    const keyCode = e.keyCode;
    const code = e.code;

    keyCodeOut.innerText = keyCode
    keyOut.innerText = keyName
    codeOut.innerText = code

})