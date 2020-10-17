// Переменные
	var cap = $('.wrapper__cap'),
	scrollPrev = 0;

$(document).ready(function() {
	// Шапка
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	 
		if ( scrolled > 1 && scrolled > scrollPrev ) {
			cap.addClass('wrapper__cap_active');
			cap.css('height', '74px');
		}else {
			cap.removeClass('wrapper__cap_active');
		}
		if ($(window).scrollTop() < 10) {
			cap.css('height', '104px');
		}
		scrollPrev = scrolled;
	});

	console.log($(window).scrollTop());
})