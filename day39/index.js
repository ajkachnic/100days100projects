const eq = document.getElementById('eq');
const answer = document.getElementById('answer');
const  solve = document.getElementById('solve');

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
setInputFilter(document.getElementById('eq'), function (value) {
    //return /^\d*\.?\d*$?\d /.test(value); // Allow digits and '.' only, using a RegExp
    return /^[0-9\s]*$/.test(value)
});


function gcf(nums) {    
    let greatest = 1
    for(let i = 0; i <= Math.min(...nums); i ++) {
        for(let o = 0; o < nums.length; o ++) {
            if(nums[o] % i !== 0) {
                break;
            }
            else {
                if(o == nums.length - 1) {
                    greatest = i
                }
            }
        }
    }
    return greatest
}


solve.addEventListener('click', () => { 
    const arr = eq.value.split(/ +/).map(i => parseInt(i));

    const ans = gcf(arr) 

    answer.innerText = ans
})