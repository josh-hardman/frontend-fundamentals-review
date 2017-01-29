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
