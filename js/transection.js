document.getElementById('deposit-btn').addEventListener('click', function() {
    const deposit =document.getElementById('deposit');
    const balance =document.getElementById('balance');
    const depositAmount = document.getElementById('deposit-amount');

    if (depositAmount.value > 0) {
        const netAmount = parseFloat(balance.innerText) + parseFloat(depositAmount.value);
        deposit.innerText = depositAmount.value + '.00';
        balance.innerText = netAmount.toString() + '.00';
        depositAmount.value = '';
    }
    
    else{
        alert('Please enter the amount to deposit');
    }
});


document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdraw =document.getElementById('withdraw');
    const balance =document.getElementById('balance');
    const withdrawAmount = document.getElementById('withdraw-amount');

    if (parseFloat(balance.innerText) >= parseFloat(withdrawAmount.value)){
        const netAmount = parseFloat(balance.innerText) - parseFloat(withdrawAmount.value);
        withdraw.innerText = withdrawAmount.value + '.00';
        balance.innerText = netAmount.toString() + '.00';
        withdrawAmount.value = '';
    }
    
    else if (parseFloat(balance.innerText) < parseFloat(withdrawAmount.value)){
        alert('You have not enough money to withdraw');
    }

    else{
        alert('Please enter the amount to withdraw');
    }
});