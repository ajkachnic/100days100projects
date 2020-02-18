const generate = document.getElementById('generate');
const name = document.getElementById('name');

async function run() {
    const res = await fetch("https://randomuser.me/api/")
    const json = await res.json()

    name.innerText = `${json.results[0].name.first} ${json.results[0].name.last}`
}
generate.addEventListener('click', () => {
    run()
})
run()