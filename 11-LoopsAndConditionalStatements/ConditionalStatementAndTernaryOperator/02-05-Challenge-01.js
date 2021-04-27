/**
 * TASK 1
 * 
 * Loop through the object and if property name(key) is either "key1" or "key3" log th the console property value
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: "abc",
  key4: null,
  key10: NaN
};

for ( let key in myObject ) {
  if ( key === "key1" || key === "key3" ) {
    console.log( myObject[ key ] );
  }
}