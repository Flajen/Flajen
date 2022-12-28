document.addEventListener('DOMContentLoaded', () => {
  const headerMobile = document.querySelector('.header-mobile');
  const burger = document.querySelector('.burger');
  const headerMenu = document.querySelector('.header_menu');
  const headerNav = document.querySelector('.header_nav');
  const headerNavBtn = document.querySelector('.header_nav-btn');
  const headerNavWindow = document.querySelector('.header_nav-window');
  var headerTime = null;
  burger.addEventListener('click', () => {
    if (burger.classList.contains('open')) {
      clearTimeout(headerTime);
      burger.classList.remove('open');
      burger.classList.add('close');
      headerMobile.classList.remove('open');
      gsap.to(headerMenu, { y: '-100%', duration: 0.3 });
      headerTime = setTimeout(() => {
        headerMenu.classList.add('hide');
        headerMobile.classList.remove('height');
        headerNav.classList.remove('hide');
        // headerNav.classList.remove('close');
        headerNav.classList.add('open');
      }, 300);
    } else {
      clearTimeout(headerTime);
      headerNav.classList.remove('open');
      // headerNav.classList.add('close');
      // headerTime = setTimeout(() => {
      headerNav.classList.add('hide');
      // }, 300);
      burger.classList.remove('close');
      burger.classList.add('open');
      headerMobile.classList.add('height');
      headerMobile.classList.add('open');
      headerMenu.classList.remove('hide');
      gsap.to(headerMenu, { y: 0, duration: 0.3 });
    }
  });
  headerNavBtn.addEventListener('click', () => {
    if (headerNavWindow.classList.contains('open')) {
      headerNavWindow.classList.remove('open');
      headerNavBtn.classList.remove('open');
      gsap.to(headerNavWindow, { height: 0, duration: 0.3 });
    } else {
      headerNavWindow.classList.add('open');
      headerNavBtn.classList.add('open');
      gsap.to(headerNavWindow, { height: 'auto', duration: 0.3 });
    }
  });
});
