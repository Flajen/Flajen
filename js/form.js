function disabledScroll() {
  var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  $('body').css('overflow', 'hidden');
  $('body').css('padding-right', paddingOffset);
}
function enableScroll() {
  $('body').css('overflow', 'auto');
  $('body').css('padding-right', 0);
}
function closePopup() {
  $('.popup-wrapper').removeClass('show');
  enableScroll();
}
$('.btn_form').click(function(){
  $('.popup-wrapper-form').addClass('show');
  disabledScroll();
})
$('.popup-close').click(function(){
  closePopup();
})
$('.popup-wrapper-success').mouseup(function (e){
  var div = $('.popup-check');
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
      closePopup();
  }
});
function checkInput(form,name) {
  var input = $(`.${form}`).find($(`input[name="${name}"]`));
  if (input.val() == '') {
    input.addClass('necessary');
    input.addClass('shake');
    setTimeout(() => {
      input.removeClass('shake');
    }, 150);
    input.bind('input', function(){
      if (input.val() != '') {
        input.removeClass('necessary');
      } else {
        input.addClass('necessary');
        input.addClass('shake');
        setTimeout(() => {
          input.removeClass('shake');
        }, 150);
      }
    });
  }
}
function send(event, php){
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  if (event.target.name.value != '' && event.target.phone.value != '') {
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
        if (json.result == "success") {
          event.target.reset();
          $('.popup-wrapper-form').removeClass('show');
          $('.popup-wrapper-success').addClass('show');
        } else {
          alert("Ошибка. Сообщение не отправлено");
        }
        // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}};
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
  } else {
    if (event.target.name.value == '') {
      checkInput(event.target.className.split(" ")[0], event.target.name.name)
    }
    if (event.target.phone.value == '') {
      checkInput(event.target.className.split(" ")[0], event.target.phone.name)
    }
  }
};