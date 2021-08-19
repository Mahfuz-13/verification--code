function getPin(){
    const pinNumber = Math.round(Math.random() *10000);
    const pinString = pinNumber + '';
    if (pinString.length == 4){
        return pinNumber;
    }
    else{
        return getPin();
    }
}

function generatePin (){
    document.getElementById('display-pin').value = getPin();
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            document.getElementById('typed-numbers').value = '';
        }
    }
    else{
        const calc = document.getElementById('typed-numbers');
        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }
})



function verifyBtn(){
    const pinInput = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('typed-numbers').value;
    const success = document.getElementById('pin-success');
    const fail = document.getElementById('pin-fail');
    if(pinInput == calcInput){
        
        success.style.display = 'block';
        fail.style.display = 'none'
    }
    else{
        
        fail.style.display = 'block'
        success.style.display = 'none';
    }
}