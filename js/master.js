let burger = document.querySelector(".burger");
let headerPhone = document.querySelector(".header_phone");
burger.addEventListener("click", function () {
  if (headerPhone.classList.contains("open")) {
    headerPhone.classList.remove("open");
  } else {
    headerPhone.classList.add("open");
  }
});
let navBtn = document.querySelectorAll(".nav-btn");
let navModal = document.querySelectorAll(".nav_modal");
let headerPhoneModal = document.querySelector(".header_phone-modal");
for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener("click", function () {
    navBtn[i].classList.toggle("open");
    if (window.screen.width < 1100) {
      if (headerPhoneModal.classList.contains("open")) {
        headerPhoneModal.classList.remove("open");
      } else {
        headerPhoneModal.classList.add("open");
      }
    } else {
      if (this.nextElementSibling.classList.contains("open")) {
        this.nextElementSibling.classList.remove("open");
      } else {
        this.nextElementSibling.classList.add("open");
      }
    }
  });
}
let navModalLink = document.querySelectorAll(".nav_modal-link");
for (let i = 0; i < navModalLink.length; i++) {
  navModalLink[i].addEventListener("click", function () {
    for (let i = 0; i < navModal.length; i++) {
      navModal[i].classList.remove("open");
      for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].classList.remove("open");
      }
    }
  });
}
let body = document.body;
let headerFly = document.querySelector(".header_fly");
let btn = document.querySelectorAll(".btn-order");
let popup = document.querySelectorAll(".popup");
let popupFeedback = document.querySelector(".popup-feedback");
let popupBody = document.querySelector(".popup-body");
let popupClose = document.querySelectorAll(".popup-close");
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
let disableScroll = function () {
  let pagePosition = window.scrollY;
  body.classList.add("disable-scroll");
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + "px";
};

let enableScroll = function () {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = "auto";
  body.classList.remove("disable-scroll");
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute("data-position");
};
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    popupBody.classList.add("open");
    popupFeedback.classList.add("open");
    body.classList.add("open");
    body.style.paddingRight = scrollbarWidth + "px";
    disableScroll();
  });
}
for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener("click", (e) => {
    popupBody.classList.remove("open");
    popup[i].classList.remove("open");
    body.classList.remove("open");
    body.style.paddingRight = 0;
    enableScroll();
  });
}
for (let i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", function (e) {
    if (e.target.classList.contains("popup")) {
      popupBody.classList.remove("open");
      popup[i].classList.remove("open");
      body.classList.remove("open");
      body.style.paddingRight = 0;
      enableScroll();
    }
  });
}
let scrollReload = window.scrollY;
if (scrollReload > 0) {
  headerFly.classList.add("open");
}
document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > 199) {
    headerFly.classList.add("open");
  } else {
    headerFly.classList.remove("open");
  }
  for (let i = 0; i < navModal.length; i++) {
    navModal[i].classList.remove("open");
    for (let i = 0; i < navBtn.length; i++) {
      navBtn[i].classList.remove("open");
    }
  }
};
// // Отправка данных на сервер
// function send(event, php) {
//   event.preventDefault ? event.preventDefault() : (event.returnValue = false);
//   if (event.target.name.value != "" && event.target.contact.value != "") {
//     var req = new XMLHttpRequest();
//     req.open("POST", php, true);
//     req.onload = function () {
//       $(".btn-form").attr("disabled", true);
//       if (req.status >= 200 && req.status < 400) {
//         json = JSON.parse(this.response); // Ебанный internet explorer 11
//         // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//         if (json.result == "success") {
//           // Если сообщение отправлено
//           event.target.reset();
//           $(".btn-form").attr("disabled", false);
//         } else {
//           // Если произошла ошибка
//           $(".btn-form").attr("disabled", false);
//           alert("Ошибка. Сообщение не отправлено");
//         }
//         // Если не удалось связаться с php файлом
//       } else {
//         alert("Ошибка сервера. Номер: " + req.status);
//       }
//     };
//     // Если не удалось отправить запрос. Стоит блок на хостинге
//     req.onerror = function () {
//       alert("Ошибка отправки запроса");
//     };
//     req.send(new FormData(event.target));
//   } 
// }
