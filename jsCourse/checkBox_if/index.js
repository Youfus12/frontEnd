const subBtn = document.getElementById("subCheck");
const visaBtn = document.getElementById("visaCheck");
const masterCard = document.getElementById("masterCheck");

const submitBtn = document.getElementById("submitBtn");
const phrase = document.getElementById("endPhrase");
 
//Using switch case just to learn syntax
submitBtn.onclick = function(){

    if(subBtn.checked){
        switch(true){
            case (visaBtn.checked):
                phrase.textContent = `You are subscribed, with Visa Card`;
                break;
            case  (masterCard.checked):
                phrase.textContent =  `You are subscribed, with Master card`;
                break;
        }
    }else{
        phrase.textContent = `You are not subscribed!!`;
    }
}