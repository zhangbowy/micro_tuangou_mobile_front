import Vue from 'vue';
import App from './App.vue';
// @ts-ignore
import uView from 'uview-ui';
// @ts-ignore
Vue.use(uView);
Vue.config.productionTip = false;
import store from './store';
Vue.config.productionTip = false;
// const app = new App({ store });
const app = new Vue({
  ...App,
  store,
});
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor';
Vue.use(httpInterceptor, app);

declare module 'vue/types/vue' {
  interface Vue {
    $u: any;
  }
}

app.$mount();
