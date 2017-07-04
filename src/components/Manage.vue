<template>
  <div id="main">
    <section class="section">
      <div class="hero is-light">
        <div class="hero-body has-text-centered">
          <a href="/add" class="button is-large is-outlined is-dark">Add a Card</a>
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="title">{{cards.length}} Cards</h1>
      <hr>
      <article v-for="card in cards" class="media">
        <figure class="media-left">
          <p class="image is-32x32">
            <img src="http://bulma.io/images/placeholders/64x64.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p><strong>{{card.front}}</strong></p>
            <p>{{card.back | snippet}}</p>
          </div>
        </div>
      </article>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      cards: []
    }
  },
  methods: {
  },
  created() {
    this.$http.get('http://localhost:3000/api/all')
    .then((cards) => {
      this.cards = cards.data;
    })
    .catch(err => {
      console.log(err);
    })
  }, 
  filters: {
    snippet(value) {
      return (value.length >= 100 ? value.slice(0, 100) + '...': value.slice(0, 100));
    }
  }
}
</script>

<style scoped>
.section {
  padding: 20px;
}
</style>
