import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from '../assets/constants/user';
import { AUTH_LOGOUT } from "../assets/constants/auth";
import apiCall from '../assets/utiles/api';

export const state = () => ({
  status: '',
  profile: {},
  join: false
});

export const getters = {
  getProfile: state => {
    const profile = {};
    ({
      username: profile.username,
      email: profile.email,
      phone: profile.phone,
      bio: profile.bio } = state.profile);

    return profile
  },
  isProfileLoaded: state => !!state.profile.name,
};

export const actions = {
  [USER_REQUEST]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST);
      apiCall({url: 'user/me'})
        .then(resp => {
          commit(USER_SUCCESS, resp.token); // TODO remove mock api
          resolve();
        })
        .catch(resp => {
          commit(USER_ERROR);
          // if resp is unauthorized, logout, to
          dispatch(`auth/${AUTH_LOGOUT}`, null, { root: true });
          reject(resp);
        })
    });
  },
  USER_JOIN: ({commit, dispatch}, joinData) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(joinData);
      apiCall({url: 'user/join', method: 'POST', data})
        .then(resp => {
          commit('user_join', resp);
          resolve();
        })
        .catch(err => {
          console.log('Error:', err);
          reject(err);
        })
    })
  },
  UPDATE_PROFILE: ({commit, dispatch}, profile) => {
    return new Promise((resolve, reject) => {
      // some response...
      setTimeout(resolve(), 500)
    })
      .then(() => {
        commit('update_profile', profile)
      })
      .catch(err => console.log(err));
  }
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
    state.status = '';
    state.profile = {}
  },
  user_join: (state, resp) => {
    state.join = resp.token.join
  },
  update_profile: (state, profile) => {
    ({
      username: state.profile.username,
      phone: state.profile.phone,
      bio: state.profile.bio
    } = profile)
  }
};
