/**
 * Reverses a String
 * @param {string} str String to be reversed
 * @return {string} the reversed string
 */
function reverse(str){
  str = str.split('');

  for(let i = 0; i < str.length/2; i++){
    const leftChar = str[i];
    const rightChar = str[str.length-1-i]
    str[i] = rightChar;
    str[str.length-1-i] = leftChar;
  }

  return str.join('');
}


/**
 * Checks if the string is a palindrome or not
 * @param {string} str String to check if it is a palindrome
 * @return {boolean} true if it is a Palindrome, false otherwise.
 */
function isPalindrome(str){
  if(!str.length)
    return `empty string`;
    
  return str === reverse(str);
}

/**
 * Initiates the program and runs the test cases
 */
function main(){

  // all the testCases
  const testCases = [
    'Palindrome',
    'abba',
    'abababa',
    ''
  ];

  testCases.map((tCase) => {
    console.log(`\nString: ${tCase.length ? tCase : `'empty string'`} is a Palindrome: ${isPalindrome(tCase)}`);
  })
}

main();