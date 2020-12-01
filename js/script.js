document.addEventListener('DOMContentLoaded', ()=>{

let inputWhat1 = document.querySelectorAll('input')[0];
    inputSum1 = document.querySelectorAll('input')[1];
    inputWha2 = document.querySelectorAll('input')[2];
    inputSum2 = document.querySelectorAll('input')[3];
    checkboxCredit = document.querySelectorAll('input')[4];
    inputTerm3= document.querySelectorAll('input')[5];
    inputSum3 = document.querySelectorAll('input')[6];
    inputPrecent3 = document.querySelectorAll('input')[7];
    checkboxContribution = document.querySelectorAll('input')[8];
    inputTerm4 = document.querySelectorAll('input')[9];
    inputSum4 = document.querySelectorAll('input')[10];
    inputPrecent4 = document.querySelectorAll('input')[11];
    push1 = document.querySelectorAll('button')[0];
    push2 = document.querySelectorAll('button')[1];
    push3 = document.querySelectorAll('button')[2];
    push4 = document.querySelectorAll('button')[3];
    total = document.querySelectorAll('button')[4];
    sumExpenses = document.querySelectorAll('#qout')[0];
    sumCredit = document.querySelectorAll('#qout')[1];
    sumRevenue = document.querySelectorAll('#qout')[2];
    sumContribution = document.querySelectorAll('#qout')[3];
    sumPrice = document.querySelectorAll('#qout')[4];
    levelRevenue = document.querySelectorAll('#qout')[5];
    Credit = document.querySelector('#calc2');
    Contribution = document.querySelector('#calc3');
   
let price ={

    expenses : [],
    expensesCredit : [],
    revenue : [],
    revenueContribution : [],
    sumE : 0,
    sumC : 0,
    sumR : 0,
    sumRC : 0,
};
console.log(price);

function sExpenses() {

    let sum = 0;

    for (let i = 0; i < price.expenses.length; i++) {
        
        sum += price.expenses[i];
        
    }
    
    return sum;

};

function sCredit() {

    let sum = 0;

    for (let i = 0; i < price.expensesCredit.length; i++) {
        
        sum += price.expensesCredit[i];
    }
    return sum;

};
function sRevenue() {

    let sum = 0;

    for (let i = 0; i < price.revenue.length; i++) {
        
        sum += price.revenue[i];
    }
    return sum;

};
function sContribution() {

    let sum = 0;

    for (let i = 0; i < price.revenueContribution.length; i++) {
        
        sum += price.revenueContribution[i];
    }
    return sum;

};

function pushExpenses(a){
    
    

price.expenses.push(a);

let sum=sExpenses();

sumExpenses.textContent = sum;
price.sumE=sum;


};

function pushCredit(a){

    price.expensesCredit.push(a);
    
    let sum=sCredit();
    
    sumCredit.textContent = sum;
    price.sumC=sum;
    
    
};

function pushRevenue(a){

    price.revenue.push(a);
    
    let sum=sRevenue();
    
    sumRevenue.textContent = sum;
    price.sumR = sum;
    
    
};
function pushContribution(a){

    price.revenueContribution.push(a);
    
    let sum=sContribution();
    
    sumContribution.textContent = sum;
    price.sumRC=sum;
    
    
};

function sumPriceTotal ()
{
    let sumExpenses = price.sumE + price.sumC;
        sumRevenue = price.sumR + price.sumRC;
        dayBuget= (sumRevenue - sumExpenses)/30;
        sumPrice.textContent = dayBuget.toFixed(2);
    if (dayBuget < 500) {
        levelRevenue.textContent = 'Низкий уровень дохода';
        levelRevenue.style.color = 'red';
    } else if (dayBuget >500 && dayBuget < 1000) {
        levelRevenue.textContent = ' Средний уровень дохода';
        levelRevenue.style.color = 'yellow';

    } else if (dayBuget >1000) {
        levelRevenue.textContent = 'Высокий  уровень дохода';
        levelRevenue.style.color = 'green';

    }

};

function checkedCredit(){
    
    if (checkboxCredit.checked) {
        Credit.style.opacity = 'none';
            if(inputTerm3.hasAttribute('disabled')){
                inputTerm3.removeAttribute('disabled');
            }else if (inputSum3.hasAttribute('disabled')){
                inputSum3.removeAttribute('disabled');
            }else if (!inputPrecent3.hasAttribute('disabled')){
                inputPrecent3.removeAttribute('disabled');
            }else if (!push3.hasAttribute('disabled')){
                push3.removeAttribute('disabled');
            };
    }else{
        Credit.style.opacity = '.4';
            if(!inputTerm3.hasAttribute('disabled')){
                inputTerm3.setAttribute('disabled', 'disabled');
            }else if (!inputSum3.hasAttribute('disabled')){
                inputSum3.setAttribute('disabled', 'disabled');
            }else if (!inputPrecent3.hasAttribute('disabled' )){
                inputPrecent3.setAttribute('disabled' , 'disabled');
            }else if (!push3.hasAttribute('disabled')){
                push3.setAttribute('disabled' , 'disabled');
            }
    };
};

function checkedContribution(){
    
    if (!checkboxContribution.checked) {
        Credit.style.opacity = '.4';
        if(!inputTerm4.hasAttribute('disabled')){
            inputTerm4.addAttribute('disabled');
        }else if (!inputSum4.hasAttribute('disabled')){
            inputSum4.addAttribute('disabled');
        }else if (!inputPrecent4.hasAttribute('disabled')){
            inputPrecent4.addAttribute('disabled');
        }else if (!push4.hasAttribute('disabled')){
            push4.addAttribute('disabled');
        }
    }else{
        Credit.style.opacity = 'none';
        if(inputTerm3.hasAttribute('disabled')){
            inputTerm3.removeAttribute('disabled');
        }else if (inputSum3.hasAttribute('disabled')){
            inputSum3.removeAttribute('disabled');
        }else if (inputPrecent3.hasAttribute('disabled')){
            inputPrecent3.removeAttribute('disabled');
        }else if (push3.hasAttribute('disabled')){
            push3.removeAttribute('disabled');
        }
    };

};

push1.addEventListener('click',()=>{

    pushExpenses(+inputSum1.value);


});
push2.addEventListener('click',()=>{

    pushRevenue(+inputSum2.value);


});

push3.addEventListener('click',()=>{
    let precent =((+inputSum3.value * +inputPrecent3)/100)/+inputTerm3;
        sum = +inputSum3.value / +inputTerm3;
        daySum = precent + sum;

    pushCredit(daySum);


});

push4.addEventListener('click',()=>{

    let d = +inputSum4.value * Math.row((1 + ( +inputPrecent4.value/12 )),+inputTerm4);

    pushContribution(+d);


});

total.addEventListener('click',()=>{


    sumPriceTotal(+inputSum1.value);


});

Credit.addEventListener('click',()=>{

    checkedCredit();

});
Contribution.addEventListener('click',()=>{

    checkedContribution();

});




















});