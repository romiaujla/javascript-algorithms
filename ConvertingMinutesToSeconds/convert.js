/**
 * Converts minutes to seconds
 * @param {integer} | minutes | number of minutes to be converted to seconds
 * @return {string}
 *  - if minutes is not a number then returns an error message
 *  - if minutes is a negative number then returns an error message
 *  - else return number of seconds in a formatted string
 */
function convert(minutes){

  if(isNaN(minutes))
    return `Minutes must contain only positive numbers`;

  if(minutes < 0){
    return `Minutes cannot be a negative number`;

  }

  return `${minutes*60} seconds`;
}


/**
 * Initiates the program and runs the test cases
 */
function main(){
  const testCases = [
    '5',
    '4',
    '10',
    '0',
    '-1',
    'invalid'
  ]

  testCases.map((minutes) => {
    console.log(`${minutes} minutes ➞ ${convert(minutes)}`);
  })
}

main();