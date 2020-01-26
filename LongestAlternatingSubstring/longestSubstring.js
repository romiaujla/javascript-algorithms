/**
 * Returns the longest substring with alternating odd/even or even/odd digits. If two or more
 * substrings have the same length, return the substring that occurs first
 * @param {string} | str | the string from which you have to return the longest alternate substring
 * @return {string} The longest alternate substring
 */
function longestSubstring(str){
  const longestString = str;

  return longestString;
}

/**
 * Initiates the function and runs the test cases
 */
function main(){
  const testCases = [
    '225424272163254474441338664823',
    '594127169973391692147228678476',
    '721449827599186159274227324466'
  ];

  testCases.map((tCase) => {
    console.log();
    console.log(`logestSubstring("${tCase}"): ${longestSubstring(tCase)}`);
  })
}

main();