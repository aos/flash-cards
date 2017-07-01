<template>
  <div id="add-card container">
    <div class="section">
      <h2 class="title">Add a Card</h2>
      <form v-if="!preview" @submit.prevent="addCard">
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
        <input type="submit" class="button is-medium is-success" value="Add Card">
        <button class="button is-medium is-light is-pulled-right" @click.prevent="showPreview">Preview</button>
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
      <button class="button is-medium is-dark is-pulled-right" @click.prevent="showPreview">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      card: {
        front: '',
        back: '',
        code: false
      },
      preview: false,
      submitted: false
    }
  },
  methods: {
    showPreview() {
      this.preview = !this.preview;
    },
    addCard() {
      console.log('here');
      axios.post('http://localhost:3000/api/add', this.card)
      .then(
        (data) => {
          this.submitted = true;
        },
        (err) => {
          console.error(err);
        }
      )
    }
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