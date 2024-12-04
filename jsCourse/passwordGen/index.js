const passwordlen = 15 ;

function generatePass(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){
    const lowerCase = "qwertyuipñlkjhgfdsazxcvbnm";
    const upperCase = "QWERTYUIPOÑLKJHGFDSAZXCVBNM";
    const numbers = "1234567890";
    const symbols = "!\\ª#@|¢∞¬÷“”≠≠≠{}[]–…„";
    let allowedChar = "";
    let password = "";
    allowedChar += includeLowerCase ? lowerCase : "";
    allowedChar += includeUpperCase ? upperCase : "";
    allowedChar += includeNumber ? numbers : "";
    allowedChar += includeSymbols ? symbols : "";


    for(let i = 0 ; i<length ; i++){
        let randomIndex = Math.floor(Math.random() * allowedChar.length);
        password = password + allowedChar[randomIndex];
    }
    return password;
}
console.log(generatePass(passwordlen,true,true,true,false));

