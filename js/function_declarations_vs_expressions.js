// function declaration

function hello(){
  alert('hi');
} //no semicolon


// function expression

var hello = function(){
  alert('hi');
}; // use ; because this is a variable statement




//in the creation phase of the execution context, variables are hoisted and their values are set to undefined.
//Function declarations are hoisted and immediately made availible.
console.log(sum); // function
console.log(sum2); // undefined

function sum(a,b) {
  console.log(a+b);
}

var sum2 = function(a,b) {
  console.log('sum2', a+b );
}
