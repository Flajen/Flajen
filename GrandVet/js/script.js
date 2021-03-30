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
    // cap.css('height', '104px');
});

// Запущенный документ
$(document).ready(function() {
	// Шапка
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	 
		if ( scrolled > 210 && scrolled > scrollPrev ) {
			cap.addClass('wrapper__cap_active');
			help.removeClass('help_show');
		}else {
			cap.removeClass('wrapper__cap_active');
			help.addClass('help_show');
		}
		if (scrolled < 300) {
			help.removeClass('help_show');
		}
		scrollPrev = scrolled;
	});
})