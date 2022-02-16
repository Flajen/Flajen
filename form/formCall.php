<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Обратная связь";
$body = "
<div style='max-width: 400px; margin: 0; border: 1px solid #e9e9e9;'>
    <h2 style='color: #282A2D; font-size: 28px; margin: 0 0 15px 0; padding: 5px 15px; border-bottom: 1px solid #e9e9e9;'>Обратный звонок</h2>
    <div style='padding: 0 20px;'>
        <p style='color: #282A2D;font-size: 16px;'><b>Имя:</b> <span style='color:#5C6167;'></span>$name</p>
        <p style='color: #282A2D;font-size: 16px;'><b>Телефон:</b> <span style='color:#5C6167;'></span>$phone</p>
    </div>
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
$mail->Username   = 'mr.falad@mail.ru'; // Логин на почте
$mail->Password   = 'EWW6Z98XmyFLZuvtUQxV'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;
$mail->setFrom('mr.falad@mail.ru', 'Сайт'); // Адрес самой почты и имя отправителя

// Получатель письма
$mail->addAddress('mr.flajen@gmail.com');
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
