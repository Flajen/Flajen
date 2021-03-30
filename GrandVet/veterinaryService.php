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
			<li><a href="/">Главная</a></li>
			<li>-</li>
			<li>Ветеринарные услуги</li>
		</ul>
		<h2 class="heading_branch VSheading">Ветеринарные услуги</h2>
		<div class="wrapper__cards"> <!-- Первый столбик -->
			<a href="service.php?one" class="card">
				<img src="../img/card/1.jpg" alt="Услуги кардиолога" class="card_img">
				<div class="card_item">
					<h3>Услуги кардиолога</h3>
					<p>
						<?php
						$string = 'Кардиология – это важная и нужная область ветеринарной медицины, которая занимается изучением заболеваний сердца и сосудов животных.';
						$string = strip_tags($string);
						$string = substr($string, 0, 200);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?two" class="card">
				<img src="../img/card/2.jpg" alt="Офтальмология" class="card_img">
				<div class="card_item">
					<h3>Офтальмология</h3>
					<p>
						<?php
						$string = 'Офтальмология – это одна из самых сложных областей ветеринарной медицины. Ведь глаз любого животного обладает невероятной анатомией и весьма специфической физиологией. Потому что все процессы, которые происходят в организме, оказывают серьезное влияние на орган зрения.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?three" class="card">
				<img src="../img/card/3.jpg" alt="Терапия" class="card_img">
				<div class="card_item">
					<h3>Терапия</h3>
					<p>
						<?php
						$string = 'Терапия  - многогранное понятие и включает в себя постановку диагноза, выяснение причины, и назначение лечения для быстрого и качественного восполнения нормальных функций организма, а также дальнейших мер профилактики.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
		</div>

		<div class="wrapper__cards"> <!-- Второй столбик -->
			<a href="service.php?four" class="card">
				<img src="../img/card/4.jpg" alt="Физиотерапия" class="card_img">
				<div class="card_item">
					<h3>Физиотерапия</h3>
					<p>
						<?php
						$string = 'В нашей клинике активно применяется аппарат для импульсной биосинхронизированной элекктромагнитной терапии "УМИ-05".';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?five" class="card">
				<img src="../img/card/5.jpg" alt="Вакцинация" class="card_img">
				<div class="card_item">
					<h3>Вакцинация</h3>
					<p>
						<?php
						$string = 'Вакцинация — введение антигенного материала с целью вызвать иммунитет к болезни, который предотвратит заражение или ослабит его последствия.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?six" class="card">
				<img src="../img/card/6.jpg" alt="Чипирование" class="card_img">
				<div class="card_item">
					<h3>Чипирование</h3>
					<p>
						<?php
						$string = 'Чипирование  -  электронное мечение домашних животных. Данный метод заключается в подкожном введении чипа с уникальным идентификационным номером, который остается с животным в течение всей его жизни.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
		</div>

		<div class="wrapper__cards"> <!-- Третий столбик -->
			<a href="service.php?seven" class="card">
				<img src="../img/card/7.jpg" alt="Груминг" class="card_img">
				<div class="card_item">
					<h3>Груминг</h3>
					<p>
						<?php
						$string = 'Груминг — это активное поведение, направленное на очистку поверхности тела, то есть умывание, купание и т. п. Это этологический термин, но также применим и к людям в значении личного ухода, личной гигиены.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?eight" class="card">
				<img src="../img/card/8.jpg" alt="Диагностика" class="card_img">
				<div class="card_item">
					<h3>Диагностика</h3>
					<p>
						<?php
						$string = 'Пример';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?nine" class="card">
				<img src="../img/card/9.jpg" alt="Хирургия" class="card_img">
				<div class="card_item">
					<h3>Хирургия</h3>
					<p>
						<?php
						$string = 'Ветеринарная клиника ГрандВет оснащена всем необходимым оборудованием для проведения хирургических операций разных степеней сложности.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
		</div>

		<div class="wrapper__cards"> <!-- Четвертый столбик -->
			<a href="service.php?ten" class="card">
				<img src="../img/card/10.jpg" alt="Ультразвуковая диагностика" class="card_img">
				<div class="card_item">
					<h3>Ультразвуковая диагностика</h3>
					<p>
						<?php
						$string = 'Пример';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?eleven" class="card">
				<img src="../img/card/11.jpg" alt="Тонометрия" class="card_img">
				<div class="card_item">
					<h3>Тонометрия</h3>
					<p>
						<?php
						$string = 'Для более детального клинического обследования наши врачи используют тонометр - аппарат для измерения давления, что позволяет еще на ранних стадиях заподозрить и выявить проблемы связанные с сердечно-сосудистыми заболеваниями.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
			<a href="service.php?twelve" class="card">
				<img src="../img/card/12.jpg" alt="Электрокардиография" class="card_img">
				<div class="card_item">
					<h3>Электрокардиография</h3>
					<p>
						<?php
						$string = 'Данный способ позволяет выявить нарушение ритма, заподозрить электролитические растройства, также необходим в околоанестетический период. Необходим у животных с расширением желудка, панкреатитом, пиометрой. Входит в стандартный кардиологический осмотр.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
		</div>

		<div class="wrapper__cards"> <!-- Пятый столбик -->
			<a href="service.php?thirteen" class="card">
				<img src="../img/card/13.jpg" alt="Цифровой рентген DR-система" class="card_img">
				<div class="card_item">
					<h3>Цифровой рентген<br> DR-система</h3>
					<p>
						<?php
						$string = 'Данный способ позволяет выявить нарушение ритма, заподозрить электролитические растройства, также необходим в околоанестетический период. Необходим у животных с расширением желудка, панкреатитом, пиометрой. Входит в стандартный кардиологический осмотр.';
						$string = strip_tags($string);
						$string = substr($string, 0, 250);
						$string = rtrim($string, "!,.-");
						$string = substr($string, 0, strrpos($string, ' '));
						echo $string."… ";
						?>
					</p>
				</div>
			</a>
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>
