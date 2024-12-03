

const x = document.getElementById("idInput");
const ctof = document.getElementById("cTof");
const ftoc  = document.getElementById("fToc");
let phrase = document.getElementById("resultId");


let result;

function convert(){
    let temp = Number(x.value);

    if(ctof.checked){
        result = temp * 9 / 5 + 32;
        phrase.textContent = `${temp}°C = ${result}°F`;

    }
    else if(ftoc.checked){
        result = (temp - 32) * (5/9);
        phrase.textContent = `${temp}°F = ${result}°C`;

    }
}

