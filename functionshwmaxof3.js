var prompt = require('prompt-sync')();
var n1 = (prompt("Enter a number: " ))
var n2 = (prompt("Enter another number: " ))
var n3 = (prompt("Enter a final number: "))
maxOfThree(n1,n2,n3)

function maxOfThree(n1,n2,n3){
    if (n1 > n2 && n1 > n3){
        console.log(n1 + ' is greater than ' + n2 + ' and ' + n3)
    }
    else if (n1 < n2 && n1 < n3) {
        console.log(n1 + ' is less than ' + n2 + ' and ' + n3)
    }
    return;
}
