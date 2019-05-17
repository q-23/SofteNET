<template>
    <div class="row pb-3">
      <div class="col-md-6 col-12  pt-5 pb-5 mb-5">
          <table align="right">
            <tr>
              <td v-in-viewport.fully.once>Pełna nazwa:</td>
              <td align="right" class="data" v-in-viewport.fully.once>Softenet - Jakub Płuciennik</td>
            </tr>
            <tr>
              <td style="animation-delay: .1s" v-in-viewport.fully.once>Adres:</td>
              <td align="right" class="data" style="animation-delay: .1s" v-in-viewport.fully.once>
                ul. Kielecka 5/51<br>
                41-219 Sosnowiec<br>
                woj. śląskie
              </td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .2s">e-mail:</td>
              <td align="right" style="animation-delay: .2s" v-in-viewport.fully.once><a href="mailto:biuro@softenet.pl" class="data">biuro@softenet.pl</a></td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .3s">Otwarte:</td>
              <td align="right" class="data" style="animation-delay: .3s" v-in-viewport.fully.once>
                Pn ~ Pt: 10<sup><u>00</u></sup> ~ 18<sup><u>00</u></sup><br />
                Sobota: 11<sup><u>00</u></sup> ~ 16<sup><u>00</u></sup>
              </td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .4s">NIP:</td>
              <td align="right" class="data" style="animation-delay: .4s" v-in-viewport.fully.once>6442942825</td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .5s">REGON:</td>
              <td align="right" class="data" v-in-viewport.fully.once style="animation-delay: .5s">278307378</td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .6s">Klucz PGP/GPG:</td>
              <td align="right" class="data" style="animation-delay: .6s" v-in-viewport.fully.once><a href="key0x96E730A75BFF4B96.asc">pobierz</a></td>
            </tr>
            <tr>
              <td v-in-viewport.fully.once style="animation-delay: .7s">Wizytówka QR:</td>
              <td align="right" class="data" style="animation-delay: .7s" v-in-viewport.fully.once><img src="../assets/wizytowka.png" alt="" class="qrcode d-block ml-auto"></td>
            </tr>
          </table>
        <img src="../assets/rakieta-min.png" alt="Rakieta" id="rocket" class="rocket img-fluid" v-if="showRocket">
      </div>
      <div class="col-md-6 col-12">
        <form>
          <p>W celu wysłania wiadomości skorzystaj z poniższego formularza. Odpiszemy lub oddzwonimy w ciągu 3 godzin.</p>
          <input type="text" name="name" placeholder="Imię lub pseudonim" v-model="name" v-in-viewport.fully.once>
          <input type="text" name="email" placeholder="Adres e-mail" v-model="email" v-in-viewport.fully.once style="animation-delay: .2s" @blur="$v.email.$touch()" :class="{invalid: $v.email.$error}">
          <input type="text" name="phone" placeholder="Numer telefonu" v-model="phone" v-in-viewport.fully.once style="animation-delay: .4s" @blur="$v.phone.$touch()"  :class="{invalid: $v.phone.$error}">
          <textarea cols="30" rows="12" name="massage" v-model="message" placeholder="Treść wiadomości..." v-in-viewport.fully.once style="animation-delay: .6s; resize: none;"></textarea>
        </form>
        <div class="row no-gutters mb-4">
          <div class="col-12">
            <div class="recaptcha mx-auto mb-1">
              <vue-recaptcha sitekey="6LccyTEUAAAAAMR-iv528laRwJjaU2VQArZ3aou1"></vue-recaptcha>
            </div>
            <button class="btn-primary btn-lg mx-auto" @click="send" :disabled="$v.$invalid">Wyślij</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { email, numeric, minLength } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      phone: null,
      email: '',
      message: '',
      windowWidth: 0,
      showRocket: true,
      captchaResponse: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth()
    });
  },
  components: { VueRecaptcha },
  methods: {
    getWindowWidth () {
      this.windowWidth = document.documentElement.clientWidth;
    },
    send () {
      //Zapytanie AJAX z wiadomością i wyczyszczenie pól
      const postData = new FormData();
      postData.set('imie_nazwisko', this.name);
      postData.set('email', this.email);
      postData.set('telefon', this.phone);
      postData.set('tresc', this.message);
      this.$http({
        method: 'post',
        url: 'wyslij.php',
        data: postData
      });
      alert('Wiadomość została wysłana!');
      this.name = '';
      this.email = '';
      this.phone = null;
      this.message = '';
    }
  },
  watch: {
    //Aby usunąć rakietę z DOM przy małych ekranach
    windowWidth (val) {
      this.showRocket = val > 1226
    }
  },
  validations: {
    email: {
      email
    },
    phone: {
      numeric,
      minLen: minLength(7)
    }
  }
}
</script>

<style scoped>
  td{
    width: 40%;
    z-index: 2;
    position: relative;
    height: 40px;
    opacity: 0;
  }
  td, td>a{
    color: #5e5e5e;
    font-family: Lato;
  }
  td>a{
    text-align: right !important;
  }
  .data{
    font-weight: bold;
  }
  input, textarea{
    width: 100%;
    background-color: #f5f9ff;
    border: 2px solid #d0e3ff;
    opacity: 0;
    animation: flip 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  input:focus, textarea:focus{
    outline-style:none;
    box-shadow:none;
    border-color:transparent;
    background-color: #eaebff;
  }
  input{
    margin-bottom: 7px;
  }
  input::placeholder,textarea::placeholder{
    color: #5597f9;
    padding-left: 5px;
  }
  input:focus,textarea:focus{
    border: 3px solid #b7d4ff;
    outline:0;
  }
  button{
    width: 100px;
    height: 40px;
    background-color: #95c0ff;
    color: #65a2ff;
    border: 1px solid #65a2ff;
    transition: .5s;
    max-height: 78px;
    display: block;
  }
  button:disabled{
    background-color: azure;
    color: gray;
  }
  .qrcode{
    max-width: 100px;
  }
  .rocket{
    position: absolute;
    transform: translate(-207px, 170px);
    transition: .5s ease-in-out;
    z-index: 1;
  }
  td.in-viewport{
    animation: flip2 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  input.invalid{
    border: 1px solid red;
    background-color: #ffc9aa;
  }
  .recaptcha {
    width: 311px;
    overflow: hidden;
  }
  @keyframes flip
  {
    0% { transform:perspective(500px) rotate3d(2,2,1,270deg); }
    100% { transform:perspective(500px) rotate3d(1,1,2,360deg);
      opacity: 1;
    }
  }
  @keyframes flip2
  {
    0% { transform:perspective(500px) rotate3d(2,2,1,-270deg); }
    100% { transform:perspective(500px) rotate3d(1,1,2,0deg);
      opacity: 1;
    }
  }
</style>
