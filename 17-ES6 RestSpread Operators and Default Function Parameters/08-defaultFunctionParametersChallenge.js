/**
 * Create a function "weatherForecast" with tow parameters "city" and "weather".
 * 
 * If second argument is absent, "weather" parameter should get value "Great weather!".
 * 
 * 1. First solve this WITHOUT default function parameter.
 * 2. Comment previous solution and solve same task WITH default function parameter.
 * 
 * NOTE : Carefully compare your results with test calls results.
 */

const weatherForecast = ( city, weather ) => {
  // weather = weather || "Great weather!";
  // NOTE a || b 의 비교에서 a가 false이면 항상 'b'를 return한다. ex) 0, "", undefined, null ...
  weather =
    weather !== undefined
      ? weather
      : "Great weather";
  return `Weather forecast fo ${ city } : ${ weather }`;
};

console.log( weatherForecast( "Paris" ) ); // 인수가 없으면 F

console.log( weatherForecast( "New York", "Sunny" ) );

console.log( weatherForecast( "Las Vegas", "" ) ); // 빈 내용도 ""가 있으므로 실행

console.log( weatherForecast( "Miami", undefined ) ); // undefined 이므로 F