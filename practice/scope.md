## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
// undefined, undefined, "no one"
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));
// AryaStark
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js
fucntion addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);

//Output: 1 2

```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);

//Output: 1 2
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);

//Output : 
//1
//2
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);

//Output: throws error: can't access addOne before initialization; Code stops there.
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0)); //can't access addOne before initialization; Code stops here.
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```

8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

//Output: undefined
```

9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

//Output: true

```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

//Output: undefined
```

11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);

//Output: AryaStark

```

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);

//Output: AryaStark
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name);

//Output: SHOULD BE: name is not defined because name does not exist in global scope/ ATUAL OUTPUT: <empty string>
```

14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);

//Output: Arya Stark
```

15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);

//Output: SHOULD BE: name is not defined because name does not exist in global scope/ ATUAL OUTPUT: <empty string>
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);

//Output: 20 because var has functional scope, and is hence accessible in global

```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);

//Output: should be not defined, actual output in firefox: 0. Why?!
//in chrome, as expected, i is not defined.
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");

//OUTPUT:
//20 second
//20 first
//20 first
//20 first
//total 20 times "20 first"

//REASON: value of i becomes 20 at end of loop running, then is console logged, then the console log from inside for exectutes 20 times with value of i as 20.



```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");

//OUTPUT:
//i is not defined on line 259
//0 first
//1 first
//...
//19 first

//NOT CLEAR> TO UNDERSTAND!

//REASON: value of i reaches 20 at the end of for loop exectution, but is not accessible outside the loop, hence is printed as not defined. then the console logs from within the loop run, after 100ms, and each iteration has i (copy of i?), with value at that point

```

20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}

//OUTPUT: undefined, as the function is never called.
//if called, output will be "John Snow"
```

21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}

//output: username is not defined, as let has block scope
```

22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}

//OUTPUT:
//should be error at line 308?: redeclaration of username; UNDERSTAND
//ACTUAL OUTPUT: John Snow
// John Snow second



```

23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}

//OUTPUT:
//John Snow first
//Arya Stark second
```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");


//OUTPUT:
//Hello I am First
//Hello I am Second
//Hello I am Third
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");
//OUTPUT:
//Hello I am First
//Hello I am Second
//Hello I am Third
```

26. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First"); //username not defined
  let username = "Hello World!";
  myFunc(); //Hello World Second, but not executed as error above
}
```

27. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log("I love this movie called ${movie.toUpperCase()}"); // variables only work with backticks. As such, will print I love this movie called ${movie.toUpperCase()}
    //if backticks used, will print "I love this movie called MAD MAX: FURY ROAD"
  }
  inner();
}

outer();

//OUTPUT: I love this movie called MAD MAX: FURY ROAD
```

28. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();

//OUTPUT (if backticks used):
//I love this movie called BEFORE SUNRISE
```

29. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();

//OUTPUT:
//I love this movie called GONE GIRL

```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b; //should be a * b
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, sub, multiply, divide];

//ANSWER:

for (fn of allFunctions) {
    console.log(fn(8, 2));
}

```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];

//UNCLEAR!!!!!!


```
