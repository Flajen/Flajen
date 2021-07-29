$(document).ready(function(){
  $('.check-input-mask').mask("99.99.9999",{autoclear: false});
  $('.check-input').bind('input', function(){
    var th = $(this);
  });

  $('.check-input').focus(function(){
    if ($('.check-input').val() == '') {
      $('.check-input-label').removeClass('check-input-label-focus');
      $('.check-input').removeClass('check-input-focus');
    }
    $(this).parent().find('label').addClass('check-input-label-focus');
    $(this).addClass('check-input-focus');
  });
  $(document).click(function(){
    var th = $(this);
    if (!$('.check-input').is(":focus") & $('.check-input').val() == '') {
      $('.check-input-label').removeClass('check-input-label-focus');
      $('.check-input').removeClass('check-input-focus');
    };
  });
  $('.check-btn').click(function(){
    $('.check-error').show();
    setTimeout(function () {
      $('.check-error').hide();
    }, 3500);
  });

  var date = new Date(),
      nowMonth = date.getMonth(),
      jan = "Январь",
      feb = "Февраль",
      mar = "Март",
      apr = "Апрель",
      may = "Май",
      june = "Июнь",
      july = "Июль",
      aug = "Август",
      sep = "Сентябрь",
      oct = "Октябрь",
      nov = "Ноябрь",
      dec = "Декабрь";
  function checkDate(nowMonth) {
    $('.check-year').html(date.getFullYear())
    if (nowMonth == 0) {$('.check-month').html(jan);}
    if (nowMonth == 1) {$('.check-month').html(feb);}
    if (nowMonth == 2) {$('.check-month').html(mar);}
    if (nowMonth == 3) {$('.check-month').html(apr);}
    if (nowMonth == 4) {$('.check-month').html(may);}
    if (nowMonth == 5) {$('.check-month').html(june);}
    if (nowMonth == 6) {$('.check-month').html(july);}
    if (nowMonth == 7) {$('.check-month').html(aug);}
    if (nowMonth == 8) {$('.check-month').html(sep);}
    if (nowMonth == 9) {$('.check-month').html(oct);}
    if (nowMonth == 10) {$('.check-month').html(nov);}
    if (nowMonth == 11) {$('.check-month').html(dec);}
  }
  $('.checkPrev').click(function(){
    if (nowMonth < 1) {
      nowMonth = 11;
    } else {
      nowMonth = nowMonth - 1;
    }
    checkDate(nowMonth);
  });
  $('.checkNext').click(function(){
    if (nowMonth > 10) {
      nowMonth = 0;
    } else {
      nowMonth = nowMonth + 1;
    }
    checkDate(nowMonth);
  });
  var daysYes = true;
  $('input[name="checkDateWith"]').click(function(){
    var th = $(this);
    if (th.parent().find('.check-date').hasClass('check-date_show')) {
      th.parent().find('.check-date').removeClass('check-date_show');
      nowMonth = date.getMonth();
      checkDate(nowMonth);
    }
    if (daysYes) {
      for (var i = 1; i < 32; i++) {
        $('.check-date-three').append(`
          <li class="day_click day${i}">${i}</li>
          `)
      }
      daysYes = false;
    };
    $('.day_click').click(function(){
      if ($(this).text() < 10) {
        var day = `0${$(this).text()}`
      } else {
        var day = `${$(this).text()}`
      };
      if (date.getMonth() < 10) {
        var month = `0${date.getMonth()}`
      } else {
        var month = `${date.getMonth()}`
      };
      var dateInput = String(`${day}` + `${month}` + `${date.getFullYear()}`);
      th.val(dateInput);
      th.parent().find('.check-date').addClass('check-date_show');
    });
  })
  $('input[name="checkDateOn"]').click(function(){
    var th = $(this);
    if (th.parent().find('.check-date').hasClass('check-date_show')) {
      th.parent().find('.check-date').removeClass('check-date_show');
      nowMonth = date.getMonth();
      checkDate(nowMonth);
    }
    if (daysYes) {
      for (var i = 1; i < 32; i++) {
        $('.check-date-three').append(`
          <li class="day_click day${i}">${i}</li>
          `)
      }
      daysYes = false;
    };
    $('.day_click').click(function(){
      $(this).parent().parent().parent().find('.check-input-label').addClass('check-input-label-focus');
      $(this).parent().parent().parent().find('.check-input').addClass('check-input-focus');
      if ($(this).text() < 10) {
        var day = `0${$(this).text()}`
      } else {
        var day = `${$(this).text()}`
      };
      if (date.getMonth() < 10) {
        var month = `0${date.getMonth()}`
      } else {
        var month = `${date.getMonth()}`
      };
      var dateInput = String(`${day}` + `${month}` + `${date.getFullYear()}`);
      th.val(dateInput);
      th.parent().find('.check-date').addClass('check-date_show');
    });
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
		if (!$(".check-date").is(e.target) // если клик был не по нашему блоку
		    && $('.check-date').has(e.target).length === 0) { // и не по его дочерним элементам
          $('.check-date').addClass('check-date_show');
		}
	});
});
