import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import dataEntry from '@/dataEntry'
import {Index, Category, GroupInfo, GroupIndex, TagInfo} from './data'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tree: null as Category | null,
    tags: {} as {[key: string]: TagInfo},
    groupIndex: [] as GroupIndex[],
    groups: new Map() as Map<number, GroupInfo>,
    currentGroup: null as GroupInfo | null
  },
  getters: {
    getGroupIndex: state => (id: number): GroupIndex => {
      return state.groupIndex[id]
    },
    getTagInfo: state => (name: string): TagInfo => {
      return state.tags[name]
    }
  },
  mutations: {
    setIndex(store, {tree, tags, index}: Index){
      console.log(tree)
      store.tree = tree
      store.tags = tags
      store.groupIndex = index
    },
    resetCurrentGroup(state, group: GroupInfo){
      state.currentGroup = null
    },
    setCurrentGroup(state, group: GroupInfo){
      state.currentGroup = group
    }
  },
  actions: {
    updateIndex({commit}){
      axios.get(dataEntry).then(res => res.data).then(index =>
        commit('setIndex', index))
    },
    updateGroup({commit, getters}, id: number){
      commit('resetCurrentGroup')
      let groupIndex: GroupIndex = getters.getGroupIndex(id)
      axios.get(groupIndex.src).then(res => res.data)
        .then(group => commit('setCurrentGroup', group))
    }
  },
});
