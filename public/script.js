const add = (numOne, numTwo) => {
    return numOne + numTwo;
}
 
const subtract = (numOne, numTwo) => {
    return numOne - numTwo;
}
 
const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
}
 
const divide = (numOne, numTwo) => {
    return numOne / numTwo;
}
 

// Populate display with chosen number and store for use in operate
const display = document.getElementById('display');
let displayValue = {
    numOne: '',
    operand: '',
    numTwo: ''
};

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', () => {
    // Adds first digit together before operand and then next digit and then equals
    display.innerText += digit.innerText;
    // Operand must be present before adding second digit
    if (displayValue.operand !== '') {
        displayValue.numTwo += digit.innerText;
    } else if (displayValue.operand === '') {
        displayValue.numOne += digit.innerText;
    };

    console.log(`numOne: ${displayValue.numOne}`);
    console.log(`numTwo: ${displayValue.numTwo}`);
}));

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => operand.addEventListener('click', () => {
    // Only allows for one operand to be added
    if (displayValue.operand === '') {
        display.innerText += operand.innerText;
        displayValue.operand = operand.innerText;
    }
}));

// Equals
const operate = (operation, numOne, numTwo) => {
    // Turn values into integers when calculating
    display.innerText = operation(parseInt(numOne), parseInt(numTwo));
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    switch (displayValue.operand) {
        case '+':
            operate(add, displayValue.numOne, displayValue.numTwo);
            displayValue = {
                numOne: display.innerText,
                operand: '',
                numTwo: ''
            };
            break;
        case '-':
            operate(subtract, displayValue.numOne, displayValue.numTwo);
            displayValue = {
                numOne: display.innerText,
                operand: '',
                numTwo: ''
            };
            break;
        case '×':
            operate(multiply, displayValue.numOne, displayValue.numTwo);
            displayValue = {
                numOne: display.innerText,
                operand: '',
                numTwo: ''
            };
            break;
        case '÷':
            operate(divide, displayValue.numOne, displayValue.numTwo);
            displayValue = {
                numOne: display.innerText,
                operand: '',
                numTwo: ''
            };
            break;
    };
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.innerText = '';
    displayValue = {
        numOne: '',
        operand: '',
        numTwo: ''
    };
});