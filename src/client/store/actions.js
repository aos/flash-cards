import axios from 'axios'

export const registerUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/register', payload)
      .then((result) => {
        localStorage.setItem('user_id', result.data.user_id);
        localStorage.setItem('token_id', result.data.token);
        commit('LOGIN_SUCCESS', result.data.user_id);
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export const loginUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/login', payload)
      .then((result) => {
        localStorage.setItem('token_id', result.data.token);
        localStorage.setItem('user_id', result.data.user_id);
        commit('LOGIN_SUCCESS', result.data.user_id);
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export const logoutUser = ({ commit }) => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('token_id');
    localStorage.removeItem('user_id')
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
      resolve(null);
    }
  })
}

export const getAllUserCards = ({ commit }, payload) => {
  axios.post('/api/all', payload, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token_id')}` }
  })
    .then((result) => {
      commit('GET_ALL', result.data);
    })
    .catch((err) => console.log(err));
}

export const addCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/add', payload,
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token_id')}` }
      })
      .then((result) => {
        commit('ADD_CARD', result.data);
        resolve(result.data);
      })
      .catch((err) => console.log(err));
  })
}

export const deleteCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.delete(`/api/card/${payload}/delete`,
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token_id')}` }
      })
      .then((result) => {
        commit('DELETE_CARD', result.data)
        resolve(result.data)
      })
      .catch(err => console.log(err));
  })
}

export const editCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {

  })
}

export const knowCard = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/:id')
  })
}