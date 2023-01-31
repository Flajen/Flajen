document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    // once: true,
    disable: 'mobile',
  });
  gsap.registerPlugin(ScrollToPlugin);

  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  // const anchors = document.querySelectorAll('a.nav[href*="#"]');
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      var scrollId = offset(document.getElementById(blockID)).top - 100;
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: scrollId },
      });
    });
  }

  const downBtn = document.querySelector('button[name="down"]');
  downBtn.addEventListener('click', () => {
    const firstSection = document.querySelector('.home-wrapper');
    var scrollId = offset(firstSection).top + firstSection.clientHeight;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: scrollId },
    });
  });

  // let disableScroll = function () {
  //   let pagePosition = window.scrollY;
  //   let scroll = window.innerWidth - document.documentElement.clientWidth;
  //   document.body.classList.add('disable-scroll');
  //   document.body.dataset.position = pagePosition;
  //   document.body.style.top = -pagePosition + 'px';
  //   document.body.style.paddingRight = scroll + 'px';
  // };
  // let enableScroll = function () {
  //   let pagePosition = parseInt(document.body.dataset.position, 10);
  //   document.body.style.top = 'auto';
  //   document.body.classList.remove('disable-scroll');
  //   window.scroll({ top: pagePosition, left: 0 });
  //   document.body.removeAttribute('data-position');
  //   document.body.style.paddingRight = 0;
  // };

  const header_mobile = document.querySelector('.header_mobile');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    if (burger.classList.contains('open')) {
      burger.classList.remove('open');
      burger.classList.add('close');
      burger.parentElement.parentElement.parentElement.classList.remove('open');
      if (window.scrollY > 100) {
        header_mobile.classList.add('fly');
      }
    } else {
      burger.classList.remove('close');
      burger.classList.add('open');
      burger.parentElement.parentElement.parentElement.classList.add('open');
      header_mobile.classList.remove('fly');
    }
  });
  const headerLinks = document.querySelectorAll('.header_mobile a');
  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header_mobile.classList.remove('open');
      burger.classList.remove('open');
      burger.classList.add('close');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      if (!burger.classList.contains('open')) {
        header_mobile.classList.add('fly');
      }
    } else {
      header_mobile.classList.remove('fly');
    }
  });
});
