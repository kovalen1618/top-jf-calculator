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

const addDigit = (digit) => {
    // Adds first digit together before operand and then next digit and then equals
    display.innerText += digit.innerText;
    // Operand must be present before adding second digit
    if (displayValue.operand !== '') {
        displayValue.numTwo += digit.innerText;
    } else if (displayValue.operand === '') {
        displayValue.numOne += digit.innerText;
    };
};

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', () => {
    addDigit(digit);
}));

// Equals
const operate = (operation, numOne, numTwo) => {
    // Turn values into integers when calculating
    display.innerText = operation(parseFloat(numOne), parseFloat(numTwo));
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

const addOperand = (operand) => {
    // Only allows for one operand to be added
    if (displayValue.operand === '') {
        display.innerText += operand.innerText;
        displayValue.operand = operand.innerText;
    } else if (displayValue.operand !== '' && displayValue.numTwo !== '') {
        solve();
        display.innerText += operand.innerText;
        displayValue.operand = operand.innerText;
    }
}

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => operand.addEventListener('click', () => {
    addOperand(operand);
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

const backspace = document.querySelector('#delete');
backspace.addEventListener('click', () => {
    if (displayValue.numTwo !== '') {
        displayValue.numTwo = displayValue.numTwo.slice(0, -1);
    } else if (displayValue.operand !== '') {
        displayValue.operand = displayValue.operand.slice(0, -1);
    } else if (displayValue.numOne !== '') {
        displayValue.numOne = displayValue.numOne.slice(0, -1);
    };

    // Completely removes last element from display
    let remaining = display.innerText.slice(0, -1);
    display.innerText = remaining;
});

// Look at Keydown event for Shift buttons

const pressButton = (e) => {
    const key = document.querySelector(`[data-key="${e.code}"]`);

    if (key.className === "digit") {
        addDigit(key)
    } else if (key.className === "operand") {
        addOperand(key)
    } else if (key.className === "Enter" || "NumpadEnter" || "Equal") {
        solve();
    }

    console.log(e.code)
    console.log(key)
}

window.addEventListener('keydown', pressButton);