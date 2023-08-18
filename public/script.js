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

const digits = document.querySelectorAll('.digit');
let displayValue = 0;

digits.forEach(digit => digit.addEventListener('click', () => {
    // Adds first digit together before operand and then next digit and then equals
    display.innerText += digit.innerText;
    displayValue += digit.innerText;
}));



// Equals
const operate = (operation, numOne, numTwo) => {
    return operation(numOne, numTwo);
}