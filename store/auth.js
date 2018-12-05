import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from '../assets/constants/auth';
import { USER_REQUEST } from '../assets/constants/user';
import apiCall from '../assets/utiles/api';

export const state = () => ({
  token: '', // TODO: add localStorage or cookie
  status: ''
});

export const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success';
    state.token = token
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
};

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

export const actions = {
  [AUTH_REQUEST] ({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      apiCall({
        url: 'auth',
        method: 'POST' ,
        user: {username: user.username, password: user.password}
      })
        .then(response => {
          const token = response.token;
          localStorage.setItem('user-token', token);
          commit(AUTH_SUCCESS, token);
          return dispatch(`user/${USER_REQUEST}`, null, { root: true })
        })
        .then(() => {resolve()})
        .catch(error => {
          commit(AUTH_ERROR, error);
          localStorage.removeItem('user-token');
          reject(error);
        })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      // TODO: localStorage.removeItem('user-token');
      resolve()
    })
  }
};
