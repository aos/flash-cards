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
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const credentials = {
        username: this.user.username,
        password: this.user.password
      }
      this.$store.dispatch('loginUser', credentials)
      .then((result) => {
        this.$router.push('/');
      })
      .catch((err) => console.log(err));
    }
  }
}
</script>

<style>

</style>