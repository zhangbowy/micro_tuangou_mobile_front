import {Commit} from 'vuex';
import {State, Shape} from './interface';
const initState: State = {
  name: '2',
  list: [{id: 5, quantity: 3}],
};
// actions
const actions = {
  checkout(context: {commit: Commit; state: State}, list: Shape[]) {
    setTimeout(() => {
      context.commit('demo', {
        name: 'haha',
        list,
      });
    }, 5000);
  },
};
const mutations = {
  demo(state: State, payload) {
    const {name, list} = payload;
    state.name = name;
    state.list = list;
  },
};
const getters = {
  name: (state: State) => state.name,
  list: (state: State) => state.list,
};

export default {
  namespaced: true,
  state: initState,
  actions,
  mutations,
  getters,
};
