<template>
  <div id="app">
    <app-header></app-header>
    <!--<manage></manage>-->
    <card></card>
  </div>
</template>

<script>
import header from './components/header.vue';
import Manage from './components/Manage.vue';
import Card from './components/showCard.vue';

export default {
  components: {
    'app-header': header,
    'manage': Manage,
    'card': Card
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="bulma/css/bulma.css">

</style>
