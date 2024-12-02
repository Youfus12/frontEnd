let max;
let min;
let random;
let result = document.getElementById("myLabel");
const sub = document.getElementById("mySub");

sub.onclick = function(){
    max = Number(document.getElementById("myMax").value);
    min = Number(document.getElementById("myMin").value);

    random = Math.floor(Math.random() * (max - min) ) + min;

    result.textContent = random
    
}


