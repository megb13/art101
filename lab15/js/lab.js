// Author: Megan Bustamante
// Created December 2, 2023
// 

const ENDPOINT = 
"https://yesno.wtf/api";

$("#activate").click(function(){
    // function hereeee 
//   parse the JSON data structure like we did in lecture, or
// use JSON.stringify(data) to convert your data into a string
    $.ajax({
        "url": ENDPOINT,
        type: "GET",
        "dataType": "json",
        "success": function(results){
            console.log(results);

            outText = results.answer;

            $("#output").append("<p>" + outText)
            // appends yes or no text to output div
        },
        // ^^ending the success function
        error: function(textStatus,errorThrown){
            console.log("Error:", textStatus, errorThrown)
            // ^^ in case of errors
        }
    })
// ending the ajax function

})


//  // The URL for the request (from the api docs)
//  url: "https://yourapiendpoint.com/",
//  // The data to send (will be converted to a query string)
//  data: { 
//          // here is where any data required by the api 
//          //   goes (check the api docs)
//          id: 123,
//          api_key: "blahblahblah",
//        },
//  // Whether this is a POST or GET request
//  type: "GET",
//  // The type of data we expect back
//  dataType : "json",
//  // What do we do when the api call is successful
//  //   all the action goes in here
//  success: function(data) {
//      // do stuff
//      console.log(data);
//  },
//  // What we do if the api call fails
//  error: function (jqXHR, textStatus, errorThrown) { 
//      // do stuff
//      console.log("Error:", textStatus, errorThrown);
//  }
// })

