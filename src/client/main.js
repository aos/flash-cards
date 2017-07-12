import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Routes from './routes'

import store from './store'

Vue.prototype.$http = axios;
Vue.use(VueRouter);

// Vue Router
export const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
