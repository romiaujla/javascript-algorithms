/**
 * Checks if the equation has balanced parenthesis
 * @param {string} | equation | The equation that is to be checked if it is balanced or not
 * @return {boolean} true if it is a balanced equations, false otherwise
 */
function balancedParenthesis(equation){
  
  let pStack = [];

  for(const char of equation){

    if(char === '(' || char === '{' || char === '['){
      pStack.push(char);
    }

    switch(char){
      case ')':
        if(!pStack.length){
          return false
        }   
        if(pStack.pop() !== '(')
          return false;
        break;
      case '}':
        if(!pStack.length){
          return false
        }   
        if(pStack.pop() !== '{')
          return false;
        break;
      case ']':
        if(!pStack.length){
          return false
        }   
        if(pStack.pop() !== '[')
          return false;
        break;
    }
  }

  // if we reach this point and our Stack has paranthesis, that means
  // our equation is not balanced
  if(pStack.length){
    return false;
  }

  return true;
}

/**
 * Initiates the program and runs the test cases
 */
function main(){
  const testCases = [
    {
      testCase: 'x*(x+z) + [x/(y-z) + d]',
      expectedResult: true
    },
    {
      testCase: 't – (s-k + x',
      expectedResult: false
    },
    {
      testCase: '((x + y) * (x + 7)) / )',
      expectedResult: false
    },
    {
      testCase: '(((x+z)/(x*y)) + 4 )',
      expectedResult: true
    },
    {
      testCase: 'x + y / ) z + 1 ( * (r - z)',
      expectedResult: false
    },
    {
      testCase: '(x + y) / ) z + 1 ( * (r - z)',
      expectedResult: false
    },
    {
      testCase: 'x*(x+z) + [x/(y-z) + d]',
      expectedResult: true
    },
    {
      testCase: 't – (s-k) } + x',
      expectedResult: false
    },
    {
      testCase: 'x*(x+z) + {][x/(y-z) + d][}',
      expectedResult: false
    },
  ]

  testCases.map((tCase) => {
    console.log(`\nEquation '${tCase.testCase}', Expected Result '${tCase.expectedResult}':`);
    console.log(`Output: ${balancedParenthesis(tCase.testCase)}`);
  })
}

main();