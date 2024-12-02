
const decreaseBtn= document.getElementById("decBtn")
const resetBtn= document.getElementById("resBtn")
const increaseBtn= document.getElementById("incBtn")
const countLabel=document.getElementById("countLabel")

let x = 0;

increaseBtn.onclick = function(){
    x++;
    countLabel.textContent = x;
} 
resetBtn.onclick = function(){
    countLabel.textContent = 0;
} 
decreaseBtn.onclick = function(){
    x--;
    countLabel.textContent = x;
} 