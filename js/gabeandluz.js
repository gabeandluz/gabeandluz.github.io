(function($){
  $('.js-open-event-info-modal').click(function () {
    $('.event-info-modal').fadeIn('fast');
  });

  $('.modal-background').click(function () {
    $('.event-info-modal').fadeOut('fast');
  });
})(jQuery);
