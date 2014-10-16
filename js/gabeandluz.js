(function($){
  $('.js-open-event-info-modal').click(function (e) {
    $('.event-info-modal').fadeIn('fast');
    return false;
  });
  $('.modal-background, .modal-close-button').click(function (e) {
    $('.event-info-modal').fadeOut('fast');
  });

  var scrollTo = function ($el) {
    var haltScroll = 'scroll DOMMouseScroll mousewheel';
    $('body').bind(haltScroll, function(){ $('body').stop(); });
    $('body').animate({scrollTop: $el.offset().top}, 800,
      function (){ $('body').unbind(haltScroll); }
    );
  }

  $('.nav li').click(function (e) {
    var slide = $(this).data('scrollto');
    if (slide) { scrollTo($(slide)); }
  });

  // Scroll to next slide, based on current window position
  $('.next').click(function(e){
    var currentPosition = $(window).scrollTop(),
        nextSlide = _.find($('.slide'), function(slide){
          return $(slide).offset().top > currentPosition;
        });
    if (nextSlide) { scrollTo($(nextSlide)); }
  });

})(jQuery);
