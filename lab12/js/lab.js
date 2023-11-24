/*
   lab.js - This 

   Requirements: jQuery must be loaded for this script to work.

   Author: Megan Bustamante
   Date: November 2023
*/

// copied from work in jsbin from monday's lecure
// var name = prompt("give me your name")

function sortingHat(name){
  
  var length = name.length

  var mod = length % 4

  
  if (mod == 0) {
  house = "Griffindoor"
  }
  else if (mod == 1){
    house= "Ravenclaw"
  }
  else if (mod == 2){
    house = "Hufflepuff"
  }
  else{
  house= "Slytherin"
  }
  
  return house;
}

$("#button").click(function(){
     urname = $("#input").val();

     housePick = sortingHat(urname)

    
        
    $("#output").html("The sorting Hat has sorted you into: " + housePick +"!!" );
    
    });
// var input = name

var myHouse = sortingHat(input);

console.log("Sorting Hat: After Very Careful consideration, I have sorted you into " + myHouse);
