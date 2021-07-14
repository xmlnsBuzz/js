/*
Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value(평균값) of all arguments rounded to 2 decimal places.
임의 수량의 인수를 받아들이고 단일 배열로 모은 다음 소수점 이하 2 자리로 반올림 된 모든 인수의 평균값을 반환하는 "meanScore"함수를 만듭니다.

If at least one element in the gathered array is not a number - throw following error to the console: 
"Supplied arguments must contain only numbers!"
수집 된 배열에서 하나 이상의 요소가 숫자가 아닌 경우 콘솔에 다음 오류를 발생시킵니다.
"제공된 인수는 숫자 만 포함해야합니다!"

Type of the returned value must be a "number".
반환 된 값의 유형은 "숫자"여야합니다.

HINT: In this Challenge you should use both rest and spread operators.
힌트 :이 챌린지에서는 rest 및 spread 연산자를 모두 사용해야합니다.
*/

// spread operator 자체도 arguments가 된다.?
"use strict";
const meanScore = ( ...scores ) => {
  if ( scores.every( score => typeof score === "number" ) ) {
    // Calculate mean score
    // 아래의 '+score'처럼 앞에 unary operator(+)를 명시하면 number type이 된다.
    // 또는 parseFloat으로 number화 한다.
    return parseFloat( scores.reduce( ( avg, score ) => {
      return avg + score / scores.length;
    }, 0 )
      .toFixed( 2 ) );
  } else {
    throw new Error( "Supplied arguments must contain only numbers!" );
  }
};

const scores1 = [ 0, 1.5, 2.5, 3.7 ];
const scores2 = [ 1.7, 4.5, 0, 4.9, 5.0, 4.2 ];
const scores3 = [ 1.3, 2.5, 1.9 ];
const scores4 = [ "abc", 1.3, true, 2.5, 1.9 ];


console.log( meanScore( ...scores1 ) ); // 1.93

console.log(
  meanScore( ...scores1, ...scores2 )
); // 2.8

console.log(
  meanScore( ...scores1, ...scores2, ...scores3 )
); // 2.59

console.log( meanScore( ...scores4 ) ); // Supplied arguments must contain only numbers!
