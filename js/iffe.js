// http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// Immediately-Invoked Function Expression (IIFE)

// ...doesn't it stand to reason that the function expression itself can
// be invoked, just by putting () after it?
function(){ /* code */ }(); // SyntaxError: Unexpected token (

// When the parser encounters the function keyword in the global scope or inside a function, it treats it as a function declaration (statement), and not as a function expression

// How to trick the syntax parser into making your function an expression?

(function(){ /* code */ }());

// When should you use IIFEs?
// (1) Avoid polluting the Global scope
// (2) Prevent fold over in closures when dealing with for loops
