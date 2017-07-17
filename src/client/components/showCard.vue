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
        <button class="button is-medium is-info" @click.prevent="flipped = !flipped">⇆ Flip Card</button>
        <button @click.prevent="knowCard" class="button is-medium" :class="card.known ? 'is-success' : 'is-light'">
          <span v-if="card.known">✓ Known</span>
          <span v-else>I Know It!</span>
        </button>
        <button @click="nextCard" class="button is-medium is-warning" v-check>Next Card →</button>
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
    },
    nextCard() {
      const allCards = this.$store.state.allCards;
      const total = this.$store.getters.totalCards;
      const next = allCards[Math.floor(Math.random() * total)];
      if (this.flipped) {
        this.flipped = false
      }
      if (this.$route.params.id === next._id) {
        return nextCard();
      }
      return this.$router.push(`/card/${next._id}`);
    }
  },
  directives: {
    check: {
      bind(el, binding, vnode) {
        if (vnode.context.$store.getters.totalCards === 1) {
          el.setAttribute("disabled", "");
        }
      }
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
