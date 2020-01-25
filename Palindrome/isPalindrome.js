function reverse(str){
  return str.split('').reverse().join('');
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