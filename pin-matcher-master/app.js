function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

document.getElementById('gen-pin').addEventListener('click', function () {
    const pin = getPin();
    const showPin = document.getElementById('show-pin');
    showPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-numbers');
    const prevNum = typedNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }
        else if (number === '<') {
            const digits = prevNum.split('');
            digits.pop();
            const remDigits = digits.join('');
            typedNumber.value = remDigits;
        }

    }
    else {
        const newNum = prevNum + number;
        typedNumber.value = newNum;
    }
})

document.getElementById('verify').addEventListener('click', function () {
    const showPin = document.getElementById('show-pin');
    const currentPin = showPin.value;

    const typedNumber = document.getElementById('typed-numbers');
    const typedPin = typedNumber.value;

    const alertS = document.getElementById('success');
    const alertF = document.getElementById('failure');

    if (typedPin === currentPin) {
        alertS.style.display = 'block';
        alertF.style.display = 'none';
    }
    else {
        alertS.style.display = 'none';
        alertF.style.display = 'block';
    }
})