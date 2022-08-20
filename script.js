function getValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseInt(elementValueString);
    if(isNaN(elementValue)){
        return 0;
    } else if(elementValue < 1) {
        alert('You can\'t add a negative value !!!')
        element.value = '';
        return 0;
    } else {
        return elementValue;
    }
}


function calculate() {
    const food = getValue('food');
    const rent = getValue('rent');
    const cloth = getValue('cloth');
    const total = food + cloth + rent;
    return total;
}


function validation(selector) {
    const elementString = selector.value;
    let elementValue = parseInt(elementString)
    if(elementValue == ''){
        alert('Empty fields are denied. You should add value !!!');
        return 0;
    }else if(isNaN(elementValue)){
        alert('You must add numbers not the text !!!');
        selector.value = '';
        return 0;
    } else if(elementValue < 1){
        alert('Negative values are denied !!!')
        selector.value = '';
        return false;
    } else {
        return elementValue;
    }
}



// Utilites function ends here===========================

document.getElementById('btn-calculate').addEventListener('click', function () {
    const total = calculate();
    const totalexpense = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    const getIncome = getValue('income');
    if(total > getIncome){
        alert('Expense can\'t be higher than your income');
        totalexpense.innerText = 0;
        balance.innerText = getIncome;
    } else {
        balance.innerText = getIncome - total;
        totalexpense.innerText = total;
    }

    const showResult = document.getElementById('resultshow');
    showResult.style.display = 'block';
})




//saving functionality======================

document.getElementById('btn-save').addEventListener('click', function () {
    let selfValue = getValue('save');
    const income = getValue('income')
    const balancestring = document.getElementById('balance').innerText;
    let balance = parseInt(balancestring);
    if(isNaN(balance)){
        balance = 0;
    }
    let save;
    if(selfValue>=100){
        alert('Savings shouldn\'t be greager or equal to your income !!!')
        save = 0
    } else {
        save = (income * selfValue) / 100;
    }
    if(balance == 0){
        const remaining = income - save;
        const totalSave = document.getElementById('total-save');
        totalSave.innerText = Math.ceil(save);
        const remainbalance = document.getElementById('remainbalance');
        remainbalance.innerText = Math.floor(remaining);
    } else {
        if(save> balance){
            alert('Save must be less than your balance');
        } else {
            const remaining = balance - save;
            const totalSave = document.getElementById('total-save');
            totalSave.innerText = Math.ceil(save);
            const remainbalance = document.getElementById('remainbalance');
            remainbalance.innerText = Math.floor(remaining);
        }

    }

    const savehidden = document.getElementById('savehidden');
    savehidden.style.display = 'block'
})




const inputs = document.querySelectorAll('input');
for(const input of inputs){
    input.addEventListener('blur', function (event) {
        validation(input)
    })
}