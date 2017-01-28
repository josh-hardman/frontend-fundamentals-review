// http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/

// There are 4 contexts where the this keyword

// (1) Window:
  // this is a property on the window object referencing itself
  // If in strict mode, this returns undefined

  window.foo = function(){ return 'hello' };
  console.log( this.foo() ); // hello

// Implicit Binding:
  // this references whatever is left of the . at call time
  // This is the default behavior of the this keyword.

// Explicit Binding:
  // In callback functions, this is changed to reflect the callback's context which is why the following example fails:

  // We have a simple object with a clickHandler method that we want to use when a button on the page is clicked​
   var user = {
     data:[
       {name:"T. Woods", age:37},
       {name:"P. Mickelson", age:43}
     ],
     clickHandler:function (event) {
       var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
    ​
       // This line is printing a random person's name and age from the data array​
       console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
     }
   }
​
   // The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object​
   // And the output will be undefined because there is no data property on the button object​
   $ ("button").click (user.clickHandler); // Cannot read property '0' of undefined

   // This is how you would bind this to the user
   $("button").click (user.clickHandler.bind (user)); // P. Mickelson 43

  //Solution Explicit Binding:
    // Bind()
    // Call()
    // Apply()



  // Fixing this in closures

  var user = {
    tournament:"The Masters",
    data      :[
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
    ],
​
    clickHandler:function () {
    // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.​
​
    this.data.forEach (function (person) { // forEach allows you to pass a this reference
      
      // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.​
      // This inner function cannot access the outer function's "this"​

      console.log ("What is This referring to? " + this); //[object Window]​, if in STRICT MODE it is undefined

      console.log (person.name + " is playing at " + this.tournament);
      // T. Woods is playing at undefined​
      // P. Mickelson is playing at undefined​
      })
    }
​
  }
​
  user.clickHandler(); // What is "this" referring to? [object Window]
