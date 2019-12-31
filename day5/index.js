const fromCurrency = document.getElementById('fromCurrency');
const fromNumber = document.getElementById('fromNumber');

const toCurrency = document.getElementById('toCurrency');
const toNumber = document.getElementById('toNumber');

const url = "https://api.exchangerate-api.com/v4/latest/"
let rates = {}

function getUrl(url, code) {
    return url + code
}
async function getData(code) {
    const res = await fetch(getUrl(url, code));
    const json = await res.json()
    console.log(json)
    return json
}
function roundToTwo(ex) {
    return Math.round(ex * 100) /100
}
function setTo() {
    const val = fromNumber.value;
    toNumber.value = roundToTwo(val * rates[toCurrency.value.toUpperCase()])
}

function setFrom() {
    const val = toNumber.value;
    fromNumber.value = roundToTwo(val / rates[toCurrency.value.toUpperCase()])
}
fromNumber.oninput = () => {
   setTo()
}
fromCurrency.onchange = async () => {
    let obj = await getData(fromCurrency.value)
    rates = obj.rates

    setTo()
}

toCurrency.onchange = () => {
    setFrom()
}
toNumber.oninput = () => {
setFrom()
}

window.onload = async() => {
    let obj = await getData(fromCurrency.value)
    rates = obj.rates
} 

