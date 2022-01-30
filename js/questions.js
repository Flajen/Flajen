$(document).ready(function(){
  $('.questions-btn').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      gsap.to($(this).parent().find('.questions-text-wrapper'), {
        height: '0',
        opacity: '0',
        margin: '0',
        duration: 1,
      });
    } else {
      $(this).addClass('open');
      gsap.to($(this).parent().find('.questions-text-wrapper'), {
        height: 'auto',
        opacity: '1',
        margin: '0 0 20 0',
        duration: 1,
      });
    }
  });
  // Слайдер
  if ($(window).width() < 500) {
    $('.requirements-slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'dots-style',
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      easing: 'easeOutSine',
      adaptiveHeight: false,
      autoplay: false,
      centerMode: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      touchThreshold: 15,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      infinite: false,
      responsive: [{
        breakpoint: 1140,
        settings: {
          arrows: false
        }
      }]
    });

    $('.conditions-slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'dots-style',
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      easing: 'easeOutSine',
      adaptiveHeight:true,
      autoplay: false,
      centerMode: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      touchThreshold: 15,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      infinite: false,
      responsive: [{
        breakpoint: 1140,
        settings: {
          arrows: false
        }
      }]
    });
  }
});
