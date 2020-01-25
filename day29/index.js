let root = document.documentElement;
const yes = document.getElementById('yes')
const no = document.getElementById('no');
const undo = document.getElementById('undo');

yes.addEventListener('click', () => {
    root.style.setProperty("--yes", "100%");
    root.style.setProperty("--no", "0%")

    setTimeout(() => {
        undo.style.opacity = 1
    }, 1000)  
})


no.addEventListener('click', () => {
    root.style.setProperty("--yes", "0%");
    root.style.setProperty("--no", "100%")

    setTimeout(() => {
        undo.style.opacity = 1
    }, 1000)  
})

undo.addEventListener('click', () => {
    undo.style.opacity = 0
    setTimeout(() => {
        root.style.setProperty("--yes", "50%");
        root.style.setProperty("--no", "50%")
    }, 1000)  
})