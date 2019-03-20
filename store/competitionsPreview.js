import apiCall from '../assets/utiles/api';

export const state = () => ({
  competitionsItems: []
});

export const mutations = {
  setCompetitionsItems(state, items) {
    state.competitionsItems = items;
  }
};

export const actions = {
  getCompetitionsItems({ commit }, { offset = 0, limit = 0 }) {
    apiCall({ url: 'index', method: 'GET' }).
    then(items => {
      let it = items.token;
      commit('setCompetitionsItems', it);
    })
  }
};
