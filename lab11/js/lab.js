/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Megan Bustamante
   Date: Novwember 2023
*/



// anagram fucntion

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

  // click listener for button
$("#submit").click(function(){
// get value of input field
    const userName = $("#user-name").val();

    // now let's sort it
    userNameSorted = sortString(userName);

    // append a new div to our output div
    //  this appends to wherever the output is and from here can be on the image
    $("#output").html('<div class="new-name">' + userNameSorted + '</div>');

});

