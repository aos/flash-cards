<template>
  <div id="login">
    <div class="section">
      <h2 class="title">Login</h2>
      <form @submit.prevent="login">
        <div class="field">
          <label class="label">Username</label>
          <input class="input" v-model="user.username" name="username" type="text" required>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input class="input" v-model="user.password" name="password" required></input>
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
      this.$store.dispatch('loginUser', this.user)
        .then((result) => {
          this.$router.push('/');
        })
    }
  }
}
</script>

<style>

</style>