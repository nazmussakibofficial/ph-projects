
function getTotal(elementID) {
    const phoneTotal = document.getElementById(elementID);
    currentPhoneTotal = phoneTotal.innerText;
    const currentPhoneTotalPrice = parseInt(currentPhoneTotal);
    return currentPhoneTotalPrice;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTotal('phone-total');
    const currentCaseTotal = getTotal('case-total');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
    const tax = parseFloat((currentSubTotal * 0.1).toFixed(2));
    const taxElement = document.getElementById('tax');
    taxElement.innerText = tax;
    const finalTotal = currentSubTotal + tax;
    const finalTotalElement = document.getElementById('total');
    finalTotalElement.innerText = finalTotal;
}

function updateCaseNumber(isIncrease) {
    const caseNumber = document.getElementById('case-number');
    const caseNumberString = caseNumber.value;
    const previousCaseNumber = parseInt(caseNumberString);
    if (isIncrease === true) {
        let newCaseNumber = previousCaseNumber + 1;
        caseNumber.value = newCaseNumber;
        return newCaseNumber;
    }
    else {
        let newCaseNumber = previousCaseNumber - 1;
        caseNumber.value = newCaseNumber;
        return newCaseNumber;
    }

}

function updateCaseTotal(newCaseNumber) {
    const caseTotal = newCaseNumber * 59;
    const caseTotalPrice = document.getElementById('case-total');
    caseTotalPrice.innerText = caseTotal;
}

document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
})

function updatePhoneNumber(isIncrease) {
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberString = phoneNumber.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    if (isIncrease === true) {
        let newPhoneNumber = previousPhoneNumber + 1;
        phoneNumber.value = newPhoneNumber;
        return newPhoneNumber;
    }
    else {
        let newPhoneNumber = previousPhoneNumber - 1;
        phoneNumber.value = newPhoneNumber;
        return newPhoneNumber;
    }

}

function updatePhoneTotal(newPhoneNumber) {
    const phoneTotal = newPhoneNumber * 1219;
    const phoneTotalPrice = document.getElementById('phone-total');
    phoneTotalPrice.innerText = phoneTotal;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();
})

document.getElementById('phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();
})