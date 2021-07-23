<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/master.css">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <title>Проверка подлинности электронной подписи в судебных актах</title>
  <script src="http://localhost:35729/livereload.js"></script>
  <script src="js/jquery.min.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
  <script src="js/master.js" defer></script>
  <script src="js/check.js" defer></script>
</head>
<body class="check-body">
  <header class="check-header">
    <nav class="checkNav">
      <a href="/check.php" class="checkNav-logo"></a>
      <div class="checkNav-links">
        <a href="#!" class="checkNav-link">Картотека</a>
        <a href="#!" class="checkNav-link">Страж</a>
        <a href="#!" class="checkNav-link">Банк решений</a>
        <a href="#!" class="checkNav-link">Календарь</a>
        <a href="#!" class="checkNav-link">Перерывы</a>
        <a href="/home.php" class="checkNav-link">Мой Арбитр</a>
        <a href="/check.php" class="checkNav-link checkNav-link-active">Проверка ЭП</a>
      </div>
    </nav>
    <div class="check-container">
      <h2 class="check-title">Проверка подлинности судебного акта в форме электронного документа</h2>
      <p class="check-text">Для проверки подлинности судебного акта в форме электронного документа укажите, пожалуйста, номер дела и, при необходимости, период, в течение которого был вынесен проверяемый судебный акт. Поиск покажет список судебных актов, подписанных электронной подписью судьи. После выбора судебного акта и нажатия кнопки "Проверить" загрузите файл электронного документа, подлинность которого необходимо подтвердить, затем загрузите файлы электронной подписи судебного акта. Для получения результатов проверки нажмите кнопку "Начать проверку".</p>
      <div class="check-wrapper">
        <div class="check-input-wrapper">
          <div class="check-input-field check-input-field-name check-input-field-border">
            <input type="text" id="caseNumber" name="caseNumber" autocomplete="off" class="check-input">
            <label for="caseNumber" class="check-input-label">Номер дела</label>
          </div>
          <div class="check-input-field check-input-field-with check-input-field-border">
            <input type="text" id="caseNumberWith" name="caseNumber" autocomplete="off" class="check-input check-input-mask">
            <label for="caseNumberWith" class="check-input-label">С</label>
            <div class="check-date">

            </div>
          </div>
          <div class="check-input-field check-input-field-on">
            <input type="text" id="caseNumberOn" name="caseNumber" autocomplete="off" class="check-input check-input-mask">
            <label for="caseNumberOn" class="check-input-label">По</label>
          </div>
        </div>
        <button type="button" name="button" class="check-btn">Найти судебный акт</button>
      </div>
      <div class="check_find-wrapper">
        <span class="check_find-icon"></span>
        <p class="check_find-heading">Для поиска судебных актов введите номер дела</p>
      </div>
    </div>
    <div class="check-error">
      <h3>По вашему запросу ничего не найдено. Убедитесь, что номер дела указан корректно.</h3>
    </div>
  </header>
</body>
</html>
