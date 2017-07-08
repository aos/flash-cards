import axios from 'axios'

export const getAllCards = ({ commit }) => {
  axios.get('http://localhost:3000/api/all')
    .then((result) => {
      commit('GET_ALL', result.data);
    })
    .catch((err) => console.log(err));
}

export const addCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/api/add', payload)
      .then((result) => {
        commit('ADD_CARD', result.data);
        resolve(result.data);
      })
      .catch((err) => console.log(err));
  })
}

export const knowCard = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    
  })
}