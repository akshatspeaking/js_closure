## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
// Error: animal is undefined
```

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
// Error: can't access lexical declaration 'animal' before initialization
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
// Error: can't access lexical declaration 'animal' before initialization
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
// Alert works as expected
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
// works as expected
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
// error : sayHello is not a function
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
//Error:
// Error: can't access lexical declaration 'sayHello' before initialization
```
