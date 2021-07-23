<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/master.css">
  <link rel="shortcut icon" href="favicon.ico">
  <title>Расписание заседаний</title>
  <script src="http://localhost:35729/livereload.js"></script>
  <script src="js/jquery.min.js"></script>
  <script src="js/master.js" defer></script>
</head>
<body class="calendar-body">
  <div class="container">
    <header class="calendar-header">
      <nav class="checkNav">
        <a href="/check.php" class="checkNav-logo"></a>
        <div class="checkNav-links">
          <a href="#!" class="checkNav-link">Картотека</a>
          <a href="#!" class="checkNav-link">Страж</a>
          <a href="#!" class="checkNav-link">Банк решений</a>
          <a href="#!" class="checkNav-link checkNav-link-active">Календарь</a>
          <a href="#!" class="checkNav-link">Перерывы</a>
          <a href="/home.php" class="checkNav-link">Мой Арбитр</a>
          <a href="/check.php" class="checkNav-link">Проверка ЭП</a>
        </div>
      </nav>
      <div class="calendar-wrapper">
        <div class="calendar-write">
          <div class="calendar-background-heading">
            <p class="calendar-background-heading-name">График рассмотрения дел</p>
          </div>
        </div>
      </div>
      <div class="calendar-footer">
        <div class="calendar-footer-left">
          <a href="https://pravo.tech/" class="calendar-pravo">
            <img src="img/pravo.svg" alt="Pravo Tech">
          </a>
        </div>
      </div>
    </header>
  </div>
</body>
</html>
