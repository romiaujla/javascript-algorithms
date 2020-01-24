/*
Given the following expression, write an algorithm to check if the formula has correctly implemented parenthesis (check to see if there are any lone parenthesis. That every open parenthesis has a closed on) - Check if the formula has any unmatched parenthesis.

Test cases:
x*(x+z) + x/(y-z) + d should return true
t – (s-k + x should return false
((x + y) * (x + 7)) / )y( should return false
(((x+z)/(x*y)) + 4 ) should return true
x + y / ) z + 1 ( * (r - z) should return false
(x + y) / ) z + 1 ( * (r - z) should return false
x*(x+z) + [x/(y-z) + d] should return true 
t – (s-k) } + x should return false 
x*(x+z) + {][x/(y-z) + d][} should return false
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

    // if(char === '(' || char === ')'){
    //   console.log()
    //   console.log(`char`, char);
    //   console.log(`pStack`, pStack);
    // }


  }

  // if we reach this point and our Stack has paranthesis, that means
  // our equation is not balanced
  if(pStack.length){
    return false;
  }

  return true;
}

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