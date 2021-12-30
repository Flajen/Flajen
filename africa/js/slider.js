$(document).ready(function(){
  $('.slider_wrapper').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount);
  })
  $('.slider_wrapper').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  })
  $('#range').on('input change',function(){
    $('.slider_wrapper').slick('slickGoTo',this.value-1);
  });
  $('.slider_wrapper-next').on('click', function() {
    $('.slider_wrapper').slick('slickNext');
  });
  // Слайдер
  $('.slider_wrapper').slick({
  dots: false,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 900,
  easing: 'easeOutSine',
  adaptiveHeight:true,
  variableWidth: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  touchThreshold: 15,
  responsive: [{
    breakpoint: 1100,
    settings: {
      slidesToShow: 2,
      variableWidth: false,
    }
  },{
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      variableWidth: false,
    }
  },{
    breakpoint: 450,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
    }
  }]
  });
  function openPopup(name){
    $(`#${name}`).css('display','grid');
    $('.popup-slider-window').find('.popup-slider-slide').removeClass('activeSlide');
    $('.popup-slider-window').find('.popup-slider-slide:first-child').addClass('activeSlide');
  }
  function closePopup(){
    $('.gallery-popup').hide();
  }
  function changePopup(){
    $('.open-img').hide();
    $('.popup').css('display','grid');
  }
  $('.slide-btn').click(function(){
    var openGallery = $(this).attr('name');
    openPopup(openGallery);
  })
  $('.popup-prev').click(function(){
    if ($(this).parent().find('.popup-slider-window').find('.activeSlide').prev().hasClass('popup-slider-slide')) {
      $(this).parent().find('.popup-slider-window').find('.activeSlide').removeClass('activeSlide').prev().addClass('activeSlide');
    } else {
      $(this).parent().find('.popup-slider-window').find('.activeSlide').removeClass('activeSlide');
      $(this).parent().find('.popup-slider-window').find('.popup-slider-slide:last-child').addClass('activeSlide');
    }
  })
  $('.popup-next').click(function(){
    if ($(this).parent().find('.popup-slider-window').find('.activeSlide').next().hasClass('popup-slider-slide')) {
      $(this).parent().find('.popup-slider-window').find('.activeSlide').removeClass('activeSlide').next().addClass('activeSlide');
    } else {
      $(this).parent().find('.popup-slider-window').find('.activeSlide').removeClass('activeSlide');
      $(this).parent().find('.popup-slider-window').find('.popup-slider-slide:first-child').addClass('activeSlide');
    }
  })
  $('.popup-full').click(function(){
    $('.popup').hide();
    $('.open-img').css('display','grid');
  })
  $('.img-close').click(function(){
    changePopup();
  });
  $('.gallery-close').click(function(){
    closePopup();
  });
  $('body').mouseup(function (e){ // событие клика по веб-документу
      var popup = $('.popup'); // тут указываем класс элемента
      var openImg = $('.open-img'); // тут указываем класс элемента
      if (!popup.is(e.target) // если клик был не по нашему блоку
          && popup.has(e.target).length === 0
          && !openImg.is(e.target)
          && openImg.has(e.target).length === 0) { // и не по его дочерним элементам
          closePopup(); // скрываем его
          changePopup() // изменяем обратно
      }
  });
});
