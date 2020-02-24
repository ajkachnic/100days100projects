function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "paste"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.value = this.value[0] || ""
                this.oldValue = this.value[0];
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue[0];
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

const regex = /^[0-9]{0,1}/

const codes = document.querySelectorAll('.code');
codes[0].focus()
codes.forEach((code, i) => {
    setInputFilter(code, function (value) {
        return regex.test(value); // Allow digits and '.' only, using a RegExp
    });
    code.addEventListener('keydown', (event) => {
        if(event.key <= 9 && event.key >= 0) {
            setTimeout(() => {
                codes[i + 1].focus()
            }, 50)
        }
        else if(event.key == "Backspace") {
            setTimeout(() => {
                codes[i - 1].focus()
            }, 50)
        }
    })
})