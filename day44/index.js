const check = document.getElementById('check');

let checked = localStorage.getItem('checked') || false;

if (checked == "true") {
    check.classList.add('check-checked')
}
else {
    check.classList.add('check-null');
}

check.addEventListener('click', () => {
    if(checked == true || checked == "true") {
        check.classList.remove('check-checked')
        check.classList.add('check-null');
        localStorage.setItem('checked', false)
        checked = false
    }
    else {
        check.classList.remove('check-null');
        check.classList.add('check-checked')
        localStorage.setItem('checked', true)
        checked = true
    }
})