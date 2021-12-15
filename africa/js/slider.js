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
  // infinite:false,
  pauseOnFocus: true,
  pauseOnHover: true,
  touchThreshold: 15,
  // centerMode: true,
  // centerPadding: '60px',
  responsive: [{
    breakpoint: 1100,
    settings: {
      slidesToShow: 2,
      // centerMode: true,
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
  function openPopup(){
    $('.gallery-popup').css('display','grid');
    $('.popup-slider-window').find('.popup-slider-slide').removeClass('activeSlide');
    $('.popup-slider-window').find('.popup-slider-slide:first-child').addClass('activeSlide');
  }
  function closePopup(){
    $('.gallery-popup').hide();
  }
  $('.slide-btn').click(function(){
    openPopup();
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

  $('.popup-close').click(function(){
    closePopup();
  });
  $('.gallery-popup').mouseup(function (e){ // событие клика по веб-документу
      var div = $('.popup'); // тут указываем класс элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
          closePopup(); // скрываем его
      }
  });
});
