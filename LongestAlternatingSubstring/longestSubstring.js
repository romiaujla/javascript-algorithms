/**
 * Returns the longest substring with alternating odd/even or even/odd digits. If two or more
 * substrings have the same length, return the substring that occurs first
 * @param {string} | str | the string from which you have to return the longest alternate substring
 * @return {string} The longest alternate substring
 */
function longestSubstring(str){
  
  let longestString = '';
  let evenInt = false;
  let altString = '';

  // Approach O(N)
  for(let i = 0; i < str.length; i++){

    let prevIntIsEven = evenInt;

    // change the evenInt based on the current number
    if(str[i] % 2 === 0){
      evenInt = true;
    }else{
      evenInt = false;
    }

    // If previous number is an alternate from odd/even then add it to the current alternate String
    if(evenInt !== prevIntIsEven){
      altString += str[i];
    }else{
      // else if the previous number is not an alternate odd/even

      // only change the longest string if the current alternate string is longer than the
      // previous longest string. 
      if(longestString.length < altString.length){
        longestString = altString;
      }

      // empty out the longest alternate string
      altString = '';
      // initiate a new string with the current num
      altString += str[i];
    } 
  }

  return longestString;
}

/**
 * Initiates the program and runs the test cases
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