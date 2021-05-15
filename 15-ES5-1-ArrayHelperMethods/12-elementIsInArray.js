const transport = [ "Bus", "Car", "Bicycle", "Airplane" ];

/* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
If "searchElement" is found in the "inputArray" - return "true".
Otherwise return "false"

Hint: Use "some" helper method to solve this
*/
const elementFound = ( inputArray, searchElement ) =>
  inputArray.some( // ? some -> ES7
    element => element === searchElement
  );
// NOTE * element라는 변수를 사용한다는 사실 // ! 잊지 말 것
console.log( elementFound( transport, "Bus" ) ); // true
console.log( elementFound( transport, "Phone" ) ); // false
console.log( elementFound( transport, "Airplane" ) ); // true
