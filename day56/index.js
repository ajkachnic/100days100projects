const root = document.documentElement
const val = document.getElementById('val');

val.addEventListener('change', () => {
    root.style.setProperty("--time", `${val.value}s`)
})

root.style.setProperty("--time", `${val.value}s`)