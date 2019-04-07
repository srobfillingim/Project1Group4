$(document).ready(function() {
    
    // Function to re-renders the HTML to display the appropriate content

    var queryGenreURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=kansas+city&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa";
    
    // Create AJAX Call for concert information
    
    $.ajax({
        url: queryGenreURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        var results = response._embedded.events

        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var tRow = $("<tr>");
            var date = $("<td>").text(results[i].dates.start.localDate);
            var artist = $("<td>").text(results[i].name);
            var genreResults = results[i].classifications
          for (var j = 0; j < genreResults.length; j++) {
              var genre = $("<td>").text(genreResults[j].genre.name);
              tRow.append(date, artist, genre);
              $("tbody").append(tRow);
            }
        }
        


    });
    

 
    
    
    
    
    
});