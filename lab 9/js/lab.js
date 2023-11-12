/* index.js - 
** lab9.js JavaDcript to create buttons that modify
**Author: Megan Bustamante
** Date: November 8, 2023
*/


$(".challenge").append("<button id='challenge-button'>Press me")

// add a click listener to the challenge button

$("#challenge-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".challenge").toggleClass("special1");
});
// special1 changes color of box this is written in the css



$(".problems").append("<button id='problem-button'>Press me")

// event listener to toggle class

$("#problem-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".problems").toggleClass("special2");
});


$(".reflection").append("<button id='reflect-button'>Press me")

$("#reflect-button").click(function(){
    $(".reflection").toggleClass("special3");
});
    
$(".results").append("<button id='result-button'>Press me")

$("#result-button").click(function(){
    $(".results").toggleClass("special4");
});
