// NOTE 1. First solve this WITHOUT default function parameter.

const weatherForecast = ( city, weather="Great weather" ) => {
  return `Weather forecast fo ${ city } : ${ weather }`;
};

console.log( weatherForecast( "Paris" ) ); 

console.log( weatherForecast( "New York", "Sunny" ) );

console.log( weatherForecast( "Las Vegas", "" ) ); 

console.log( weatherForecast( "Miami", undefined ) ); 