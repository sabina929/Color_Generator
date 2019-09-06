const labelRed = document.querySelector(".redText");
const labelGreen = document.querySelector(".greenText");
const labelBlue = document.querySelector(".blueText");
const heading3 = document.querySelector("h3");

const inputRed = document.querySelector("#red");
const inputGreen = document.querySelector("#green");
const inputBlue = document.querySelector("#blue");
const bodyBg = document.querySelector('body');

inputRed.addEventListener("input", changeBg);
inputGreen.addEventListener("input", changeBg);
inputBlue.addEventListener("input", changeBg);


function changeBg() {
    let redColor = parseInt(inputRed.value);
    let greenColor = parseInt(inputGreen.value);
    let blueColor = parseInt(inputBlue.value);
    let rgbColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    let bC = bodyBg.style.backgroundColor = rgbColor;
    // console.log(bC);
    heading3.textContent = bC;

    let regex = /\d+/g;
    let testColor = bC.match(regex);
    let sum = testColor.reduce((acc, num) => {
        return acc + Number(num);
    }, 0);

    if (sum < 382) {
        labelRed.style.color = "rgba(255, 255, 255, .75)";
        labelGreen.style.color = "rgba(255, 255, 255, .75)";
        labelBlue.style.color = "rgba(255, 255, 255, .75)";
        heading3.style.color = "rgba(255, 255, 255, .75)";

    } else if (sum >= 382) {
        labelRed.style.color = "rgb(0, 0, 0)";
        labelGreen.style.color = "rgb(0, 0, 0)";
        labelBlue.style.color = "rgb(0, 0, 0)";
        heading3.style.color = "rgb(0, 0, 0)";
    }
}
// changeBg();

heading3.addEventListener("input", givenRgb, false);

function givenRgb() {
    let givenColor = heading3.textContent;

    let rgbColor = givenColor;
    let bC = bodyBg.style.backgroundColor = rgbColor;
    heading3.textContent = bC;


    let regex = /\d+/g;
    let testColor = bC.match(regex);
    let sum = testColor.reduce((acc, num) => {
        return acc + Number(num);
    }, 0);

    if (sum < 382) {
        labelRed.style.color = "rgba(255, 255, 255, .75)";
        labelGreen.style.color = "rgba(255, 255, 255, .75)";
        labelBlue.style.color = "rgba(255, 255, 255, .75)";
        heading3.style.color = "rgba(255, 255, 255, .75)";

    } else if (sum >= 382) {
        labelRed.style.color = "rgb(0, 0, 0)";
        labelGreen.style.color = "rgb(0, 0, 0)";
        labelBlue.style.color = "rgb(0, 0, 0)";
        heading3.style.color = "rgb(0, 0, 0)";
    }
}
// givenRgb();