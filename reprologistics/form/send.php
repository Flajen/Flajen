<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name']; // Имя
$district = $_POST['district']; // Район
if (!empty($district)) {$districtField = "
    <p style='font-size: 16px;'><b>Район:</b> $district</p>
    ";
}
if (!empty($name)) {$nameField = "
    <p style='font-size: 16px;'><b>Имя:</b> $name</p>
    ";
}
$phone = $_POST['phone'];
// Формирование самого письма
$title = "Обратная связь";
$body = "
<div style='max-width: 420px; background-color: #f3f4f9; color: #323232; border-radius: 10px; padding: 10px 30px; margin: 20px auto 10px auto;'>
$districtField
$nameField
<p style='font-size: 16px;'><b>Телефон:</b> $phone</p>
</div>
";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {$GLOBALS['status'][] = $str;};
    // Настройки вашей почты
    $mail->Host = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username = 'send.test123@mail.ru'; // Логин на почте
    $mail->Password = 'xhwn9jZK3GaAiueQriwG'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('send.test123@mail.ru', '123'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('test@ss');
// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
// Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} else { $result = "error";}
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);