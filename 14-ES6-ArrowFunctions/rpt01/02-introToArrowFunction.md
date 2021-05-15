# Introduction to Arrow Function

## Traditional function expression

```js
function (a , b) {
  return a + b;
}
```

## Anonymous Arrow Function Expression

```js
// Anonymous arrow function expression
// Implicit return of a + bshd101wyy
(a, b) => a + b

// Explicit return of a + b
(a, b) => {
  return a + b;
}

// Omit () with one parameter
a => a * a

// () are mandatory when without any parameters
() => 2

// Explicit return of the object
(a, b) => {
  return {
    a1: a,
    b1: b
  }
}

// 위를 줄여서 아래와 같이도 표현한다.
// Implicit return of the object
(a, b) => ({
  a1: a,
  b1: b
})
```
