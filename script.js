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

// function getValue(elementId) {
//     const element = document.getElementById(elementId);
//     const value = validation(element);
//     return value;
// }

function calculate() {
    const food = getValue('food');
    const rent = getValue('rent');
    const cloth = getValue('cloth');
    const total = food + cloth + rent;
    return total;
}


function validation(selector) {
    const elementString = selector.value;
    console.log(elementString);
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
    const selfValue = getValue('save');
    console.log(selfValue);
    const balancestring = document.getElementById('balance').innerText;
    let balance = parseInt(balancestring);
    if(isNaN(balance)){
        balance = 0;
    }
    const save = (balance * selfValue) / 100;
    const remaining = balance - save;

    const totalSave = document.getElementById('total-save');
    totalSave.innerText = Math.ceil(save);
    const remainbalance = document.getElementById('remainbalance');
    remainbalance.innerText = Math.floor(remaining);

    const savehidden = document.getElementById('savehidden');
    savehidden.style.display = 'block'
})




const inputs = document.querySelectorAll('input');
for(const input of inputs){
    input.addEventListener('blur', function (event) {
        validation(input)
    })
}