const code = document.getElementById('code');

let codeString = ""
for(let i = 0; i < 6; i ++) {
  codeString += Math.floor(Math.random() * 10);
}
code.innerText = codeString