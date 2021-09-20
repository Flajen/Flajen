$(document).ready(function(){
  $('input[name="tel"]').mask("+7(999)-999-99-99",{autoclear: false});
  $('input[name="document"]').mask("99 99 999999",{autoclear: false});
  $('input[name="date"]').mask("99.99.9999",{autoclear: false});
  $('.header_block-checkbox[name="nomiddlename"]').change(function(){
    if ($('.header_block-checkbox[name="nomiddlename"]').is(':checked')) {
      $('#middlename_id').attr('disabled',true).addClass('header_block-input_disabled').val('');
    }else {
      $('#middlename_id').attr('disabled',false).removeClass('header_block-input_disabled');
    }
  });
  $('.header_block-checkbox[name="agreement"]').change(function(){
    if (!$('.header_block-checkbox[name="agreement"]').is(':checked')) {
      $('.popup-proceed').attr('disabled',true).addClass('disabled');
    }else {
      $('.popup-proceed').attr('disabled',false).removeClass('disabled');
      $('.popup-proceed').click(function(){
        $('.header-popup').hide();
        $('.header_body-blackout').hide();
      })
    }
  });
  $('.form-clear').click(function(){
    $('input.clear').val('');
  })
  $('body').on('input', '#date_id', function(){
  	this.value = this.value.replace(/[^0-9]/g, '');
  });
  $('.date-calendar').click(function(){
    $('.calendar').toggle();
    $('.select-list').hide();
  })

  month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  function Calendar(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    // пустые клетки до первого дня текущего месяца
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td class="calendar-disabled">';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    // дни месяца
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
        calendar += '<td>' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) { // если день выпадает на воскресенье, то перевод строки
        calendar += '<tr>';
      }
    }
    // пустые клетки после последнего дня месяца
    for(var  i = DNlast; i < 7; i++) calendar += '<td class="calendar-disabled">&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;<td class="calendar-disabled">&nbsp;';
    }
    $('.calendar-days td').click(function(){ // Нажатие на день
      var now_day = $(this).html();
      var now_month = $(this).parent().parent().parent().find('.calendar-month').attr('data-month');
      var now_year = $(this).parent().parent().parent().find('.calendar-month').attr('data-year');
      now_month = parseInt(now_month) + 1;
      if (now_day < 10) {now_day = `0${now_day}`} if (now_month < 10) {now_month = `0${now_month}`}
      if (!$(this).hasClass("calendar-disabled")) {
        $('#date_id').val(`${now_day}.${now_month}.${now_year}`);
        $('.calendar').hide();
      }
    })
    if ($('.calendar-days').hasClass('calendar-months')) {
      $('.calendar-days').removeClass('calendar-months');
    }
  }
  Calendar("calendar2", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
  }
  $('.calendar-month').click(function(){
    var th = $(this);
    if (!$('.calendar-days').hasClass('calendar-months')) {
      th.html(th.attr('data-year'));
      $(".calendar-days tr").remove();
      $('.calendar-days').addClass('calendar-months');
      for (var i = 0; i < month.length; i++) {
        $('.calendar-days').append(`<td id="${i}">${month[i]}</td>`);
      }
      $('.calendar-months td').click(function(){
        Calendar("calendar2", $('.calendar-month').attr('data-year'), parseInt($(this).attr('id')));
      })
    }
  });

  $("#view_id").click(function(){
    $('.select-list').toggle();
    $('.select-btn').click(function(){
      var th = $(this);
      th.parent().hide().parent().find('#view_id').val(th.html())
    })
    $('.calendar').hide();
  })
});
