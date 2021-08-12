var prompt = require('prompt-sync')();
var n1 = (prompt("Enter a number: " ))
var n2 = (prompt("Enter another number: " ))
maxOfTwoNumbers(n1,n2)


function maxOfTwoNumbers(n1, n2){
  
    if (n1 > n2) {
       console.log(n1 + " is larger than " + n2);
    } else {
        console.log(n1 + " is less than " + n1);
    }
    return;

}


