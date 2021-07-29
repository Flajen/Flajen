$(document).ready(function(){
  if ($('input[name="referenceDate"]')) {
    $('input[name="referenceDate"]').mask("99.99.9999",{autoclear: false});
  }
  $('a[href="#login"]').click(function(){
    $('.blackout').show();
    $('.login_popup').show();
  });

  $('.login_popup-close').click(function(){
    $('.blackout').hide();
    $('.login_popup').hide();
  });

  if ($('.reference_confirmation-input')) {
    $('.reference_confirmation-input').bind("change keyup input click", function() {
      var th = $(this);
      if (th.is(":checked")) {
        $('.bank-btn-disabled').prop('disabled', false);
      } else {
        $('.bank-btn-disabled').prop('disabled', true);
      }
    });
  };
  if ($('.not_result')) {
    $('.not_result').click(function(){
      $('.bank-list-documents-one').hide();
      $('.bank-list-documents-two').css('display', 'flex');
    })
  }
  if ($('.breaks_btn')) {
    $('.breaks_btn').click(function(){
      if (!$('.calendar_write-input').val() == '') {
        $('.bank-list-documents-one').hide();
        $('.bank-list-documents-two').css('display', 'flex');
      }
    })
  }
  if ($('.order-block-one-btn')) {
    $('.order-block-one-btn[name="orderOne"]').click(function(){
      $('.order-block-one-btn[name="orderOne"]').removeClass('order-block-btn-active');
      $(this).addClass('order-block-btn-active');
    })
    $('.order-block-one-btn[name="orderTwo"]').click(function(){
      $('.order-block-one-btn[name="orderTwo"]').removeClass('order-block-btn-active');
      $(this).addClass('order-block-btn-active');
    })
  }
  $('.calendar_write-add').click(function(){
    var th = $(this);
    if (!th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').val() == '') {
      if (th.parent().find('.calendar_write-input-wrapper').find('button').hasClass('calendar_write-btn_list')) {
        th.parent().parent('.calendar_write-add-blocks').append(`
          <div class="calendar_write-wrapper calendar_write-wrapper-mt">
            <div class="calendar_write-input-wrapper">
              <input type="text" name="calendarName" disabled placeholder="${th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').attr('placeholder')}" value="${th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').val()}" class="calendar_write-input">
              <button type="button" name="button" class="calendar_write-btn_list"><span class="btn_list-icon"></span>Любой</button>
            </div>
            <button type="button" name="button" class="calendar_write-add calendar_write-add-remove"></button>
          </div>
        `);
      }else {
        th.parent().parent('.calendar_write-add-blocks').append(`
          <div class="calendar_write-wrapper calendar_write-wrapper-mt">
            <div class="calendar_write-input-wrapper">
              <input type="text" name="calendarName" disabled placeholder="${th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').attr('placeholder')}" value="${th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').val()}" class="calendar_write-input">
            </div>
            <button type="button" name="button" class="calendar_write-add calendar_write-add-remove"></button>
          </div>
        `);
      }
      th.parent().find('.calendar_write-input-wrapper').find('.calendar_write-input').val('');
      $('.calendar_write-add-remove').click(function(){
        var th = $(this);
        th.parent().remove();
      });
    }
  });
  $('.calendar_write-btn_list').click(function(){
    if ($('.calendar_write-btn_list').hasClass('open')) {
      $('.calendar_write-btn_list').removeClass('open');
      $('.calendar_write-btn_list-open').hide();
      $('.btn_list').hide();
    } else {
      $('.calendar_write-btn_list').removeClass('open');
      $('.calendar_write-btn_list-open').hide();
      $('.btn_list').hide();
      $(this).addClass('open');
      $(this).next().show();
      $(this).next().next().show();
    }
  });
  $('.btn_list-wrapper input').click(function(){
    $(this).parent().parent().parent().parent().find('.calendar_write-btn_list').find('.btn_list-show').text($(this).val());
    $(this).parent().parent().parent().parent().find('.calendar_write-btn_list').removeClass('open');
    $(this).parent().parent().parent().parent().find('.calendar_write-btn_list-open').hide();
    $(this).parent().parent().parent().hide();
  });
  $('.calendar-input-list').click(function(){
    var th = $(this);
    if (th.parent().find('.bank-list').hasClass('bank-list_show')) {
      th.parent().find('.bank-list').removeClass('bank-list_show')
    } else {
      $('.bank-list').removeClass('bank-list_show');
      th.parent().find('.bank-list').addClass('bank-list_show');
    }
  });
  $('.list-bank-link li').click(function(){
    var th = $(this);
    th.parent().parent().parent().find('.calendar_write-input').val(th.text());
    $('.bank-list').removeClass('bank-list_show');
  });
});
