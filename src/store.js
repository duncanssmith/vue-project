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
    ],
    testformData: [
      {"name": "Duncan Smith"}, 
      {"mobile": "07764 615 516"}, 
      {"email": "duncanssmith@gmail.com"} 
    ]
  },

  mutations: {
    setCount (state, data) {
      state.count = data
    },
    setName (state, data) {
      state.name = data
    },
    setLastName (state, data) {
      state.lastName = data
    },
    setAlias (state, data) {
      state.aliases.push(data)
    },
    deleteAlias (state, data) {
      console.log('Final', data)
      state.aliases.splice(data, 1)
    },
    setTestFormData (state, data) {
      console.log('Set test form data')
      state.testformData.push(data)
    }
  },

  getters: {
    getCount (state) {
      return state.count
    },
    getName (state) {
      return state.name
    },
    getLastName (state) {
      return state.lastName
    },
    getAliases (state) {
      return state.aliases
    },
    getTestFormItems (state) {
      return state.testformData
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
    addLastName ({state, commit}, param) {
      console.log("Duncan 2000 ", param);
      let newLastName = param;
      commit('setLastName', newLastName.lastName) 
    },
    addAlias ({state, commit}, param) {
      let newAlias = param;
      commit('setAlias', newAlias) 
    },
    removeAlias ({state, commit}, param) {
      let id = param;
      console.log('removeAlias action', param, id)
      commit('deleteAlias', id)
    },
    processForm ({state, commit}, params) {
      let testform = params;
      console.log('Process Form: ', testform)
      commit('setTestFormData', testform.name)
      commit('setTestFormData', testform.mobile)
      commit('setTestFormData', testform.email)

    }
  }
})
