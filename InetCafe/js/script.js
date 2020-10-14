// Переменные
var cap = $('.cap'),
scrollPrev = 0;

// Запуск документа
$(document).ready(function() {
	// Меню
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	 
		if ( scrolled > 1 && scrolled > scrollPrev ) {
			cap.addClass('cap__active');
			$('.toggle__cap').css("transform", "rotate(90deg)");
			$('.container').css("padding-left", "2px")
		} else {
			cap.removeClass('cap__active');
			$('.toggle__cap').css("transform", "rotate(0)");
			$('.container').css("padding-left", "222px")
		}
		scrollPrev = scrolled;
	});
})


// Скрипты
$('.toggle__cap').click(function() {
	if (cap.hasClass( "cap__active" )) {
		cap.removeClass('cap__active');
		$('.toggle__cap').css("transform", "rotate(0)");
		$('.container').css("padding-left", "222px")
	}
	else {
		cap.addClass('cap__active');
		$('.toggle__cap').css("transform", "rotate(90deg)");
		$('.container').css("padding-left", "2px")
	}
})