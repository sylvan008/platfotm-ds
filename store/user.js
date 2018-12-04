import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from '../assets/constants/user';
import { AUTH_LOGOUT } from "../assets/constants/auth";
import apiCall from '../assets/utiles/api';

export const state = () => ({
  status: '',
  profile: {}
});

export const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
};

export const actions = {
  [USER_REQUEST]: ({commit, dispatch}) => {
    commit(USER_REQUEST);
    apiCall({url: 'user/me'})
      .then(resp => {
        commit(USER_SUCCESS, resp)
      })
      .catch(resp => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(`auth/${AUTH_LOGOUT}`, null, { root: true })
      })
  },
};

export const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.profile = resp;
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {}
  }
};
