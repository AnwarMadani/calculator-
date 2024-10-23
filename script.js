let numberButtons = document.querySelectorAll('[data-number]');

let operatorButtons = document.querySelectorAll('[data-operator]');

let display = document.getElementById('currentOperationScreen');

let equalBtn = document.getElementById('equalsBtn');

numberButtons.forEach(button => button.addEventListener("click", (event)=> appendValue(event.target.textContent)))

operatorButtons.forEach(button => button.addEventListener("click", (event)=> appendOperator(event.target.textContent)))

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
            console.log(expression)
            let firstOperand = expression[0];
            console.log(firstOperand)
            let secondOperand = expression[1];
            console.log(secondOperand)
            display.textContent = Number(firstOperand) + Number(secondOperand);
        }
    }
}

// append all pressed numbers in display if it doesn't already contain an operator and then split the display value, based on the operator, and the do the calculation and return it