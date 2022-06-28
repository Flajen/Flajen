document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл
  var Scrollbar = window.Scrollbar;
  var hestp = Scrollbar.init(document.querySelector("#bodyOverflow"), {
    plugins: {
      disableScroll: {
        direction: "x",
      },
    },
  });
  // console.log(hestp.offset["y"]);
  // console.log(hestp.getSize());
  hestp.addListener(() => {
    // console.log(hestp.offset["y"]);
  });
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
    gsap.to(menuBlackout, { opacity: 0, duration: 0.5 });
    gsap.to(menu, {
      right: "-80%",
      padding: "223px 40px 91px 40px",
      duration: 0.5,
    });
    setTimeout(() => {
      menu.classList.remove("open");
      menuBlackout.classList.remove("open");
    }, 500);
  }
  function openMenu() {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      burger.classList.add("open");
      menu.classList.add("open");
      menuBlackout.classList.add("open");
      gsap.to(menuBlackout, { opacity: 0.8, duration: 0.5 });
      gsap.to(menu, {
        right: 0,
        padding: "223px 80px 91px 80px",
        duration: 0.5,
      });
    }
  }
  burgerText.addEventListener("click", openMenu);
  burger.addEventListener("click", openMenu);
  menuBlackout.addEventListener("click", () => {
    closeMenu();
  });
});
