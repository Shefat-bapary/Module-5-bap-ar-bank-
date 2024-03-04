document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const TotalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = TotalDepositElement.innerText;
    const previousTotalDeposit =  parseFloat(previousTotalDepositString);
    
    const totalDeposit = previousTotalDeposit + newDepositAmount;
    TotalDepositElement.innerText = totalDeposit;

    const previousTotalBalanceString = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceString.innerText);
    const totalBalance = previousTotalBalance + newDepositAmount;
    previousTotalBalanceString.innerText = totalBalance;

    depositField.value = '';
})