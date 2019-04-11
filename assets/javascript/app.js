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
    $('.dropdown-button').dropdown('open');
    $('.dropdown-button').dropdown('close');
    
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );

    //$('.datepicker').pickadate({
       // selectMonths: true, // Creates a dropdown to control month
        //selectYears: 15, // Creates a dropdown of 15 years to control year,
        //today: 'Today',
        //clear: 'Clear',
        //close: 'Ok',
        //closeOnSelect: false, // Close upon selecting a date,
        //container: undefined, // ex. 'body' will append picker to body
      //});
  










});