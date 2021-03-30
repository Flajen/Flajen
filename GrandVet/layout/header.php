<?php $url = $_SERVER['REQUEST_URI']; ?>
<div class="wrapper__cap">
  <div class="container">
    <div class="cap cap_active">
      <div class="wrapper__logo"><a href="/">
        <h1 class="logo">GrandVet</h1>
        <p class="under">Ветеринарная клиника</p>
      </a></div>
      <nav>
        <ul class="nav">
          <li class="nav__links arrow_down <?php if ($url == "/about.php") {echo 'active';}?>"><a href="about.php" class="element">О клинике</a>
            <ul class="nav__add">
              <li><a href="document.php">Документы, дипломы и сертификаты</a></li>
            </ul>
          </li>
          <li class="nav__links arrow_down <?php if ($url == "/veterinaryService.php") {echo 'active';}?>"><a href="veterinaryService.php" class="element">Ветеринарные услуги</a>
            <ul class="nav__add">
              <li><a href="service.php?one">Услуги кардиолога</a></li>
              <li><a href="service.php?two">Офтальмология</a></li>
              <li><a href="service.php?three">Терапия</a></li>
              <li><a href="service.php?four">Физиотерапия</a></li>
              <li><a href="service.php?five">Вакцинация</a></li>
              <li><a href="service.php?six">Чипирование</a></li>
              <li><a href="service.php?seven">Груминг</a></li>
              <li><a href="service.php?eight">Диагностика</a></li>
              <li><a href="service.php?nine">Хирургия</a></li>
              <li><a href="service.php?ten">Ультразвуковая диагностика</a></li>
              <li><a href="service.php?eleven">Тонометрия</a></li>
              <li><a href="service.php?twelve">Электрокардиография</a></li>
              <li><a href="service.php?thirteen">Цифровой рентген DR-система</a></li>
            </ul>
          </li>
          <li class="nav__links <?php if ($url == "/callingVeterinarian.php") {echo 'active';}?>"><a href="callingVeterinarian.php" class="element">Вызов ветеринара</a></li>
          <li class="nav__links <?php if ($url == "/priceList.php") {echo 'active';}?>"><a href="priceList.php" class="element">Прайс-лист</a></li>
          <li class="nav__links"><a href="tel:+74952293086" class="element">+7 (495)229-30-86</a></li
        </ul>
      </nav>
    </div>
  </div>
</div>
<span class="help"></span>
