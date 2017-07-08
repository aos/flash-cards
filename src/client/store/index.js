import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  user: {},
  allCards: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    cardById: (state) => (id) => {
      return state.allCards.find((card) => card._id === id);
    }
  }
});