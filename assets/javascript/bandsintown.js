    
    // Function to re-renders the HTML to display the appropriate content

    function getArtistEvents(artist){
        if(!artist) return;
        var queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=KCHotSpot`;
        return $.ajax({
            url: queryURL,
            method: "GET"
        })
    }
    
    function getArtist(artist){
        if(!artist) return;
        var queryURL = `https://rest.bandsintown.com/artists/${artist}?app_id=KCHotSpot`;
        return $.ajax({
            url: queryURL,
            method: "GET"
        })
    }
    