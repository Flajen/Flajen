// Шапка
$(window).scroll(function() {
	if ($(this).scrollTop() > 100){
		$('.header_cap').addClass("cap_active_none");

		if ($(this).scrollTop() > 121) {
			$('.header_cap').addClass("cap_active_animation");

			if ($(this).scrollTop() > 264) {
				$('.header_cap').addClass("cap_active");
			}

			else {
				$('.header_cap').removeClass("cap_active");
			}
		}

		else {
			$('.header_cap').removeClass("cap_active_animation");
		}
	}

	else{
		$('.header_cap').removeClass("cap_active_none");
		$('.header_cap').removeClass("cap_active_animation");
	}
});

// Вставка текста по клику
$('#read_changing').click(function() {
	let textExpample = $('#example_changing').html()
	$('#write_changing').val(textExpample);
})

// Список из примеров
let	example_list = ["нужно застраховать дом", "нужно застраховать машину", "застраховать себя", "застраховать собаку"];

// Загрузка документа
$( document ).ready(function() {

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
	$('.owl-carousel').owlCarousel({
		// Показывать слайды покругу
		loop: true,

	  	// Отступ
	  	margin: 15,

	  	// Автоматическое проигрывание
	  	autoplay: true,
	  	autoplayTimeout: 3000,
	});
	$('#js-carousel-1').each( function() {
  		items: 3 // А по-умолчанию 3
  		// Создаем карусель
	    var owl = $(this).find('.owl-carousel').owlCarousel();

	  	// При клике по кнопке Влево
	  	$(this).find('.js-prev').on('click', function () {
	    // Перематываем карусель назад
	    	owl.trigger('prev.owl.carousel');
	  	});

	  	// При клике по кнопке Вправо
	  	$(this).find('.js-next').on('click', function () {
	    	// Перематываем карусель вперед
	    	owl.trigger('next.owl.carousel');
	  	});
	});

});
