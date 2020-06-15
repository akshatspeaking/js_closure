//1 - 4

function nonsense(string) {
   var blab = function() {
      alert(string);
   }
   // blab();
   // setTimeout(blab, 2000);
   return blab;
}

let blabLater = nonsense("Hello World!");
let blabAgainLater = nonsense("Hello JS!");

//5

var lastNameTrier = function(firstName){
   return innerFunction = function(lastName) {
      console.log(firstName, lastName);
   };
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'


//6

function storyWriter(){
   let story = "";
   return {
      addWords: function(words){
         story += words;
         console.log(story);
      },
      erase: function(){
         story = "";
         console.log(story);
      }
   }
};