// Method 1
// using built in reverse method
function reverseMethod1(str) {
  return str.split('').reverse().join('');
}

// method 2 
// traditional for loop method
// Run Time: O(N)
function reverseMethod2(str) {
  let reverse = '';

  for (const character of str) {
    reverse = character + reverse;
  }

  return reverse;
}

// using reduce function from the array
function reverseMethod3(str) {
  return str.split('').reduce((reverse, character) => character + reverse)
}

// using for loop, but reducing run time by half
// Run Time: O(N/2) | O(N)
function reverseMethod4(str){
  str = str.split('');

  for(let i = 0; i < str.length/2; i++){
    const leftChar = str[i];
    const rightChar = str[str.length-1-i]
    str[i] = rightChar;
    str[str.length-1-i] = leftChar;
  }

  return str.join('');
}


const testCases = [
  'Hello',
  'Hey There'
]

testCases.map(tCase => {
  console.log(`\n${reverseMethod4(tCase)}`);
})