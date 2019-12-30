const search = document.getElementById('search')
const artist = document.getElementById('artist')
const name   = document.getElementById('name')
const lyrics = document.getElementById('lyrics')
const url    = "https://api.lyrics.ovh/v1"
async function getSong() {
    const finalUrl = `${url}/${artist.value.trim()}/${name.value.trim()}`;
    console.log(finalUrl)
    const response = await fetch(finalUrl);
    const json = await response.json()

    console.log(json)
    return json
}

async function setSong() {
    const lyricss = await getSong()
    if(!lyricss.lyrics) {
        lyrics.innerText = "Song Not Found :("
    }
    else {
        lyrics.innerText = lyricss.lyrics
    }
}

search.addEventListener('click',async  () => {
    await setSong()
})