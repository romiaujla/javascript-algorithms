/**
 * Converts a given number into words
 * @param {integer} , num, the number to be converted into words
 * @return {string} , the coverted number in words
 */
function numberInWords(num){
  let numInWords = '';  

  // will be using this as a number that will be reduced by 1000
  let tempNum = num; 

  const wordsForConstruction = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'elleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  const wordsToAdd = [
    'thousand',
    'million',
    'trillion',
  ]

  if(num >= 0 && num <= 19){
    return `${wordsForConstruction[num]}`;
  }

  let hundreds;
  let tens;
  let ones;

  for(let i = 0; tempNum; i++){

    hundreds = tempNum % 1000;
    tempNum = (tempNum-hundreds)/1000;

    // construct words for hundred only if it is not a zero
    if(hundreds){

      // If the loop runs the second time, this will add the words
      // thousand, million, trillion, and so on, depending on the num
      // of words in the wordsToAdd[] Array
      if(i){
        numInWords = wordsToAdd[i-1] + " " + numInWords;
      }

      tens = hundreds % 100;
      hundreds = (hundreds - tens)/100;

      // construct words for tens only if it is not a zero
      if(tens){

        // is tens is a property of the wordsforconstruction then
        // just pull the word from the object
        if(wordsForConstruction.hasOwnProperty(tens)){
          numInWords = wordsForConstruction[tens] + " " + numInWords;
        }else{
          ones = tens%10;
          tens = tens-ones;
          if(ones){
            numInWords = wordsForConstruction[ones] + " " + numInWords;
          }
          numInWords = wordsForConstruction[tens] + " " + numInWords;
        }
      }

      if(hundreds){
        numInWords = wordsForConstruction[hundreds] + " hundred " + numInWords;
      }
    }
  }

  return numInWords;
}

/**
 * Initiates the program and runs the test cases
 */
function main(){
  const testCases = [
    0,
    101,
    100234,
    909,
    1000000,
    1000,
    9999999,
    90909090,
  ]

  testCases.map(tCase => {
    console.log();
    console.log(`numToEng(${tCase}) ➞ ${numberInWords(tCase)}`);
  })
}

main();