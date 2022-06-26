document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл
  var Scrollbar = window.Scrollbar;
  // Scrollbar.initAll();
  Scrollbar.init(document.querySelector("#bodyOverflow"));
  // Scrollbar.init(document.querySelector("#my-scrollbar"), options);

  // Мышка
  var cursor = new MouseFollower();
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
  let menu = document.querySelector(".menu");
  let menuBlackout = document.querySelector(".menu-blackout");
  function closeMenu() {
    menu.classList.remove("open");
    menuBlackout.classList.remove("open");
  }
  document.querySelector(".burger").addEventListener("click", function () {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      menu.classList.add("open");
      menuBlackout.classList.add("open");
    }
  });
  menuBlackout.addEventListener("click", () => {
    closeMenu();
  });
});
