// Переменные
var cap = $('.wrapper__cap'),
	navAdd = $('.nav__add'),
	help = $('.help'),
	helpShow = $('.help_show'), // Удалить
	scrollPrev = 0;

help.click(function () {
    $('html, body').animate({
        scrollTop: $(".top").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    cap.css('height', '104px');
});

$(document).ready(function() {
	// Шапка
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	 
		if ( scrolled > 100 && scrolled > scrollPrev ) {
			cap.addClass('wrapper__cap_active');
			cap.css('height', '74px');
			navAdd.css('padding-top', '10px');
			help.removeClass('help_show');
		}else {
			cap.removeClass('wrapper__cap_active');
			help.addClass('help_show');
		}
		if (scrolled < 10) {
			cap.css('height', '104px');
			navAdd.css('padding-top', '17px');
			help.removeClass('help_show');
		}
		scrollPrev = scrolled;
	});
})