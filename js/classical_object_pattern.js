// This is the classical way
// It is pretty strait forward

var Person = function( name ) {
  this.name = name;
};

var john = new Person('John');
var bobby = new Person('Bobby');




// prototypal inheritance

var human = {
  species: 'human',
  saySpecies: function() {
    console.log(this.species);
    console.log(this);
  },
  sayName: function() {
    console.log(this.name);
  }
}

var musician = Object.create(human);

musician.playInstrument = function() {
  console.log("plays..." + this.instrument);
};

var will = Object.create(musician);
will.name = 'will';
will.instrument = 'drums';




// If you don't like will.name, will.instrument do the following

var human = {
  species: 'human',
  create: function(name) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key) {
      instance[key] = values[key];
    });
    return instance;
  },
  saySpecies: function() {
    console.log(this.species);
    console.log(this);
  },
  sayName: function() {
    console.log(this.name);
  }
}

var will = human.create('will');
