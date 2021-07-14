/**
 * Tagged Templates 
 */

// @ts-ignore
const name = "Sophia";
const age = 20;

const checkAge = ( arrayOfStrings, name, age ) => {
  // arrayOfStrings.forEach(elem => console.log(elem))
  // console.log( arrayOfStrings, name, age );
  return age >= 18
    ? `${name} is passed`
    : `${name} is blocked`;
};

console.log( checkAge`${name} is ${age} years old` );

// NOTE
// ! Template literal을 사용할 때 변수에 의해서 분리된 string은 array로 처리된다.
// ! function에 template literal( tilde로 wrap하는 것 )을 사용할 수 있다는 사실을 처음 알았음;