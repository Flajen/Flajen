$(document).ready(function(){
  function close_nav() {
    $('body').css('overflow','auto');
    $('nav').removeClass('nav-background');
    $('nav').css({
      "position": "absolute",
    })
    $('.nav-flex').hide();
    off = true;
    string()
  }
  if (window.location.hash == '#directions') {
    $('html, body').animate({ scrollTop: $('#directions').offset().top - 100 }, 600);
    window.location.hash = '';
  }
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
      });
      $('.nav-flex').show();
      off = false;
    } else {
      close_nav();
    }
  })
});
