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
  $('.calendar-btn').click(function(){
    if (!$('.calendar_write-input-check').val() == '') {
      $('.calendar-card-block').removeClass('calendar-card-block-inactive').addClass('calendar-card-block-inactive');
      $('.calendar-card-block-number').addClass('last-month');
      $('.calendar-card-block-info').addClass('calendar-card-block-text').removeClass('calendar-card-block-info').html(`
        Информация о заседаниях<br>отсутствует
        `);
    }
  });
});
