document.addEventListener("DOMContentLoaded", () => {
  $("a.navigation").on("click", function () {
    let href = $(this).attr("href");
    var headerH = $("header").outerHeight() + 20;
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - headerH,
      },
      {
        duration: 600,
        easing: "linear",
      }
    );
    return false;
  });
});
