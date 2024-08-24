const prompt = require('prompt-sync')();
const userInput = prompt('Enter a Number:');
const number = parseFloat(userInput);

if(number %2==0){
    console.log('Number is even');

}
else{
    console.log('Number is odd');
}
