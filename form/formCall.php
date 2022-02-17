<?php
  $name = $_POST['name']; //Имя
  $phone = $_POST['phone']; //Телефон
  $to = "mr.flajen@gmail.com"; //Кому
//   mr.smirnov.maksim@mail.ru
  $from = "desjoyaux"; //От кого
  $subject = "=?utf-8?B?".base64_encode("Обратная связь")."?="; //Тема
  $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html;charset=utf-8\r\n";
  $message = "
    <div style='max-width: 400px; margin: 0; border: 1px solid #e9e9e9;'>
    <h2 style='color: #282A2D; font-size: 28px; margin: 0 0 15px 0; padding: 5px 15px; border-bottom: 1px solid #e9e9e9;'>Обратный звонок</h2>
    <div style='padding: 0 20px;'>
    <p style='color: #282A2D;font-size: 16px;'><b>Имя:</b> <span style='color:#5C6167;'></span>$name</p>
    <p style='color: #282A2D;font-size: 16px;'><b>Телефон:</b> <span style='color:#5C6167;'></span>$phone</p>
    </div>
    </div>
  ";
  mail($to, $subject, $message, $headers);
  header('Location: /');
 ?>
