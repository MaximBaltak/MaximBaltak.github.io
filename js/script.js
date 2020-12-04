

document.addEventListener('DOMContentLoaded', ()=>{


let inputWhat1 = document.querySelectorAll('input')[0];
    inputSum1 = document.querySelectorAll('input')[1];
    inputWhat2 = document.querySelectorAll('input')[2];
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
    total = document.querySelectorAll('button')[5];
    update = document.querySelectorAll('button')[4];
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
    overlay = document.querySelectorAll('.overlay'),
    arrows = document.querySelectorAll('.arrow');
    dynamic = document.querySelectorAll('#dynamic');
   
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
        Revenue = price.sumR + price.sumRC;
        dayBuget= (Revenue - sumExpenses)/30;
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
        list.style.marginTop ='447px';        
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

function creatListExpenses (string, number) {
    let str = document.createElement('div'),
        sum = document.createElement('div');
        str.classList.add('title');
        str.id ='dynamic';
        sum.classList.add('number');
        sum.id ='dynamic';
        overlay[0].appendChild(str);
        overlay[0].appendChild(sum); 
        str.textContent = string;
        sum.textContent = '-'+number;
};
function creatListRevenue (string, number) {
    let str = document.createElement('div'),
        sum = document.createElement('div');
        str.classList.add('title');
        str.id ='dynamic';
        sum.classList.add('number');
        sum.id ='dynamic';
        overlay[2].appendChild(str);
        overlay[2].appendChild(sum); 
        str.textContent = string;
        sum.textContent = '+'+number;
        sum.style.color = 'green';
};
function creatListCredit ( number) {
    let str = document.createElement('div'),
        sum = document.createElement('div');
        str.classList.add('title');
        str.id ='dynamic';
        sum.classList.add('number');
        sum.id ='dynamic';
        overlay[1].appendChild(str);
        overlay[1].appendChild(sum); 
        str.textContent = 'Кредит';
        sum.textContent = '-'+number;
};
function creatListCuntribution (string, number) {
    let str = document.createElement('div'),
        sum = document.createElement('div');
        str.classList.add('title');
        str.id ='dynamic';
        sum.classList.add('number');
        sum.id ='dynamic';
        overlay[3].appendChild(str);
        overlay[3].appendChild(sum); 
        str.textContent = string;
        sum.textContent = '+'+number;
        sum.style.color = 'green';
};


push1.addEventListener('click',()=>{
    if (+inputSum1.value >=0) {
        if (+inputSum1.value !='' && +inputWhat1.value !='' ) {
            pushExpenses(+inputSum1.value);
            creatListExpenses(inputWhat1.value , inputSum1.value );
            inputSum1.value = '';
            inputWhat1.value ='';
        }else{
            alert('Поля не должны быть пустыми ');
            inputSum1.value = '';
            inputWhat1.value ='';
        }

    }else{
        alert('число не может быть отрицательным ');
        inputSum1.value = '';
        inputWhat1.value ='';
    }
    
    

});
push2.addEventListener('click',()=>{

    if (+inputSum2.value >=0) {
        if (+inputSum2.value !='' && +inputWhat2.value !='' ) {
            pushRevenue(+inputSum2.value);
            creatListRevenue(inputWhat2.value , inputSum2.value );
            inputSum2.value = '';
            inputWhat2.value ='';
        }else{
            alert('Поля не должны быть пустыми ');
            inputSum2.value = '';
            inputWhat2.value ='';
        }
    }else{
        alert('число не может быть отрицательным ');
        inputSum2.value = '';
        inputWhat2.value ='';
    }
    

});

push3.addEventListener('click',()=>{
    if (inputSum3.value !='' && inputPrecent3.value != '' && inputTerm3.value != '') {
            if (+inputSum3.value >=0 && +inputPrecent3.value >=0 &&  +inputTerm3.value >= 0) {
                creatListCredit( inputSum3.value );
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

    }else{

        alert('Поля не должны быть пустыми');
        inputSum3.value = '';
        inputPrecent3.value = '';
        inputTerm3.value = '';
    };
    

});

let anime1 = anime({
        targets: overlay[0],
        minHeight: '50px',
        opacity: '1.0',
        duration: 100
    }),
    
    anime2 = anime({
        targets: overlay[1],
        minHeight: '50px',
        opacity: '1.0',
        duration: 100
    }),
   
    anime3 = anime({
        targets: overlay[2],
        minHeight: '50px',
        opacity: '1.0',
        duration: 100
    }),
    
    anime4 = anime({
        targets: overlay[3],
        minHeight: '50px',
        opacity: '1.0',
        duration: 100
    });
   
   

push4.addEventListener('click',()=>{
    if (+inputSum4.value >=0 ) {
        if (+inputSum4.value !='' && +inputTerm4.value !='' ) {
            pushContribution(+inputSum4.value);
            creatListCuntribution(inputTerm4.value , inputSum4.value );
            inputSum4.value = '';
            inputTerm4.value ='';
        }else{
            alert('Поля не должны быть пустыми ');
            inputSum4.value = '';
            inputTerm4.value ='';
        }
    }else{
        alert('число не может быть отрицательным ');
        inputSum4.value = '';
        inputTerm4.value ='';
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

arrows[0].addEventListener('click',()=>{
    if (overlay[0].style.display =='none' ) {
        arrows[0].style.zIndex = '2';
        arrows[0].style.transform = 'rotate(90deg)';
        overlay[0].style.display ='flex';
       
        anime1.play();
        
    }else{
        arrows[0].style.zIndex = '0';
        arrows[0].style.transform = 'rotate(-90deg)';
        overlay[0].style.display ='none';
        
      
       
    }


});

arrows[1].addEventListener('click',()=>{
    if (overlay[1].style.display =='none' ) {
        arrows[1].style.zIndex = '2';
        arrows[1].style.transform = 'rotate(90deg)';
        overlay[1].style.display ='flex';
        anime2.play();
    }else{
        arrows[1].style.zIndex = '0';
        arrows[1].style.transform = 'rotate(-90deg)';
        overlay[1].style.display ='none';
        
    }

});
arrows[2].addEventListener('click',()=>{
    if (overlay[2].style.display =='none' ) {
        arrows[2].style.zIndex = '2';
        arrows[2].style.transform = 'rotate(90deg)';
        overlay[2].style.display ='flex';
        anime3.play();
    }else{
        arrows[2].style.zIndex = '0';
        arrows[2].style.transform = 'rotate(-90deg)';
        overlay[2].style.display ='none';

        
    }


});
arrows[3].addEventListener('click',()=>{
    if (overlay[3].style.display =='none' ) {
        arrows[3].style.zIndex = '2'
        arrows[3].style.transform = 'rotate(90deg)';
        overlay[3].style.display ='flex';
        anime4.play();
    }else{
        arrows[3].style.zIndex = '0'
        arrows[3].style.transform = 'rotate(-90deg)';
        overlay[3].style.display ='none';
        
        
    }


});
update.addEventListener('click',()=>{
    sumRevenue.textContent = '';
    sumCredit.textContent = '';
    sumContribution.textContent = '';
    sumExpenses.textContent = '';
    sumPrice.textContent = '';
    levelRevenue.textContent = '';
    
    price.expenses = [];
    price.revenue = [];
    price.revenueContribution = [];
    price.expensesCredit = [];
    price.sumC = 0;
    price.sumE = 0;
    price.sumR = 0;
    price.sumRC = 0;
    dynamic = document.querySelectorAll('#dynamic');
    
       while (overlay[0].firstChild) {
           overlay[0].removeChild(overlay[0].firstChild);
       };
       while (overlay[1].firstChild) {
        overlay[1].removeChild(overlay[1].firstChild);
        };
        while (overlay[2].firstChild) {
            overlay[2].removeChild(overlay[2].firstChild);
        };
        while (overlay[3].firstChild) {
            overlay[3].removeChild(overlay[3].firstChild);
        };



});



















});