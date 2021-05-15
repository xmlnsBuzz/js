/**
 * include() Method in Array
 * ! includes(searchElement: T, fromIndex?: number): boolean;
 * * T : (type parameter) T in Array<T>
 * * ? : (parameter) fromIndex: number
 */

/* #region includes() */
// interface Array<T> {
//   /**
//    * Determines whether an array includes a certain element, returning true or false as appropriate.
//    * @param searchElement The element to search for.
//    * @param fromIndex The position in this array at which to begin searching for searchElement.
//    */
//   includes ( searchElement: T, fromIndex?: number ): boolean;
// }
/* #endregion */


const myArray = [
  10,
  "abc",
  true,
  undefined,
  null,
  [ 1, 2 ], // array나 object는 reference type이르로 compare의 대상이 아니다. false
  {} // array나 object는 reference type이르로 compare의 대상이 아니다. false
];

console.log( true, myArray.includes( true ) );
console.log( 10, myArray.includes( 10 ) );
console.log( "abc", myArray.includes( "abc" ) );
console.log(
  "abc",
  "starting from index 3",
  myArray.includes( "abc", 3 )
);

console.log("null", myArray.includes(null))
console.log("undefined", myArray.includes(undefined))
console.log("[1,2]", myArray.includes([1,2]))
console.log("{}", myArray.includes({}))








