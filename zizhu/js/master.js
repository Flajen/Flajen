document.addEventListener("DOMContentLoaded", () => {
  const burgers = document.querySelectorAll(".burger");
  const headerMoblie = document.querySelector(".header-mobile");
  if (window.innerWidth > 1220) {
    const headerMenu = document.querySelector(".header-menu");
    burgers.forEach((burger) => {
      burger.addEventListener("click", (e) => {
        if (burger.classList.contains("close")) {
          headerMenu.classList.remove("open");
        } else {
          headerMenu.classList.add("open");
        }
      });
    });
  } else {
    if (headerMoblie) {
      burgers.forEach((burger) => {
        burger.addEventListener("click", (e) => {
          if (burger.classList.contains("open")) {
            burger.classList.remove("open");
            headerMoblie.classList.remove("open");
            // headerMoblie.classList.add("white");
          } else {
            burger.classList.add("open");
            headerMoblie.classList.add("open");
            // headerMoblie.classList.remove("white");
          }
        });
      });
    }
  }
  if (window.innerWidth > 1220) {
    const headerFly = document.querySelector(".header-fly");
    if (headerFly) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
          headerFly.classList.add("show");
        } else {
          headerFly.classList.remove("show");
        }
      });
    }
  } else {
    if (headerMoblie) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          headerMoblie.classList.add("fly");
          headerMoblie.classList.remove("white");
        } else {
          headerMoblie.classList.remove("fly");
          headerMoblie.classList.add("white");
        }
      });
      if (window.scrollY > 0) {
        headerMoblie.classList.add("fly");
        headerMoblie.classList.remove("white");
      }
    }
  }
});
