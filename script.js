var countryCode = ["gb", "at", "au", "br", "ca", "de", "fr", "in", "it", "nl", "nz", "pl", "ru", "sg", "us", "za"]
var categorySelect = $("#inputGroupSelect04").val()

console.log("Hello World");
$(document).ready(function () {
  console.log("ready");

  var queryURL =
    "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=be3ea934&app_key=92b7a058356afbbaa6b1cf90c7bae1c1&results_per_page=20&what=" + categorySelect + "&content-type=application/json";
  
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var category = $("#inputGroupSelect04").val()
        $.ajax({
            url: queryURL,
            method: "GET",
          }).then(function (response) {
           // console.log(response);
            console.log("This is API response: ", response.results);
            // console.log(response.results[0].category);
            // console.log(response.results[0].company);
            // console.log(response.results[0].location);
            
        console.log("category ", category)
         for (var i = 0; i < response.results; i ++);
        JSON.stringify(response.category);
       $(".description").text( 
       $(".category").text("category: " + response.results[i].category[i]));
       $(".company").text("company: " + response.results[i].company[i]);   
       $(".location").text("location: " + response.results[i].location[i]);
        });
         
    });
 
});





console.log("Hello World");
$(document).ready(function () {
  console.log("ready");

  var images = ["/City.jpg", "/mountain.jpg", "/small-city.jpeg", "/smalltowns.jpg"];

  $(function () {
    var i = 0;
    $(".background").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
      // for (i = 0; i < images.length; i++)
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".background").fadeOut("slow", function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 5000);
});
  
//   var queryURL =
//     "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=be3ea934&app_key=92b7a058356afbbaa6b1cf90c7bae1c1&results_per_page=20&what=javascript%20developer&content-type=application/json";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//     console.log(response);
//   });
});


var queryURL =
    "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
