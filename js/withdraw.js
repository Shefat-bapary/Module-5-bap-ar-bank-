document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmaount = parseFloat(withdrawField.value);

    const totalWithdrawElemant = document.getElementById('total-withdraw');
    const previousTotalWithdraw = parseFloat(totalWithdrawElemant.innerText);
    totalWithdrawElemant.innerText = previousTotalWithdraw + newWithdrawAmaount;

    const previousTotalBalanceString = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceString.innerText);
    const totalBalance = previousTotalBalance - newWithdrawAmaount;
    previousTotalBalanceString.innerText = totalBalance;


    withdrawField.value = '';
})