$(function(){

var // GLOBAL VARIABLES
  // $gObj = $(''),
  $gHtml = $('html');


// SLICK
(function(){
  if ($('.b-slider').length) {
    var
      $bSlider = $('.b-slider');
    $bSlider.each(function(index, el) {
      var
        $this    = $(this),
        sld      = $this.find('.b-slider__for'),
        nav      = $this.find('.b-slider__nav');
      if ($this.is('.js-slider-tm-1')) {
        $(sld).slick({
          asNavFor: nav,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          adaptiveHeight: true,
          // prevArrow: '<i class="btn icon-arrow-left"></i>',
          // nextArrow: '<i class="btn icon-arrow-right"></i>',
          // fade: true,
          // VERTICAL
            // vertical: true,
            // verticalSwiping: true,
        });
        var
          slShow = 5,
          slBool = ($(nav).children().length > slShow) ? true : false,
          slScroll = ($(nav).children().length > slShow) ? 1 : slShow;
        $(nav).slick({
          asNavFor: sld,
          centerPadding: '0',
          slidesToShow: slShow,
          slidesToScroll: slScroll,
          infinite: slBool,
          centerMode: slBool,
          focusOnSelect: true,
          dots: false,
          arrows: true,
          vertical: true,
          verticalSwiping: true,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
      }
      else if ($this.is('.js-slider-mobile')) {
        $(sld).slick({
          arrows: false,
          dots: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      }
    });
  }
}());



// NAME
(function(){
  var
    $element = $('.element');
  // $element.
}());


// WINDOW-LOAD
(function(){
  $(window).on('load', function() {
    $gHtml.addClass('is-ready');
  }).trigger('load');
}());


}); // END READY
