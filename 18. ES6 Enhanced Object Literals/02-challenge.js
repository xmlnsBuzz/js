/*
Modify object that is returned by "photoGallery" function using:
1. Shorthand property names
2. Shorthand method names
3. Computed property names. You need to add one computed property.

Also correct all mistakes.

Log messages in the console must be exactly the same as at the end of this challenge.
*/

const photoGallery = ( title, dimensions, date ) => {
  return {
    title: title,
    info: function () {
      console.log(
        `Dimensions of the photo "${ title }" are ${ date }`
      );
    },
    dimensions: dimensions,
    publishInfo: () => {
      console.log(
        `photo was published ${ Math.floor(
          ( new Date().getTime() - date.getTime() ) / 1000
        ) } seconds ago`
      );
    },
    date: date
  };
};

const photo1 = photoGallery(
  "My dog",
  "1920x1080",
  new Date()
);

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

photo1.info();
/* Dimensions of the photo "My dog" are 1920x1080 */

setTimeout( () => photo1.publishInfo(), 2000 );
/* photo "My dog" was published 2 seconds ago */

/* QUESTION: Why "publishInfo" method still has access to the parameters (for example "date") of the "photoGallery" function? */

console.log( photo1[ testDimension1 ] ); // true
console.log( photo1[ testDimension2 ] ); // undefined
