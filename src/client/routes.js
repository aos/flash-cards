import Manage from './components/Manage.vue';
import Card from './components/showCard.vue';
import addCard from './components/addCard.vue';
import editCard from './components/editCard.vue';
import login from './components/login.vue';
import register from './components/register.vue';

import axios from 'axios';
import store from './store';

const checkAuth = (to, from, next) => {
  if (!store.state.user) {
    axios.get('http://localhost:3000/auth/isauth')
    .then((result) => {
      console.log(result);
      if (result.data) {
        store.state.user = result.data;
        next();
      }
      else {
        return false;
      }
    })
    .catch((err) => console.log(err)) 
  }
  else {
    next();
  }
}
export default [
  {path: '/', component: Manage, beforeEnter: checkAuth},
  {path: '/card/:id/edit', component: editCard},
  {path: '/card/:id', component: Card},
  {path: '/add', component: addCard},
  {path: '/login', component: login},
  {path: '/register', component: register}
]