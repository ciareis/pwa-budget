import * as TYPES from './mutation-types.js'

export default {
  [TYPES.SET_USER] (state, user) {
    state.user = user
  },

  [TYPES.SET_TOKEN] (state, token) {
    state.token = token
  },

  [TYPES.CLEAR_USER] (state) {
    state.user = {}
  },

  [TYPES.CLEAR_TOKEN] (state) {
    state.token = null
  }
}
