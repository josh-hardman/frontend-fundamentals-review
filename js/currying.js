// Currying is when a function, instead of taking all arguments at one time, takes the first one and returns a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon('fluffykins')('tiny')('lightning'));
