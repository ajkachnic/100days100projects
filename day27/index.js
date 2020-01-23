const domBMI = document.getElementById('bmi');
const domFeet = document.getElementById('feet');
const domInches = document.getElementById('inches');
const domWeight = document.getElementById('weight');
const domCalc = document.getElementById('calc');

function roundToSecond(int) {
    return Math.round(int * 1000) / 1000
}
function feetInchesCombine(feet, inches) {
    return (parseFloat(feet) * 12) + parseFloat(inches)
}

function findBMI(height, weight) {
    return  roundToSecond(703 * weight / ( height ** 2))
}

function setBMI(bmi) {
    domBMI.innerText = `Your BMI is ${bmi}`
}


domCalc.addEventListener('click', () => {
    const feetInches = feetInchesCombine(domFeet.value, domInches.value);
    console.log(feetInches)
    console.log(domWeight.value)
    const bmi = findBMI(feetInches, domWeight.value);

    setBMI(bmi)
})