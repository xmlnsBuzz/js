/**
 * Array of objects
 * 
 * Create Array with 3 objects
 * Each object will have two properties - carBrand, price
 * Add one more object to the Array
 */

const arrayOfCars = [
  {
    carBrand: "Toyota",
    price: 12000
  },
  {
    carBrand: "Tesla",
    price: 30000
  },
  {
    carBrand: "BMW",
    price: 25000
  }
];
console.log( arrayOfCars );

const newCar = {
  carBrand: "Honda",
  price: 15000
};

arrayOfCars.push( newCar );
console.log( arrayOfCars );

arrayOfCars.push( { carBrand: "Hyundai", price: 100000 } ); // inline push
console.log( arrayOfCars );
console.log( arrayOfCars.length );
