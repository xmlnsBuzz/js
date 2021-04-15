// const myCity = {
//   city: "New York",
//   pupular: true,
//   country: "USA"
// };

// console.log( myCity );

// console.log( myCity.city );

// console.log( myCity.pupular );

// myCity.city = "Las Vegas";

// console.log( myCity );

// delete myCity.country;

// console.log( myCity );

// NOTE 중요 중요.. property 를 insert할 때 square bracket notation 사용.
// myCity[ 'country' ] = "Los Angeles";

// console.log( myCity );

// NOTE 중요 중요.. property 를 insert할 때 square bracket notation 사용.
// const countryPropertyName = "country";
// myCity[ countryPropertyName ] = "Korea";

// console.log( myCity );


// NOTE squar bracket을 사용할 때와 '.(dot)'을 사용할 때

const myCity = {
  city: "New Yori",
  info: {
    popular: true,
    country: "USA"
  }
};

console.log( myCity.info.popular);

delete myCity.info["popular"]
// delete myCity.info["popular"]
// delete myCity.info.popular
// NOTE 위의 2가지는 차이 없음.

console.log(myCity)





