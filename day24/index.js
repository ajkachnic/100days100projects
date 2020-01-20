const bill = document.getElementById('cost');
const percent = document.getElementById('percent');
const spliting = document.getElementById('spliting');

const displayed = document.getElementById('displayed')

const check = document.getElementById('check');
const round = val =>  {
    return Math.round(val * 100) / 100;
}

check.addEventListener('click', () => {
    const percentOfBill = round(bill.value * percent.value / 100);
    const percentSplit = round(percentOfBill / spliting.value);

    const temp = `Tip Per Person: \$${percentSplit}
    Total Tip: \$${percentOfBill}`

    displayed.innerText = temp
})