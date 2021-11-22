$(document).ready(function(){
  function close_nav() {
    $('body').css('overflow','auto');
    $('nav').removeClass('nav-background');
    $('nav').css({
      "position": "absolute",
      "height": "auto",
    })
    $('.nav-flex').hide();
    off = true;
  };
  function openPopup(){
    $('.additionally-blackout').show();
    $('.additionally-popup').show();
  };
  function closePopup(){
    $('.additionally-blackout').hide();
    $('.additionally-popup').hide();
    $('.additionally-video').attr('src', '');
  };
  $('.video').click(function(){
    var th = $(this);
    $('.additionally-video').attr('src', th.find('img').attr('data-link'));
    openPopup();
  });
  $('.additionally-blackout').click(function(){
    closePopup();
  });
  if (window.location.hash == '#directions') {
    $('html, body').animate({ scrollTop: $('#directions').offset().top - 100 }, 600);
    window.location.hash = '';
  };
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 70;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    if ($(window).width() < '1110'){
      close_nav();
    }
  });
  var off = true;
  $('.burger').click(function(){
    if (off) {
      $('body').css('overflow','hidden');
      $('nav').addClass('nav-background');
      $('nav').css({
        "position": "fixed",
        "height": "100%",
      });
      $('.nav-flex').show();
      off = false;
    } else {
      close_nav();
    }
  });
  $('.open_img').click(function(){
    $('.open-img-wrapper').find('img').attr('src',$(this).attr('src'));
    $('.open-img-wrapper').show();
  })
  $('.open-img-close').click(function(){
    $('.open-img-wrapper').hide();
  })
});
