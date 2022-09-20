document.addEventListener("DOMContentLoaded", () => {
  $("body").on("click", '[href*="#"]', function (e) {
    if (window.innerWidth > 1220) {
      var fixed_offset = $(".header-fly").outerHeight();
    } else {
      var fixed_offset = $(".header-mobile").outerHeight();
    }
    $("html,body")
      .stop()
      .animate(
        { scrollTop: $(this.hash).offset().top - (fixed_offset + 20) },
        1000
      );
    e.preventDefault();
  });
});
