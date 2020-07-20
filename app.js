let randomColor;

const generateHexaCode = () => {
    const hexaCode = `#${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`;
    return hexaCode;
}

const hexaToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `(${r},${g},${b})`;
}

const generateNewColor = () => {
    let hexCode = generateHexaCode();
    let rgbCode = hexaToRgb(hexCode);

    return {
        'hexCode': hexCode,
        'rgbCode': rgbCode
    }
}

const hexaCodeDom = document.getElementById("hexacode");
const rgbCodeDom = document.getElementById("rgbcode");
const mainContentDom = document.getElementById("maincontent");
const titleDom = document.getElementById("title");

hexaCodeDom.innerText = '#FFFFFF';
rgbCodeDom.innerText = '(255,255,255)';
mainContentDom.style.backgroundColor = '#FFFFFF';

document.getElementById("clickme").addEventListener('click', function(){
    randomColor = generateNewColor();
    hexaCodeDom.innerText = randomColor.hexCode;
    rgbCodeDom.innerText = randomColor.rgbCode;
    mainContentDom.style.backgroundColor = randomColor.hexCode;
    titleDom.style.color = randomColor.hexCode;
    this.style.border = `5px solid ${randomColor.hexCode}`
});

