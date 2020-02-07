const preleet = document.getElementById('preleet');
const run = document.getElementById('run');
const result = document.getElementById('result');

function leetify(txt) {
    leetified = ""
    const leet = {
        a:"4",
        e:"3",
        g:"9",
        i:"!",
        l:"1",
        o:"0",
        s:"5",
        t:"7"
    }
    
    for(let char of txt) {
        if(Object.keys(leet).includes(char.toLowerCase())) {
            leetified += leet[char.toLowerCase()]
        }
        else {
            leetified += char
        }
    }

    return leetified
}

run.addEventListener('click', () => {
    result.innerText = leetify(preleet.value)
})