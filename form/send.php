<?php
  $phone = $_POST['phone']; //Телефон
  $to = "yakipchik@gmail.com"; //Кому
  $from = "DEZ78"; //От кого
  $subject = "=?utf-8?B?".base64_encode("Обратная связь")."?="; //Тема
  $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html;charset=utf-8\r\n";
  $message = "<h3>Телефон: $phone</h3>";
  mail($to, $subject, $message, $headers);
  header('Location: /');
 ?>
