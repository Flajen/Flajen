<!DOCTYPE html>
<html lang="ru"> <!-- Язык -->
<head>
	<meta charset="UTF-8"> <!-- Кодировка -->
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> Адаптация под мобильные устройства -->
	<title>GrandVet - Вызов ветеринара</title> <!-- Название -->
	<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon"> <!-- Иконка -->
	<!-- Дополнительное подключение -->
		<!-- Подключение fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
		<!-- Подключение css -->
	<link rel="stylesheet" href="../css/style.css">
		<!-- Подключение js -->
    <script src="../js/script.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
<div class="top"></div> <!-- Для скролла вверх -->
	<!-- Сам сайт -->
<?php require 'layout/header.php' ?>

<section class="document callingVeterinarian">
	<div class="wrapper__call">
		<div class="container container__call">
			<div class="ofter">
				<ul class="branch">
					<li><a href="/">Главная</a></li>
					<li>-</li>
					<li>Вызов ветеринара</li>
				</ul>
				<h2 class="heading_branch">Вызов ветеринара</h2>
				<p class="cv_heading">Заполните форму и мы свяжемся с Вами</p>
				<p class="cv_text">Или позвоните нам, чтобы вызвать ветеринара на дом</p>
				<a href="tel:74955043124" class="cv_tel">+7 (495)504-31-24</a>
				<a href="tel:74952293086" class="cv_tel">+7 (495)229-30-86</a>
				<a href="about.php" class="cv_detail">Подробнее о ветеринарной службе</a>
				<form method="post" class="cv_form">
					<input type="text" placeholder="Ваше имя" class="cv_field">
					<input type="text" placeholder="Ваш телефон" class="cv_field">
					<input type="text" placeholder="Тип вашего питомца" class="cv_field">
					<input type="submit" name="btn" value="Отправить" class="cv_btn">
				</form>
			</div>
			<img src="../img/calling/call.jpg" alt="calling" class="calling_img">
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>
