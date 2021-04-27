/**
 * For of loop with Arrays
 */
const persons = [
  {
    name: "Mike",
    age: 25
  },
  {
    name: "Bob",
    age: 30
  },
  {
    name: "Alice",
    age: 27
  }
];

for ( let person of persons ) {
  console.log( person.name, person.age );
}

// console.log( person ); // Uncaught ReferenceError: person is not defined
// 'person'은 for of 속의 local variable이므로 global scope에서 사용 못하므로 error
















