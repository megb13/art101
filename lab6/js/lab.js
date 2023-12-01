/* index.js - Create arrays in javascript
**Author: Megan Bustamante
** Date: October 27, 2023
*/

//Task 1//
var myTransport = ["legs", " bus", " bike", " car"]


// console.log("My main ride is: " + myMainRide);

// Task 2//
$("#output").append("Kinds of transportation I use: " + myTransport +"</br>")
// document.writeln("Kinds of transportation I use: " + myTransport +"</br>");


// 
$(document).ready(function() {
var myMainRide = {
    make: "schwinn",
    model: "leToure",
    color: "Gold",
    year: 1979,
  age:function() {
      return 2023 - this.year;
  }
};
$("#output").append("My Main Ride: <pre>" + 
        JSON.stringify(myMainRide, null, '\t') + "</pre>");

//Try this to print?//
// document.writeln("My Main Ride: <pre>", 
//     JSON.stringify(myMainRide, null, '\t'), "</pre>");

});   