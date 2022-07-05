document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл
  var Scrollbar = window.Scrollbar;
  var scroll = Scrollbar.init(document.querySelector("#bodyOverflow"), {
    plugins: {
      disableScroll: {
        direction: "x",
      },
    },
  });
  scroll.track.xAxis.element.remove();
  // Параллакс
  let lastPosition = 0;
  let setPosition = -50;
  // let elemHight = document.querySelector(".home-background").offsetHeight;
  // let mainTop = document.querySelector("main").offsetTop;
  // let elemTop = document.querySelector(".home-background").offsetTop;
  scroll.addListener(() => {
    let containerHight = scroll.getSize().container["height"];
    let contentHight = scroll.getSize().content["height"];
    let footerHight = document.querySelector("footer").offsetHeight;
    var scrollTop = scroll.scrollTop;
    windowTop = scrollTop;
    windowBottom = scrollTop + containerHight;
    if (document.querySelector(".home-img")) {
      if (windowBottom > 700 && scrollTop < 1800) {
        var parametrImg = scrollTop / 30 - 25;
        document.querySelector(".home-img").style.willChange = "transform";
        document.querySelector(
          ".home-img"
        ).style.transform = `translate3d(0, ${parametrImg}%, 0)`;
      } else {
        document.querySelector(".home-img").style.willChange = "auto";
      }
    }
    // if (scrollTop > contentHight - 1040 && scrollTop > lastPosition) {
    // if (windowBottom > contentHight - footerHight) {
    //   if (windowBottom > lastPosition) {
    //     if (setPosition <= 0) {
    //       setPosition = setPosition + 1;
    //       document.querySelector(
    //         "footer"
    //       ).style.transform = `translate3d(0, ${setPosition}%, 0)`;
    //     }
    //   } else {
    //     if (setPosition >= -30) {
    //       setPosition = setPosition - 1;
    //       document.querySelector(
    //         "footer"
    //       ).style.transform = `translate3d(0, ${setPosition}%, 0)`;
    //     }
    //   }
    //   document.querySelector("footer").style.willChange = "transform";
    //   // lastPosition = windowBottom;
    // } else {
    //   document.querySelector("footer").style.willChange = "auto";
    // }
  });

  // Мышка
  var cursor = new MouseFollower();
  let checkWindowSize =
    window.innerWidth || document.documentElement.clientWidth;
  if (checkWindowSize > 1280) {
    const el = document.querySelector(".burger");
    let burgerLine = document.querySelectorAll(".burger-line");
    el.addEventListener("mouseenter", () => {
      cursor.setText("");
      cursor.addState("burgerColor");
      for (let i = 0; i < burgerLine.length; i++) {
        const element = burgerLine[i];
        element.classList.add("burgerColor");
      }
    });
    el.addEventListener("mouseleave", () => {
      cursor.removeText();
      cursor.removeState("burgerColor");
      for (let i = 0; i < burgerLine.length; i++) {
        const element = burgerLine[i];
        element.classList.remove("burgerColor");
      }
    });
    if (document.querySelector(".color_project")) {
      const colorProject = document.querySelectorAll(".color_project");
      for (let i = 0; i < colorProject.length; i++) {
        const el = colorProject[i];
        el.addEventListener("mouseenter", () => {
          cursor.setText("смотреть");
          cursor.addState(el.getAttribute("data-setColor"));
        });
        el.addEventListener("mouseleave", () => {
          cursor.removeText();
          cursor.removeState(el.getAttribute("data-setColor"));
        });
      }
    }
    if (document.querySelector(".scroller")) {
      const elСomparison = document.querySelector(".scroller");
      elСomparison.addEventListener("mouseenter", () => {
        cursor.setText("тянуть");
        cursor.addState("-comparisonColor");
      });
      elСomparison.addEventListener("mouseleave", () => {
        cursor.removeText();
        cursor.removeState("-comparisonColor");
      });
    }
  } else {
    cursor.destroy();
  }

  // Наведение на ссылку
  document
    .querySelectorAll(".hover")
    .forEach(
      (button) =>
        (button.innerHTML =
          "<div><span>" +
          button.textContent.trim().split("").join("</span><span>") +
          "</span></div>")
    );

  // Меню
  let burger = document.querySelector(".burger");
  let burgerText = document.querySelector(".header_menu-text");
  let menuWrapper = document.querySelector(".menu-wrapper");
  let menu = document.querySelector(".menu");
  let menuBlackout = document.querySelector(".menu-blackout");
  let menuCheck = false;
  if (menuCheck) {
    console.log(1);
  }
  function closeMenu() {
    gsap.to(menuWrapper, { opacity: 0, duration: 0.6 });
    gsap.to(menuBlackout, { opacity: 0, duration: 0.6 });
    menu.classList.remove("anim");
    burger.classList.remove("open");
    // setTimeout(() => {
    menuWrapper.classList.remove("open");
    menu.classList.remove("open");
    menuCheck = false;
    // }, 700);
  }
  function openMenu() {
    if (menuCheck) {
      closeMenu();
    } else {
      burger.classList.add("open");
      menuWrapper.classList.add("open");
      menu.classList.add("open");
      gsap.to(menuWrapper, { opacity: 1, duration: 0.6 });
      gsap.to(menuBlackout, { opacity: 0.8, duration: 0.6 });
      menuCheck = true;
    }
  }
  burgerText.addEventListener("click", openMenu);
  burger.addEventListener("click", openMenu);
  menuBlackout.addEventListener("click", () => {
    closeMenu();
  });
});
