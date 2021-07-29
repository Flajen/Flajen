$(document).ready(function(){
  var date = new Date();
  $(`#${date.getDate()}`).parent().css('background', '#E6F3F8');
  $('.calendar-card-block').click(function(){
    if (!$(this).hasClass('calendar-card-block-inactive')) {
      $('.calendar-popup').css('display', 'flex');
    }
  });
  $('.calendar-popup-btn').click(function(){
    $('.calendar-popup').hide();
  });
  $('.calendar-popup-close').click(function(){
    $('.calendar-popup').hide();
  });
});
