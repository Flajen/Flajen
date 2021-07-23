$(document).ready(function(){
  $('a[href="#login"]').click(function(){
    $('.blackout').show();
    $('.login_popup').show();
  });

  $('.login_popup-close').click(function(){
    $('.blackout').hide();
    $('.login_popup').hide();
  });
});
