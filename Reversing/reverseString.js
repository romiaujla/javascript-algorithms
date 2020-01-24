/*
Given the following expression, write an algorithm to check if the formula has correctly implemented parenthesis (check to see if there are any lone parenthesis. That every open parenthesis has a closed on) - Check if the formula has any unmatched parenthesis.

Test cases:
x*(x+z) + x/(y-z) + d should return true
t – (s-k + x should return false
((x + y) * (x + 7)) / )y( should return false
(((x+z)/(x*y)) + 4 ) should return true
x + y / ) z + 1 ( * (r - z) should return false
(x + y) / ) z + 1 ( * (r - z) should return false
*/

function balancedParanthesis(equation){
  
  let pStack = [];

  for(const char of equation){

    if(char === '('){
      pStack.push('(');
    }

    if(char === ')'){
      pStack.pop();
    }
  }

  // if we reach this point and our Stack has paranthesis, that means
  // our equation is not balanced
  if(pStack.length){
    return false;
  }

  return true;
}

console.log(balancedParanthesis(`x*(x+z) + x/(y-z) + d`));
console.log(balancedParanthesis(`t – (s-k + x `))
console.log(balancedParanthesis(`((x + y) * (x + 7)) / )y(`))
console.log(balancedParanthesis(`(((x+z)/(x*y)) + 4 )`))
console.log(balancedParanthesis(`x + y / ) z + 1 ( * (r - z)`))
console.log(balancedParanthesis(`(x + y) / ) z + 1 ( * (r - z)`))
