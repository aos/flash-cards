<template>
  <div id="add-card container">
    <div v-if="submitted" class="section has-text-centered" id="submitted">
      <h1 class="title">Successfully edited card!</h1>
      <router-link :to="'/card/' + edited_card._id">
        <button class="button is-outlined is-medium is-info">Go to Card</button>
      </router-link>
    </div>
    <div v-else-if="deleted" class="section has-text-centered">
      <h1 class="title">Successfully deleted card!</h1>
      <router-link :to="'/'">
        <button class="button is-outlined is-medium is-info">Go Home</button>
      </router-link>
    </div>
    <div v-else>
      <div v-if="card">
        <div v-if="!submitted" class="section">
          <h2 class="title">Edit Card
            <span v-if="preview">
              <button class="button is-medium is-dark is-pulled-right" @click.prevent="showPreview">Edit</button>
            </span>
            <span v-else>
              <button class="button is-medium is-light is-pulled-right" @click.prevent="showPreview">Preview</button>
            </span>
          </h2>
          <form v-if="!preview" @submit.prevent="editCard">
            <div class="field">
              <label class="label">Front</label>
              <input class="input" name="front" type="text" v-model.lazy="card.front" required>
            </div>
            <div class="field">
              <label class="label">Back</label>
              <textarea class="textarea" name="back" v-model.lazy="card.back" required></textarea>
            </div>
            <div>
              <a class="button" :class="{'is-dark' : card.code}" @click="card.code = !card.code">Code</a>
            </div>
            <hr>
            <input type="submit" class="button is-medium is-success" value="Edit Card">
            <button @click.prevent="deleteCard" class="button is-medium is-danger is-pulled-right">Delete</button>
          </form>
        </div>
        <div v-if="preview" id="preview" class="section">
          <div class="field">
            <label class="label">Front</label>
            <article class="message">
              <div class="message-header">
                <p>{{card.front}}</p>
              </div>
            </article>
          </div>
          <div class="field">
            <label class="label">Back</label>
            <pre v-if="card.code"><code class="preserve-ws">{{card.back}}</code></pre>
            <article v-else class="message is-info">
              <div class="message-body">
                <p style="color: #000;" class="preserve-ws">{{card.back}}</p>
              </div>
            </article>
          </div>
          <hr>
        </div>
      </div>
      <div v-else>
        <div class="section has-text-centered">
          <h3 class="title is-3">Something went wrong...</h3>
          <router-link :to="'/card/' + this.$route.params.id">
            <button class="button is-outlined is-info">Back to Card</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: {},
      preview: false,
      submitted: false,
      edited_card: {},
      deleted: false
    }
  },
  methods: {
    showPreview() {
      this.preview = !this.preview;
    },
    editCard() {
      this.$http.put(`http://localhost:3000/api/card/${this.$route.params.id}/edit`, this.card)
        .then((result) => {
          this.edited_card = result.data;
          this.submitted = true;
        })
        .catch(err => console.log(err));
    },
    deleteCard() {
      this.$store.dispatch('deleteCard', this.$route.params.id)
        .then((result) => {
          this.deleted = true;
        })
    }
  },
  created() {
    this.card = this.$store.getters.cardById(this.$route.params.id)
  },
  filters: {
  }
}
</script>

<style scoped>
.preserve-ws {
  white-space: pre-wrap;
}

.message-header {
  color: #000;
  background: #FCFCFC;
  border: #000 1px dashed;
}

.is-info {
  color: #000;
  background: #FCFCFC;
}
</style>