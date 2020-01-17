const phrase = document.getElementById('phrase');
const rephrase = document.getElementById('rephrase');
const rephrased = document.getElementById('rephrased');

const url = "https://www.dictionaryapi.com/api/v3/references/ithesaurus/json";
const key = "a1cfb267-8105-4240-a992-7d2231fb7a54";

rephrase.addEventListener('click', async () => {
    const word = phrase.value

    let res = await fetch(`${url}/${word}?key=${key}`);
    res = await res.json()
    let words = ""
    try {
        words = res[0].meta.syns[0]
    }
    catch {
        words = [word]
    }

    let html = `<ul>`
    words.map(i => {
        html += `\n<li>${i}</li>`
    })

    html += `\n</ul>`

    console.log(html)

    rephrased.innerHTML = html
})