const checked = document.getElementById('checked');
const root = document.documentElement;

let mode = true

mode = checked.checked;

const toggleTheme = () => {
    if(mode == true) {
        root.style.setProperty("--bg", "#101010")
        root.style.setProperty("--bg-light", "#303030")
        mode = false

    }
    else if (mode == false) {
        root.style.setProperty("--bg", "#fff")
        root.style.setProperty("--bg-light", "#eee")
        mode = true
    }
}

checked.addEventListener('click', () => { 
    toggleTheme()
})


toggleTheme()
