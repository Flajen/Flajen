<?php
  mailto
  $to = 'mr.falad@mail.ru'; // кому
  $email = 'mr.falad@mail.ru'; // от кого
  $phone = $_POST['phone'];
  $file = $_POST['file'];

  $subject = "=?utf-8?B?".base64_encode("Обратная связь")."?=";

  if (isset($_POST["type"]["project"])) {
    $message = "<h3>Номер телефона: $phone</h3>";
  }
  else if (isset($_POST["type"]["comparison"])) {
    $message = "<h3>Номер телефона: $phone<br>Файл: $file</h3>";
  }

  $message = "<h3>Пример</h3>";

  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";

  mail($to, $subject, $message, $headers);
  header('Location: /auto');
 ?>
