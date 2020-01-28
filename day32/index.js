const key = "ANXIGOEP";
const length = document.getElementById('length');
const phrase = document.getElementById('phrase');
const generate = document.getElementById('generate')

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  setInputFilter(length, function(value) {
      return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
const getPhrase = async (len) => {
    const res = await fetch(`https://random-word-api.herokuapp.com/word?key=${key}&number=${len}`)
    const json = await res.json()

    return json
}

const setPhrase = async () => {
    let res = await getPhrase(length.value);
    let formatted = res.join("-");

    phrase.innerText = formatted
}

generate.addEventListener('click', async () => {
    await setPhrase()
})