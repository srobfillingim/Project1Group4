
    //Function Filter by Kansas City and Music Segment
    
    function getEvents(city="kansas city"){
    
        var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&segmentName=music&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa`;
        return $.ajax({
            url: queryURL,
            method: "GET"
 
        });
    }
    console.log(getEvents);
    
    //Function Filter by Genre, Kansas City and Music Segment
    
    function getEventsByGenre(classificationName="alternative"){
    
        var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${classificationName}&city=kansas+city&segmentName=music&sort=date,asc&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa`;
        return $.ajax({
            url: queryURL,
            method: "GET"
 
        });
    }
    console.log(getEventsByGenre);

   //Function Filter by Venue, Kansas City and Music Segment
    function getEventsByVenue(venueId="ZFr9jZA1a1&city"){
    
        var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?venueId=${venueId}&city=kansas+city&segmentName=music&sort=date,asc&apikey=vnnOldOossqCwb17Oq4wA0TfYfmlmWAa`;
        return $.ajax({
            url: queryURL,
            method: "GET"
 
        });
    }
    console.log(getEventsByVenue);


