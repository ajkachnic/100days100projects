const root = document.documentElement;

window.addEventListener('mousemove', e => {
    root.style.setProperty('--left', (e.offsetX) + "px");
    root.style.setProperty('--top', (e.offsetY) + "px");
})