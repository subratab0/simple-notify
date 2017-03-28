(function($) {

  $.fn.notify = function(options) {
      $('.simple-notify').remove();
        var settings = $.extend({
            text: "please wiat...",
            show: true,
            class: 'success',
            delay: false,
        }, options );

    if( settings.show == false ){
      $('.simple-notify').remove();
      return;
    }

    var html = "<div class='simple-notify'>" +
                  "<div class='alert alert-"+settings.class+"'>" +
                      settings.text +
                  "</div>" +
                "</div>";

    $('body').append(html);
      css_property = {
        'top': '40%',
        'color': '#000',
        'height': 'auto',
        'left': '45%',
        'min-width': '230px',
        'padding': '15px 15px 0',
        'position': 'fixed',
        'font-size': '16px',
        'z-index': '99999'
      }

    if( settings.delay != false ){

      $('.simple-notify').show(100).css(css_property).delay( settings.delay ).hide(100);
      return;
    }

    $('.simple-notify').show().css(css_property);
    return this;
  };

}(jQuery));
