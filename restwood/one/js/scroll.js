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

  // Плавный скролл
  // document.querySelectorAll("a.navigation").forEach((link) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const href = this.getAttribute("href").substring(1);
  //     const scrollTarget = document.getElementById(href);
  //     const topOffset = document.querySelector("header").offsetHeight + 20;
  //     if (scrollTarget) {
  //       const elementPosition = scrollTarget.getBoundingClientRect().top;
  //       const offsetPosition = elementPosition - topOffset;
  //       window.scrollBy({
  //         top: offsetPosition,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       return;
  //     }
  //   });
  // });
  // const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  //   animationTime = 800,
  //   framesCount = 90;
  // anchors.forEach(function (item) {
  //   item.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     let coordY =
  //       document
  //         .querySelector(item.getAttribute("href"))
  //         .getBoundingClientRect().top +
  //       window.pageYOffset -
  //       (headerHight + 20);
  //     let scroller = setInterval(function () {
  //       let scrollBy = coordY / framesCount;
  //       if (
  //         scrollBy > window.pageYOffset - coordY &&
  //         window.innerHeight + window.pageYOffset < document.body.offsetHeight
  //       ) {
  //         window.scrollBy(0, scrollBy);
  //       } else {
  //         window.scrollTo(0, coordY);
  //         clearInterval(scroller);
  //       }
  //     }, animationTime / framesCount);
  //   });
  // });
});
