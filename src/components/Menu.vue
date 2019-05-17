<template>
  <nav class="navbar navbar-expand-lg navbar-custom sticky-top nav-scroll-items" ref="navbar" id="wrapper">
    <div class="container">
    <img src="../assets/softenet.svg" alt="Softenet">
    <button class="navbar-toggler custom-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nav class="collapse navbar-collapse justify-content-end my-nav" id="navbarSupportedContent" active-class="active">
      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" data-target=".navbar-collapse">
            <router-link  to="/#app" tag="a" v-scroll-to="'#app'">
              <a class="nav-link" href="#app">Start</a>
            </router-link>
          </li>
          <li class="nav-item" data-target=".navbar-collapse">
            <router-link  to="/#gallery" tag="a" v-scroll-to="'#gallery'">
              <a class="nav-link" href="#gallery">Realizacje</a>
            </router-link>
          </li>
          <li class="nav-item" data-target=".navbar-collapse">
            <router-link  to="/#about" tag="a" v-scroll-to="'#about'">
              <a class="nav-link" href="#about">O firmie</a>
            </router-link>
        </li>
          <li class="nav-item" data-target=".navbar-collapse">
            <router-link  to="/#map" tag="a" v-scroll-to="'#map'">
              <a class="nav-link" href="#map">Mapa</a>
            </router-link>
        </li>
          <li class="nav-item" data-target=".navbar-collapse">
            <router-link  to="/#contact" tag="a" v-scroll-to="'#contact'">
              <a class="nav-link" href="#contact">Kontakt</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
  export default {
    name: "Menu",
    data() {
      return {
        windowWidth: 0
      }
    },
    mounted() {
      //Instrukcje, które zostaną wykonane po załadowaniu się DOM

      this.$nextTick(function() {
        window.addEventListener('resize', this.getWindowWidth);
        this.getWindowWidth();
      });

      $('body').scrollspy({ offset: $(window).height()*.75 });
      //Animacja początkowa
      if (!location.hash && !window.scrollY) {
        document.body.style.overflow = 'hidden';
        const nav = this.$refs.navbar;
        const height = $(window).scrollTop() + $(window).height();
        if (!location.hash) {
          nav.style.visibility = 'hidden';
          setTimeout(() => {
            $('html, body')
                    .animate({
                      scrollTop: height}, 'slow', 'swing');
            nav.style.visibility = 'visible';
            document.body.style.overflow = 'visible';
          }, 4500)
        }
      }
    },
    methods: {
      getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
      }
    },
    watch:{
      //Zapobiega miganiu menu na dużym ekranie
      windowWidth(val){
        val<=992 ?
          $('.nav-item').attr('data-toggle', "collapse")
        :
          $('.nav-item').attr('data-toggle', "")
        }
      }
  }
</script>

<style scoped>
  .active{
    font-weight: bold;
    color: #ffb200;
    opacity: 1;
    text-shadow: 2px 1px 14px #FFFFFF;
    font-size: 21px;
    text-decoration: underline;
    text-decoration-color: #65a2ff;
  }
  img{
    max-width: 300px;
    max-height: 40px;
  }
  .navbar-custom{
    background-color:rgba(0,0,0,0.7)
  }
  li>a{
    opacity: 1;
  }
  a{
    font-family: 'Alegreya Sans SC';
    color: white;
    font-size: 20px;
  }
  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(1,138,206,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  @media screen and (max-width: 398px) {
    img{
      width: 150px;
      height: auto;
    }
  }
  @media screen and (max-width: 240px) {
    img{
      width: 100px;
      height: auto;
    }
  }
</style>
