$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 120;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  // Шапка
  var scrollPrev = 0;
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();

		if ( scrolled > 150) {
      $('nav').css('padding','10px 0 10px 0');
		}else {
      $('nav').css('padding','57px 0 7px 0');
		}
		scrollPrev = scrolled;
	});
  $('.question-btn').click(function(){
    var th = $(this);
    if ($('.question-btn').hasClass('other')) {
      gsap.to($('.other').next(), {
        height: 0,
        margin: 0,
        duration: 0.7,
      });
    }
    if (th.hasClass('check')) {
      $('.other').removeClass('open other').addClass('close');
    } else {
      $('.other').removeClass('open other check').addClass('close');
    }
    if (th.hasClass('check')) {
      gsap.to(th.next(), {
        height: 0,
        margin: 0,
        duration: 0.7,
      });
      th.removeClass('open other check').addClass('close');
    } else {
      gsap.to(th.next(), {
        height: 'auto',
        margin: '20px 0 0 0',
        duration: 0.7,
      });
      th.addClass('open other check').removeClass('close')
    }
  })

  $('.about-slider-btn').click(function(){
    $('.about-slider-btn').removeClass('active');
    $(this).addClass('active')
  })
  $('.about-btn-one').click(function(){
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-one');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-two');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-three');
  })
  $('.about-btn-two').click(function(){
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-three');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-one');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-two');
  })
  $('.about-btn-three').click(function(){
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-two');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-three');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-one');
  })
});
