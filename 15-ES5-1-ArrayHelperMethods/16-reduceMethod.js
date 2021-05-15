/**
 * reduce(accumulator, element) 
 * ? accumulator : element들을 누적시킨다. 
 * ? element : array의 각 element(들)
 */

const myNumbers = [ 5, 10, 3, 15 ];

// NOTE sum numbers
// const sum = arrayOfNumbers =>
// arrayOfNumbers.reduce(
//   ( accumulator, number ) => accumulator + number, 0 );
// console.log( sum( myNumbers ) );

// NOTE sum numbers print to console
// const sum = arrayOfNumbers =>
//   arrayOfNumbers.reduce(
//     ( accumulator, number ) => {
//       console.log( `Accumulator is ${accumulator} and number is ${number}` );
//       return accumulator + number; // ? 위와 달리 'return'을 명시해 준다.
//     },
//     0 // * number '0' 대신 "," 같은 문자열을 넣으면 문자열을 계속 덧붙여 나간다.
//   );

// console.log( sum( myNumbers ) );

// NOTE 
// // * reduce array of object to single array
// const persons = [
//   {
//     name: "Veronica",
//     age: 25
//   },
//   {
//     name: "John",
//     age: 21
//   },
//   {
//     name: "Mike",
//     age: 27
//   }
// ];

// // !위의 array에서 이름만 모아 다른 array 만들기
// const personsNames = arrayOfPersons =>
//   arrayOfPersons.reduce(
//     ( names, person ) => {
//       console.log(names, person)
//       names.push( person.name );
//       return names;
//     }, []
//   );
// // ! names : accumulator, person : element
// /* NOTE for example person -> {name: "Veronica", age: 25} */

// console.log( personsNames( persons ) );

// /* * result
// [] {name: "Veronica", age: 25}
// ["Veronica"] {name: "John", age: 21}
// (2) ["Veronica", "John"] {name: "Mike", age: 27}
// (3) ["Veronica", "John", "Mike"]
// // name 만 accumulate하고 나이는 버린다.
// */

// NOTE 아래의 중복되는 element를 제외시키고 unique한 element만 모아서 하나의 array를 만든다.
const fruits = [
  "banana", "orange", "apple", "apple", "orange", "mango"
];

const uniqueFruits = arrayOfFruits =>
  arrayOfFruits.reduce(
    ( uniqueElements, fruit ) => {
      console.log( uniqueElements, fruit );
      /* #region  Result // NOTE */
      /* 
      [] "banana"
      ["banana"] "orange"
      (2) ["banana", "orange"] "apple"
      (3) ["banana", "orange", "apple"] "apple"
      (3) ["banana", "orange", "apple"] "orange"
      (3) ["banana", "orange", "apple"] "mango"
      */
      /* #endregion */
      if ( !uniqueElements.includes( fruit ) )
        uniqueElements.push( fruit );
      return uniqueElements;
    }
    , [] // ! 이 줄(second argument)이 빠지면 error, 지워보면서 결과를 볼 것.
  );

console.log( uniqueFruits( fruits ) );
// NOTE result
/*
(4) ["banana", "orange", "apple", "mango"]
*/
