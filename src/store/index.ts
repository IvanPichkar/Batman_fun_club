import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Bob Razowski',
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
});
