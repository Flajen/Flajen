document.addEventListener("DOMContentLoaded", () => {
	function disabledScroll() {
  	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  	$('body').css('overflow', 'hidden');
  	$('body').css('padding-right', paddingOffset);
  }
  function enableScroll() {
  	$('body').css('overflow', 'auto');
  	$('body').css('padding-right', 0);
  }
	$('.about-img').parallax({
			imageSrc: 'img/home/about/1.jpg',
			speed: '0.75'
	});
	var number = 0;
  $(".gallery-popup-item").each(function(index) {
    number += 1;
    $(this).attr('data-number',`${number}`);
  });
  const peculiaritiesSliderOne = new Swiper('.peculiaritiesSliderOne', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    speed: 1100,
    loop: true,
  });
  const peculiaritiesSliderTwo = new Swiper('.peculiaritiesSliderTwo', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    speed: 1100,
    loop: true,
  });
  peculiaritiesSliderOne.controller.control = peculiaritiesSliderTwo;
  peculiaritiesSliderTwo.controller.control = peculiaritiesSliderOne;
  $('.peculiarities-sticky-link').click(function(e){
		e.preventDefault();
    $('.peculiarities-sticky-link').removeClass('active');
    $('.peculiarities-block-wrapper').removeClass('active');
    var dataLink = $(this).attr('data-link');
    $(`.peculiarities-sticky-link[data-link="${dataLink}"]`).addClass('active');
    $(`.${$(this).attr('data-link')}`).addClass('active');
		var target = $("#linktop").offset().top;
		$("html, body").animate({scrollTop: target-150}, 800);
  });
	$('.gone').click(function(){
		$('.gallery-popup-one').addClass('show'); //
		disabledScroll();
	})
	$('.gtwo').click(function(){
		$('.gallery-popup-two').addClass('show'); //
		disabledScroll();
	})
	$('.gthree').click(function(){
		$('.gallery-popup-three').addClass('show'); //
		disabledScroll();
	})

	function closeGalleryPopup() {
		$('.gallery-popup').removeClass('show'); // скрываем его
		enableScroll();
	}
	$('.gallery-popup-close').click(function(){closeGalleryPopup()})
	$('.gallery-popup').mouseup(function (e){ // событие клика по веб-документу
		var div = $('.gallery-popup-body'); // тут указываем класс элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			closeGalleryPopup();
		}
	});
})