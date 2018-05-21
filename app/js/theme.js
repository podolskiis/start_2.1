$(function(){

var // GLOBAL VARIABLES
  // $gObj = $(''),
  $gHtml = $('html');


// script...


// WINDOW-LOAD
(function(){
  $(window).on('load', function() {
    $gHtml.addClass('is-ready');
  }).trigger('load');
}());


}); // END READY
