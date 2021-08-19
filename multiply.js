let array = [1,2,3,4];

function multiplyArray(arr) {
    for (let j = arr; j > 0; j--) {
        array.push(j);
    }
    return multiply();
}

function multiply() {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

console.log(multiplyArray());
