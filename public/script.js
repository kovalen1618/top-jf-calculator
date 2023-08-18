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
 


const operate = (operation, numOne, numTwo) => {
    return operation(numOne, numTwo);
}

console.log(operate(multiply, 2, 3));