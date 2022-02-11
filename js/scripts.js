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
	$('.peculiarities-sticky-link').click(function(){
			$('.peculiarities-sticky-link').removeClass('active');
			$('.peculiarities-block-wrapper').removeClass('active');
			$(this).addClass('active');
			$(`.${$(this).attr('data-link')}`).addClass('active');
	})
	$('.about-img').parallax({
			imageSrc: 'img/home/about/1.jpg',
			speed: '0.75'
	});
	$('.contacts-img').parallax({
		imageSrc: 'img/home/contacts/img.png',
		speed: '0.8'
});
	var number = 0;
  $(".gallery-popup-item").each(function(index) {
    number += 1;
    $(this).attr('data-number',`${number}`);
  });
	// $('.gallery-slider-btn').click(function(){
	// 	$(".gallery-popup-item").each(function(index) {
	// 		if(Number($(this).attr('data-number')) == Number($('.gallery-popup-item.slick-active').attr('data-number'))) {
	// 			$('.gallery-counter-active').html($(this).attr('data-number'));
	// 		}
	// 	});
	// 	// $('.gallery-counter-active').html(Number($('.gallery-popup-item.slick-active').attr('data-number')));
	// })

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