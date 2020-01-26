/**
 * Converts a given number into words
 * @param {integer} , num, the number to be converted into words
 * @return {string} , the coverted number in words
 */
function numberInWords(num){
  let numInWords = '';

  const singleWords = {
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
    90: 'ninety'
  }

  
  if(num >= 0 && num <= 19 ){
    return singleWords[num];
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
    -1234,
    909,
  ]

  testCases.map(tCase => {
    console.log();
    console.log(`numToEng(${tCase}) ➞ ${numberInWords(tCase)}`);
  })
}

main();