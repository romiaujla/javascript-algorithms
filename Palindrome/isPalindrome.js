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


function isPalindrome(str){
  if(!str.length)
    return `empty string`;
    
  return str === reverse(str);
}

// Going to make a habit to use a 
// main function to begin things with
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