export const mutations = {

  ['ADD_CARD'](state, payload) {
    const cards = state.allCards;
    cards.push(payload);
  },

  ['GET_ALL'](state, payload) {
    state.allCards = payload;
  },

  ['DELETE_CARD'](state, payload) {
    const cards = state.allCards;
    const index = cards.findIndex(c => c._id === payload._id);
    cards.splice(index, 1);
  },

  ['LOGIN_SUCCESS'](state, payload) {
    state.user.user_id = payload;
    state.user.authenticated = true;
  },

  ['LOGOUT'](state) {
    state.user.user_id = null;
    state.user.authenticated = false;
  }
}