// @ts-nocheck
document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл
  const Scrollbar = window.Scrollbar;
  const smoothScrollbar = Scrollbar.init(
    document.querySelector("#bodyOverflow"),
    {
      plugins: {
        disableScroll: {
          direction: "x",
        },
      },
    }
  );
  smoothScrollbar.track.xAxis.element.remove();

  /**
   * Скролл анимации
   */
  InitScrollAnimations(smoothScrollbar);

  // Мышка
  var cursor = new MouseFollower();
  let checkWindowSize =
    window.innerWidth || document.documentElement.clientWidth;
  let burgerLine = document.querySelectorAll(".burger-line");
  if (checkWindowSize > 1280) {
    const el = document.querySelector(".burger");
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
    const cursorFooter = document.querySelector("footer");
    cursorFooter.addEventListener("mouseenter", () => {
      cursor.addState("footerColor");
    });
    cursorFooter.addEventListener("mouseleave", () => {
      cursor.removeState("footerColor");
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
    if (document.querySelector(".change")) {
      const elСomparison = document.querySelector(".change");
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

  // Наведение на элементы
  document
    .querySelectorAll(".hover")
    .forEach(
      (button) =>
        (button.innerHTML =
          `<div><span>` +
          button.textContent.trim().split("").join("</span><span>") +
          "</span></div>")
    );
  var hoverDelay = 0;
  var menuTitle = document
    .querySelector(".menu-title")
    .querySelectorAll("span");
  for (let i = 0; i < menuTitle.length; i++) {
    hoverDelay += 0.05;
    const element = menuTitle[i];
    element.style = `transition-delay: ${hoverDelay}s;`;
  }
  document.querySelectorAll(".btn-hover").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      el.querySelector("span").style.left = `${e.offsetX}px`;
      el.querySelector("span").style.top = `${e.offsetY}px`;
    });
    el.addEventListener("mouseout", (e) => {
      el.querySelector("span").style.left = `${e.offsetX}px`;
      el.querySelector("span").style.top = `${e.offsetY}px`;
    });
  });
  smoothScrollbar.addListener((status) => {
    const documentHeight = smoothScrollbar.getSize()["content"]["height"];
    let footerHeight = document.querySelector("footer").offsetHeight;
    var burgerTop =
      document.querySelector(".burger").getBoundingClientRect().top +
      document.body.scrollTop;
    let burgerHeight = document.querySelector(".burger").clientHeight / 2;
    let setPosition = documentHeight - footerHeight - burgerTop - burgerHeight;
    let currentScroll = status.offset["y"];
    for (let i = 0; i < burgerLine.length; i++) {
      const elem = burgerLine[i];
      if (currentScroll > setPosition) {
        elem.style.background = "white";
      } else {
        elem.style.background = "black";
      }
    }
  });

  // Меню
  let burger = document.querySelector(".burger");
  let burgerText = document.querySelector(".header_menu-text");
  let menuWrapper = document.querySelector(".menu-wrapper");
  let menu = document.querySelector(".menu");
  let menuBlackout = document.querySelector(".menu-blackout");
  let menuCheck = false;
  function closeMenu() {
    gsap.to(menuWrapper, { opacity: 0, duration: 0.6 });
    gsap.to(menuBlackout, { opacity: 0, duration: 0.6 });
    gsap.to(menu, { right: "-100%", opacity: 0, duration: 0.8 });
    burger.classList.remove("open");
    menuWrapper.classList.remove("open");
    menu.classList.remove("open");
    menuCheck = false;
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
      gsap.to(menu, { right: "0%", opacity: 1, duration: 0.8 });
      menuCheck = true;
    }
  }
  burgerText.addEventListener("click", openMenu);
  burger.addEventListener("click", openMenu);
  menuBlackout.addEventListener("click", () => {
    closeMenu();
  });
});

function InitScrollAnimations(scrollbarInstance) {
  /** CSS селекторы для Parallax. Кроме футера */
  const parallaxSelectors = [
    ".home-main_card-img",
    ".home_card-img",
    ".home-img",
    ".task-img-wrapper",
    ".adaptively-img",
    ".about-img",
    "#page",
    ".telling_card-img-wrapper",
    ".projects_card-img",
  ];

  /** Для анимации первых экранов при загрузке */
  const onloadAnimImgSelectors = [".home-img", ".home-main_card-img"];

  /** CSS селекторы текст анимации при загрузке (первый экран) */
  const onloadTextSelectors = [".home-title", ".home-subtitle"];

  /** CSS селекторы текст анимации при скролле */
  const parallaxTextSelectors = [
    ".about-title",
    ".about-text",
    ".task-title",
    ".task-text",
  ];

  /** Имя класса для врапера */
  const prlxWrapperClassName = "prlx-wrapper";

  /** Имя класса обертки для текста (каждого слова) */
  //const innerTextWrappeClassName = ''

  /** Footer parallax selector */
  const footerParallaxSelector = ".footer-wrapper";

  const parallaxTargets = parallaxSelectors.length
    ? [...document.querySelectorAll(parallaxSelectors.toString())]
    : [];

  const onloadImgTargets = onloadAnimImgSelectors.length
    ? [...document.querySelectorAll(onloadAnimImgSelectors.toString())]
    : [];

  const onloadTextTargets = onloadTextSelectors.length
    ? [...document.querySelectorAll(onloadTextSelectors.toString())]
    : [];

  const parallaxTextTargets = parallaxTextSelectors.length
    ? [...document.querySelectorAll(parallaxTextSelectors.toString())]
    : [];

  /**
   * Оборачиваем во врапер
   */
  const toWrapTargets = [...parallaxTargets, ...onloadImgTargets];
  toWrapTargets.forEach((wrapTarget) => {
    if (!wrapTarget.closest(`.${prlxWrapperClassName}`)) {
      const elWrapper = createEl(
        "div",
        [prlxWrapperClassName],
        [["overflow", "hidden"]]
      );
      wrapElement(wrapTarget, elWrapper);
    }
  });

  /**
   * Onload анимации
   */
  gsap.fromTo(
    document.body,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "sine.out",
    },
    "+=0.03s"
  );

  onloadImgTargets.forEach((target) => {
    gsap.fromTo(
      target,
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "sine.out",
      }
    );
  });

  /** Анимации текста при загрузке */
  const allAnimTextTargets = [...onloadTextTargets, ...parallaxTextTargets];
  allAnimTextTargets.forEach((el) => {
    el.style.transformOrigin = "top left";
  });
  gsap.fromTo(
    onloadTextTargets,
    {
      y: "40px",
      scaleY: 1.2,
      opacity: 0,
    },
    {
      y: "0%",
      rotateX: 0,
      scaleY: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.02,
      ease: "power3.out",
      delay: 0.5,
    }
  );

  /**
   * Подписывает GSAP на изменеия скролла
   */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) scrollbarInstance.scrollTop = value;
      return scrollbarInstance.scrollTop;
    },
  });

  scrollbarInstance.addListener(ScrollTrigger.update);

  /**
   * Parallax
   */
  let checkWindowSize =
    window.innerWidth || document.documentElement.clientWidth;
  if (checkWindowSize > 992) {
    parallaxTargets.forEach((target) => {
      gsap.fromTo(
        target,
        {
          y: "-20%",
        },
        {
          y: "20%",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "bottom -=20%",
            scrub: true,
            onToggle: ({ isActive }) => {
              target.style.willChange = isActive ? "transform" : "auto";
            },
          },
        }
      );
    });
  }

  parallaxTextTargets.forEach((target) => {
    gsap.fromTo(
      target,
      {
        y: "30px",
        scaleY: 1.2,
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        scaleY: 1,
        duration: 1,
        stagger: 0.01,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: target,
          scrub: false,
          onToggle: ({ isActive }) => {
            target.style.willChange = isActive ? "transform" : "auto";
          },
        },
      }
    );
  });

  /**
   * Footer parallax
   */
  const footerParallaxEL = document.querySelector(footerParallaxSelector);
  if (footerParallaxEL) {
    gsap.fromTo(
      footerParallaxEL,
      {
        y: "-50%",
      },
      {
        y: "0%",
        ease: "none",
        duration: 0.4,
        scrollTrigger: {
          trigger: footerParallaxEL,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onToggle: ({ isActive }) => {
            footerParallaxEL.style.willChange = isActive ? "transform" : "auto";
          },
        },
      }
    );
  }

  /**
   * Оборачивает DOM элемент
   * @param {HTMLElement} el - элемент который нужно обернуть
   * @param {HTMLElement} wrapper - элемент которым нужно обернуть
   */
  function wrapElement(el, wrapper) {
    el?.parentNode?.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  /**
   * Создает новый элемент с параметрами
   * @param {String} tag - тег
   * @param {String[]} classNames - массив с именами классов
   * @param {[String, String|Number]} styles - массив с CSS свойствами [[key, value]]
   * @returns {HTMLElement}
   */
  function createEl(tag = "div", classNames = [], styles = []) {
    const el = document.createElement(tag);

    classNames.length &&
      classNames[0] &&
      classNames.forEach((className) => el.classList.add(className));

    styles.length &&
      styles.forEach((styleItem) => {
        if (
          styleItem[0] &&
          (typeof styleItem[1] == "number" || typeof styleItem[1] == "string")
        ) {
          el.style[styleItem[0]] = styleItem[1];
        }
      });

    return el;
  }
}
