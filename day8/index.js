const btn = document.getElementById('simplify');
const solution = document.getElementById('solution')

const times   = document.getElementById('times')
const rootVal = document.getElementById('rootVal')

/* 
Expected Input
{
    num: Float,
    place: Float
}

Expected Output 
{
    returns: $num rounded to $place
}
*/
function roundToPlace(num, place) {
    return Math.round(num / place) * place
}

/*
Expected Input
{   
    eq:{
        times:1,
        inside:5
    }
}
*/
function bruteForceSolve(eq) {
    let done = false;

    if (Number.isInteger(Math.sqrt(eq.inside))) {
        return Math.sqrt(eq.inside)
        //done = true;
    }

    if (eq.inner % 2 == 0) {
        for (let i = 0; i < eq.inside; i += 2) {
            for (let o = 0; o < eq.inside; o += 1) {
                if (roundToPlace(o * Math.sqrt(i), 0.00001) == roundToPlace(Math.sqrt(eq.inside), 0.00001)) {
                    return `${o * eq.times}√${i}`;
                    //done = true;
                }
            }
        }
        if (!done) {
            for (let i = 1; i < eq.inside; i += 2) {
                for (let o = 0; o < eq.inside; o += 1) {
                    if (roundToPlace(o * Math.sqrt(i), 0.00001) == roundToPlace(Math.sqrt(eq.inside), 0.00001)) {
                        return `${o * eq.times}√${i}`;
                        //done = true;
                    }
                }
            }
        }
    } 
    else {
        for (let i = 1; i < eq.inside; i += 2) {
            for (let o = 0; o < eq.inside; o += 1) {
                if (roundToPlace( o * Math.sqrt(i), 0.00001) == roundToPlace(Math.sqrt(eq.inside), 0.00001)) {
                    return `${o * eq.times}√${i}`;
                    //done = true;
                }
            }
        }
        if (!done) {
            for (let i = 0; i < eq.inside; i += 2) {
                for (let o = 0; o < eq.inside; o += 1) {
                    if (roundToPlace(o * Math.sqrt(i), 0.00001) == roundToPlace(Math.sqrt(eq.inside), 0.00001)) {
                        return `${o * eq.times}√${i}`
                        //done = true;
                    }
                }
            }
        }
    }
    if (!done) {
        return `√${eq.inside}`
       // done = true;
    }
}
/*
let input = {
    times:1,
    inside:75
}

bruteForceSolve(input)*/
function setSolution(sol) {
    solution.innerText = sol
}
btn.addEventListener('click', () => {
    const input = {
        times: times.value,
        inside: rootVal.value
    }
    const ans = bruteForceSolve(input);

    setSolution(ans)
})