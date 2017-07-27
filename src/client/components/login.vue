<template>
  <div id="login">
    <div class="section">
      <h2 class="title">Login</h2>
      <form method="POST" @submit.prevent="login">
        <div class="field">
          <label class="label">Username</label>
          <input class="input" v-model="user.username" name="username" type="text" required>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input type="password" class="input" v-model="user.password" name="password" required></input>
        </div>
        <input type="submit" class="button is-medium is-success" value="Login">
      </form>
    </div>
    <div id="login_warn" class="notification is-danger has-text-centered" v-if="!login_success">
      <button @click="close" class="delete"></button>
      Invalid username and/or password. Try again!
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
      login_success: true
    }
  },
  methods: {
    login(e) {
      const credentials = {
        username: this.user.username,
        password: this.user.password
      }
      this.$store.dispatch('loginUser', credentials)
      .then((result) => {
        window.location = '/';
      },
      (err) => {
        this.login_success = false;
        document.getElementById('login_warn').hidden = false;
      })
    },
    close(e) {
      e.target.parentElement.hidden = true;
    }
  }
}
</script>

<style>
.notification {
  width: 70%;
  margin: 0 auto;
}
</style>