// http://javascriptissexy.com/understand-javascript-closures-with-ease/

// What even is a closure?

// It is an inner function that has access to the out (enclosing) function's variables - scope chain
// It gets access to ( own variables, outer function's variables, and global variables )
// Can also access outer function's parameters directly, just not through the arguments object

// Basic example:
function showName (firstName, lastName) { 
  ​var nameIntro = "Your name is ";
      // this inner function has access to the outer function's variables, including the parameter​
  ​function makeFullName () { 
  ​ return nameIntro + firstName + " " + lastName; 
  }
​
​  return makeFullName (); 
} 
​
showName ("Michael", "Jackson"); // Your name is Michael Jackson 


// Closure rules and side effects:
  // (1) Closures have access to the outer function’s variable even after the outer function returns

  // Example:
  function celebrityName (firstName) {
      var nameIntro = "This celebrity is ";
      // this inner function has access to the outer function's variables, including the parameter​
     function lastName (theLastName) {
          return nameIntro + firstName + " " + theLastName;
      }
      return lastName;
  }
  ​
  ​var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned with the lastName function definition.​
  ​
  ​// The closure (lastName) is called here after the outer function has returned
  ​// Yet, the closure still has access to the outer function's variables and parameter​
  mjName ("Jackson"); // This celebrity is Michael Jackson 









  // (2) Closures store references to the outer function's variables, not actual values
  // If outer function's vars change before clsoure is called, the new value gets used

  function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
​
  }
  ​
  ​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
  mjID.getID(); // 999​
  mjID.setID(567); // Changes the outer function's variable​
  mjID.getID(); // 567: It returns the updated celebrityId variable 





// Closures around entire js source files/ wrap it in an iffe?
// Why do people do this?
var myPlugin = (function() {
 var private_var;

 function private_function() {
 }

 return {
    public_function1: function() {
    },
    public_function2: function() {
    }
 }
})()

// This is an example of namespacing your plugin. The whole plugin just became a closure and since it is an iife, the return statement gives the global scope access to the plugins methods that you explicitly give them access to.

myPlugin.public_function1()




// Expand your understanding by looking into for loop caviates and how you can use iifes to fix it
