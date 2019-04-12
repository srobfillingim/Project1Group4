$(document).ready(function(){
  $('.modal').modal();
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '50%', // Starting top style attribute
    endingTop: '50%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      alert("Ready");
      console.log(modal, trigger);
    },
  });
    // Location page JS
    $('.slider').slider();

//AUDIO & CAPTION VARIABLES & FUNCTIONS

$("#playButton1").on("click", function() {
  $("#songPreview1").get(0).play();
});




//API FUNCTIONS

  var bands = {};
 //api1 =
      getEvents()
        .then(events=>{
          var results = events._embedded.events;
          console.log(results);
        
          var artists = [];

          for(var i = 0; i < results.length; i++){
            var eventObject = {};
            eventObject.name = results[i]._embedded.attractions[0].name;
            eventObject.date = results[i].dates.start.localDate;
            eventObject.time = results[i].dates.start.localTime;
            eventObject.venuename = results[i]._embedded.venues[0].name;
            eventObject.ticketurl = results[i].url;
            eventObject.image = results[i].images[2].url;

            artists.push(eventObject);
          }

          displayMusicEvents(artists);
         
            var artistRequests=[];

            artists.forEach(artist=>{

              artistRequests.push(getArtist(artist.name));
            })

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
                //console.log(artist);
                artistEventsRequests.push(getArtistEvents(artist));
              });

              Promise.all(artistEventsRequests).then(artistEventsResponses=>{

              });
            })
            .catch(console.log);

        });

      function displayMusicEvents(bandsWithData) {


        bandsWithData.forEach(function(eventObject){

       var mainCard = $("<div>");
       mainCard.addClass("col s6 m4");

       var card = $("<div>");
       card.addClass("card");
       mainCard.append(card);

        var cardImage= $("<div>");
        cardImage.addClass("card-image waves-effect waves-block waves-light");
        var imgURL = eventObject.image;
        var image = $("<img>").attr("src", imgURL);
        image.addClass("activator events-image");
        //image.append(imgURL); 
        cardImage.append(image);
        card.append(cardImage);
        console.log(imgURL);
        
        var cardContent = $("<div>");
        cardContent.addClass("card-content");

        var artistName = eventObject.name;
        var name = $("<span>").text(artistName);
        name.addClass("card-title activator grey-text text-darken-4");
        var iClass = $("<i>").addClass("material-icons right").text("more_vert");
        name.append(iClass);
        cardContent.append(name);

        var dateTime = eventObject.date + " " + eventObject.time;
        var date = $("<p>").text("Date & Time: " + dateTime);
        cardContent.append(date);
        card.append(cardContent);
        
        var cardReveal = $("<div>");
        cardReveal.addClass("card-reveal");
        var cardRevealSpan = $("<span>").addClass("card-title grey-text text-darken-4");
        var closeBtn = $("<i>").addClass("material-icons right").text("close");
        cardRevealSpan.text("Event Details");
        cardRevealSpan.append(closeBtn);
        cardReveal.append(cardRevealSpan);

        var br1 = $("<br>");
        cardReveal.append(br1);

        var artistName = eventObject.name;
        var pName = $("<p>").text(artistName);
        cardReveal.append(pName);

        var dateTime = eventObject.date + " " + eventObject.time;
        var pDateTime = $("<p>").text(dateTime);
        cardReveal.append(pDateTime);

        var venueName = eventObject.venuename;
        var pVenueName = $("<p>").text(venueName);
        cardReveal.append(pVenueName);


        var br2 = $("<br>");
        cardReveal.append(br2);
        
        var ticketURL = eventObject.ticketurl;
        var ticketLink = $("<a>", {href: ticketURL});
        ticketLink.addClass("waves-effect waves-light btn").text("Buy Ticket");
        cardReveal.append(ticketLink);
        card.append(cardReveal);
        mainCard.append(card);

        $(".results-body").append(mainCard);

      });

    };


});

{/*

    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="assets/images/HipHopGenre.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Tech N9ne<i class="material-icons right">more_vert</i></span>
      <p>Date & Time</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>Event Details</span>
      <br>
      <p>Artist Name</p>
      <p>Date & Time</p>
      <p>Venue | Address</p>
      <p>Description</p>
      <br>
      <a class="waves-effect waves-light btn">Buy Tickets</a>
    </div>
*/}

           