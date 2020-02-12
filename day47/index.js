const spin = document.getElementById('spin');

spin.addEventListener('click', () => {
    spin.classList.remove('spin-spinning')
    setTimeout(() => {
        spin.classList.add('spin-spinning')
    }, 10)
})