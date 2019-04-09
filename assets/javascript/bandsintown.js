// $(document).ready(function() {
    
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
    
    // Create AJAX Call for concert information
    
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response)

        // var results = response._embedded.events

        // console.log(results);

        // for (var i = 0; i < results.length; i++) {
        //     var tRow = $("<tr>");
        //     var date = $("<td>").text(results[i].dates.start.localDate);
        //     var artist = $("<td>").text(results[i].name);
        //     var genreResults = results[i].classifications
        //   for (var j = 0; j < genreResults.length; j++) {
        //       var genre = $("<td>").text(genreResults[j].genre.name);
        //       tRow.append(date, artist, genre);
        //       $("tbody").append(tRow);
           
        // });
        


    // });