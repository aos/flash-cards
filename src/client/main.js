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
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth);
  const authed = store.state.user.authenticated;
  if (authRequired && !authed) {
    next('/login')
  }
  else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
