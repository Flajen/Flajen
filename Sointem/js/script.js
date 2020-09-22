// Переменные

// Функции

// Скрипты

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

// Проверка работы скрипта
if ($('#cw_one').is(':checked')) {
	console.log('Да');
} else {
	console.log('Нет');
}
