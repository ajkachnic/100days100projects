const regenerate = document.getElementById('regen');
const quoteCont = document.getElementById('quote');
const url = "https://programming-quotes-api.herokuapp.com/quotes/random";


async function getQuote() {
    const res = await fetch(url);
    const json = await res.json()

    return json
}
async function setQuote() {
    const res = await getQuote()

    quoteCont.innerHTML = `<span class="quote-body">${res.en}</span><br><span class="author"> - ${res.author}</span>`
}
regenerate.addEventListener('click', async () => {
    await setQuote()
})

window.onload = async () => {
    await setQuote()
}