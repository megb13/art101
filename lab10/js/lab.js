/*
   lab10.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Megan Bustamante
   Date: November 2023
*/

// copied from lab 10 examples
// makes random text
function generateRandomText() {
    // random text?
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 200;

    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
  


  // click listener for button
  // $("#make-convo").click(function(){
  //   //  within the function
  //   // get new fake dialogue calling back to the function at top
  //   const newText = generateRandomText();
  //   // append a new div to our output div
  //   $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  // });

  let clickCount = 0;

// modified click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue calling back to the function at the top
    const newText = generateRandomText();
    
    // Create a new div element with the class "text" and a paragraph containing the generated text
    const newDiv = $('<div class="text"><p>' + newText + '</p></div>');

    // Alternate the sides based on the click count
    if (clickCount % 2 === 0) {
        // For even clicks, add a class to position the text on the left
        newDiv.addClass('text-left');
    } else {
        // For odd clicks, add a class to position the text on the right
        newDiv.addClass('text-right');
    }

    // Increment the click count
    clickCount++;

    // Append the new div to our output div
    $("#output").append(newDiv);
});