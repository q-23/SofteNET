<template>
    <div lass="row">
      <div class="col-12">
        <div class="content" v-in-viewport.once.fully>
        <img src="../assets/as-min.png" alt="" class="img-fluid hidden-md-down" align="right">
        <p> Firma Softenet powstała w 2004 roku w Sosnowcu i od samego początku zajmuje się projektowaniem stron internetowych. Oprócz tego tworzymy webaplikacje, czyli programy uruchamiane na zdalnym serwerze, które obsługuje się za pomocą przeglądarki internetowej, takiej jak np. Chrome, Firefox lub Opera. Naszą misją jest przygotować dla Ciebie rozwiązanie dopasowane do Twoich indywidualnych potrzeb. Niezależnie od tego jaki jest profil Twojej działalności, jesteśmy w stanie stworzyć rozwiązanie, które spełni Twoje potrzeby.
          Głównym celem firmy Softenet jest tworzenie wysoko wyspecjalizowanych responsywnych stron Internetowych dostosowanych zarówno do indywidualnych potrzeb naszych klientów, jak i do branży w której działają. Jedną z najważniejszych rzeczy ułatwiających zaistnienie w nowoczesnych środkach komunikacji jest niewątpliwie profesjonalnie zaprojektowana i wykonana strona Internetowa, ponieważ potrafi ona nie tylko rzucić światło na podejście firmy do klienta lecz także zainteresować go oferowanymi produktami i usługami. Źle zaprojektowana i wykonana strona internetowa potrafi skutecznie zniechęcić niejednego potencjalnego klienta.
          </p>
          <p>Nasze strony internetowe to:</p>
          <ul>
            <li>Źródło informacji o oferowanych usługach i towarach</li>
            <li>Miejsce wymiany opinii klientów</li>
            <li>Możliwość poznawania oczekiwań klientów</li>
            <li>Prowadzenie dialogu z masowym odbiorcą</li>
            <li>Łatwy i szybki kontakt z klientem</li>
            <li>Szybkie i wygodne wysyłanie biuletynów informacyjnych (newsletter'ów) do zainteresowanych osób</li>
            <li>Badanie oraz analiza rynku poprzez ankiety</li>
            <li>Planowanie promocji</li>
            <li>Szybki i łatwy sposób na samodzielne modyfikowanie zawartości stron poprzez system zarządzania zawartością CMS.</li>
          </ul>
      <p>Każdego klienta traktujemy indywidualnie, liczy się dla nas przede wszystkim jego satysfakcja. W zależności od potrzeb możemy wykonać strony Internetowe poczynając od prostych i niedrogich wizytówek firmy, a kończąc na rozbudowanych interaktywnych webaplikacjach Internetowych wykonanych w wielu językach.
      </p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .content{
    background-color:  #ebebeb;
    padding: 40px;
    border-radius: 20px;
    transform: scale(.8);
    transition: 1s;
  }
  .content.in-viewport{
    transform: scale(1);
  }
  ul{
    list-style-type: none;
  }
  p,li{
    color: #5e5e5e;
  }
  ul li::before {
    content: "\2666";
    color: red;
    font-weight: bold;
    margin-right: 5px;
  }
</style>
