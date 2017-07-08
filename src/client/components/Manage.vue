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
      <p class="subtitle">(Showing 5 latest)</p>
      <hr>
      <article v-for="card in limitTo5" class="media">
        <figure class="media-left">
          <p class="image is-32x32">
            <a :href="'/card/' + card._id + '/edit'">
              <img src="../assets/logo.png">
            </a>
          </p>
        </figure>
        <div class="media-content card-snippet">
          <a :href="'/card/' + card._id">
            <div class="content">
              <p><strong>{{card.front}} </strong><span v-if="card.code" class="tag is-small is-black is-pulled-right">Code</span></p>
              <p>{{card.back | snippet}}</p>
            </div>
          </a>
        </div>
      </article>
      </ul>
    </section>
  </div>
</template>

<script>
import editCard from './editCard.vue';

export default {
  components: {
    'edit-card': editCard
  },
  data() {
    return {
    }
  },
  computed: {
    limitTo5() {
      return this.cards.slice(0, 5);
    },
    cards() {
      return this.$store.state.allCards;
    }
  },
  methods: {
  },
  filters: {
    snippet(value) {
      return (value.length >= 100 ? value.slice(0, 100) + '...': value.slice(0, 100));
    }
  }
}
</script>

<style scoped>
.card-snippet:hover {
  background: #f2f6ff;
  border-radius: 5%;
}
.section {
  padding: 20px;
}
</style>
