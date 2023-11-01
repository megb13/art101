/* index.js - 
**Author: Megan Bustamante
** Date: November, 2023
*/

//Task 1//
// declare a variable userName and use window.prompt for input

function sortUserName(){
  var userName = window.prompt ("Hello there! Please tell me your name and I'll give you a new one!");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split ('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  
  return nameSorted;
  }
  
  
  //Output and Results
  document.writeln("Here is your much better new name: ",
  sortUserName(), "</br>");
