<template>
  <div id="add-card container">
    <div class="section">
      <h2 class="title">Add a Card</h2>
      <form v-if="!preview">
        <div class="field">
          <label class="label">Front</label>
          <input class="input" type="text" v-model.lazy="card.front" required>
        </div>
        <div class="field">
          <label class="label">Back</label>
          <textarea class="textarea" v-model.lazy="card.back" required></textarea>
        </div>
        <div>
          <a class="button" :class="{'is-dark' : card.code}" @click="isCode">Code</a>
        </div>
        <hr>
        <button class="button is-medium is-success" @click.prevent="submit">Add Card</button>
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
        <pre v-if="card.code"><code>{{card.back}}</code></pre>
        <article v-else class="message is-info">
          <div class="message-body">
            <p style="white-space: pre-wrap; color: #000;">{{card.back}}</p>
          </div>
        </article>
      </div>
      <hr>
      <button class="button is-medium is-dark is-pulled-right" @click.prevent="showPreview">Edit</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: {
        front: '',
        back: '',
        code: false
      },
      preview: false
    }
  },
  methods: {
    isCode() {
      this.card.code = !this.card.code;
    },
    showPreview() {
      this.preview = !this.preview;
    }
  },
  filters: {
  }
}
</script>

<style scoped>
.message-header {
  color: #000;
  background: #FCFCFC;
}
.is-info {
  color: #000;
  background: #FCFCFC;
}
</style>