const min = Number(window.prompt("Enter min:"));
const max = Number(window.prompt("Enter max :"));
const random = Number(Math.floor(Math.random() * (max - min )) + min);

let tries= 0;
let x;


while(true){
    x = Number(window.prompt(`Guess number between ${min} - ${max}`));
    tries++;

    if(isNaN(x) || x>max || x<min){
        window.alert("Enter valid number.");
    }

    else{
    if(x==random){
        window.alert(`Congrats!! ${x} is true number in ${tries} tries`);
        break;

    }else{
        if(x>random)window.alert("Lower");       
        else window.alert("Higher");
            
        
    }
}
}

