// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
let init = [];
arrays.reduce((init, arr) => {
return arr.concat(init)
}, init);

// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop

function loop(val, testFn, updateFn, bodyFn) {
  let currVal = val;
  while (testFn(currVal)) {
    bodyFn(currVal);
    currVal = updateFn(currVal);
  }
}


// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything

//using loop:
function every(array, test) {
  let ans = true;
  array.forEach(item => {
    if (!test(item)) {
      ans = false;
    }
  })
    return ans;
}

//using some:
function every(array, test) {

  function inverse(x) {
    return !test(x);
  }

  let ans = true;
  if (array.some(inverse)){
    ans = false;
  }
  return ans;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
  console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
  
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
