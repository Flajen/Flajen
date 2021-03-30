<!DOCTYPE html>
<html lang="ru"> <!-- Язык -->
<head>
	<meta charset="UTF-8"> <!-- Кодировка -->
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> Адаптация под мобильные устройства -->
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
		</ul>
		<h2 class="heading_branch VSheading">Статьи</h2>
		<a href="articles-open.html" class="card__articles">
			<img src="../img/articles/page/1.jpg" alt="1" class="ca-img">
			<div class="ca-item">
				
				<h2 class="ca-heading">Чипирование домашних животных: все, что вам ну<span class="ca-date">25.09.20</span>жно знать.</h2>
				<p class="ca-text">Чипирование - это одна из самых простых и безболезненных процедур, которая поможет идентифицировать Ваше животное в случае утери или кражи, а также данная процедура необходима при выезде за границу.</p>
			</div>
		</a>
		<a href="articles-open.html" class="card__articles">
			<img src="../img/articles/page/2.jpg" alt="2" class="ca-img">
			<div class="ca-item">
				<span class="ca-date">15.09.20</span>
				<h2 class="ca-heading">Кастрация собаки: плюсы и минусы</h2>
				<p class="ca-text">Операция овариогистерэктомия (удаление яичников и матки) и орхиэктомия (удаление семенников) в ветеринарной  практике одни из самых распространенных и отработанных операций. Операции в плановом порядке рекомендовано животным...</p>
			</div>
		</a>
		<a href="articles-open.html" class="card__articles">
			<img src="../img/articles/page/3.jpg" alt="3" class="ca-img">
			<div class="ca-item">
				<span class="ca-date">10.09.20</span>
				<h2 class="ca-heading">У собаки болит ухо: что делать?</h2>
				<p class="ca-text">Ухо – сложный вестибулярно - слуховой орган. Состоит из трех отделов: наружное, среднее и внутреннее.<br><br> Отит – воспалительный процесс в ухе.</p>
			</div>
		</a>
		<a href="articles-open.html" class="card__articles">
			<img src="../img/articles/page/4.jpg" alt="4" class="ca-img">
			<div class="ca-item">
				<span class="ca-date">3.09.20</span>
				<h2 class="ca-heading">Как подготовить собаку к весне и защитить её от эктопаразитов (клещей и блох)</h2>
				<p class="ca-text">На прилавках ветеринарных аптек мы зачастую встречаем большое количество препаратов, которые представлены в различных ценовых диапазонах. Каждый из них обязуется защитить Ваше животное на 95-99% от внешних паразитов. К сожалению, от владельца час...</p>
			</div>
		</a>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>