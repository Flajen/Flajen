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
            if (headerMoblie.classList.contains("up") && window.scrollY == 0) {
              headerMoblie.classList.add("white");
            }
          } else {
            burger.classList.add("open");
            headerMoblie.classList.add("open");
            headerMoblie.classList.remove("white");
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
          if (headerMoblie.classList.contains("up")) {
            headerMoblie.classList.add("white");
          }
        }
      });
      if (window.scrollY > 0) {
        headerMoblie.classList.add("fly");
        headerMoblie.classList.remove("white");
      }
    }
  }
  const btnRequest = document.querySelectorAll(".btnRequest");
  const popups = document.querySelectorAll(".popup");
  const popupRequest = document.querySelector(".popupRequest");
  const popupSuccess = document.querySelector(".popupSuccess");
  var check = false;
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    let scroll = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("disable-scroll");
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + "px";
    document.body.style.paddingRight = scroll + "px";
    popups.forEach((popup) => {
      popup.style.paddingRight = 20 + scroll + "px";
    });
    check = true;
  };
  let enableScroll = function () {
    if (check) {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = "auto";
      document.body.classList.remove("disable-scroll");
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute("data-position");
      document.body.style.paddingRight = 0;
      popups.forEach((popup) => {
        popup.style.paddingRight = 20 + "px";
      });
    }
    check = false;
  };
  btnRequest.forEach((btn) => {
    btn.addEventListener("click", () => {
      popupRequest.classList.add("open");
      popupRequest.classList.add("show");
      disableScroll();
    });
  });
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-close")
      ) {
        popup.classList.remove("show");
        popup.classList.remove("open");
        enableScroll();
      }
    });
  });
});
