/**
 * Switch statement
 */

let color = "green";

switch ( color ) {
  case "green":
    console.log( "Green color" );
    break;
  /* NOTE 위의 break가 없으면 아래의 "Yellow color"까지 연이어 실행한다. "BREAK" 중요함.
  case "green":
    console.log("Green color again") 
    */
  case "yellow":
    console.log( "Yellow color" );
    break;
  case "red":
    console.log( "Red color" );
    break;
  default:
    console.log( "Unknown color" );
}
