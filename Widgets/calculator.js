var home = $('.widget-calc'),
	title = $("<h1 class='widget-title'>Калькулятор</h1>"),
	workspace = $("<div class='widget-workspace'></div>"),
	subtitle = $("<p class='widget-subtitle'>Укажите тип события</p>");

home.append(title, workspace);
workspace.append(subtitle);

function widgetPopup() {
	$('.widget-blackout').hide();
	$('.widget-popup').hide(100);
}

function widgetCalculate() {
	if ($('.widget-data').css('display') != 'none') {
		$('.widget-calculate').show();
	} else{
		$('.widget-calculate').hide();
	}
}

$(document).ready(function() {
	// $(".widget-data").on('click', '.data_delete', function() {
	// 	$('.widget-data').hide();
	// 	$("data_delete").parents( ".second" )
	// 	console.log("Пример");
	// 	$(".data_delete").parents(".widget-data").css('background', '#555');
	// 	$(".data_delete").prev().prev().css('background', '#555');
	// 	$(".widget-data").children().css('background', '#555');

	// 	$(".data_delete").parent().prev().css('background', '#555');
	// 	$(".data_delete").children().prev().css('background', '#555');
	// });
	$(".data_delete").click(function(){
		$('.widget-data').hide();
		widgetCalculate()
	})


	$('.popup-btn').click(function(){
		$('.widget-data').show(100);
		widgetPopup()
		widgetCalculate()
	})

	$('.event-radio').click(function(){
		if ($('.input_radio').is(':checked')) {
			$('.event-input_radio-help').show(150);
		} else{
			$('.event-input_radio-help').hide(150);
		}
	})

	$('.popup_close').click(function(){
		widgetPopup()
	})

	$('.widget-add_premises').click(function(){
		$('.widget-blackout').show();
		$('.widget-popup').show(100);
	})
	$('.widget-blackout').click(function(){
		widgetPopup()
	})
})