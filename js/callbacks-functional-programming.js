//  http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

// In JS, functions are first class citizens. They can be used stored in variables, passed as arguments, created within functions or returned from functions

// Callback functions are derived from a programming paradigm known as functional programming.

//Note that the item in the click method's parameter is a function, not a variable.​
​//The item is a callback function
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});


// How do callback functions work?

// When we pass a callback function as an argument, we are only passing the function definition. The containing function can execute the callback anytime.
// Since the callback function is not executed immediately, it is "called back" (hence the name)
// Even if the function is passed in anonymously, the containing function still has access to the definition via the arguments object

// Callback functions are Closures
// the callback function can access the containing functions’ variables, and even the variables from the global scope.
