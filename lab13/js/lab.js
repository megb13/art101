/*
   lab.js - Create a loop that prints 1-200 and fr certain multiples print something else

   Requirements: jQuery must be loaded for this script to work.

   Author: Megan Bustamante
   Date: November 2023

   help from chat gpt
*/



// // $('#Fizz').click(function(input){
// function FizzBuzz(){
//     for (var index =0;index<=i200;index++ ){

//     oneLongString ="";
    
// //     if the number is a multiple of 3 print fizz
// if (index % 15 == 0){
//     console.log(index +" FizzBuzz!");
//   }
//   else if (index % 5 == 0){
//     console.log(index + " Buzz!");
//   }
  
// //     numbers that are both multiples of 3 and 5 
//   else if(index % 3 == 0){
//     console.log(index + " Fizz!");
//   }
  
//   else{
//     console.log(index);
//   }
    
// }
// }
// $("#Fizz").click(FizzBuzz())

function runFizzBuzz() {
    
    // output.innerHTML = ""; // Clear previous output
    
    for (var i = 1; i <= 200; i++) {
      var result = "";
      if (i % 15 ==0) {
        result +="FizzBuzz<br>";
      }
      if (i % 3 === 0) {
        result += "Fizz<br>";
      }
      
      if (i % 5 === 0) {
        result += "Buzz<br>";
      }
      
      if (result === "") {
        result = i + "<br>";
      }
      
      $("#output").append("<br>" + result);
    }
}

$("#Fizz").click(runFizzBuzz())
