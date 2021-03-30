<!DOCTYPE html>
<html lang="ru"> <!-- Язык -->
<head>
	<meta charset="UTF-8"> <!-- Кодировка -->
	<meta name="robots" content="index, follow">
	<meta name="description" content="Ветеринарная клиника ГрандВет. Опытные специалисты ветеринарной клиники ГрандВет с радостью помогут справиться с любыми проблемами со здоровьем Ваших питомцев. Все вилы ветеринарных услуг, внимательный персонал, а также возможность вызвать ветеринара на дом - все для удобства клиентов нашей клиники. Вызов ветеринара на дом." />
	<title>Ветеринарная клиника ГрандВет. Лечение кошек и собак...</title> <!-- Название -->
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"> <!-- Иконка -->
	<!-- Дополнительное подключение -->
		<!-- Подключение fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
		<!-- Подключение css -->
	<link rel="stylesheet" href="css/style.css">
		<!-- Подключение js -->
    <script src="js/script.js" defer></script>
    <script src="js/jquery.min.js"></script>
</head>
<body>
<div class="top"></div> <!-- Для скролла вверх -->
	<!-- Сам сайт -->
<div>
<img src="img/header/fon.jpg" alt="fon" class="img_back">
</div>
<span class="help"></span>
<header class="header"> <!-- Основная страница -->
	<?php require 'layout/header.php' ?>
	<div class="container">
		<div class="wrapper__header">
			<h1 class="header_heading">Мы позаботимся<br> о вашем питомце</h1>
			<p class="header_text">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do adipiscing elit</p>
			<a href="callingVeterinarian.php" class="reception_btn">Записаться на прием</a>
		</div>
	</div>
</header>

<section class="about">
	<div class="container">
		<h2 class="about_heading">Ветеринарная клиника ГрандВет</h2>
		<p class="about_text">– это опытные специалисты, которые с радостью помогут справиться вам с любыми проблемами со здоровьем Ваших питомцев. Все виды ветеринарных услуг, внимательный персонал, а также возможность вызвать ветеринара на дом – все для удобства клиентов нашей клиники.</p>
		<div class="plus">
			<div class="item item_one">
				<div class="item_img-wrapper">
					<img src="img/about/one.jpg" alt="" class="item_img">
				</div>
				<p>Доступные цены<br> на услуги</p>
			</div>
			<div class="item item_two">
				<div class="item_img-wrapper">
					<img src="img/about/two.jpg" alt="" class="item_img">
				</div>
				<p>Современное<br> оборудование</p>
			</div>
			<div class="item item_three">
				<div class="item_img-wrapper">
					<img src="img/about/three.jpg" alt="" class="item_img">
				</div>
				<p>Опытные врачи<br> и персонал</p>
			</div>
			<div class="item item_four">
				<div class="item_img-wrapper">
					<img src="img/about/four.jpg" alt="" class="item_img">
				</div>
				<p>Мы любим наших<br> клиентов и их питомцев</p>
			</div>
		</div>
		<h2 class="services_heading">Ветеринарные услуги</h2>
		<p class="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		<div class="wrapper_block">
			<div class="block">
				<a href="service.php?three" class="item_block">
					<img src="img/services/therapy.jpg" alt="therapy" class="img_serv">
					<h3 class="heading">Терапия</h3>
					<p class="text">Терапия  - многогранное понятие и включает в себя постановку диагноза, выяснение причины, и назначение лечения для быстрого и качественного восполнения нормальных функций организма, а также дальнейших мер профилактики.</p>
				</a>
				<a href="service.php?four" class="item_block">
					<img src="img/services/physiotherapy.jpg" alt="physiotherapy" class="img_serv">
					<h3 class="heading">Физиотерапия</h3>
					<p class="text">В нашей клинике активно применяется аппарат для импульсной биосинхронизированной элекктромагнитной терапии "УМИ-05".</p>
				</a>
			</div>
			<div class="block">
				<a href="service.php?five" class="item_block">
					<img src="img/services/vaccination.jpg" alt="vaccination" class="img_serv">
					<h3 class="heading">Вакцинация</h3>
					<p class="text">Вакцина́ция — введение антигенного материала с целью вызвать иммунитет к болезни, который предотвратит заражение или ослабит его последствия.</p>
				</a>
				<a href="service.php?seven" class="item_block">
					<img src="img/services/grooming.jpg" alt="grooming" class="img_serv">
					<h3 class="heading">Груминг</h3>
					<p class="text">Груминг — это активное поведение, направленное на очистку поверхности тела, то есть умывание, купание и т. п. Это этологический термин, но также применим и к людям в значении личного ухода, личной гигиены.</p>
				</a>
			</div>
			<a href="veterinaryService.php" class="services_btn">Все услуги</a>
		</div>
	</div>
</section>

<section class="articles">
	<div class="container">
		<h2 class="services_heading articles_heading">Статьи</h2>
		<div class="wrapper_articles">
			<a href="articles-open.php" class="articles_plate">
				<div class="articles_img-wrapper">
					<img src="img/articles/one.jpg" alt="Чипирование домашних животных: все, что вам нужно знать." class="articles_img">
				</div>
				<div>
					<h3>Чипирование домашних животных: все, что вам нужно знать.</h3>
					<p>Чипирование - это одна из самых простых и безболезненных процедур, которая поможет идентифицировать Ваше животное...</p>
				</div>
			</a>
			<a href="articles-open.php" class="articles_plate">
				<div class="articles_img-wrapper">
					<img src="img/articles/two.jpg" alt="Кастрация собаки: плюсы и минусы." class="articles_img">
				</div>
				<div>
					<h3>Кастрация собаки: плюсы и минусы.</h3>
					<p>Операция овариогистерэктомия (удаление яичников и матки) и орхиэктомия (удаление семенников) в ветеринарной  практике одни из самых распространенных...</p>
				</div>
			</a>
		</div>
		<div class="wrapper_articles">
			<a href="articles-open.php" class="articles_plate">
				<div class="articles_img-wrapper">
					<img src="img/articles/three.jpg" alt="У собаки болит ухо: что делать?" class="articles_img">
				</div>
				<div>
					<h3>У собаки болит ухо: что делать?</h3>
					<p>Ухо – сложный вестибулярно - слуховой орган. Состоит из трех отделов: наружное, среднее и внутреннее. Отит – воспалительный процесс в ухе.</p>
				</div>
			</a>
			<a href="articles-open.php" class="articles_plate">
				<div class="articles_img-wrapper">
					<img src="img/articles/four.jpg" alt="Как подготовить собаку к весне и защитить её от эктопаразитов (клещей и блох)" class="articles_img">
				</div>
				<div>
					<h3>Как подготовить собаку к весне и защитить её от эктопаразитов (клещей и блох)</h3>
					<p>На прилавках ветеринарных аптек мы зачастую встречаем большое количество препаратов, которые представлены в различных ценовых..</p>
				</div>
			</a>
		</div>
	</div>
</section>

<section class="contacts">
	<div class="container">
		<div class="wrapper__contacts">
			<div>
				<h2 class="contacts_heading">Мы ждем вас!</h2>
				<p class="address">Москва, ул. Федоскинская стр. 13 А(2 этаж)</p>
				<a href="mailto:2293086@mail.ru" class="mail">2293086@mail.ru</a>
				<p class="call">Нет возможности приехать?<br><a href="callingVeterinarian.php">Вызовите специалиста на дом.</a></p>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.690650595744!2d37.69414243350984!3d55.86803344531625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53152af7af125%3A0x7b729e00a42a699f!2z0LLQtdGC0LXRgNC40L3QsNGA0L3QsNGPINC60LvQuNC90LjQutCwICJHcmFuZC1WZXQi!5e0!3m2!1sru!2sru!4v1602967754990!5m2!1sru!2sru" width="864" height="382" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			<!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb51d0c132dcb6dedcfc6463db36994db8b915726acff8e54a146b7a5902271b&amp;source=constructor" width="864" height="382" frameborder="0"></iframe> -->
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>

	<!-- /Сам сайт -->
</body>
</html>
