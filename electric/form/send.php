<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// Формирование самого письма
$title = "Обратная связь";
$body = "
<div style='max-width: 480px; margin: 0; border-radius: 14px; border: 1px solid #0000000d; padding: 10px 30px; margin: 20px;'>
<p style='font-size: 16px;'><b>Имя:</b> $name</p>
<p style='font-size: 16px;'><b>Почта:</b> $email</p>
<p style='font-size: 16px;'><b>Телефон:</b> $phone</p>
</div>
";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mail@mail.ru'; // Логин на почте
    $mail->Password   = 'mailpass'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@mail.ru', 'mail'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('mail@mail.ru');
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
