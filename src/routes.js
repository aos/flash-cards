import Manage from './components/Manage.vue';
import Card from './components/showCard.vue';
import addCard from './components/addCard.vue';
import editCard from './components/editCard.vue';

export default [
  {path: '/', component: Manage},
  {path: '/card/:id', component: Card},
  {path: '/add', component: addCard},
  {path: '/card/:id/edit', component: editCard}
]