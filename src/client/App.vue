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
  computed: {
  },
  created() {
    // Check for user
    this.$store.dispatch('checkAuth')
      .then((user_id) => {
        if (user_id) {
          this.$store.dispatch('getAllUserCards', {author: user_id});
        }
      })
      .catch(err => console.log(err));
  }
}
</script>

<style src="bulma/css/bulma.css">

</style>
