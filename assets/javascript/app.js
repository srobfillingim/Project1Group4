$(document).ready(function(){
    // Location page JS
    $('.slider').slider();




  var bands = {};

      getEvents()
        .then(events=>{
          console.log(events)
          var results = events._embedded.events;

          var artists = [];
          for(var i = 0; i < results.length; i++){
            artists.push(results[i]._embedded.attractions[0].name); 
          }
         
            // TODO: FIND ALL ARTISTS
            var artistRequests=[];

            // TODO: forEach Artist
            // forEach
            artists.forEach(artist=>{
              console.log(artist);
              artistRequests.push(getArtist(artist));
            })
            console.log(artistRequests);

            var verified = [];
            Promise.all(artistRequests)
            .then(artistResponses=>{
              artistResponses.forEach(artistResponse=>{
                console.log(artistResponse);
                if(artistResponse.id){
                  verified.push(artistResponse.name);
                  bands[artistResponse.id] = artistResponse;
                }
              })
              // TODO:  Now you have all the artist events
            })
            .then(()=>{

              // TODO: forEach Artist
              // forEach
              var artistEventsRequests = [];
              verified.forEach(artist=>{
                console.log(artist);
                artistEventsRequests.push(getArtistEvents(artist));
              });

              Promise.all(artistEventsRequests).then(artistEventsResponses=>{
                console.log(artistEventsResponses);
                console.log(bands);
              });
            })
            .catch(console.log);
        });

      function displayMusicEvents() {
        
        var musicDiv = $("<div>");
        musicDiv.addClass("card-image waves-effect waves-block waves-light");

        var imgURL = results[0].images[0];
        var image = $("<img>").attr("src", imgURL);
        musicDiv.append(image);
        console.log(image);

        var artistName = results[0].names;
        var name = $("<p>").text("Name: " + artistName);
        musicDiv.append(name);
        console.log(name);

        var dateTime = results[0].dates.start[0].localDate.localTime;
        var date = $("<p>").text("Date and Time: " + dateTime);
        musicDiv.append(date);
        console.log(date);

        var ticketURL = results[0].ticketLimit.url;
        var ticket = $("<p>").text(ticketURL);
        musicDiv.append(ticket);
        console.log(ticket);


    };

    $(document).on(displayMusicEvents);









});