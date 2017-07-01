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
  }
}
</script>

<style scoped>
.section {
  padding: 20px;
}
</style>
