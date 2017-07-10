<template>
  <div class="container">
    <!-- Nav -->
    <div class="nav has-shadow" id="header">
      <div class="nav-left">
        <a href="/" class="nav-item">
          <h3>Cards.io</h3>
        </a>
      </div>
  
      <!-- Center icons -->
      <div v-if="user" class="nav-center">
        <a href="#" class="nav-item">General</a>
        <a href="#" class="nav-item">Code</a>
        <a href="#" class="nav-item">Random</a>
      </div>
  
      <!-- Hamburger menu on collapse-->
      <span id="burger-collapse" class="nav-toggle" @click="toggleClass">
        <span></span>
        <span></span>
        <span></span>
      </span>
  
      <!-- Menu inside hamburger -->
      <div id="burger" class="nav-right nav-menu">
        <router-link v-if="!user" class="nav-item" to="/login" @click.native="toggleClass">Login</router-link>
        <router-link v-if="!user" class="nav-item" @click.native="toggleClass" to="/register">Register</router-link>
        <a href="/logout" v-if="user">Logout</a>
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