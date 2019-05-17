<template>
  <div id="main">
    <appMenu></appMenu>
      <transition appear
                  appear-active-class="fade-enter-active">

          <div id="header"></div>
      </transition>
      <div id="app" class="container">
        <div class="row justify-content-center">
          <div class="col-11">
            <h5 class="mt-4" style="padding-top: 48px; margin-top: -48px;">Nasza firma zajmuje się tworzeniem nowoczesnych, responsywnych stron internetowych zgodnych z najnowszymi standardami programistycznymi. Korzystamy z najbardziej sprawdzonego stacku technologicznego:</h5>
          </div>
        </div>
        <div class="row justify-content-between mt-5 pt-5">
          <div class="col-3">
            <img src="../public/static/img/tarcze/JS-min.png" alt="" class="img-fluid mx-auto d-block js" v-in-viewport.once="100">
          </div>
          <div class="col-3">
            <img src="../public/static/img/tarcze/PHP-min.png" alt=""  class="img-fluid mx-auto d-block php" v-in-viewport.fully.once>
          </div>
          <div class="col-3">
            <img src="../public/static/img/tarcze/CSS-min.png" alt=""  class="img-fluid mx-auto d-block css" v-in-viewport.fully.once>
          </div>
          <div class="col-3">
            <img src="../public/static/img/tarcze/HTML-min.png" alt=""  class="img-fluid mx-auto d-block html" v-in-viewport.fully.once>
          </div>
        </div>
        <HeaderText>
          <h1 slot v-in-viewport.once.fully class="headertext" style="animation-delay: 2s">Czym się zajmujemy</h1>
        </HeaderText>
        <div class="offeroverflow">
          <Offer v-for="offer in offers" :key="offer.img">
            <img :src="offer.img" slot="image" class="img-fluid offerimg" v-in-viewport.once='{ top: -150}' alt="Oferta" v-html="offer.hover">
            <h3 slot="header" class="offerheader">{{offer.header}}</h3>
            <p slot="content" class="offercontent align-text-bottom">{{offer.content}}</p>
          </Offer>
        </div>
        <HeaderText>
          <h1 slot v-in-viewport.once.fully class="headertext" id="gallery" style="padding-top: 48px; margin-top: -48px;">Nasze realizacje</h1>
        </HeaderText>
        <div class="row">
          <PageGallery v-for="item in gallery" :key="item.linkText" :link="item.link" :hover="item.hover">
            <div class="galdiv" slot="image" :style="{ backgroundImage: 'url(' + item.img + ')' }">
            </div>
            <h3 slot="link" class="linkgal">{{item.linkText}}</h3>
          </PageGallery>
        </div>
        <HeaderText>
          <h1 slot v-in-viewport.once.fully class="headertext" id="about" style="padding-top: 48px; margin-top: -48px;">O firmie</h1>
        </HeaderText>
        <About></About>
        <HeaderText>
          <h1 slot v-in-viewport.once.fully class="headertext" id="map" style="padding-top: 48px; margin-top: -48px;">Gdzie nas znajdziesz</h1>
        </HeaderText>
        <div  style="overflow: hidden; width: 100%;">
        <div class="row">
          <div class="col-12">
            <div class="map" v-in-viewport.fully.once style="position: relative">
              <div style="padding-top: 108px; margin-bottom: 50%; z-index: 2; position: absolute; margin-top: 60%;"></div>
              <iframe frameBorder="0" src="https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=softenet&amp;aq=&amp;sll=52.025459,19.204102&amp;sspn=11.856816,25.114746&amp;ie=UTF8&amp;hq=softenet&amp;hnear=&amp;cid=11666953694255868095&amp;ll=50.312695,19.18642&amp;spn=0.04933,0.102825&amp;z=13&amp;iwloc=A&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
        </div>
        <HeaderText>
          <h1 slot v-in-viewport.once.fully class="headertext" id="contact">Kontakt</h1>
        </HeaderText>
        <Contact></Contact>
      </div>
  </div>
</template>

<script>
  import Offer from './components/Offer.vue'
  import HeaderText from './components/HeaderText.vue'
  import PageGallery from './components/PageGallery.vue'
  import About from './components/About.vue'
  import Contact from './components/Contact.vue'
  import appMenu from './components/Menu.vue'

  export default {
    name: 'App',
    data: function () {
      return {
        offers: [
          {img: '../static/img/responsywne-min.png', header: 'Responsywne strony internetowe', content: 'Głównym obszarem naszej działalności jest tworzenie stron, które wyglądają dobrze, na każdym wyświetlaczu. Stylistyka naszych stron przyciąga wzrok, a intuicyjność zapewnia przejrzystość i łatwość użytkowania.'},
          {img: '../static/img/obsluga-min.png', header: 'Obsługa istniejących serwisów', content: 'Przeprowadzamy wszystkie niezbêdne czynnośći w zakresie utrzymania stron internetowych (instalacja, konfiguracja, aktualizacja).'},
          {img: '../static/img/webapp-min.png', header: 'Aplikacje sieciowe - Webaplikacje', content: 'Piszemy programy, które działają na każdym urządzeniu z dostępem do internetu. Bez dodatkowego instalowania i konfiguracji - wszystko po prostu od razu działa, bez instalowania, bez zbędnych konfiguracji.'},
          {img: '../static/img/poligraf-min.png', header: 'Usługi poligraficzne', content: 'Dzięki zaprzyjaźnionej drukarni wykonanie nawet najbardziej zaawansowanych projektów nie stanowi dla nas problemu. Używamy jedynie papierów i tuszy wysokiej jakości, które nie tylko wyglądają dobrze, lecz także wytrzymują próbę czasu.'},
          {img: '../static/img/pozycjonowanie-min.png', header: 'Pozycjonowanie stron', content: 'Nasi zaufani partnerzy dołożą wszelkich starań, aby Państwa witryna znalazła się możliwie jak najwyżej w wynikach wyszukiwania najbardziej lukratywnych słów kluczowych.'}
        ],
        gallery: [
          {img: '../static/img/strony/50tka-min.jpg', link: 'http://50-tka.pl', linkText: '50tka', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/anmag-min.jpg', link: 'http://skladkamienia.eu', linkText: 'AnMag', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/cyfronix-min.jpg', link: 'http://cyfronix.pl', linkText: 'Cyfronix', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/evateurope-min.jpg', link: 'http://e-vateurope.com', linkText: 'EvatEurope', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/gajami-min.jpg', link: 'http://gajami-kosmetyki.pl', linkText: 'Gajami', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/inoxe-min.jpg', link: 'http://inoxe.pl', linkText: 'Inoxe', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/kopalnia_tkanin-min.jpg', link: 'http://kopalniatkanin.pl', linkText: 'Kopalnia Tkanin', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/lcg-min.jpg', link: 'http://lcg.com.pl', linkText: 'LCG', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/marcar-min.jpg', link: 'http://marcar.sosnowiec.pl/', linkText: 'MarCar', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/maritech-min.jpg', link: 'http://maritech.pl', linkText: 'Maritech', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/metalmarket-min.jpg', link: 'http://katalog.metalmarket.com.pl', linkText: 'MetalMarket', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/nemo-min.jpg', link: 'http://wiselkadomki.pl', linkText: 'Nemo', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/scorpions-min.jpg', link: 'http://scorpions.com.pl', linkText: 'Scorpions', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/silowniki_elektryczne-min.jpg', link: 'http://silowniki-elektryczne.pl', linkText: 'GlobalPoż', hover: 'Lorem ipsum dolor sit amet'},
          {img: '../static/img/strony/unisuw-min.jpg', link: 'http://unisuw.pl', linkText: 'Unisuw', hover: 'Lorem ipsum dolor sit amet'}
        ]
      }
    },
    components: {
      Offer,
      HeaderText,
      PageGallery,
      About,
      Contact,
      appMenu
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,800,900|Lato');
  #main {
    background-color: #4791ff;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-top: -62px;
    padding-bottom: 107px;
  }
  #header{
    background-image: url('./assets/header_duzy.jpg');
    background-position-x: center;
    background-position-y: center;
    min-height: 100vh;
    width: 100%;
    background-size: cover;
  }
  .fade-enter-active {
    animation: header 3s;
  }
  @keyframes header {
    0%{
      opacity: 0;
      transform: scale(1.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  #app{
    background-color: white;
    border-radius: 20px;
    padding: 0 30px 0 30px;
  }
  h5, h3{
    font-family: Lato;
    color: #5e5e5e;
  }
  p{
    font-family: Lato;
    font-size: 18px;
    color: #5e5e5e;
  }
  .js{
    opacity: 0;
    transform: scale(.8);
    transition: 1s ease-in-out;
    transition-delay: .5s;
  }
  .php{
    opacity: 0;
    transform: scale(.8);
    transition: 1s ease-in-out;
    transition-delay: .65s;
  }
  .css{
    opacity: 0;
    transform: scale(.8);
    transition: 1s ease-in-out;
    transition-delay: .8s;
  }
  .html{
    opacity: 0;
    transform: scale(.8);
    transition: 1s ease-in-out;
    transition-delay: .95s;
  }
  .js.in-viewport, .php.in-viewport, .css.in-viewport, .html.in-viewport{
    opacity: 1;
    transform: scale(1);
  }
  .offerimg{
    opacity: 0;
    transition: 1s;
    transform: translateX(-370px)
  }
  .offerimg.in-viewport{
    opacity: 1;
    transform: translateX(0px);
  }
  @keyframes offerimg {
    0%{
      opacity: 0;
      transform: scale(1.7);
    }
    90%{
      border-radius: 0;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      border-radius: 20px;
      transform: scale(1);
    }
  }
  .offerheader{
    font-family: 'Alegreya Sans SC';
    font-weight: 700;
    font-size: 32px;
  }
  .offercontent{
    display: table-cell;
    vertical-align: middle;
  }
  .galdiv{
    width: 300px;
    height: 250px;
    margin: 0 auto;
    background-position-x: center;
    background-size: cover;
    transition: .5s ease-in-out;
    transform: translateY(25px);
    position: relative;
  }
  .linkgal{
    color: #505050;
    font-size: 32px;
    font-family: 'Alegreya Sans SC';
    font-weight: 700;
  }
  h3.linkgal{
    text-decoration: none;
  }
  .headertext{
    opacity: 0;
    transition: 1.5s;
    transition-delay: .5s;
  }
  .headertext.in-viewport{
    opacity: 1;
  }
  iframe{
    width: 100%;
    height: 80vh;
  }
  .map{
    overflow: hidden;
    transition: 2s;
    opacity: 0;
    transform: translateX(600px);
  }
  .map.in-viewport{
    animation: map 1s;
    animation-fill-mode:forwards;
  }
  @keyframes map {
    0%{
      opacity: 0;
      transform: scale(1.4);
    }
    90%{
      border-radius: 0;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      border-radius: 20px;
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 1239px){
    .offerheader{
      font-size: 20px;
    }
    p.offercontent{
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 992px) {
    #app{
      margin-bottom: -34px;
    }
  }
  @media only screen and (max-width: 991px){
    p, li{
      font-size: 16px;
    }
    h1.transition{
      font-size: 47px;
    }
    h5{
      font-size: 18px;
    }
    h3.offerheader{
      font-size: 24px;
    }
    .offerimg{
      margin-top: 40px;
    }
    .linkgal{
      font-size: 26px;
    }
    .galdiv{
      height: 250px;
      width: 200px;
      transform: translateY(0);
    }
    .offeroverflow {
      overflow: hidden;
      height: 110%;
      padding-bottom: 20px;
    }
  }
  @media only screen and (max-width: 959px){
    .offerimg{
      margin-left: 10%;
    }
  }
  @media only screen and (max-width: 767px){
    h3.offerheader{
      text-align: center;
    }
    .offerimg{
      margin-top: 40px;
    }
    p, li{
      font-size: 14px;
    }
    .linkgal{
      margin-top: 5px;
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 595px){
    .offerimg{
      margin-left: 0;
    }
    .linkgal{
      font-size: 18px;
    }
  }

</style>
