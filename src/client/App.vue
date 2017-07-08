<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
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
    }
  },
  created() {
    this.$store.dispatch('getAllCards');
  }
}
</script>

<style src="bulma/css/bulma.css">

</style>
