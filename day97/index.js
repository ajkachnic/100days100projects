const stock = document.getElementById('stock');
const bar = document.getElementById('bar');

let green = "#65ff51";
let yellow = "#ffff11";
let red = "#ff0062";

var current = "green";

function setGreen() {
  stock.innerText = "Fully Stocked"
  bar.style.setProperty("--width", "100%");
  bar.style.setProperty("--color", green);
}
function setYellow() {
  stock.innerText = "In Stock"
  bar.style.setProperty("--width", "60%");
  bar.style.setProperty("--color", yellow);
}
function setRed() {
  stock.innerText = "Out of Stock"
  bar.style.setProperty("--width", "20%");
  bar.style.setProperty("--color", red);
}

setInterval(() => {
  if(current == "green") {
    setGreen()
    current = "yellow"
  }
  else if(current== "yellow") {
    setYellow();
    current = "red"
  }
  else if(current == "red") {
    setRed();
    current = "green"
  }
}, 1000)
