<!DOCTYPE html>
<html lang="ru"> <!-- Язык -->
<head>
	<meta charset="UTF-8"> <!-- Кодировка -->
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> Адаптация под мобильные устройства -->
	<title>GrandVet - Документы, дипломы и сертификаты</title> <!-- Название -->
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
			<li><a href="about.php">О ветеринарной клинике</a></li>
			<li>-</li>
			<li>Документы, дипломы и сертификаты</li>
		</ul>
		<h2 class="heading_branch document_heading">Документы, дипломы и сертификаты</h2>
		<p class="document_text">Документы</p>
		<div class="document_img">
			<img src="../img/document/documents/d1.jpg">
			<img src="../img/document/documents/d2.jpg">
		</div>
		<p>Дипломы и свидетельства</p>
		<div class="document_img">
			<img src="../img/document/diplomas/d1.jpg">
			<img src="../img/document/diplomas/d2.jpg">
		</div>
		<p>Сертификаты</p>
		<div class="document_img">
			<img src="../img/document/certificates/d1.jpg">
			<img src="../img/document/certificates/d2.jpg">
		</div>
	</div>
</section>

<?php require 'layout/footer.php' ?>
	<!-- /Сам сайт -->
</body>
</html>
