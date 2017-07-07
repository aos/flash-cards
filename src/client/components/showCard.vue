<template>
  <div>
    <div class="tabs is-centered is-toggle">
      <ul>
        <li v-bind:class="{'is-active': general_card}">
          <a href="#" class="is-medium">General</a>
        </li>
        <li v-bind:class="{'is-active': code_card}">
          <a href="#" class="is-medium">Code</a>
        </li>
        <li v-bind:class="{'is-active': random_card}">
          <a href="#" class="is-medium">Random</a>
        </li>
      </ul>
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
        <span v-else>I Know It!</span>
      </a>
      <a href="#" class="button is-medium is-warning">Next Card →</a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      card: {},
      flipped: false,
      general_card: false,
      code_card: true,
      random_card: false
    }
  },
  computed: {
  },
  methods: {
  },
  created() {
    this.$http.get(`http://localhost:3000/api/card/${this.id}`)
    .then((result) => {
      this.card = result.data;
    })
    .catch(err => console.log(err));
  }
}
</script>

<style scoped>

.tabs {
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
