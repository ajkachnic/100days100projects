const code = document.getElementById('code');
const run = document.getElementById('run');


run.addEventListener('click', () => {
  eval(code.value);
})
code.addEventListener('change', () => {
  localStorage.setItem('code', code.value);
})

let prevCode = localStorage.getItem('code');
if (prevCode) code.value = prevCode