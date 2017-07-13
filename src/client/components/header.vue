<template>
  <div class="container">
    <!-- Nav -->
    <div class="nav has-shadow" id="header">
      <div class="nav-left">
        <router-link class="nav-item" to="/">
          <h3>Cards</h3>
        </router-link>
      </div>
  
      <!-- Hamburger menu on collapse-->
      <span id="burger-collapse" class="nav-toggle" @click="toggleClass">
        <span></span>
        <span></span>
        <span></span>
      </span>
  
      <!-- Menu inside hamburger -->
      <div id="burger" class="nav-right nav-menu">
        <div v-if="isAuthenticated">
          <a href="#" @click="logout" class="nav-item">Logout</a>
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
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toggleClass() {
      document.getElementById('burger').classList.toggle('is-active');
      document.getElementById('burger-collapse').classList.toggle('is-active');
    },
    logout() {
      this.$store.dispatch('logoutUser')
      this.toggleClass()
      this.$router.push('/');
    }
  },
  created() {
  }
}
</script>


<style>

</style>