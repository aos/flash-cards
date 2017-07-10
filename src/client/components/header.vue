<template>
  <div class="container">
    <!-- Nav -->
    <div class="nav has-shadow" id="header">
      <div class="nav-left">
        <a href="/" class="nav-item">
          <h3>Cards.io</h3>
        </a>
      </div>
  
      <!-- Hamburger menu on collapse-->
      <span id="burger-collapse" class="nav-toggle" @click="toggleClass">
        <span></span>
        <span></span>
        <span></span>
      </span>
  
      <!-- Menu inside hamburger -->
      <div id="burger" class="nav-right nav-menu">
        <div v-if="user">
          <a href="/logout">Logout</a>
        </div>
        <div v-else>
          <router-link class="nav-item" to="/login" @click.native="toggleClass">Login</router-link>
          <router-link class="nav-item" @click.native="toggleClass" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    }
  },
  methods: {
    toggleClass() {
      document.getElementById('burger').classList.toggle('is-active');
      document.getElementById('burger-collapse').classList.toggle('is-active');
    }
  },
  computed: {
  },
  created() {
  }
}
</script>


<style>

</style>