import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {id:73833, name:"Zeyad Khalid", country:"England", phone:"+201098462503"},
      {id:73828, name:"Zeyad Wael", country:"Spain", phone:"+201132639162"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id == id)
    }
  }
})
