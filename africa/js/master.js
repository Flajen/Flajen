$(document).ready(function(){
  function disabledScroll() {
    var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  	$('body').css('overflow', 'hidden');
  	$('body').css('padding-right', paddingOffset);
  }
  function enableScroll() {
  	$('body').css('overflow', 'auto');
  	$('body').css('padding-right', 0);
  }
  $('.nav-btn').click(function(){
    $('.nav-relations-wrapper').css('display','grid');
    setTimeout(function () {
      $('.nav-relations-wrapper').hide();
    }, 2500);
  })
  $('.burger-btn').click(function(){
    if ($('header').hasClass('show')) {
      $('header').hide().removeClass('show');
      enableScroll();
    } else {
      $('header').show().addClass('show');
      disabledScroll();
    }
  })
});
