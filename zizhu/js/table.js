document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".tabelSwiper")) {
    new Swiper(".tabelSwiper", {
      slidesPerView: "auto",
      freeMode: true,
    });
  }

  const tabelMobileBtns = document.querySelectorAll(".tabel_mobile-btn");
  const tabelMobileLinks = document.querySelectorAll(".tabel_mobile-link");
  tabelMobileBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentNode.classList.toggle("open");
      tabelMobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          var linkAttr = link.getAttribute("data-link");
          link.parentNode.parentNode.querySelector(
            ".tabel_mobile-btn"
          ).innerHTML = link.innerHTML;
          btn.parentNode.classList.remove("open");
          let tabels =
            link.parentNode.parentNode.parentNode.parentNode.querySelectorAll(
              ".table"
            );
          tabels.forEach((tabel) => {
            tabel.classList.remove("active");
            if (tabel.getAttribute("data-tabel") === linkAttr) {
              tabel.classList.add("active");
            }
          });
        });
      });
    });
  });
});
