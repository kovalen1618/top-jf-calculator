const add = (numOne, numTwo) => {
    return Math.round(((numOne + numTwo) + Number.EPSILON) * 100) / 100;
}
 
const subtract = (numOne, numTwo) => {
    return Math.round(((numOne - numTwo) + Number.EPSILON) * 100) / 100;
}
 
const multiply = (numOne, numTwo) => {
    return Math.round(((numOne * numTwo) + Number.EPSILON) * 100) / 100;
}
 
const divide = (numOne, numTwo) => {
    return Math.round(((numOne / numTwo) + Number.EPSILON) * 100) / 100;
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


// Equals
const operate = (operation, numOne, numTwo) => {
    // Turn values into integers when calculating
    display.innerText = operation(parseInt(numOne), parseInt(numTwo));
}

const solve = () => {
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
}

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => operand.addEventListener('click', () => {
    // Only allows for one operand to be added
    if (displayValue.operand === '') {
        display.innerText += operand.innerText;
        displayValue.operand = operand.innerText;
    } else if (displayValue.operand !== '') {
        solve();
        display.innerText += operand.innerText;
        displayValue.operand = operand.innerText;
    }
}));

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (displayValue.numOne === '0' || displayValue.numTwo === '0') {
        display.innerText = 'ERROR: Bro, you really tryna divide by zero?'
    } else if (displayValue.numTwo !== '') {
        solve();
    }
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