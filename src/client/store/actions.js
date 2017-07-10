import axios from 'axios'

export const getUser = ({ commit }) => {
  return new Promise(function (resolve, reject) {
    axios.get('http://localhost:3000/auth/isauth')
      .then((result) => {
        console.log(result.data);
        commit('SAVE_AUTH', result.data);
        resolve();
      })
      .catch((err) => console.log(err));
  })
}

export const loginUser = ({commit}, payload) => {
  return new Promise(function(resolve, reject) {
    axios.post('http://localhost:3000/login', payload)
    .then((result) => {
      console.log(result);
      commit('LOGIN', result.data);
      resolve(result.data);
    })
    .catch((err) => console.log(err));
  })
}
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

export const knowCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {

  })
}