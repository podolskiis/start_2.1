$(function(){

var // GLOBAL VARIABLES
  // $gObj = $(''),
  $gHtml = $('html');





// SELECT2
(function(){
  $('[data-select]').each(function() {
    var
      $this = $(this),
      classes = $this.attr('class');

    // select-wrap
    $this.wrap('<div class="b-select2 '+classes+'" />').removeAttr('class');

    // @see https://github.com/select2/select2/issues/2927
    $.fn.select2.defaults.set('theme', $this.data('theme'));

    // select-tags
    if ($this.data('select')=='tags') {
      var
        $select2 = $this.select2({
          tags: true,
          containerCssClass: $this.data('classes'),
          dropdownCssClass: $this.data('classes'),
          width: $this.attr('width') ? '<value>' : 'resolve'
        });
    }
    // select-single
    if ($this.data('select') == 'single' || $this.data('select') == '') {
      var
        $select2 = $this.select2({
          containerCssClass: $this.data('classes'),
          dropdownCssClass: $this.data('classes'),
          minimumResultsForSearch: Infinity,
        });
    }

    // selected element
    var
      $cnt = $select2.data('select2').$container;
    function fnChange() {
      ($this.val() == '') ? $cnt.removeClass('selected') : $cnt.addClass('selected');
    }
    // call fnChange
    fnChange();
    $this.on('change', fnChange);
  });
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
  }); $(window).trigger('load');
}());


}); // END READY
