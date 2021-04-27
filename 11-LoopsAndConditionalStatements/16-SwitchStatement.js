/**
 * Switch Statement
 */

/* Format
switch (Expression) {
case A:
  Action if Expression === A
  break;
case B:
  Action if Expression === B
  break;
default:
  Default actions
}
*/

let month = 2;

switch ( month ) {
  case 1:
    console.log( "It is December" );
    break;
  case 2:
    console.log( "It is January" );
    break;
  case 3:
    console.log( "It is February" );
    break;
  default:
    console.log("It is not a winter month")
}

/* NOTE 각 case 마다 break; 를 꼭 적어줘야 한다. break를 쓰지 않을 경우 계속해서 다음 case를 확인 읽어내려가 원치 않는 코드가 실행될 수 있다. ref to https://velog.io/@skh417/TIL-JavaScript-switch-%EB%AC%B8  */
