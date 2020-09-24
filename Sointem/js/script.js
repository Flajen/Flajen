// Переменные
var fixed_offset = 25;

// Функции

// Скрипты

// Плавный скролл
$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

// Скролл по кнопке
// Форма
$('.d_btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.c_wrapper_img').offset().top - fixed_offset
    }, 400);
});
// О нас
$('.Nabout').click(() => {
    $('html, body').animate({
        scrollTop: $('#Sabout').offset().top - fixed_offset
    }, 400);
});
// Услуги
$('.Nservices').click(() => {
    $('html, body').animate({
        scrollTop: $('#Sservices').offset().top - fixed_offset
    }, 400);
});
// Наши работы
$('.Nwork').click(() => {
    $('html, body').animate({
        scrollTop: $('#Swork').offset().top - fixed_offset
    }, 400);
});
// Лицензии
$('.Nlicenses').click(() => {
    $('html, body').animate({
        scrollTop: $('#Slicenses').offset().top - fixed_offset
    }, 400);
});
// Наши заказчики
$('.Ncustomer').click(() => {
    $('html, body').animate({
        scrollTop: $('#Scustomer').offset().top - fixed_offset
    }, 400);
});

// Переключение вкладок
$('#cw_one').click( function() {
	if ($('#cw_one').hasClass('active')) {
	} else {
		$('.cw_text').removeClass('active');
		$('#cw_one').addClass('active');
		$('#cw__work_one').attr('checked', true);
		$('#cw__work_two').removeAttr('checked');
	}
})

$('#cw_two').click( function() {
	if ($('#cw_two').hasClass('active')) {
	} else {
		$('.cw_text').removeClass('active');
		$('#cw_two').addClass('active');
		$('#cw__work_two').attr('checked', true);
		$('#cw__work_one').removeAttr('checked');
	}
})

// Слайдер

$(document).ready(function() {
	const aPrev = $('#prev_arrow'),
		aNext = $('#next_arrow'),
		sItem = $('.s_item');

	const sImgOne = $('.ia_one'),
		sPicksOne = $('.pick_one');

	const sImgTwo = $('.ia_two'),
		sPicksTwo = $('.pick_two');

	const sImgThree = $('.ia_three')
		sPicksThree = $('.pick_three');

	const sImgFour = $('.ia_four')
		sPicksFour = $('.pick_four');

	const sImgFive = $('.ia_five')
		sPicksFive = $('.pick_five');


	const sPickOne = document.querySelectorAll('.pick_one');
	const sPickTwo = document.querySelectorAll('.pick_two');
	const sPickThree = document.querySelectorAll('.pick_three');
	const sPickFour = document.querySelectorAll('.pick_four');
	const sPickFive = document.querySelectorAll('.pick_five');

	let changeBuss = $('.text_bussines');

	let index = 0;
	let indexImg = 0;

	function activeSlide(n) {
		for (item of sItem) {
			sItem.removeClass('s_active');
		}
		$(sItem[n]).addClass('s_active');
		change_bussines();
	}

	function nextSlide() {
		if (index == sItem.length - 1) {
			index = 0;
			activeSlide(index);
		} else {
			index++;
			activeSlide(index);
		}
	}

	function prevSlide() {
		if (index == 0) {
			index = sItem.length - 1;
			activeSlide(index);
		} else {
			index--;
			activeSlide(index);
		}
	}

	function change_bussines() {
		if (index == 0) {
			changeBuss.text('Бизнес-центр LOTTE');
		} else if (index == 1) {
			changeBuss.text('Рольф волгоградский проспект');
		} else if (index == 2) {
			changeBuss.text('Рольф калужская');
		} else if (index == 3) {
			changeBuss.text('Рольф рязанка');
		} else if (index == 4) {
			changeBuss.text('Школа');
		} else {
			return;
		}
	}

	aNext.click(function() {
		nextSlide();
	})

	aPrev.click(function() {
		prevSlide();
	})

	// ----------------------Перебор фотографии----------------------
	function activeImgOne(n) {
		for (imgOne of sImgOne) {
			sImgOne.removeClass('img_active');
		}
		$(sImgOne[n]).addClass('img_active');
	}

	function activeImgTwo(n) {
		for (imgTwo of sImgTwo) {
			sImgTwo.removeClass('img_active');
		}
		$(sImgTwo[n]).addClass('img_active');
	}

	function activeImgThree(n) {
		for (imgThree of sImgThree) {
			sImgThree.removeClass('img_active');
		}
		$(sImgThree[n]).addClass('img_active');
	}

	function activeImgFour(n) {
		for (imgFour of sImgFour) {
			sImgFour.removeClass('img_active');
		}
		$(sImgFour[n]).addClass('img_active');
	}

	function activeImgFive(n) {
		for (imgFive of sImgFive) {
			sImgFive.removeClass('img_active');
		}
		$(sImgFive[n]).addClass('img_active');
	}
	// --------------------------------------------------------------

	// ----------------------Перебор боксов----------------------
	function activePickOne(n) {
		for (pickitem of sPicksOne) {
			sPicksOne.removeClass('pick_active');
		}
		$(sPicksOne[n]).addClass('pick_active');
	}

	function activePickTwo(n) {
		for (pickitem of sPicksTwo) {
			sPicksTwo.removeClass('pick_active');
		}
		$(sPicksTwo[n]).addClass('pick_active');
	}
	
	function activePickThree(n) {
		for (pickitem of sPicksThree) {
			sPicksThree.removeClass('pick_active');
		}
		$(sPicksThree[n]).addClass('pick_active');
	}

	function activePickFour(n) {
		for (pickitem of sPicksFour) {
			sPicksFour.removeClass('pick_active');
		}
		$(sPicksFour[n]).addClass('pick_active');
	}

	function activePickFive(n) {
		for (pickitem of sPicksFive) {
			sPicksFive.removeClass('pick_active');
		}
		$(sPicksFive[n]).addClass('pick_active');
	}
	// -----------------------------------------------------------

	sPickOne.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickOne(indexImg);
			activeImgOne(indexImg);
		})
	})

	sPickTwo.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickTwo(indexImg);
			activeImgTwo(indexImg);
		})
	})

	sPickThree.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickThree(indexImg);
			activeImgThree(indexImg);
		})
	})

	sPickFour.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickFour(indexImg);
			activeImgFour(indexImg);
		})
	})

	sPickFive.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickFive(indexImg);
			activeImgFive(indexImg);
		})
	})

	// sPick.each(function(picks, indexPick) {
	// 	$('picks').click(function() {
	// 		console.log(picks);                   jQuery не работате
	// 		console.log(indexPick);
	// 	})
	// })
})



// Проверка работы скрипта

if ($('#cw_one').is(':checked')) {
	// console.log('Да');
} else {
	// console.log('Нет');
}
