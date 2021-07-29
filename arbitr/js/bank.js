$(document).ready(function(){
  $('.bank-find-input').mask("99.99.9999",{autoclear: false});
  var addYes = false,
      addYesTwo = false;
  $('.bank-add-textarea').bind("change keyup input click", function() {
    var th = $(this);
    if (th.val() == '') {
      th.parent().parent().find('.add-field').find('.add-participant-icon').removeClass('add-participant-icon-yes');
      addYes = false;
    } else {
      th.parent().parent().find('.add-field').find('.add-participant-icon').addClass('add-participant-icon-yes');
      addYes = true;
    }
  });
  $('.calendar-input[name="bankNumber"]').bind("change keyup input click", function() {
    var th = $(this);
    if (th.val() == '') {
      th.parent().parent().find('.add-field').find('.add-number-icon').removeClass('add-number-icon-yes');
      addYesTwo = false;
    } else {
      th.parent().parent().find('.add-field').find('.add-number-icon').addClass('add-number-icon-yes');
      addYesTwo = true;
    }
  });
  function addField(th, yes) {
    if (yes == true) {
      th.parent().parent().find('.add-block-participant').find('.bank-add-textarea').attr('disabled',true);
      th.css({
        'background-position': '-22px -22px',
      })
      th.removeClass('add-participant-icon-yes').addClass('add-participant-icon-delete');
      th.parent().parent().append(`
        <div class="add-block-participant delete-block-participant mb-bank">
          <textarea name="text" placeholder="название, ИНН или ОГРН" class="bank-textarea bank-add-textarea"></textarea>
        </div>
        `);
      yes = false;
      $('.add-participant-icon-delete').click(function(){
        $('.delete-block-participant').remove();
        th.css({
          'background-position': '0 -22px',
        });
        th.parent().parent().find('.add-block-participant').find('.bank-add-textarea').html('').attr('disabled',false);
        yes = true;
      });
    }
  }
  $('.add-participant-icon').click(function(){
    var th = $(this);
    addField(th, addYes);
  });
  $('.add-number-icon').click(function(){
    var th = $(this);
    addField(th, addYesTwo);
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
    $('.bank-year').html(date.getFullYear())
    if (nowMonth == 0) {$('.bank-month').html(jan);}
    if (nowMonth == 1) {$('.bank-month').html(feb);}
    if (nowMonth == 2) {$('.bank-month').html(mar);}
    if (nowMonth == 3) {$('.bank-month').html(apr);}
    if (nowMonth == 4) {$('.bank-month').html(may);}
    if (nowMonth == 5) {$('.bank-month').html(june);}
    if (nowMonth == 6) {$('.bank-month').html(july);}
    if (nowMonth == 7) {$('.bank-month').html(aug);}
    if (nowMonth == 8) {$('.bank-month').html(sep);}
    if (nowMonth == 9) {$('.bank-month').html(oct);}
    if (nowMonth == 10) {$('.bank-month').html(nov);}
    if (nowMonth == 11) {$('.bank-month').html(dec);}
  }
  $('.calendarPrev').click(function(){
    if (nowMonth < 1) {
      nowMonth = 11;
    } else {
      nowMonth = nowMonth - 1;
    }
    checkDate(nowMonth);
  });
  $('.calendarNext').click(function(){
    if (nowMonth > 10) {
      nowMonth = 0;
    } else {
      nowMonth = nowMonth + 1;
    }
    checkDate(nowMonth);
  });
  var daysYes = true;
  $('.bank-find-input').click(function(){
    var th = $(this)
    if (!$('.bank-find-calendar').hasClass('bank-find-calendar_show')) {
      $('.bank-find-calendar').addClass('bank-find-calendar_show');
      nowMonth = date.getMonth();
      checkDate(nowMonth);
    }
    if (daysYes) {
      for (var i = 1; i < 32; i++) {
        $('.bank-find-calendar-three').append(`
          <li class="day_click day${i}">${i}</li>
          `)
      }
      $(`.day${date.getDate()}`).css('background', '#D1D8E1');
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
    });
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
		if (!$(".bank-find-input").is(e.target) // если клик был не по нашему блоку
		    && $('.bank-find-calendar').has(e.target).length === 0) { // и не по его дочерним элементам
			$('.bank-find-calendar').removeClass('bank-find-calendar_show'); // скрываем его
		}
    if (!$(".bank-list").is(e.target) // если клик был не по нашему блоку
		    && !$('.calendar-input').is(e.target)) { // и не по его дочерним элементам
			$('.bank-list').removeClass('bank-list_show'); // скрываем его
		}
	});
});
