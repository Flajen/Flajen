document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл
  var Scrollbar = window.Scrollbar;
  var scroll = Scrollbar.init(document.querySelector("#bodyOverflow"), {
    plugins: {
      disableScroll: {
        direction: "x",
        direction: "y",
      },
    },
  });
  // console.log(scroll.offset["y"]);
  // console.log(scroll.getSize());

  let containerHight = scroll.getSize().container["height"];
  let contentHight = scroll.getSize().content["height"];
  // 1080 размер окна
  // -30% до 30%
  scroll.addListener(() => {
    var scrollTop = scroll.scrollTop;
    windowTop = scrollTop;
    windowBottom = scrollTop + containerHight;
    if (windowBottom > 700 && scrollTop < 1800) {
      var parametrImg = scrollTop / 30 - 25;
      if (document.querySelector(".home-img")) {
        document.querySelector(
          ".home-img"
        ).style.transform = `translate3d(0, ${parametrImg}%, 0)`;
      }
    }
    if (windowBottom > 8900 && scrollTop < 10000) {
      var parametrImg = scrollTop / 100;
      //   if (document.querySelector(".adaptively-img")) {
      //     document.querySelector(
      //       ".adaptively-img"
      //     ).style.transform = `translate3d(0, ${parametrImg}%, 0)`;
      //   }
    }
  });
  // scroll.addListener((status) => {
  //   console.log(status.offset["y"]);
  // });
  //
  // scroll.scrollTop = 700;
  // scroll.destroy();
  // console.log(document.documentElement.clientHeight);

  // Мышка
  var cursor = new MouseFollower();
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
  // cursor.destroy();

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
  let menu = document.querySelector(".menu");
  let menuBlackout = document.querySelector(".menu-blackout");
  function closeMenu() {
    burger.classList.remove("open");
    gsap.to(menuBlackout, { opacity: 0, duration: 0.7 });
    gsap.to(menu, {
      right: "-100%",
      padding: "223px 40px 91px 40px",
      duration: 0.7,
    });
    setTimeout(() => {
      menu.classList.remove("open");
      menuBlackout.classList.remove("open");
    }, 700);
  }
  function openMenu() {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      burger.classList.add("open");
      menu.classList.add("open");
      menuBlackout.classList.add("open");
      gsap.to(menuBlackout, { opacity: 0.8, duration: 0.7 });
      gsap.to(menu, {
        right: 0,
        padding: "223px 80px 91px 80px",
        duration: 0.7,
      });
    }
  }
  burgerText.addEventListener("click", openMenu);
  burger.addEventListener("click", openMenu);
  menuBlackout.addEventListener("click", () => {
    closeMenu();
  });
});
