let firstOperand;
let secondOperand;
let operator;

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            if(num2 === 0) return;
            return num1/num2;
        default:
            return null;
    }
}

let numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');
const equalBtn = document.getElementById('equalsBtn');
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn = document.getElementById('clearBtn');


numberButtons.forEach((button) => button.addEventListener("click", (e) => addNumber(e)));
operatorButtons.forEach((button) => button.addEventListener("click", (e) => addOperator(e)));



function addNumber(e){
    currentScreen.textContent += e.target.textContent;
}

function addOperator(e){
    currentScreen.textContent += " " + e.target.textContent + " ";
}

equalBtn.addEventListener("click", evaluate);

function evaluate(){
    let elements = currentScreen.textContent.split(' ');
    if(elements.length > 3){
        alert('ERROR');
        currentScreen.textContent = '';
    }
    lastScreen.textContent = currentScreen.textContent;
    currentScreen.textContent = operate(Number(elements[0]), Number(elements[2]), elements[1]);
}

clearBtn.addEventListener("click", clear);

function clear(){
    currentScreen.textContent = '';
    lastScreen.textContent = '';
}

deleteBtn.addEventListener("click", deleteLast);

function deleteLast(){
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
}