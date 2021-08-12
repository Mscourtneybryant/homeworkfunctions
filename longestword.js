var prompt = require('prompt-sync')();
var sentence = (prompt("Enter your sentence to find out the longest word and length of its characters: "))


function findLongestWord(sentence){
    let words = sentence.split(" ");
    let longestWord = " "

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i]
            
        }
    }
    return longestWord;
}

let longestWord = findLongestWord(sentence)
console.log('The longest word is ' + longestWord + ' and it is ' + longestWord.length + ' characters.')