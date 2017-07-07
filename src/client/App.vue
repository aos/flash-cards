<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import header from './components/header.vue';

export default {
  components: {
    'app-header': header,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="bulma/css/bulma.css">

</style>
