import axios from 'axios'

export const registerUser = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/register', payload)
    .then((result) => {
      localStorage.setItem('user_id', result.data.user_id);
      localStorage.setItem('token_id', result.data.token);
      commit('LOGIN_SUCCESS', result.data.user_id);
      resolve(result.data);
    })
  })
}

export const loginUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/login', payload)
      .then((result) => {
        localStorage.setItem('token_id', result.data.token);
        localStorage.setItem('user_id', result.data.user_id);
        commit('LOGIN_SUCCESS', result.data.user_id);
        resolve(result.data);
      })
  })
}

export const logoutUser = ({ commit }) => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('')
    commit('LOGOUT');
    resolve();
  })
}

export const checkAuth = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const jwt = localStorage.getItem('token_id');
    const user_id = localStorage.getItem('user_id');
    if (jwt && user_id) {
      commit('LOGIN_SUCCESS', user_id);
      resolve(user_id);
    }
    else {
      commit('LOGOUT');
    }
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
    axios.post('http://localhost:3000/api/add', payload,
    {
      headers: {'Authorization': `Bearer ${localStorage.getItem('token_id')}`}
    })
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