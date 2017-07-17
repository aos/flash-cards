<template>
  <div id="main">
    <div v-if="!isAuthenticated">
      <section class="section">
        <div class="hero is-light">
          <div class="hero-body has-text-centered">
            <router-link class="button is-large is-outlined is-info" to="/login">Login</router-link>
            <router-link class="button is-large is-outlined is-success" to="/register">Register</router-link>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <div v-if="cards.length">
        <section class="section">
          <div class="hero is-light">
            <div class="hero-body has-text-centered">
              <router-link class="button is-large is-outlined is-danger" :to="'/card/' + cards[Math.floor(Math.random() * cards.length)]._id">Run</router-link>
              <router-link class="button is-large is-outlined is-dark" to="/add">Add Card
              </router-link>
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
                <router-link :to="'/card/' + card._id + '/edit'">
                  <img src="../assets/logo.png">
                </router-link>
              </p>
            </figure>
            <div class="media-content card-snippet">
              <router-link :to="'/card/' + card._id">
                <div class="content">
                  <p>
                    <strong>{{card.front}} </strong>
                    <span v-if="card.code" class="tag is-small is-black is-pulled-right">Code</span>
                  </p>
                  <p>{{card.back | snippet}}</p>
                </div>
              </router-link>
            </div>
          </article>
          </ul>
        </section>
      </div>
      <div v-else>
        <h3>Loading cards...</h3>
      </div>
    </div>
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
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    limitTo5() {
      return this.cards.reverse().slice(0, 5);
    },
    cards() {
      return this.$store.state.allCards;
    },
    randomCard() {
      const length = this.$store.getters.totalCards;
      return this.$store.state.allCards[Math.floor(Math.random() * length)]._id;
    }
  },
  methods: {
  },
  filters: {
    snippet(value) {
      return (value.length >= 100 ? value.slice(0, 100) + '...' : value.slice(0, 100));
    }
  },
  created() {
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
