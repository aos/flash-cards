<template>
  <div>
    <div class="container has-text-centered buttons">
      <a href="#" class="button is-medium is-outlined is-dark">General</a>
      <a href="#" class="button is-medium is-outlined is-dark">Code</a>
      <hr>
    </div>
    <div v-if="flipped" class="container">
      <div class="box">
        <pre v-if="card.code"><code class="preserve-ws">{{card.back}}</code></pre>
        <p class="preserve-ws center-vertical" v-else>{{card.back}}</p>
      </div>
    </div>
    <div v-else class="container">
      <div class="box">
        <h1 class="title has-text-centered center-vertical is-2">{{card.front}}</h1>
      </div>
    </div>
    <div class="container has-text-centered bottom-buttons">
      <a class="button is-medium is-info" @click.prevent="flipped = !flipped">⇆ Flip Card</a>
      <a @click.prevent="card.known = !card.known" class="button is-medium" :class="card.known ? 'is-success' : 'is-light'">
        <span v-if="card.known">✓ Known</span>
        <span v-else>I Know It!</span></a>
      <a href="#" class="button is-medium is-warning">Next Card →</a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: {
        front: 'Here be dragons',
        back: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. \n\nDe carne lumbering animata corpora quaeritis. \n\nSummus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
        known: false,
        code: true
      },
      flipped: false
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.buttons {
  margin-top: 20px;
}

.bottom-buttons {
  margin-bottom: 20px;
}

.box {
  margin: 0 auto 20px;
  height: 400px;
  min-width: 400px;
  width: 60%;
}

.preserve-ws {
  white-space: pre-wrap;
}

.center-vertical {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
