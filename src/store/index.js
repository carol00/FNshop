import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    list: []
  },
  mutations: {
    SETLIST(state, list) {
      state.list = list
    }
  },
  actions: {
    GETLIST(context) {
      return axios.get('/list.json').then(res => {
        // console.log(res);
        context.commit('SETLIST', res.data)
      })
    }
  },
  modules: {
  }
})
