$(document).ready(function(){
  function disabledScroll() {
  	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  	$('body').css('overflow', 'hidden')
  	$('body').css('padding-right', paddingOffset)
  }
  function enableScroll() {
  	$('body').css('overflow', 'auto')
  	$('body').css('padding-right', 0)
  }
  $('input[name="navAdd"]').click(function(){
    var navAddBlock = $('.nav-add-block'),
        navArrow = $('.nav-arrow');
    if (navArrow.hasClass('open')) {
      navAddBlock.removeClass('open');
      navArrow.removeClass('open');
    } else {
      navAddBlock.addClass('open');
      navArrow.addClass('open');
    }
  });
  $('.burger').click(function(){$('header').toggleClass('header-open');});
  $('.fast-form-btn').click(function(){
    $('.fast-form-blackout').addClass('open');
    disabledScroll();
  });
  $('.fast-form-close').click(function(){
    $('.fast-form-blackout').removeClass('open');
    enableScroll();
  });
  // $('body').mouseup(function (e){ // событие клика по веб-документу
  //     var div = $('.nav-add-block'); // тут указываем класс элемента
  //     if (!div.is(e.target) // если клик был не по нашему блоку
  //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
  //         $('.nav-add-block').removeClass('open');
  //         $('.nav-arrow').removeClass('open'); // скрываем его
  //     }
  // });
});
