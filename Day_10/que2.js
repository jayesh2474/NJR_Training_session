const prompt = require('prompt-sync')();

const userInput = prompt('Enter your age:');

const number = parseFloat(userInput);


if (number >= 18) {
    console.log('you are eligible for voting');
} else if (number < 18) {
    console.log('you are not eligible for voting');
} else {
    console.log('invalid sahi daal');
}