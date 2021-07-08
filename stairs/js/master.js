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
        sliderMiniItemsValue = $('.popup_slider_mini-img-wrapper').length - 1,
        sliderValue = 0;
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
  $('.catalog_card-btn').click(function(){
    showForm();
  });
  $('.popup-btn').click(function(){
    showForm();
    $('.popup-wrapper').hide();
  });
  $('.catalog_card-btn-details').click(function(){
    showPopup();
    $("html, body").animate({scrollTop: "1350px"});
  });
  $('.form-close').click(function(){
    hideForm();
  });
  $('.popup-close').click(function(){
    hidePopup();
  });
  $('.blackout').click(function(){
    hideForm();
    hidePopup();
  });
  // var btnPrev = $('.popup_slider-btnPrev'),
  //     btnNext = $('.popup_slider-btnNext'),
  //     sliderTrack = $('.popup_slider-track'),
  //     sliderItems = $('.popup_slider-img').length,
  //     sliderItemsWidth = $('.popup_slider-img').width(),
  //     sliderWidth = sliderItemsWidth * sliderItems - sliderItemsWidth,
  //     sliderMiniItemsValue = $('.popup_slider_mini-img-wrapper').length - 1,
  //     sliderValue = 0;
  // btnPrev.click(function(){
  //   var sliderMiniItemsHide = $('.popup_slider_mini-img-item');
  //   if (sliderValue == 0) {
  //     sliderValue = -sliderWidth;
  //     $('.popup_slider_mini-img-wrapper:last-child').addClass('popup_slider_mini-img-item');
  //   } else {
  //     sliderValue = sliderValue + sliderItemsWidth;
  //   }
  //   sliderTrack.css('transform', `translate(${sliderValue}px,0)`);
  //   sliderMiniItemsHide.removeClass('popup_slider_mini-img-item').prev().addClass('popup_slider_mini-img-item');
  // });
  // btnNext.click(function(){
  //   var sliderMiniItemsHide = $('.popup_slider_mini-img-item');
  //   if (sliderValue == -sliderWidth) {
  //     sliderValue = 0;
  //     $('.popup_slider_mini-img-wrapper:first-child').addClass('popup_slider_mini-img-item');
  //   } else {
  //     sliderValue = sliderValue - sliderItemsWidth;
  //   }
  //   sliderTrack.css('transform', `translate(${sliderValue}px,0)`);
  //   sliderMiniItemsHide.removeClass('popup_slider_mini-img-item').next().addClass('popup_slider_mini-img-item');
  // });
});
