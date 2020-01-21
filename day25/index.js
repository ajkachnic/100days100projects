function translatePigLatin(str) {
    let newStr = str;
    if (newStr.slice(0,1).match(/[aeiouAEIOU]/)) {
      newStr = newStr + "way";
    }
    else {
      let moveLetters = "";
      while (newStr.slice(0,1).match(/[^aeiouAEIOU]/)) {
        moveLetters += newStr.slice(0,1);
        newStr = newStr.slice(1, newStr.length);
      }
      newStr = newStr + moveLetters + "ay";
    }
    return newStr;
  }
function translateWhole(str) {
    const arr = str.split(" ");
    let newStr = ""

    for(let i in arr) {
        newStr += `${translatePigLatin(arr[i])} `
    }
    return newStr.trim()
}

const input = document.getElementById('input')
const output = document.getElementById('output')
const convert = document.getElementById('convert')

convert.addEventListener('click', () => {

    output.innerText = translateWhole(input.value)

})
