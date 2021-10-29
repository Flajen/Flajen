$(document).ready(function(){
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
