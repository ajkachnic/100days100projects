const another = document.getElementById('another');
const title = document.getElementById('title');
const lang = document.getElementById('lang')
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
const langs = [{
        lang: "English",
        phrase: "Hello"
    },
    {
        lang: "Spanish",
        phrase: "Hola"
    },
    {
        lang: "French",
        phrase: "Bonjour"
    },
    {
        lang: "German",
        phrase: "Guten Tag"
    },
    {
        lang: "German",
        phrase: "Hallo"
    },
    {
        lang: "Italian",
        phrase: "Ciao"
    },
    {
        lang: "Portuguese",
        phrase: "Olá"
    },
    {
        lang: "Hindi",
        phrase: "Namaste"
    },
    {
        lang: "Russian",
        phrase: "Здравствуйте"
    },
    {
        lang: "Japanese",
        phrase: "こんにちは"
    },
    {
        lang:"Irish",
        phrase:"Dia dhuit"
    },
    {
        lang:"Polish",
        phrase:"Witaj"
    },
    {
        lang:"Latin",
        phrase:"Salve"
    },
    {
        lang:"Greek",
        phrase:"Γειά σου"
    }
]



another.addEventListener('click', () => {
    const item = langs.random();

    title.innerText = item.phrase;
    lang.innerText = `- ${item.lang}`;
})