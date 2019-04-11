$(document).ready(function(){
    // Location page JS
    $('.slider').slider();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // $('.carousel').carousel({fullWidth: true});
    // $('.dropdown-button').dropdown('open');
    // $('.dropdown-button').dropdown('close');
    
    // $('.dropdown-button').dropdown({
    //     inDuration: 300,
    //     outDuration: 225,
    //     constrainWidth: false, // Does not change width of dropdown to that of the activator
    //     hover: true, // Activate on hover
    //     gutter: 0, // Spacing from edge
    //     belowOrigin: false, // Displays dropdown below the button
    //     alignment: 'left', // Displays dropdown with edge aligned to the left of button
    //     stopPropagation: false // Stops event propagation
    //   }
    // );

    // $('.datepicker').pickadate({
    //     selectMonths: true, // Creates a dropdown to control month
    //     selectYears: 15, // Creates a dropdown of 15 years to control year,
    //     today: 'Today',
    //     clear: 'Clear',
    //     close: 'Ok',
    //     closeOnSelect: false, // Close upon selecting a date,
    //     container: undefined, // ex. 'body' will append picker to body
    //   });

  //   $('.datepicker').pickadate({
  //       selectMonths: true, // Creates a dropdown to control month
  //       selectYears: 15, // Creates a dropdown of 15 years to control year,
  //       today: 'Today',
  //       clear: 'Clear',
  //       close: 'Ok',
  //       closeOnSelect: false, // Close upon selecting a date,
  //       container: undefined, // ex. 'body' will append picker to body
  //     });

  var bands = {};
 //api1 =
      getEvents()
        .then(events=>{
          var results = events._embedded.events;
        
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
         
            // TODO: FIND ALL ARTISTS
            var artistRequests=[];

            // TODO: forEach Artist
            // forEach
            artists.forEach(artist=>{
              //console.log(artists);
              artistRequests.push(getArtist(artist.name));
            })
            //console.log(artistRequests);

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
                //console.log(artistEventsResponses);
                //console.log(bands);
              });
            })
            .catch(console.log);

        });

      function displayMusicEvents(bandsWithData) {
        //console.log(bandsWithData);

        bandsWithData.forEach(function(eventObject){
          //console.log(eventObject.name)

      
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
        //console.log(date);
        
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

        console.log(moment(dateTime))

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

           