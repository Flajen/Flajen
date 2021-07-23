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
});
