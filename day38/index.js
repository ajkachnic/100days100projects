const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const run = document.getElementById('run');
const dayValue = document.getElementById('day-value')


function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
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
setInputFilter(document.getElementById('day'), function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

setInputFilter(document.getElementById('year'), function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

run.addEventListener('click', () => { 
    let date = new Date(parseInt(year.value), parseInt(month.value), day.value)
    let dayVal = date.toString().split(' ')[0]
    if(dayVal == "Tue") {
        dayValue.innerText = dayVal + "sday"
    }
    if(dayVal == "Thu") {
        dayValue.innerText = dayVal + "rsday"
    }
    if(dayVal == "Mon" || dayVal == "Sun" || dayVal == "Fri") {
        dayValue.innerText = dayVal + "day"
    }
    if(dayVal == "Wed") {
        dayValue.innerText = dayVal + "nesday"
    }
    if(dayVal == "Sat") {        
        dayValue.innerText = dayVal + "urday"
    }
})