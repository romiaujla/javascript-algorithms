/**
 * Returns the distance between the two points
 * 
 */
function getDistance({p1, p2}){

  // using pythagorean theorem
  // hypotenuse^2 = base^2 + altitude^2
  const base = p2.x - p1.x;
  const altitude = p2.y - p1.y;
  const distance = Math.sqrt(Math.pow(base, 2) + Math.pow(altitude, 2));

  return distance.toFixed(3);
}

/**
 * Initiates the program and runs the test cases
 */
function main(){
  testCases = [
    {
      p1: {x: -2, y: 1},
      p2: {x: 4, y: 3}
    },
    {
      p1: {x: 0, y: 0},
      p2: {x: 1, y: 1}
    },
    {
      p1: {x: 10, y: -5},
      p2: {x: 8, y: 16}
    },
    {
      p1: {x: 10, y: -5},
      p2: {x: 8, y: 16}
    }
  ]

  testCases.map(points => {
    console.log();
    console.log(`p1:`, points.p1);
    console.log(`p2:`, points.p2);
    console.log(`distance:`, getDistance(points));
  })
}

main();