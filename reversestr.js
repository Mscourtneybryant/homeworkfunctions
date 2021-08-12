var prompt = require('prompt-sync')();
var sentence = (prompt("Enter a sentence and the computer will reverse it: "));
const str = sentence;     



function reverse(str)  {
 console.log(str.split('').reverse().join(''))     
}

reverse(sentence);