var c = document.getElementById("myCanvas");
c.setAttribute('width', Math.round(window.innerWidth) + "px")
c.setAttribute('height', Math.ceil(window.innerHeight * .9) + "px")
let mousedown = false
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
let mouse = {x: 0, y: 0}
c.addEventListener('mousedown', e =>{
    mousedown = true
    mouse = {x: e.offsetX, y: e.offsetY}

})
c.addEventListener('mouseup', () => {
    mousedown = false
})
setInterval(() => {
    if(mousedown) {
        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, Math.round(Math.random() * 100), 0, 2 * Math.PI);                  
        ctx.stroke(); 
    }
    
    
}, 1000 / 30)