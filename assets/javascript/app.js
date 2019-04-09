$(document).ready(function(){
    // Location page JS
     $('.slider').slider();
  //  // $('.dropdown-button').dropdown('open');
  //   $('.dropdown-button').dropdown('close');
    
  //   $('.dropdown-button').dropdown({
  //       inDuration: 300,
  //       outDuration: 225,
  //       constrainWidth: false, // Does not change width of dropdown to that of the activator
  //       hover: true, // Activate on hover
  //       gutter: 0, // Spacing from edge
  //       belowOrigin: false, // Displays dropdown below the button
  //       alignment: 'left', // Displays dropdown with edge aligned to the left of button
  //       stopPropagation: false // Stops event propagation
  //     }
  //   );

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
        })








});