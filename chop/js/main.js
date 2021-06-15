$(document).ready(function(){
  $('a[href^="#"]').click(function(){ // #1
    let anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
      scrollTop:  $(anchor).offset().top  // #4
    }, 1200);                            // #5
  });
  function disabledScroll() {
  	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  	$('body').css('overflow', 'hidden')
  	$('body').css('padding-right', paddingOffset)
  }
  function enableScroll() {
  	$('body').css('overflow', 'auto')
  	$('body').css('padding-right', 0)
  }
  function showPopUp() {
    $('.popup_form').show();
    $('.popup-blackout').show();
    disabledScroll();
    setTimeout(function () {
      $('.popup_form').css({
        'transform': 'translate(-50%, -50%) scale(1)',
        'opacity': '1',
      });
      $('.popup-blackout').css({
        'background': 'rgba(88, 88, 88, 0.75)',
      });
    }, 200);
  };
  function hidePopUp() {
    $('.popup_form').css({
      'transform': 'translate(-50%, -50%) scale(0)',
      'opacity': '0',
    });
    $('.popup-blackout').css({
      'background': 'rgba(0, 0, 0, 0)',
    });
    enableScroll();
    setTimeout(function () {
      $('.popup_form').hide();
      $('.popup-blackout').hide();
    }, 200);
  };
  $('.licenses-btn').click(function(){
    showPopUp();
  });
  $('.build_desktop-btn').click(function(){
    showPopUp();
  });
  $('.popup_form-close').click(function(){
    hidePopUp();
  });
  $('.popup-blackout').click(function(){
    hidePopUp();
  });

  $('.question_list-block').click(function(){
    if ($(this).hasClass('question_list-block-open')) {
      $(this).removeClass('question_list-block-open');
      $(this).parent().find('.question_list-block-arrow').css('transform', 'translateY(-50%) rotate(0deg)');
      gsap.to($(this).parent().find('.question_list-block-additionaly'), {
        height: 0,
        opacity: 0,
        duration: 1,
      });
    } else {
      $(this).parent().find('.question_list-block-additionaly').show();
      $(this).addClass('question_list-block-open');
      $(this).parent().find('.question_list-block-arrow').css('transform', 'translateY(-50%) rotate(-180deg)');
      gsap.to($(this).parent().find('.question_list-block-additionaly'), {
        height: 'auto',
        opacity: 1,
        duration: 1,
      });
    }
  });
  function closeMenu() {
    $('.menu-block').removeClass('menu-block-show');
    $('.burger-btn-line').css('background', '#666');
    $('.burger-btn-line_one').css({
      'top': '0',
      'transform': 'translateY(-50%) rotate(0)',
    });
    $('.burger-btn-line_two').css('opacity', '1');
    $('.burger-btn-line_three').css({
      'top': '100%',
      'transform': 'translateY(-100%) rotate(0)',
    });
  };
  $('.burger-btn').click(function(){
    if ($('.menu-block').hasClass('menu-block-show')) {
      closeMenu()
    } else {
      $('.menu-block').addClass('menu-block-show');
      $('.burger-btn-line').css('background', '#fff');
      $('.burger-btn-line_one').css({
        'top': '50%',
        'transform': 'translateY(-50%) rotate(45deg)',
      });
      $('.burger-btn-line_two').css('opacity', '0');
      $('.burger-btn-line_three').css({
        'top': '50%',
        'transform': 'translateY(-50%) rotate(-45deg)',
      });
    }
  });
  $('.menu-block').click(function(){
    closeMenu()
  });
});
