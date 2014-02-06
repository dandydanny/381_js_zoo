//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------

// Class with initialize constructor
var Zoo = {} // empty fn?

// Truck in the animals
Zoo.init = function(animals) {
  this.animals = animals
}

// count number of two-legged animals
Zoo.bipeds = function() {
  var bipeds = []
  for (var i = 0; i < this.animals.length; i++)
  {
    if(this.animals[i].legs == 2)
    {
      bipeds.push(animals[i])
    }
  }
}

// count number of four-legged animals
Zoo.quadrupeds = function() {
  var quadrupeds = []
  for (var i = 0; i < this.animals.length; i++)
  {
    if(this.animals[i].legs == 2)
    {
      quadrupeds.push(animals[i])
    }
  }
}

// Animals needs to have name and # of legs
function Animal(name,legs) {
  this.name = name;
  this.legs = legs;
}; // end of fn animal

// I am a prototype :)
Animal.prototype.identify = function(){
  return "I am a " + this.name + " with " + this.legs + " legs.";
};  // end of identify prototype

// More prototype
Animal.prototype.name = function(){
  return this.name;
};  // end of name prototype

// end of JS Zoo



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

assert(
  Zoo.bipeds().legs === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().legs === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);
