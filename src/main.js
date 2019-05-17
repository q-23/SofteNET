/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from'vue-scrollto'
import VueRouter from 'vue-router'


Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Vuelidate);
Vue.use(VueRouter)

Vue.directive('in-viewport', inViewportDirective);


Vue.use(VueScrollTo, {
  container: "body",
  duration: 200,
  easing: "ease",
  offset: -67,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash,
        offset: { y: 77 }}
    } else {
      return { y: 0}
    }
  },
  routes: [{
    path: '/',
    component: App
  }]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
