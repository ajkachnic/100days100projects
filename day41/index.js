const color = document.getElementById('color');
const colorShown = document.getElementById('color-shown');
const root = document.documentElement;

function generateColor() {
    let letters = "0123456789ABCDEF";

    let color = '#';

    // generating 6 times as HTML color code consist 
    // of 6 letter or digits 
    for (var i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }

    return color
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ?
            v / 12.92 :
            Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
    return (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) /
        (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);
}
function isContrastGood(){
    let rgbText = hexToRgb(root.style.getPropertyValue('--text'))
    let text = Object.keys(rgbText).map(function (key) { return rgbText[key]; });

    let rgbBackground = hexToRgb(root.style.getPropertyValue('--background'))
    let background = Object.keys(rgbBackground).map(function (key) { return rgbBackground[key]; });
    let result = contrast( background, text)
        console.log(result)
    if(result > 4) {
        console.log('good')
    }
    else {
        console.log(text)
        if(root.style.getPropertyValue('--text') == "#202020") {
            root.style.setProperty('--text', "#ffffff")
        }
        else {
            root.style.setProperty('--text', "#202020")
        }
    }
}


root.addEventListener('keypress', e => {
    let generatedColor = generateColor()
    
    if (e.key === " ") {
        colorShown.innerText = `Color: ${generatedColor}`
        root.style.setProperty('--background', generatedColor)
        isContrastGood()
    }
})

window.addEventListener('load', () => {
    root.style.setProperty('--background', "#ffffff")
    root.style.setProperty('--text', "#202020")
})