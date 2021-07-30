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
  var month = {
    "month0": "Январь",
    "month1": "Февраль",
    "month2": "Март",
    "month3": "Апрель",
    "month4": "Май",
    "month5": "Июнь",
    "month6": "Июль",
    "month7": "Август",
    "month8": "Сентябрь",
    "month9": "Октябрь",
    "month10": "Ноябрь",
    "month11": "Декабрь",
    };
  var date = new Date(),
      nowMonth = date.getMonth(),
      prevMonth = nowMonth - 1,
      nextMonth = nowMonth + 1;
  $('.calendar-now-month').parent().prev().prev().text(`${month[`month${nowMonth-2}`]}`);
  $('.calendar-now-month').parent().prev().text(`${month[`month${nowMonth-1}`]}`);
  $('.calendar-now-month').text(`${month[`month${nowMonth}`]}`);
  $('.calendar-now-month').parent().next().text(`${month[`month${nowMonth+1}`]}`);
  $('.calendar-now-month').parent().next().next().text(`${month[`month${nowMonth+2}`]}`);
});
