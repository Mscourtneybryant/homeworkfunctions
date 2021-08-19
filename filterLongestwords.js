
/*let array = []

function filterLongWords(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  
filterLongWords("Hello from Courtney!")*/

const str=[""]

function filterLongWords(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(filterLongWords("Hello from courtney"));
