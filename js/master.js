document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  AOS.init({
    disable: 'mobile'
  });
  
  AOS.init({
    disable: function () {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
  });
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".header-menu-links");
  function openMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.querySelector(".burger_line-one").classList.toggle('burger_line-close-one');
    document.querySelector(".burger_line-two").classList.toggle('burger_line-close-two');
  };
  function closeMenu() {
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.querySelector(".burger_line-one").classList.remove('burger_line-close-one');
    document.querySelector(".burger_line-two").classList.remove('burger_line-close-two');
  };
  burger.onclick = function(){
    openMenu();
  };
  var now = new Date();
  document.querySelector(".year").innerHTML=now.getFullYear();
  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
    const header = document.querySelector('header') // находим header и записываем в константу
    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
    window.addEventListener('scroll', () => { // при прокрутке страницы
      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
      if (currentScroll > 0){
        header.classList.add('fly');
        // const headerHidden = () => header.classList.contains('hide') // узнаем скрыт header или нет
        // if (currentScroll > prevScroll && !headerHidden()){ // если прокручиваем страницу вниз и header не скрыт
        //   header.classList.add('hide') // то скрываем header
        //   closeMenu();
        // }
        // if (currentScroll < prevScroll && headerHidden()){ // если прокручиваем страницу вверх и header скрыт
        //   header.classList.remove('hide') // то отображаем header
        // }
      } else{
        header.classList.remove('fly');
      }
      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
    })
  }
  onScrollHeader() // вызываем основную функцию onScrollHeader
  // document.querySelectorAll('a[href^="#"').forEach(link => {
  document.querySelectorAll('.menuHREF').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        closeMenu();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - (topOffset+10);
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });
  /* Индекс слайда по умолчанию */
  var slideIndex = 1;
  showSlides(slideIndex);
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {showSlides(slideIndex += 1);}
  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {showSlides(slideIndex -= 1);}
  /* Устанавливает текущий слайд */
  function currentSlide(n) {showSlides(slideIndex = n);}
  document.querySelector(".Prev").onclick = function(){minusSlide()};
  document.querySelector(".Next").onclick = function(){plusSlide()};
  /* Основная функция слайдера */
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("home-img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].classList.remove('active');}
    slides[slideIndex - 1].classList.add('active');
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }
});
