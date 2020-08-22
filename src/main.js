import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
