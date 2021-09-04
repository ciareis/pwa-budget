import { createStore } from 'vuex'

// modules
// import application from './modules/application/index.js'
import auth from '../domains/Auth/store/index.js'

import plugins from './plugins.js'

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins
})

export default store
