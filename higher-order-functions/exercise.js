// Challenge 1
function addTwo(num) {
   return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
   return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
   let newArr = [];
   array.forEach(num => {
      newArr.push(callback(num));
   })
   return newArr;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
   for (num of array) {
      callback(num);
   }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
   let newArr = [];
   array.forEach(num => {
      newArr.push(callback(num));
   })
   return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
   let acc = initialValue;
   for (item of array) {
      acc = callback(acc, item);
   }
   return acc;
}

//Extension 3
function intersection(arrays) {
   
   let cb = function (a, b) {

      if (a.length > 0 && b.length > 0) {

         let ans = [];
         for (let i = 0; i < b.length; i++){
            
            for (let j = 0; j < a.length; j++) {
               if (b[i] == a[j]) {
                  ans.push(b[i]);
               }
            }
         }
         return ans;
      } else {
      return a.length > 0 ? a : b;
      }
   }
   return reduce(arguments, cb, []);   
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {


   function cbfn(x, y) {
      let returnArr = [];
      //combine into single array, avoid duplicates
      x.forEach(item => {
         if (!returnArr.includes(item)){
         returnArr.push(item);
         }
      });
      y.forEach(item => {
         if (!returnArr.includes(item)){
         returnArr.push(item);
         }
      });
      return returnArr;
   }

   return reduce(arguments, cbfn, []);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
   let returnObj = {};
   array1.forEach((item, index) => {
      if (callback(item) == array2[index]){
         console.log(index);
         returnObj[item] = array2[index];
      }
   })
   return returnObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
   let returnObj = {};
   arrVals.forEach(val => {
      returnObj[val] = arrCallbacks.map(cb => {return cb(val)})
   })
   return returnObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
