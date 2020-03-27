const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const result = document.getElementById('result');
const run = document.getElementById('run');

function runTheorem(a, b, c) {
  if(a != "" && b != "" ) {

    if(c != "" ) {
      if((a ** 2) + (b ** 2) == (c ** 2)) {
        return true
      }
      else {
        return false
      }6.5
    } else {
      return `c = ${Math.sqrt((a ** 2) + (b ** 2))}`
    }
  }
  else if(a != "") {
    if(c != "") {
      return `b = ${Math.sqrt((c ** 2) - (a ** 2))}`
    }
    else {
      return `Not solvable`
    }
  }
  else if(b != "") {
    if(c != "") {
      return `a = ${Math.sqrt((c ** 2) - (b ** 2))}`
    }
    else {
      return `Not solvable`
    }
  }
  else {
      return `Not solvable`
  }
}

run.addEventListener('click', () => {
  result.innerText = runTheorem(a.value , b.value, c.value)
})