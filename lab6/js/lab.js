/* index.js - Create arrays in javascript
**Author: Megan Bustamante
** Date: October 27, 2023
*/

//Task 1//
var myTransport = ["legs", " bus", " bike", " car"]

var myMainRide = {
    make: "schwinn",
    model: "leToure",
    color: "Gold",
    year: 1979,
  age:function() {
      return 2023 - this.year;
  }
}
console.log("My main ride is: " + myMainRide);

// Task 2//

document.writeln("Kinds of transportation I use: " + myTransport +"</br>");

//Try this to print?//
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");