<template>
  <div id="register">
    <div class="section">
      <h2 class="title">Register</h2>
      <form @submit.prevent="register">
        <div class="field">
          <label class="label">Username</label>
          <input class="input" v-model="user.username" name="username" type="text" required>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input type="password" class="input" v-model="user.password" name="password" required></input>
        </div>
        <input type="submit" class="button is-medium is-success" value="Register">
      </form>
    </div>
    <div class="notification is-danger has-text-centered" v-if="!register_success">
      <button @click="close" class="delete"></button>
      Username taken. Try again!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      register_success: true
    }
  },
  methods: {
    register() {
      this.$store.dispatch('registerUser', this.user)
        .then((result) => {
          window.location = '/';
        },
        (err) => {
          this.register_success = false;
        })
    },
    close(e) {
      e.target.parentElement.hidden = true;
    }
  }

}
</script>

<style>

</style>