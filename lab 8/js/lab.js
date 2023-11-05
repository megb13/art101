/* index.js - 
**Author: Megan Bustamante
** Date: November 5, 2023
*/

// below copied from console test//
//declare array variable//
var nums = [ 1, 10,7,3,20,15, 30, 90]

// named function w return//
function myCalculation(x){
    var calcResults = x * 20
    return calcResults;
}
//anon funct//
nums.map(function(x){
    var functResults = x * 20
    return functResults;
})

function isEven(x){
    return(x % 2 == 0);
}

//  console log returning stuff
console.log("My Array: ", nums);

console.log("is 1 even? ", isEven(1));
console.log("is 1 even? ", isEven(3)); 
console.log("is 2 even? ", isEven(2));

var evenResult = nums.map(isEven);

console.log("Test of Array evenness: ", evenResult);


var results = nums.map(myCalculation);

console.log("My Array multiplied by 20: ", results);