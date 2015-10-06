$( document ).ready(function() {

    $( ".intro" ).on( "click", function() {
      $( ".intro" ).fadeOut(function(){
        $( ".proyects" ).fadeIn();
      });
    });

    $( ".proyects" ).on( "click", function() {
      $( ".proyects" ).fadeOut(function(){
        $( ".intro" ).fadeIn();
      });
    });
   
});