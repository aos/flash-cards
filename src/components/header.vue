<template>
  <div class="container">
    <!-- Nav -->
    <div class="nav" id="header">
      <div class="nav-left">
        <a href="#" class="nav-item">
          <h3>Cards.io</h3>
        </a>
      </div>

      <!-- Hamburger menu on collapse-->
      <span class="nav-toggle" @click="toggleClass">
        <span></span>
        <span></span>
        <span></span>
      </span>
  
      <!-- Menu inside hamburger -->
      <div class="nav-right nav-menu" v-bind:class="{'is-active': isActive}">
        <a href="" class="nav-item">Sign in</a>
        <a href="" class="nav-item">Register</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: '',
    }
  },
  methods: {
    toggleClass(e) {
      e.target.classList.toggle('is-active');
      this.isActive = !this.isActive;
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