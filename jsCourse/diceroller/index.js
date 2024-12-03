

function diceRoll(){
    const  rolls = document.getElementById("inputId").value;
    const  result = document.getElementById("diceResult");
    const  resutlImg = document.getElementById("diceImages");
    let imgs = [];
    let results = [];

    for(let i = 0; i<rolls; i++){
        let dice = Math.floor(Math.random() * 6) + 1;
        results.push(dice);
        imgs.push(`<img src = "images/${dice}.png">`); // we store this value in the list, so it will  be executed in html code
    }
    result.textContent = " The results are :"+ results.join("-");
    resutlImg.innerHTML = imgs.join("");
}