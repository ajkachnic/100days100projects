let open = document.getElementById('open');
let close = document.getElementById('close');
let nav = document.getElementById('nav');

open.addEventListener('click', () => {
    open.classList.add('open__hidden')
    nav.classList.remove('nav__hidden')
})


close.addEventListener('click', () => {
    open.classList.remove('open__hidden')
    nav.classList.add('nav__hidden')
})
