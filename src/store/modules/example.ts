import { ActionContext } from 'vuex';

import { IExample } from '@/models';

const state: IExample = {
  name: 'Example',
  id: 'exampleId'
};

const getters = {
  name(moduleState: IExample): string {
    return moduleState.name;
  },
  id(moduleState: IExample): string {
    return moduleState.id;
  }
}

const mutations = {
  setName(moduleState: IExample, name: string) {
    moduleState.name = name;
  },
  setId(moduleState: IExample, id: string) {
    moduleState.id = id;
  }
};

const actions = {
  setName(action: ActionContext<IExample, any>, name: string) {
    action.commit('setName', name);
  },
  setId(action: ActionContext<IExample, any>, id: string) {
    action.commit('setId', id);
  }
}

export const example = {
  state,
  getters,
  mutations,
  actions
}