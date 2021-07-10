<?php
  $name = $_POST['name']; //Имя
  $phone = $_POST['phone']; //Телефон
  $to = "Email@gmail.com / Email@mail.ru"; //Кому
  $from = "stairs"; //От кого
  $subject = "=?utf-8?B?".base64_encode("Обратная связь")."?="; //Тема
  $message = "<h3>Имя:</h3> <p>$name</p><br><h3>Телефон:</h3> <p>$phone</p>";
  $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html;charset=utf-8\r\n";
  mail($to, $subject, $message, $headers);
  header('Location: /');
 ?>
