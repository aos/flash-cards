<template>
  <div>
    <div class="container centered buttons">
      <a href="#" class="button is-medium is-outlined is-dark">General</a>
      <a href="#" class="button is-medium is-outlined is-dark">Code</a>
      <hr>
    </div>
    <div v-if="flipped" class="container">
      <div class="box">
        <code v-if="false">{{this.back}}</code>
        <p v-else>{{this.back}}</p>
      </div>
    </div>
    <div v-else class="container">
      <div class="box">
        <h1 class="title is-2">{{this.front}}</h1>
      </div>
    </div>
    <div class="container centered bottom-buttons">
      <a class="button is-medium is-info" v-on:click.prevent="flipCard">⇆ Flip Card</a>
      <a href="#" class="button is-medium is-success">✓ I Know It!</a>
      <a href="#" class="button is-medium is-warning">Next Card →</a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      front: 'Here be dragons',
      back: 'Here be gold',
      flipped: false
    }
  },
  computed: {
  },
  methods: {
    flipCard(e) {
      this.flipped = !this.flipped;
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.buttons {
  margin-top: 20px;
}

.bottom-buttons {
  margin-bottom: 20px;
}

.centered {
  text-align: center;
}

.box {
  margin: 0 auto 20px;
  height: 400px;
  min-width: 400px;
  width: 60%;
}

</style>
