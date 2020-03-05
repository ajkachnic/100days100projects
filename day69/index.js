const dont = document.getElementById('dont');

dont.addEventListener('click', () => {
    dont.innerText = "You failed. But don't press me again"
    setTimeout(() => {
        window.location.reload()
    }, 2000)
})

