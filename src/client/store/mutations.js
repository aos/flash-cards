export const mutations = {

  ['ADD_CARD'](state, payload) {
    const cards = state.allCards;
    cards.push(payload);
  },

  ['GET_ALL'](state, payload) {
    state.allCards = payload;
  },

  ['SAVE_AUTH'](state, payload) {
    console.log(payload)
    state.user = payload;
  },

  ['LOGIN'](state, payload) {
    console.log(payload)
    state.user = payload;
  }
}