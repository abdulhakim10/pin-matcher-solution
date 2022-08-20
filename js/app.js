function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('4 digit not found', pin);
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // display pin
    const pinField = document.getElementById('display-pin');
    pinField.value = pin;

    console.log(pin);
})

// pin tyeped 
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumberField = document.getElementById('typed-field');
    const previousTypedNumber = typedNumberField.value = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumberField.value = remainDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = typedNumberField.value = newTypedNumber;

    }

})

// verify pin

document.getElementById('verify-pin').addEventListener('click', function () {

    const pinField = document.getElementById('display-pin');
    const currentPin = pinField.value;

    const typedNumberField = document.getElementById('typed-field');
    const typedNumber = typedNumberField.value;

    const successMsg = document.getElementById('success-pin');
    const failMsg = document.getElementById('fail-pin');

    if (currentPin === typedNumber) {
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }
    else {
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})