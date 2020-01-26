/*
  Approach: O(N)
  
*/


/**
 * @param {object: {string, string}} : object: {fristSring, secondString}
 * @return {boolean}
 */
function canBuild({firstString, secondString}){



  for(let i = 0; i < secondString.length; i++){
    if(!firstString.includes(secondString[i]))
      return false;
  }

  return true;
}

function main(){
  const testCases = [
    {
      firstString: 'aPPleAL',
      secondString: 'PAL',
    },
    {
      firstString: 'aPPleAL',
      secondString: 'apple',
    },
    {
      firstString: 'shortCAKE',
      secondString: 'cakey',
    },
    {
      firstString: 'a',
      secondString: '',
    },
  ]

  console.log(`\ncanBuild() returns true if you can use the letters of the first string to create the second string. Letters are case sensitive.`);

  testCases.map((tCase) => {
    console.log();
    console.log(`canBuild("${tCase.firstString}", "${tCase.secondString}") ➞ ${canBuild(tCase)}`)
  })
}

main();