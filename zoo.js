//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------

function Animal(name,length) {
  this.name = name;
  this.length = length;

  // //break this out into a prototype
  // this.identify = function() {
  //   return "I am a " + this.name + " with " + this.length + " legs.";
  // };
}; // end of fn animal

// I am a prototype :)
Animal.prototype.identify = function(){
  return "I am a " + this.name + " with " + this.length + " legs.";
};  // end of prototype

// Class with initialize constructor

var Zoo = class({
  // fill zoo!
  init: function(truckload_o_animals)
  {
    this.animal = truckload_o_animals;
  }, // must use comma here

  bipeds: function()
  {
      // count number of two legged animals
  },

  quadrupeds: function()
  {
    // count number of four legged animals
  },

}); // end of Zoo



//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {  
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals);

// assert(
//   Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
// );
// assert(
//   Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
// );
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);
