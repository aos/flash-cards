import Home from './components/Home.vue';
import Manage from './components/Manage.vue';
import Card from './components/showCard.vue';
import addCard from './components/addCard.vue';
import editCard from './components/editCard.vue';
import login from './components/login.vue';
import register from './components/register.vue';

export default [
  {path: '/', component: Manage},
  {path: '/card/:id/edit', component: editCard, meta: {auth: true} },
  {path: '/card/:id', component: Card, meta: {auth: true} },
  {path: '/add', component: addCard, meta: {auth: true}},
  {path: '/login', component: login},
  {path: '/register', component: register}
]