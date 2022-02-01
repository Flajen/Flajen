$(document).ready(function(){
  let now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) {month = `0${now.getMonth() + 1}`;}
  if (day < 10) {day = `0${now.getMonth()}`;}
  $('.products-date').html(`${day}.${month}.${now.getFullYear()}`);

  $('.products-slider').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount);
  })
  $('.products-slider').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  })
  $('#range').on('input change',function(){
    $('.products-slider').slick('slickGoTo',this.value-1);
  });
  $('.slider_wrapper-next').on('click', function() {
    $('.slider_wrapper').slick('slickNext');
  });
  // Слайдер
  $('.products-slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 900,
  // autoplay: true,
  // autoplaySpeed: 2500,
  easing: 'easeOutSine',
  adaptiveHeight:true,
  variableWidth: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  touchThreshold: 15,
  centerMode: false,
  prevArrow: $('.products-prev'),
  nextArrow: $('.products-next'),
  responsive: [{
    breakpoint: 1140,
    settings: {
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
    }
  }]
  });
  $('.counter-all').html($('.products-popup-slider-img').length);
  $('.products-popup-close').click(function(){
    $('.products-popup-wrapper').hide();
  })
  $('.products-slider-item').click(function(){
    $('.products-popup-wrapper').css('display','grid');
    var clickBtn = $(this).find('img').attr('src');
    $('.products-popup-slider-img').removeClass('active');
    $(".products-popup-slider-img").find(`img[src="${clickBtn}"]`).parent().addClass('active');
    $('.counter-active').html($('.products-popup-slider-img.active').attr('number'));
  })
  $('.products-popup-slider-img:first-child').addClass('first');
  $('.products-popup-slider-img:last-child').addClass('last');
  var number = 0;
  $(".products-popup-slider-img").each(function(index) {
    number += 1;
    $(this).attr('number',`${number}`);
  });
  $('.products-popup-btn-prev').click(function(){
    if ($('.products-popup-slider-img.active').hasClass('first')) {
      $('.products-popup-slider-img.active').removeClass('active');
      $('.products-popup-slider-img.last').addClass('active');
    } else {
      $('.products-popup-slider-img.active').removeClass('active').prev().addClass('active');
    }
    $('.counter-active').html($('.products-popup-slider-img.active').attr('number'));
  })
  $('.products-popup-btn-next').click(function(){
    if ($('.products-popup-slider-img.active').hasClass('last')) {
      $('.products-popup-slider-img.active').removeClass('active');
      $('.products-popup-slider-img.first').addClass('active');
    } else {
      $('.products-popup-slider-img.active').removeClass('active').next().addClass('active');
    }
    $('.counter-active').html($('.products-popup-slider-img.active').attr('number'));
  })
  $('.application-popup-close').click(function(){
    $('.application-popup').hide();
  })
  $('.btn-product').click(function(){
    $('.application-popup').css('display','grid');
  })
});
