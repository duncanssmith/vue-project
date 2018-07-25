import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

Vue.use(Vuex)
Vue.use(VeeValidate)

export default new Vuex.Store({
  state: {
    count: 0,
    name: null,
    lastName: null,
    aliases: [
      {"alias": "Ant"}, 
      {"alias": "Bee"}, 
      {"alias": "Cow"}
    ]
  },

  mutations: {
    setCount (state, data) {
      state.count = data
    },
    setName (state, data) {
      state.name = data
    },
    setAlias (state, data) {
      state.aliases.push(data)
    },
    deleteAlias (state, data) {
      console.log('Final', data)
      state.aliases.splice(data, 1)
    }
  },

  getters: {
    getCount (state) {
      return state.count
    },
    getName (state) {
      return state.name
    },
    getAliases (state) {
      return state.aliases
    }
  },

  actions: {
    incrementCount ({state, commit}) {
      let newCount = state.count;
      newCount = newCount + 1
      commit('setCount', newCount)
    },
    decrementCount ({state, commit}) {
      let newCount = state.count;
      newCount = newCount - 1
      commit('setCount', newCount)
    },
    addName ({state, commit}, param) {
      console.log("Duncan 1000 ", param);
      let newName = param;
      commit('setName', newName.name) 
    },
    addAlias ({state, commit}, param) {
      let newAlias = param;
      commit('setAlias', newAlias) 
    },
    removeAlias ({state, commit}, param) {
      let alias = param;
      console.log('removeAlias action', param, alias)
      commit('deleteAlias', alias)
    }
  }
})
