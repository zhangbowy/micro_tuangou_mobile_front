import Vue from 'vue';
import Vuex from 'vuex';
import testModule from './modules/testModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    testModule,
  },
});
