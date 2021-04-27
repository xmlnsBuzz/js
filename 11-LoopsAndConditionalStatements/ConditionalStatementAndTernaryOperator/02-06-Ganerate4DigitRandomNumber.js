/**
 * Generate new 4-digit random number.
 * Range for the random number is 1000 to 9999
 * Ensure that this new random number doesn't match any of the numbers myNumbers array.
 * If it matches you need to generate new 4-digit numbers
 * If there is no match(new number is unique) that add it to the myNumbers array.
 */

// NOTE 이 파일은 전체를 몇 번이고 다시 뜯어 볼 것. isNotUnique function이 key다.

MIN = 1000;
MAX = 9999;

const myNumbers = [
  2355,
  7235,
  8135,
  1762,
  2361,
  8351
];
/* MIN = 1;
MAX = 9;

const myNumbers = [
  4,
  6,
  2,
  8,
  9
];
 */
let newRandomNumber;

function getRandomInt ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function isNotUnique ( newRandomNum ) {
  // compare num with numbers in the myNumbers array
  for ( let number of myNumbers ) {
    if ( number === newRandomNum ) {
      console.log("Number " + newRandomNum + " is not Unique.")
      return true;
    }
  }
}

do {
  newRandomNumber = getRandomInt( MIN, MAX );
} while ( isNotUnique( newRandomNumber ) );

myNumbers.push( newRandomNumber );

console.log( myNumbers );
