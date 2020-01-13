
const start = document.getElementById('start');
const rate = document.getElementById('rate');
const end = document.getElementById('end');

function convertTo(val, rate) {
    if(rate >= 1) {
        return val * rate
    }
    return val * (parseFloat(rate) + 1)
}

function convertFrom(val, rate) {
    if(rate >= 1) {
        return val / rate
    }
    return val / (parseFloat(rate) + 1)
}

start.addEventListener('input', () => {
    end.value = convertTo(start.value, rate.value);
})

end.addEventListener('input', () => {
    start.value = convertFrom(end.value, rate.value);
})

rate.addEventListener('input', () => {
    end.value = convertTo(start.value, rate.value);
})

start.value = 10;
rate.value = 1.08;
end.value = convertTo(start.value, rate.value); 