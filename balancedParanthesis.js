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

// function balancedParanthesis(equation){
  
//   let pStack = [];

//   for(const char of equation){

//     if(char === '('){
//       pStack.push('(');
//     }

//     if(char === ')'){
//       if(!pStack.length){
//         return false;
//       }
//       pStack.pop();
//     }

//     if(char === '(' || char === ')'){
//       console.log()
//       console.log(`char`, char);
//       console.log(`pStack`, pStack);
//     }


//   }

//   // if we reach this point and our Stack has paranthesis, that means
//   // our equation is not balanced
//   if(pStack.length){
//     return false;
//   }

//   return true;
// }



// x*(x+z) + [x/(y-z) + d] should return true 
// t – (s-k) } + x should return false 
// x*(x+z) + {][x/(y-z) + d][} should return false



function balancedParanthesis(equation){
  
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

console.log(`expect 1 true: `, balancedParanthesis(`x*(x+z) + [x/(y-z) + d]`));
console.log(`expect 2 false: `, balancedParanthesis(`t – (s-k) } + x`));
console.log(`expect 3 false: `, balancedParanthesis(`x*(x+z) + {][x/(y-z) + d][}`));
console.log(`expect 4 true: `, balancedParanthesis(`x*(x+z) + x/(y-z) + d`));
console.log(`expect 5 false: `, balancedParanthesis(`t – (s-k + x `))
console.log(`expect 6 false: `, balancedParanthesis(`((x + y) * (x + 7)) / )y(`))
console.log(`expect 7 true: `, balancedParanthesis(`(((x+z)/(x*y)) + 4 )`))
console.log(`expect 8 false: `, balancedParanthesis(`x + y / ) z + 1 ( * (r - z)`))
console.log(`expect 9 false: `, balancedParanthesis(`(x + y) / ) z + 1 ( * (r - z)`))