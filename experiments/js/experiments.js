


// add button to title

console.log("javascript is working")

// $("#title").append("<button id='my-button'>Press me");


// function askName(){
//     var name = prompt("name please: ");
// }
    

$("#my-button").click(function(){
    console.log("button clickes!");
    var name = prompt("name please: ");
    console.log("prompt returned: " + prompt);
    newText = ("hello " + name + "!");
})