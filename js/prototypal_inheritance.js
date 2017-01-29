// JavaScript does not contain a true class implementation
// The class keyword in es6 is syntactic sugar
// JavaScript is prototype based

// Each object has a link to its prototype. The prototype with null as it's prototype is the final link in the chain.

// MANY THINK THIS IS A WEAKNESS OF JS, BUT IS ACTUALLY MORE POWERFUL

// objects are bags of properties. First they try to access their 'own properties', if they aren't found, it starts looking to the prototype of the object, and up the chain until it is found, or the end of the prototype chain is reached.

// Example 1:
console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called "property shadowing"

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined






// Objects created with syntax constructs

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
