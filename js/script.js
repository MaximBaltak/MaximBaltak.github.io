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
    no= document.querySelectorAll('#no');
    list= document.querySelector('.list');
   
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

sumExpenses.textContent = sum.toFixed(2);
price.sumE=sum;



};

function pushCredit(a){

    price.expensesCredit.push(a);
    
    let sum=sCredit();
    
    sumCredit.textContent =sum.toFixed(2);
    price.sumC=sum;
    
    
};

function pushRevenue(a){

    price.revenue.push(a);
    
    let sum=sRevenue();
    
    sumRevenue.textContent = sum.toFixed(2) ;
    price.sumR = sum;
   
    
};
function pushContribution(a){

    price.revenueContribution.push(a);
    
    let sum=sContribution();
    
    sumContribution.textContent = sum.toFixed(2);
    price.sumRC=sum;
   
    
};

function sumPriceTotal ()
{
    let sumExpenses = price.sumE + price.sumC;
        sumRevenue = price.sumR + price.sumRC;
        dayBuget= (sumRevenue - sumExpenses)/30;
        sumPrice.textContent = dayBuget.toFixed(2)+' '+'р. в день';
    if (dayBuget <= 0 ) {
            levelRevenue.textContent = 'Бедность';
            levelRevenue.style.color = '#800000';
    
    }else if (dayBuget < 500) {
        levelRevenue.textContent = 'Низкий уровень дохода';
        levelRevenue.style.color = 'red';
    } else if (dayBuget >500 && dayBuget < 1000) {
        levelRevenue.textContent = ' Средний уровень дохода';
        levelRevenue.style.color = 'yellow';

    } else if (dayBuget >1000) {
        levelRevenue.textContent = 'Высокий  уровень дохода';
        levelRevenue.style.color = 'green';

    }else if (dayBuget <= 0 ) {
        levelRevenue.textContent = 'Бедность';
        levelRevenue.style.color = '#800000';

    };

};

function checkedCredit(){
    
    if (checkboxCredit.checked) {
        Credit.style.opacity = '1';
            if(inputTerm3.hasAttribute('disabled')){
                inputTerm3.removeAttribute('disabled');
            }else if (inputSum3.hasAttribute('disabled')){
                inputSum3.removeAttribute('disabled');
            }else if (inputPrecent3.hasAttribute('disabled')){
                inputPrecent3.removeAttribute('disabled');
            }else if (push3.hasAttribute('disabled') && !push3.classList.contains('button_none')){
                push3.removeAttribute('disabled');
                push3.classList.add('button_none');
            };
        
        no[0].style.display='flex';
        list.style.marginTop ='487px';        
    }else{
        Credit.style.opacity = '.4';
            if(!inputTerm3.hasAttribute('disabled')){
                inputTerm3.setAttribute('disabled', 'disabled');
            }else if (!inputSum3.hasAttribute('disabled')){
                inputSum3.setAttribute('disabled', 'disabled');
            }else if (!inputPrecent3.hasAttribute('disabled' )){
                inputPrecent3.setAttribute('disabled' , 'disabled');
            }else if (!push3.hasAttribute('disabled') && push3.classList.contains('button_none')){
                push3.setAttribute('disabled' , 'disabled');
                push3.classList.remove('button_none');
            }
            no[0].style.display='none';
            list.style.marginTop ='307px';
    };      
};

function checkedContribution(){
    
    if (checkboxContribution.checked) {
        Contribution.style.opacity = '1';
        if(inputTerm4.hasAttribute('disabled')){
            inputTerm4.removeAttribute('disabled');
        }else if (inputSum4.hasAttribute('disabled')){
            inputSum4.removeAttribute('disabled');
        }else if (push4.hasAttribute('disabled') && !push4.classList.contains('button_none')){

            push4.removeAttribute('disabled');
            push4.classList.add('button_none');
        }
        no[1].style.display='flex';
    }else{
        Contribution.style.opacity = '0.4';
        if(!inputTerm4.hasAttribute('disabled')){
            inputTerm4.setAttribute('disabled' , 'disabled');
        }else if (!inputSum4.hasAttribute('disabled')){
            inputSum4.setAttribute('disabled' , 'disabled');
        }else if (!push4.hasAttribute('disabled') && push4.classList.contains('button_none')){
            push4.setAttribute('disabled' , 'disabled');
            push4.classList.remove('button_none');
        }
        no[1].style.display='none'
    };

};

push1.addEventListener('click',()=>{
    if (+inputSum1.value >=0) {
        pushExpenses(+inputSum1.value);
        inputSum1.value = '';
    }else{
        alert('число не может быть отрицательным ');
        inputSum1.value = '';
    }

    

});
push2.addEventListener('click',()=>{

    if (+inputSum2.value >=0) {
        pushRevenue(+inputSum2.value);
        inputSum2.value = '';
    }else{
        alert('число не может быть отрицательным ');
        inputSum2.value = '';
    }
    

});

push3.addEventListener('click',()=>{
    if (inputSum3.value =='' || inputPrecent3.value == '' || inputTerm3.value == '') {
        
        alert('Поля не должны быть пустыми');

    }else{

        if (+inputSum3.value >=0 && +inputPrecent3.value >=0 &&  +inputTerm3.value >= 0) {
            let precent =((+inputSum3.value * +inputPrecent3.value)/100)/+inputTerm3.value;
            sum = +inputSum3.value / +inputTerm3.value;
            daySum = precent + sum;

            pushCredit(daySum);
            inputSum3.value = '';
            inputPrecent3.value = '';
            inputTerm3.value = '';
        }else{
            alert('число не может быть отрицательным ');
            inputSum3.value = '';
            inputPrecent3.value = '';
            inputTerm3.value = '';
        };
    };
    

});

push4.addEventListener('click',()=>{
    if (+inputSum4.value >=0) {
        pushContribution(+inputSum4.value);
        inputSum4.value = '';

    }else{
        alert('число не может быть отрицательным ');
        inputSum4.value = '';
    }
    
});

total.addEventListener('click',()=>{


    sumPriceTotal();


});

Credit.addEventListener('click',()=>{

    checkedCredit();

});
Contribution.addEventListener('click',()=>{

    checkedContribution();

});




















});