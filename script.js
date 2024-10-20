let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener("click", (e) => buttonClicked(e)));

function buttonClicked(e){
    console.log(e);
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
        result = add(num1, num2);
        break;
        case '-':
        result = subtract(num1, num2);
        break;
        case '*':
        result = multiply(num1, num2);
        break;
        default:
        result = divide(num1, num2);
        break;
    }
    return result;
}