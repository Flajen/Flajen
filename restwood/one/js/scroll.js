document.addEventListener("DOMContentLoaded", () => {
  $("a.navigation").on("click", function () {
    let href = $(this).attr("href");
    var headerH = $("header").height() + 20;
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - headerH,
      },
      {
        duration: 500,
        easing: "linear",
      }
    );
    return false;
  });
});
