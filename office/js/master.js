$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 70;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  var off = true;
  $('.burger').click(function(){
    if (off) {
      $('body').css('overflow','hidden');
      $('nav').css({
        "position": "fixed",
        "background-color": "#242424",
      })
      $('.nav-flex').show();
      off = false;
    } else {
      $('body').css('overflow','auto');
      $('nav').css({
        "position": "absolute",
        "background-color": "transparent",
      })
      $('.nav-flex').hide();
      off = true;
    }
  })
});
