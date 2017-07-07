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
          <input class="input" v-model="user.password" name="password" required></input>
        </div>
        <input type="submit" class="button is-medium is-success" value="Register">
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
    register() {
      this.$http.post('http://localhost:3000/register', this.user)
      .then((res) => {
        console.log(res);
      })
    }
  }

}
</script>

<style>

</style>