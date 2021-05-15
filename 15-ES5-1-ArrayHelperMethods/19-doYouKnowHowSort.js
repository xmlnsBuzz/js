/**
 * sort()
 * 
 * 4 Kind of sort
 * 
 * merge, bubble, quick, insertion
 * 
 * forEach, map, filter, find, every, some, includes, reduce
 * 
 * ./Pictures/39. LECTURE - sort() Overview.mp4_20210513_174228.404.jpg
 * 참조할 것
 */

// 1. Sorting algorithm - Insertion sort - Google Chrome
// 2. Quantity of iterations - 12
const myNumbers = [ 10, 5, 79, 27, 50, 14, 27, 5, 11,1 ];

let i = 0;
console.log(
  myNumbers.sort( ( a, b ) => {
    console.log( a, b );
    // console.log( myNumbers.sort((a,b)=>a-b )); // ! 실행해서 console을 볼 것!!!
    i++;

    return a - b;
  } )
);
console.log( "Qty of iterations is " + i );

//NOTE * // ? Chrome에서 insertion sort로 sorting한 출력 결과가 비디오와 다르다. 비디오에서는 13번 반복했으나 실행에서는 12번 했다.














