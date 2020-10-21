// Вставка текста по клику
$('#read_changing').click(function() {
	let textExpample = $('#example_changing').html()
	$('#write_changing').val(textExpample);
})

// Выбор элемента
	// Переменные
var input = $('.hf_field');
var personal = $('#personal');
var personalBlock = $('.personal_block');
	// Функция
input.click(function() {
	input.addClass('hff_active');
});
	// Функция
personal.click(function() {
	if (personalBlock.css('display') == 'block') {
		personalBlock.css('display', 'none');
	}else {
		personalBlock.css('display', 'block');
	}
});
	// Скрытие при клике на область помимо самого блок
$(document).click(function (e){ // событие клика по веб-документ
	// если клик был не по нашему блоку
		if (!input.is(e.target) && input.has(e.target).length === 0) { // и не по его дочерним элементам
			input.removeClass('hff_active');
		}
		if (!personalBlock.is(e.target) && !personal.is(e.target) && personalBlock.has(e.target).length === 0) {
			personalBlock.css('display', 'none');
		}
});


// Список из примеров
let	example_list = ["нужно застраховать дом", "нужно застраховать машину", "застраховать себя", "застраховать собаку"];

// Загрузка документа
$( document ).ready(function() {
	// Шапка
		// Переменные
	var cap = $('.header_cap'),
	scrollPrev = 0;
		// Функция
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	 
		if ( scrolled > 1 && scrolled > scrollPrev ) {
			cap.addClass('cap_active_none');
			cap.css('box-shadow', 'none');
			personalBlock.css('display', 'none');
		} else {
			cap.removeClass('cap_active_none');
			cap.css('box-shadow', '0 0 10px 0.1px #222');
		}
		if (scrolled == 0) {
			cap.css('box-shadow', 'none');
		}
		scrollPrev = scrolled;
	});

	// Замена текста из массива
		// Переменные
	var minNumber = 1;
	var maxNumber = 4;
	var randomNumber = randomNumberFromRange(minNumber, maxNumber);
		// Функция
	function randomNumberFromRange(min,max)
	{return Math.floor(Math.random()*(max-min+1)+min);}
		// Замена текста
	$('#example_changing').html(example_list[randomNumber]);

	// Слайдер
	$('.slider').slick({
		centerMode: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 800,
		easing: 'easeOutSine',
		adaptiveHeight:true,
		autoplay: true,
		autoplaySpeed: 2500,
		centerMode: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		touchThreshold: 15,
		// waitForAnimate: false, Быстрый переход(откл анимации)
		centerPadding: '60px',
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}]
		});
});
