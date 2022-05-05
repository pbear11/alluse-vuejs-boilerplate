import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { IState } from '@/models';
import { example } from './modules/example';
import { name as appName } from '../../package.json';
Vue.use(Vuex);

export const rootState = {
  system: {
    appName: 'Name',
    version: '1.0',
  },
  isLoading: false,
}

export const getters = {
  isLoading(state: any): boolean {
    return state.isLoading;
  }
}

export const mutations = {
  setLoading(state: any, isLoading: boolean) {
    state.isLoading = isLoading;
  }
}

export const actions = {
  updateLoading(action: ActionContext<any, any>, isLoading: boolean) {
    action.commit('setLoading', isLoading);
  }
}

const vuexLocal = new VuexPersistence({
  key: appName,
  storage: window.localStorage,
  restoreState: (key, storage) => {
    if (storage && storage.hasOwnProperty(key)) {
      return JSON.parse(storage[key]);
    }
    // This is case, when there is no data in local storage.
    return undefined;
  },
  reducer: (state) => {
    const vuexState = state as IState;
    const {
      localStorageData1,
      localStorageData2
    } = vuexState;
    return {
      localStorageData1,
      localStorageData2
    }
  }
})

export default new Vuex.Store({
  state: rootState,
  getters,
  mutations,
  actions,
  modules: {
    example
  },
  plugins: [vuexLocal.plugin]
});
