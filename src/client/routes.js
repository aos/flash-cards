import Home from './components/Home.vue';
import Manage from './components/Manage.vue';
import Card from './components/showCard.vue';
import addCard from './components/addCard.vue';
import editCard from './components/editCard.vue';
import login from './components/login.vue';
import register from './components/register.vue';

export default [
  {path: '/', component: Manage},
  {path: '/card/:id/edit', component: editCard },
  {path: '/card/:id', component: Card },
  {path: '/add', component: addCard },
  {path: '/login', component: login },
  {path: '/register', component: register }
]