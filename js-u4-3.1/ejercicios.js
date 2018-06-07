//array reverse
let arr = ['hola', 'chao', 'buenos dias'];
let reverseArr = arr.reverse();

//reto

function computeAverageLengthOfWords(word1, word2) {

//--------- operador ternario -------------------------------------

    return typeof word1 === 'string' && typeof word2 === 'string' 
                ? (word1.length + word2.length) / 2
                : 0;

//------------------------------------------
    if (typeof word1 === 'string' && typeof word2 === 'string' ) {
        return (word1.length + word2.length) / 2;
    }
    return 0;
  }
  
  module.exports = computeAverageLengthOfWords;
