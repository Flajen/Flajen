$(document).ready(function(){
  $(document).click(function(){
    $('.calcOne-input').bind("change keyup input click", function() {
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
    });
    if ($('.calcOne-input').is(":focus")) {
      if ($('.calcOne-input').val() == '0') {
        $('.calcOne-input').val('');
      }
    } else {
      if ($('.calcOne-input').val() == '') {
        $('.calcOne-input').val('0');
      }
    }
  })
  $('.label_radio[name="statement"]').click(function(){
    if ($(this).is(":checked") & $(this).hasClass('js-choice-input')) {
      $('.calcOne-cost').html('0');
      $('.js-choice').show();
      $('.js-summa').hide();
      $('.calcOne_js').find('.calcOne-cost-wrapper').show();
      $('.calcOne_js').find('.calcOne-choice-wrapper').hide();
      $('.calcOne-cost').html('6 000');
      $('.label_radio-checked').prop('checked', true);
      $('.label_radio[name="write"]').click(function(){
        if ($(this).is(":checked")) {
          $('.calcOne-cost').html(prettify($(this).val()));
        }
      });
    }else {
      $('.js-choice').hide();
      $('.js-summa').show();
      $('.calcOne_js').find('.calcOne-cost-wrapper').hide();
      $('.calcOne_js').find('.calcOne-choice-wrapper').show();
      $('.calcOne-cost').html('0');
    }
  });
  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  };
  $('.calcOne-input').bind('input', function(){
    var sum = parseInt($('.calcOne-input').val());
    var defaultNumber = 2000;
    function calcOneCheck() {
      var middleNumber = parseInt($('.calcOne-input').val()[0]);
      var prevLastNumberTwo = parseInt(sum.toString().slice(-4)[0] + 0 + 0 + 0);
      var lastNumberTwo = parseInt(sum.toString().slice(-3)[0] + 0 + 0);
      if (middleNumber > 5) {
        addNumberMiddle = (middleNumber - 5) * 400;
        defaultNumber = defaultNumber + addNumberMiddle;
      }
      if (lastNumberTwo >= 20) {
        addNumberLast = lastNumberTwo / 20 * 10;
        defaultNumber = defaultNumber + addNumberLast;
      }
      if (prevLastNumberTwo >= 1000) {
        addNumberPrevLast = prevLastNumberTwo / 1000 * 40
        defaultNumber = defaultNumber + addNumberPrevLast;
      }
    };
    if (sum > 0 || !sum == '') {
      $('.calcOne_js').find('.calcOne-cost-wrapper').show();
      $('.calcOne_js').find('.calcOne-choice-wrapper').hide();
      if (sum > 0 & sum <= 50000) {
        $('.calcOne-cost').html(prettify(defaultNumber));
      } else if (sum > 50000 & sum < 100000) {
        calcOneCheck()
      } else if (sum >= 100000 & sum < 1000000) {
        defaultNumber = 4000;
        calcOneCheck()
      } else if (sum >= 1000000 & sum < 10000000) {
        defaultNumber = 23000;
        calcOneCheck()
      } else if (sum >= 10000000) {
        defaultNumber = 73000;
        calcOneCheck()
      }
      console.log(defaultNumber);
      $('.calcOne-cost').html(prettify(defaultNumber));
    } else {
      defaultNumber = 2000;
      $('.calcOne_js').find('.calcOne-cost-wrapper').hide();
      $('.calcOne_js').find('.calcOne-choice-wrapper').show();
    }
  });
});
