
    //Filter by Kansas City and Music Segment
    
    function getEvents(city="kansas city"){
    
        var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&segmentName=music&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa`;
        return $.ajax({
            url: queryURL,
            method: "GET"
 
        });
    }

    console.log(getEvents);

    //TO DO: Filter by genre and create onclick event to display results by Genre
    function getGenre(genreId){
    
        var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?genreID&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa`;
        return $.ajax({
            url: queryURL,
            method: "GET"
 
        }).then(function(response) {
        
            // Printing the entire object to console
            console.log(response);
    }
    )};

