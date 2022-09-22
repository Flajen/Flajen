document.addEventListener("DOMContentLoaded", () => {
  var flyNav = $(".fly_nav");
  var sectionNav = $(".section-nav");
  var fixed_offsetDesktop = $(".header-fly").outerHeight();
  var fixed_offsetMobile = $(".header-mobile").outerHeight();
  var flyNavBtn = $(".fly_nav-btn");
  flyNavBtn.click(function () {
    if (flyNavBtn.parent().hasClass("open")) {
      flyNavBtn.parent().removeClass("open");
    } else {
      flyNavBtn.parent().addClass("open");
    }
  });
  if (window.innerWidth < 1220) {
    var flyNavLink = $(".fly_nav-link");
    flyNavLink.click(function (e) {
      flyNavLink.removeClass("active");
      e.target.classList.add("active");
      flyNavBtn.text(e.target.text);
    });
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > sectionNav.offset().top + sectionNav.outerHeight()) {
      flyNav.css("opacity", "1");
      flyNav.addClass("show");
    } else {
      flyNav.css("opacity", "0");
      flyNav.removeClass("show");
    }
  });
  if (window.innerWidth > 1220) {
    flyNav.css("top", fixed_offsetDesktop);
  } else {
    flyNav.css("top", fixed_offsetMobile);
  }
  $("body").on("click", '[href*="#"]', function (e) {
    if (window.innerWidth > 1220) {
      var fixed_offset = $(".header-fly").outerHeight();
    } else {
      var fixed_offset = $(".header-mobile").outerHeight();
      flyNavBtn.parent().removeClass("open");
    }
    var additionallyOffset = flyNav.outerHeight() || 0;
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop:
            $(this.hash).offset().top -
            (fixed_offset + additionallyOffset + 20),
        },
        1000
      );
    e.preventDefault();
  });
});
