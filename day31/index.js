const metronome = document.getElementById('metronome');
const tempo = document.getElementById('tempo');

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
  setInputFilter(tempo, function(value) {
      return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
let running = false;
let interval;
metronome.addEventListener('click', () => {
    if(tempo.value != 0 && tempo.value != "") {
        if(!running) {
            interval = setInterval(() => {
                metronome.classList.add('metronome__on');
                setTimeout(() => metronome.classList.remove('metronome__on'), 100)
                running = true
            }, 60 * 1000 / tempo.value)
        } else {
            clearInterval(interval)
            running = false
        }
    }
    
})
tempo.addEventListener('change', () => {
    if(tempo.value != 0 && tempo.value != "") {
        clearInterval(interval)
        interval = setInterval(() => {
            metronome.classList.add('metronome__on');
            setTimeout(() => metronome.classList.remove('metronome__on'), 100)
            running = true
        }, 60 * 1000 / tempo.value)}
})