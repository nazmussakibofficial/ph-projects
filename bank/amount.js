document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit');
    const deposit = depositField.value;

    const depositTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance-total');
    const balanceOut = balanceTotal.innerText;
    const depositOut = depositTotal.innerText;
    const dTotal = parseFloat(deposit) + parseFloat(depositOut);
    const bTotal = parseFloat(deposit) + parseFloat(balanceOut);
    depositTotal.innerText = dTotal;
    balanceTotal.innerText = bTotal;
    depositField.value = '';

})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('user-withdraw');
    const withdraw = withdrawField.value;
    withdrawField.value = '';
    if (isNaN(parseFloat(withdraw))) {
        alert('Provide valid input');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const balanceTotal = document.getElementById('balance-total');
    const balanceOut = balanceTotal.innerText;
    const withdrawOut = withdrawTotal.innerText;


    if (parseFloat(withdraw) > parseFloat(balanceOut)) {
        alert('Money exceeds balance');
        return;
    }

    const wTotal = parseFloat(withdraw) + parseFloat(withdrawOut);
    const bTotal = parseFloat(balanceOut) - parseFloat(withdraw);
    withdrawTotal.innerText = wTotal;
    balanceTotal.innerText = bTotal;


})