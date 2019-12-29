const jokeArea = document.getElementById('joke')
const another = document.getElementById('another')
const url = "https://icanhazdadjoke.com/"
const options = {
    method:'GET',
    headers:{
        Accept:"application/json"
    }
}

async function getJoke() {
    const response = await fetch(url, options);
    console.log(response)
    const json = await response.json()
    console.log(json)
    return json
}

async function setJoke() {
    const joke = await getJoke()
    jokeArea.innerText = joke.joke
}
setJoke()

another.addEventListener('click', () => setJoke())