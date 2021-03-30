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
<?php $url = $_SERVER['REQUEST_URI']; ?>

<section class="document">
	<div class="container">
		<ul class="branch">
			<li><a href="/">Главная</a></li>
			<li>-</li>
			<li><a href="/veterinaryService.php">Ветеринарные услуги</a></li>
			<li>-</li>
			<li>
				<?php if ($url == "/service.php?one") {echo 'Услуги кардиолога';};?>
				<?php if ($url == "/service.php?two") {echo 'Офтальмология';};?>
				<?php if ($url == "/service.php?three") {echo 'Терапия';};?>
				<?php if ($url == "/service.php?four") {echo 'Физиотерапия';};?>
				<?php if ($url == "/service.php?five") {echo 'Вакцинация';};?>
				<?php if ($url == "/service.php?six") {echo 'Чипирование';};?>
				<?php if ($url == "/service.php?seven") {echo 'Груминг';};?>
				<?php if ($url == "/service.php?eight") {echo 'Диагностика';};?>
				<?php if ($url == "/service.php?nine") {echo 'Хирургия';};?>
				<?php if ($url == "/service.php?ten") {echo 'Ультразвуковая диагностика';};?>
				<?php if ($url == "/service.php?eleven") {echo 'Тонометрия';};?>
				<?php if ($url == "/service.php?twelve") {echo 'Электрокардиография';};?>
				<?php if ($url == "/service.php?thirteen") {echo 'Цифровой рентген DR-система';};?>
			</li>
		</ul>
		<h2 class="heading_branch">
			<?php if ($url == "/service.php?one") {echo 'Услуги кардиолога';};?>
			<?php if ($url == "/service.php?two") {echo 'Офтальмология';};?>
			<?php if ($url == "/service.php?three") {echo 'Терапия';};?>
			<?php if ($url == "/service.php?four") {echo 'Физиотерапия';};?>
			<?php if ($url == "/service.php?five") {echo 'Вакцинация';};?>
			<?php if ($url == "/service.php?six") {echo 'Чипирование';};?>
			<?php if ($url == "/service.php?seven") {echo 'Груминг';};?>
			<?php if ($url == "/service.php?eight") {echo 'Диагностика';};?>
			<?php if ($url == "/service.php?nine") {echo 'Хирургия';};?>
			<?php if ($url == "/service.php?ten") {echo 'Ультразвуковая диагностика';};?>
			<?php if ($url == "/service.php?eleven") {echo 'Тонометрия';};?>
			<?php if ($url == "/service.php?twelve") {echo 'Электрокардиография';};?>
			<?php if ($url == "/service.php?thirteen") {echo 'Цифровой рентген DR-система';};?>
		</h2>
		<p class="ca-block-text">
			<?php if ($url == "/service.php?one") {echo 'Кардиология – это важная и нужная область ветеринарной медицины, которая занимается изучением заболеваний сердца и сосудов животных.';};?>
			<?php if ($url == "/service.php?two") {echo 'Офтальмология – это одна из самых сложных областей ветеринарной медицины. Ведь глаз любого животного обладает невероятной анатомией и весьма специфической физиологией. Потому что все процессы, которые происходят в организме, оказывают серьезное влияние на орган зрения.';};?>
			<?php if ($url == "/service.php?three") {echo 'Терапия  - многогранное понятие и включает в себя постановку диагноза, выяснение причины, и назначение лечения для быстрого и качественного восполнения нормальных функций организма, а также дальнейших мер профилактики.';};?>
			<?php if ($url == "/service.php?four") {echo 'В нашей клинике активно применяется аппарат для импульсной биосинхронизированной элекктромагнитной терапии "УМИ-05".';};?>
			<?php if ($url == "/service.php?five") {echo 'Вакцинация — введение антигенного материала с целью вызвать иммунитет к болезни, который предотвратит заражение или ослабит его последствия.';};?>
			<?php if ($url == "/service.php?six") {echo 'Чипирование  -  электронное мечение домашних животных. Данный метод заключается в подкожном введении чипа с уникальным идентификационным номером, который остается с животным в течение всей его жизни.';};?>
			<?php if ($url == "/service.php?seven") {echo 'Груминг — это активное поведение, направленное на очистку поверхности тела, то есть умывание, купание и т. п. Это этологический термин, но также применим и к людям в значении личного ухода, личной гигиены.';};?>
			<?php if ($url == "/service.php?eight") {echo 'Текст';};?>
			<?php if ($url == "/service.php?nine") {echo 'Ветеринарная клиника ГрандВет оснащена всем необходимым оборудованием для проведения хирургических операций разных степеней сложности.';};?>
			<?php if ($url == "/service.php?ten") {echo 'Текст';};?>
			<?php if ($url == "/service.php?eleven") {echo 'Для более детального клинического обследования наши врачи используют тонометр - аппарат для измерения давления, что позволяет еще на ранних стадиях заподозрить и выявить проблемы связанные с сердечно-сосудистыми заболеваниями.';};?>
			<?php if ($url == "/service.php?twelve") {echo 'Данный способ позволяет выявить нарушение ритма, заподозрить электролитические растройства, также необходим в околоанестетический период. Необходим у животных с расширением желудка, панкреатитом, пиометрой. Входит в стандартный кардиологический осмотр.';};?>
			<?php if ($url == "/service.php?thirteen") {echo 'Данный способ позволяет выявить нарушение ритма, заподозрить электролитические растройства, также необходим в околоанестетический период. Необходим у животных с расширением желудка, панкреатитом, пиометрой. Входит в стандартный кардиологический осмотр.';};?>
		</p>
		<div class="ca-block-img_wrapper">
			<img
				<?php if ($url == "/service.php?one") {echo 'src="img/services/open/1.jpg" alt="Услуги кардиолога"';};?>
				<?php if ($url == "/service.php?two") {echo 'Офтальмология src="img/services/open/2.jpg" alt="Услуги кардиолога"';};?>
				<?php if ($url == "/service.php?three") {echo 'Терапия src="img/services/open/3.jpg" alt="Терапия"';};?>
				<?php if ($url == "/service.php?four") {echo 'src="img/services/open/4.jpg" alt="Физиотерапия"';};?>
				<?php if ($url == "/service.php?five") {echo 'src="img/services/open/5.jpg" alt="Вакцинация"';};?>
				<?php if ($url == "/service.php?six") {echo 'src="img/services/open/6.jpg" alt="Чипирование"';};?>
				<?php if ($url == "/service.php?seven") {echo 'src="img/services/open/7.jpg" alt="Груминг"';};?>
				<?php if ($url == "/service.php?eight") {echo 'src="img/services/open/8.jpg" alt="Диагностика"';};?>
				<?php if ($url == "/service.php?nine") {echo 'src="img/services/open/9.jpg" alt="Хирургия"';};?>
				<?php if ($url == "/service.php?ten") {echo 'src="img/services/open/10.jpg" alt="Ультразвуковая диагностика"';};?>
				<?php if ($url == "/service.php?eleven") {echo 'src="img/services/open/11.jpg" alt="Тонометрия"';};?>
				<?php if ($url == "/service.php?twelve") {echo 'src="img/services/open/12.jpg" alt="Электрокардиография"';};?>
				<?php if ($url == "/service.php?thirteen") {echo 'src="img/services/open/13.jpg" alt="Цифровой рентген DR-система"';};?>
			class="ca-block-img">
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>
