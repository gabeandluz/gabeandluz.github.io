(function($){
  $('.js-open-event-info-modal').click(function (e) {
    $('.event-info-modal').fadeIn('fast');
    return false;
  });
  $('.modal-background').click(function (e) {
    $('.event-info-modal').fadeOut('fast');
  });
})(jQuery);
