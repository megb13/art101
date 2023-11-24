


// add button to title

console.log("javascript is working")

// $("#title").append("<button id='my-button'>Press me");


// function askName(){
//     var name = prompt("name please: ");
// }
    
function generateAnagram(inputString) {
    const characters = inputString.split('');

    for (let i = characters.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i +1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters.join('');
}


$("#my-button").click(function(){
    // console.log("button clickes!");
    // // var name = prompt("name please: ");

    var name = $("#input").val();

    var anagram = generateAnagram(name);

    console.log("prompt returned: " + anagram);

    newText = "Hello " + anagram + "!";

    $("#title").html(newText);
});