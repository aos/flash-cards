<template>
  <div>
    <div v-if="!card">
      Loading card...
    </div>
    <div v-else>
      <br>
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
        <a @click.prevent="knowCard" class="button is-medium" :class="card.known ? 'is-success' : 'is-light'">
          <span v-if="card.known">✓ Known</span>
          <span v-else>I Know It!</span>
        </a>
        <router-link :to="'/card/' + this.$store.state.allCards[Math.floor(Math.random() * this.$store.getters.totalCards)]._id" class="button is-medium is-warning">Next Card →</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      flipped: false,
      general_card: false,
      code_card: true,
      random_card: false,
    }
  },
  computed: {
    card() {
      return this.$store.getters.cardById(this.$route.params.id);
    }
  },
  methods: {
    knowCard() {
      this.$http.put(`http://localhost:3000/api/card/${this.$route.params.id}/edit`, { known: (this.card.known ? false : true) }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token_id')}` }
      })
        .then((result) => {
          this.card.known = result.data.known;
        })
        .catch(err => console.log(err));
    }
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
