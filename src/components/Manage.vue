<template>
  <div id="main" class="section">
    <section class="hero is-light">
      <div class="hero-body">
        <h2 class="title">
          Add a Card
        </h2>
        <div class="block">
          <div class="field has-addons">
            <p class="control">
              <a href="#" class="button is-medium is-outlined is-dark">General</a>
            </p>
            <p class="control">
              <a href="#" class="button is-medium is-outlined is-dark">Code</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">{{cards.length}} Cards</h1>
        <hr>
      </div>
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
  }
}
</script>

<style scoped>
#card {
  margin-top: auto;
}
</style>
