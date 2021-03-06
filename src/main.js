import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/icon.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
import Share from 'vue-social-share'
import 'social-share.js/dist/css/share.min.css'

Vue.use(Share)
Vue.use(Vant);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
