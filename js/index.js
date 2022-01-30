$(document).ready(function(){
  // Слайдер
  $('.index-slider').slick({
    dots: true,
    dotsClass: 'dots-style',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    easing: 'easeOutSine',
    adaptiveHeight:true,
    autoplay: false,
    autoplaySpeed: 2500,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    waitForAnimate: false,
    touchThreshold: 15,
    prevArrow: $('.index-prev'),
    nextArrow: $('.index-next'),
    variableWidth: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [{
      breakpoint: 1140,
      settings: {
        arrows: false,
      }
    }]
  });
  setInterval(function(){
    $('.index-slider').slick('slickNext');
  }, 2500);
  $('.form-attach').on('change', function() {
    $('.form-attach-fake').css('color','green');
  });
  $('.btn-form').click(function(){
    if (!$('.form-attach').val() == '') {
      $('.form-attach-fake').css('color','green');
    } else {
      $('.form-attach-fake').css('color','red');
    }
  });
});
