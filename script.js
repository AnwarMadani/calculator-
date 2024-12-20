let numberButtons = document.querySelectorAll('[data-number]');

let operatorButtons = document.querySelectorAll('[data-operator]');

let display = document.getElementById('currentOperationScreen');

let equalBtn = document.getElementById('equalsBtn');

let clearBtn = document.getElementById('clearBtn');

let deleteBtn = document.getElementById('deleteBtn');

numberButtons.forEach(button => button.addEventListener("click", (event)=> appendValue(event.target.textContent)))

operatorButtons.forEach(button => button.addEventListener("click", (event)=> appendOperator(event.target.textContent)))

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", deleteLastValue);

function deleteLastValue(){
    if(display.textContent !== ''){
        display.textContent = display.textContent.toString().slice(0, -1)
    }
}

function clear(){
    display.textContent = '';
}

function appendValue(value){
    display.textContent += value;
}

function appendOperator(operator){
    if(!isNaN(Number(display.textContent))){
        display.textContent += operator;
    }
}

equalBtn.addEventListener("click", calculate);

function calculate(){
    if((display.textContent !== '') && (isNaN(Number(display.textContent)))){
        let expression = display.textContent;
        if(expression.includes('+')){
            expression = expression.split('+');
            let firstOperand = expression[0];
            let secondOperand = expression[1];
            display.textContent = Number(firstOperand) + Number(secondOperand);
        } else if(expression.includes('-')){
            expression = expression.split('-');
            let firstOperand = expression[0];
            let secondOperand = expression[1];
            display.textContent = Number(firstOperand) - Number(secondOperand);
        } else if(expression.includes('*')){
            expression = expression.split('*');
            let firstOperand = expression[0];
            let secondOperand = expression[1];
            display.textContent = Number(firstOperand) * Number(secondOperand);
        } else if(expression.includes('/')){
            expression = expression.split('/');
            let firstOperand = expression[0];
            let secondOperand = expression[1];
            if(secondOperand == 0) return;
            display.textContent = Number(firstOperand) / Number(secondOperand);
        } else {
            return;
        }
    } 
}

// append all pressed numbers in display if it doesn't already contain an operator and then split the display value, based on the operator, and the do the calculation and return it