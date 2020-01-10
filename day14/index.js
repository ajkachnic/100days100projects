const DOMdate = document.getElementById('date')
const DOMtime = document.getElementById('time');
const DOMtheme= document.getElementById('theme');
const DOMcontent = document.getElementById('content');

const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
const current = new Date()

let hours = current.getHours()
let minutes = current.getMinutes()
let ampm = "AM"

if (hours > 12) {
    hours -= 12
    ampm = "PM"
}
console.log(`${hours}:${minutes} ${ampm}`)


const getTime = () => {
    const current = new Date()
    let hours = current.getHours()
    let minutes = current.getMinutes()
    let ampm = "AM"

    if (hours > 12) {
        hours -= 12
        ampm = "PM"
    }
    return `${hours}:${minutes} ${ampm}`
}

const getDate = () => {
    const current = new Date()
    let month = current.getMonth()
    let day = current.getDate()

    let year = current.getFullYear()

    return `${monthNames[month]} ${day}, ${year}`
}

const setTime = () => {
    const time = getTime()
    DOMtime.innerText = time;
}

const setDate = () => {
    const date = getDate()
    DOMdate.innerText = date;
}

setTime()
setDate()


setInterval(setTime, 500)
setInterval(setDate, 1000)
const toggleTheme = () => {
    DOMcontent.classList.toggle('dark');
    DOMcontent.classList.toggle('light');
}
DOMtheme.addEventListener('click', () => {
    toggleTheme()
})