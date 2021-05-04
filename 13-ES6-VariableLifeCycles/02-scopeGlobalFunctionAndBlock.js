/**
 * Global scope
 */
var a = 10;


/**
 * Function scope
 */
function fn () {
  var b = true;
  console.log( b );
}

fn();

/**
 * Block scope
 */
{
  var c="abc";
}

if ( true ) {
  // block
} else {
  // block
}

for ( var i = 0; i < 5; i++ ){
  // block
}


















