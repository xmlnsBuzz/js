/**
 * for Loop
 * 
 * Usage
 * for (Initial Statement; Condition; Iteration Action){
 *   // execution code block
 * }
 * 
 */

const myArray = [ "first", "second", "third" ];

// myArray[ 10 ] = 10;

for ( let i = 0; i < myArray.length; i++ ){
  console.log(myArray[i])
}

// NOTE for loop를 array에 사용하는 것은 비추다. 대신, forEach, map, reduce 등을 사용한다.
