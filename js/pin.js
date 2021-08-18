function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin / 1000 >= 1) document.getElementById('pin-display').value = pin;
    else {
        // console.log('3 digit found');
        generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const display = document.getElementById('keypad-display');
    if (isNaN(number)) {
        if (number == "C") {
            display.value = "";
        }
    }
    else {
        const oldNumber = display.value;
        const newNumber = oldNumber + number;
        display.value = newNumber;
    }

});
function verifyPic(){
    // console.log('verify pin')
    const pinNumber = document.getElementById('pin-display').value;
    const typedNumber = document.getElementById('keypad-display').value;
    const failText = document.getElementById('fail-message');
    const successText = document.getElementById('success-message');
    if(pinNumber==typedNumber){
        successText.style.display="block";
        failText.style.display="none";
    }
    else{
        successText.style.display="none";
        failText.style.display="block";
    }
}