import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  user: {
    user_id: '',
    authenticated: false
  },
  allCards: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    cardById: (state) => (id) => {
      return state.allCards.find((card) => card._id === id);
    },
    isAuthenticated: (state) => {
      return state.user.authenticated;
    }
  }
});