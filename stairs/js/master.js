$(document).ready(function(){
  $(function(){
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });
  $('input[name="phone"]').mask("+7(999) 999-99-99",{autoclear: false});
  function showForm(){
    $('.form-wrapper').show();
    $('.blackout').show();
  };
  function hideForm(){
    $('.form-wrapper').hide();
    $('.blackout').hide();
  };


  function showPopup(){
    $('.popup-wrapper').show();
    $('.blackout').show();
    var btnPrev = $('.popup_slider-btnPrev'),
        btnNext = $('.popup_slider-btnNext'),
        sliderTrack = $('.popup_slider-track'),
        sliderItems = $('.popup_slider-img').length,
        sliderItemsWidth = $('.popup_slider-img').width(),
        sliderWidth = sliderItemsWidth * sliderItems - sliderItemsWidth,
        sliderMiniItems = $('.popup_slider_mini-img-wrapper'),
        sliderMiniItemsValue = $('.popup_slider_mini-img-wrapper').length - 1,
        sliderValue = 0;
        // index_0 = 0,
        // index_1 = 1,
        // index_2 = 2,
        // index_3 = 3,
        // index_4 = 4,
        // index_5 = 5;
    $('.popup_slider_mini-img-wrapper').click(function(){
      var el = $(this);
      $('.popup_slider_mini-img-wrapper').removeClass('popup_slider_mini-img-item');
      el.addClass('popup_slider_mini-img-item');
      for (var i = 0; i < $('.popup_slider_mini-img-wrapper').length; i++) {
        if (el.hasClass(`index_${i}`)) {
          sliderValue = sliderItemsWidth * i;
          if (sliderValue > 0) {
            sliderTrack.css('transform', `translate(-${sliderValue}px,0)`);
          } else {
            sliderTrack.css('transform', `translate(${sliderValue}px,0)`);
          }
        }
      }
    });
    btnPrev.click(function(){
      var sliderMiniItemsHide = $('.popup_slider_mini-img-item');
      if (sliderValue == 0) {
        sliderValue = -sliderWidth;
        $('.popup_slider_mini-img-wrapper:last-child').addClass('popup_slider_mini-img-item');
      } else {
        sliderValue = sliderValue + sliderItemsWidth;
      }
      sliderTrack.css('transform', `translate(${sliderValue}px,0)`);
      sliderMiniItemsHide.removeClass('popup_slider_mini-img-item').prev().addClass('popup_slider_mini-img-item');
    });
    btnNext.click(function(){
      var sliderMiniItemsHide = $('.popup_slider_mini-img-item');
      if (sliderValue == -sliderWidth) {
        sliderValue = 0;
        $('.popup_slider_mini-img-wrapper:first-child').addClass('popup_slider_mini-img-item');
      } else {
        sliderValue = sliderValue - sliderItemsWidth;
      }
      sliderTrack.css('transform', `translate(${sliderValue}px,0)`);
      sliderMiniItemsHide.removeClass('popup_slider_mini-img-item').next().addClass('popup_slider_mini-img-item');
    });
  };


  function hidePopup(){
    $('.popup-wrapper').hide();
    $('.blackout').hide();
  };
  function showVideo(){
    $('.video').show();
    $('.blackout').show();
  };
  function hideVideo(){
    $('.video').hide();
    $('.blackout').hide();
  };
  function showMiniMap(){
    $('.min_map').show();
    $('.blackout').show();
  };
  function hideMiniMap(){
    $('.min_map').hide();
    $('.blackout').hide();
  };
  $('button[name="form"]').click(function(){
    showForm();
  });
  $('.popup-btn').click(function(){
    showForm();
    $('.popup-wrapper').hide();
  });
  $('button[name="stairs"]').click(function(){
    showPopup();
    $("html, body").animate({scrollTop: "1350px"});
    for(var item in stairs){
      if ($(this).data("btn") == item) {
        $('.popup-title').html($(this).parent().parent().parent().find('h3').html());
        $('.popup-price').html(stairs[item]["price"]);
        $('.popup_characteristics-one').html(stairs[item]["numberSteps"]);
        $('.popup_characteristics-two').html(stairs[item]["lengthThreeSections"]);
        $('.popup_characteristics-three').html(stairs[item]["sectionLength"]);
        $('.popup_characteristics-four').html(stairs[item]["workingHeightThreeSections"]);
        $('.popup_characteristics-five').html(stairs[item]["sectionWorkingHeight"]);
        $('.popup_characteristics-six').html(stairs[item]["Weight"]);
        $('.popup_characteristics-seven').html(stairs[item]["lengthTwoSections"]);
        $('.popup_characteristics-eight').html(stairs[item]["stepSize"]);
        $('.popup_characteristics-nine').html(stairs[item]["workingHeightTwoSections"]);
      }
    }
  });
  $('.form-close').click(function(){
    hideForm();
  });
  $('.popup-close').click(function(){
    hidePopup();
  });
  $('.about_video').click(function(){
    showVideo();
  });
  $('button[name="minMap"]').click(function(){
    showMiniMap();
  });
  $('.blackout').click(function(){
    hideForm();
    hidePopup();
    hideVideo();
    hideMiniMap();
  });

  $('.form').submit(function(e) {
		e.preventDefault();
		let th = $(this);
		$.ajax({
		   type: "POST",
		   url: 'check.php',
		   data: th.serialize(),
		   success: function(){
				hideForm();
				th.trigger('reset');
		  }, error: function(){}
		});
	});

  var stairs = {
    "stairs1": {
      "name": "Лестница КОМБАТ 3 х 8 (3 секции по 8 ступеней)",
      "price": "7400 ₽",
      "availability": "В наличии",
      "numberSteps": "8 (3х8)",
      "sectionLength": "2,14 м",
      "sectionWorkingHeight": "2,01 м",
      "lengthTwoSections": "3,42 м",
      "workingHeightTwoSections": "4,41 м",
      "lengthThreeSections": "5 м",
      "workingHeightThreeSections": "5,91 м",
      "Weight": "10,5 кг",
      "stepSize": "23х23 мм",
    },
    "stairs2": {
      "name": "Лестница КОМБАТ 3 х 8 профессиональная (3 секции по 8 ступеней)",
      "price": "8400 ₽",
      "availability": "В наличии",
      "numberSteps": "8 (3х8)",
      "sectionLength": "2,14 м",
      "sectionWorkingHeight": "2,01 м",
      "lengthTwoSections": "3,42 м",
      "workingHeightTwoSections": "4,41 м",
      "lengthThreeSections": "5 м",
      "workingHeightThreeSections": "5,91 м",
      "Weight": "12 кг",
      "stepSize": "28х28 мм",
    },
    "stairs3": {
      "name": "Лестница КОМБАТ 3 х 9 (3 секции по 9 ступеней)",
      "price": "8000 ₽",
      "availability": "В наличии",
      "numberSteps": "9 (3х9)",
      "sectionLength": "2,4 м",
      "sectionWorkingHeight": "2,25 м",
      "lengthTwoSections": "3,94 м",
      "workingHeightTwoSections": "4,66 м",
      "lengthThreeSections": "5,5 м",
      "workingHeightThreeSections": "6,65 м",
      "Weight": "11,5 кг",
      "stepSize": "23х23 мм",
    },
    "stairs4": {
      "name": "Лестница КОМБАТ 3 х 9 профессиональная (3 секции по 9 ступеней)",
      "price": "9000 ₽",
      "availability": "В наличии",
      "numberSteps": "9 (3х9)",
      "sectionLength": "2,4 м",
      "sectionWorkingHeight": "2,25 м",
      "lengthTwoSections": "3,94 м",
      "workingHeightTwoSections": "4,66 м",
      "lengthThreeSections": "5,5 м",
      "workingHeightThreeSections": "6,65 м",
      "Weight": "12,5 кг",
      "stepSize": "28х28 мм",
    },
    "stairs5": {
      "name": "Лестница КОМБАТ 3 х 10 (3 секции по 10 ступеней)",
      "price": "8400 ₽",
      "availability": "В наличии",
      "numberSteps": "10 (3х10)",
      "sectionLength": "2,67 м",
      "sectionWorkingHeight": "2,52 м",
      "lengthTwoSections": "4,46 м",
      "workingHeightTwoSections": "5,17 м",
      "lengthThreeSections": "6,5 м",
      "workingHeightThreeSections": "7,38 м",
      "Weight": "14,5 кг",
      "stepSize": "23х23 мм",
    },
    "stairs6": {
      "name": "Лестница КОМБАТ 3 х 10 профессиональная (3 секции по 10 ступеней)",
      "price": "9500 ₽",
      "availability": "В наличии",
      "numberSteps": "10 (3х10)",
      "sectionLength": "2,67 м",
      "sectionWorkingHeight": "2,52 м",
      "lengthTwoSections": "4,46 м",
      "workingHeightTwoSections": "5,17 м",
      "lengthThreeSections": "6,5 м",
      "workingHeightThreeSections": "7,38 м",
      "Weight": "16 кг",
      "stepSize": "28х28 мм",
    },
    "stairs7": {
      "name": "Лестница КОМБАТ 3 х 11 (3 секции по 11 ступеней)",
      "price": "8900 ₽",
      "availability": "В наличии",
      "numberSteps": "11 (3х11)",
      "sectionLength": "2,93 м",
      "sectionWorkingHeight": "2,77 м",
      "lengthTwoSections": "4,98 м",
      "workingHeightTwoSections": "5,42 м",
      "lengthThreeSections": "7,5 м",
      "workingHeightThreeSections": "8,5 м",
      "Weight": "15,5 кг",
      "stepSize": "23х23 мм",
    },
    "stairs8": {
      "name": "Лестница КОМБАТ 3 х 11 профессиональная (3 секции по 11 ступеней)",
      "price": "9900 ₽",
      "availability": "В наличии",
      "numberSteps": "11 (3х11)",
      "sectionLength": "2,93 м",
      "sectionWorkingHeight": "2,77 м",
      "lengthTwoSections": "4,98 м",
      "workingHeightTwoSections": "5,42 м",
      "lengthThreeSections": "7,5 м",
      "workingHeightThreeSections": "8,5 м",
      "Weight": "17 кг",
      "stepSize": "28х28 мм",
    },
    "stairs9": {
      "name": "Лестница КОМБАТ 3 х 12 (3 секции по 12 ступеней)",
      "price": "9900 ₽",
      "availability": "В наличии",
      "numberSteps": "12 (3х12)",
      "sectionLength": "3,19 м",
      "sectionWorkingHeight": "3,01 м",
      "lengthTwoSections": "5,5 м",
      "workingHeightTwoSections": "5,9 м",
      "lengthThreeSections": "8 м",
      "workingHeightThreeSections": "9 м",
      "Weight": "16,5 кг",
      "stepSize": "23х23 мм",
    },
    "stairs10": {
      "name": "Лестница КОМБАТ 3 х 12 профессиональная (3 секции по 12 ступеней)",
      "price": "10900 ₽",
      "availability": "В наличии",
      "numberSteps": "12 (3х12)",
      "sectionLength": "3,19 м",
      "sectionWorkingHeight": "3,01 м",
      "lengthTwoSections": "5,5 м",
      "workingHeightTwoSections": "5,9 м",
      "lengthThreeSections": "8 м",
      "workingHeightThreeSections": "9 м",
      "Weight": "18 кг",
      "stepSize": "28х28 мм",
    },
    "stairs11": {
      "name": "Лестница КОМБАТ 3 х 13 профессиональная (3 секции по 13 ступеней)",
      "price": "11900 ₽",
      "availability": "В наличии",
      "numberSteps": "13 (3х13)",
      "sectionLength": "3,5 м",
      "sectionWorkingHeight": "3,3 м",
      "lengthTwoSections": "6 м",
      "workingHeightTwoSections": "6,5 м",
      "lengthThreeSections": "8,7 м",
      "workingHeightThreeSections": "10 м",
      "Weight": "19,5 кг",
      "stepSize": "28х28 мм",
    },
    "stairs12": {
      "name": "Лестница КОМБАТ 3 х 14 профессиональная (3 секции по 14 ступеней)",
      "price": "12900 ₽",
      "availability": "В наличии",
      "numberSteps": "14 (3х14)",
      "sectionLength": "3,75 м",
      "sectionWorkingHeight": "3,5 м",
      "lengthTwoSections": "6,5 м",
      "workingHeightTwoSections": "7 м",
      "lengthThreeSections": "9,5 м",
      "workingHeightThreeSections": "11 м",
      "Weight": "20,5 кг",
      "stepSize": "28х28 мм",
    },
  };
});
