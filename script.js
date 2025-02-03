document.addEventListener('DOMContentLoaded', function(){
    const billAmountInput = document.getElementById('billAmount');
    const pTipInput = document.getElementById('pTip');
    const tipAmountInput = document.getElementById('tipAmount');

    function calculateTip(){
        const billAmount = parseFloat(billAmountInput.value);
        const pTip = parseFloat(pTipInput.value);
        if(!isNaN(billAmount) && !isNaN(pTip)){
            const tipAmount = (billAmount * pTip) / 100;
            tipAmountInput.value = tipAmount.toFixed(2);
        }else{
            tipAmountInput.value = '';
        }
    }

    billAmountInput.addEventListener('input', calculateTip)
    pTipInput.addEventListener('input', calculateTip)
})
