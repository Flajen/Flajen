<!DOCTYPE html>
<html lang="ru"> <!-- Язык -->
<head>
	<meta charset="UTF-8"> <!-- Кодировка -->
	<title>GrandVet - Ветеринарные услуги</title> <!-- Название -->
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

<section class="document">
	<div class="container">
		<ul class="branch">
			<li>Главная</li>
			<li>-</li>
			<li>Статьи</li>
			<li>-</li>
			<li>Чипирование домашних животных: все, что вам нужно знать.</li>
		</ul>
		<h2 class="heading_branch">Чипирование домашних животных: все, что вам нужно знать.</h2>
		<span class="ca-date">25.09.20</span>
		<p class="ca-block-text">
			Чипирование - это одна из самых простых и безболезненных процедур, которая поможет идентифицировать Ваше животное...
		</p>
		<div class="ca-block-img_wrapper">
			<img src="../img/articles/page/open/one.jpg" alt="1" class="ca-block-img">
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>
