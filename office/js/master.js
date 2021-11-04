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
      $('nav').addClass('nav-background');
      $('nav').css({
        "position": "fixed",
      });
      $('.nav-flex').show();
      off = false;
    } else {
      $('body').css('overflow','auto');
      $('nav').removeClass('nav-background');
      $('nav').css({
        "position": "absolute",
      })
      $('.nav-flex').hide();
      off = true;
    }
  })
  // $('.project-block.cursor').mouseover(function(){
  //   console.log("564363");
  //   $(this).remove();
  // }).mouseleave(function(){
  //   $('.sale-chart-logo-detail').hide();
  // });
});
