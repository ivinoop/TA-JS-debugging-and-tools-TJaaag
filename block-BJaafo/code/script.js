// First

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let result = fullName("Jon", "Snow");
let expectedOne = "JonSnow";
let expectedTwo = "Jon Snow";

// Tests

if(result !== expectedOne){
    throw new Error(`${result} is not equal to ${expectedOne}`);
}
if(result !== expectedTwo){
    throw new Error(`${result} is not equal to ${expectedTwo}`);
}

// Second

function calcTax(amount, taxRate) {
    return amount + (amount * taxRate);
}

let res = calcTax(1000, 5);
let expOne = 56;
let expTwo = 6000;

// Tests

if(res !== expOne){
    throw new Error(`${res} is not equal to ${expOne}`);
}
if(res !== expTwo){
    throw new Error(`${res} is not equal to ${expTwo}`);
}
