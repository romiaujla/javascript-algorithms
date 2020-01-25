/*
  Write a function that takes an integer minutes and converts it to seconds.
  Examples:
  convert(5) ➞ 300

  convert(3) ➞ 180

  convert(2) ➞ 120

  Question Link: https://edabit.com/challenge/8q54MKnRrm89pSLmW
*/

function convert(minutes){

  if(isNaN(minutes))
    return `Minutes must contain only positive numbers`;

  if(minutes < 0){
    return `Minutes cannot be a negative number`;

  }

  return `${minutes*60} seconds`;
}

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