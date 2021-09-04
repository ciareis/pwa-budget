import isEmpty from 'lodash/isEmpty'

import * as TYPES from './mutation-types.js'
import * as AuthService from '../service/auth.js'
import storageInstance from '@/support/localStorage.js'
import { setToken as setTokenInService, clearToken } from '@/support/http/index.js'

const login = async ({ dispatch }, payload) => {
  return AuthService
    .login(payload)
    .then(({ data }) => dispatch('setToken', data.token || ''))
    .then(() => dispatch('loadUser'))
    .catch(err => Promise.reject(err))
}

const loadUser = async ({ commit, state }) => {
  const token = state.token || ''

  return AuthService
    .me(token)
    .then((response) => {
      const user = response.data || {}
      commit(TYPES.SET_USER, user)

      return Promise.resolve(true)
    })
    .catch(err => {
      commit(TYPES.CLEAR_USER)
      commit(TYPES.CLEAR_TOKEN)

      return Promise.reject(err)
    })
}

const setToken = ({ commit }, token) => {
  // Commit the mutations
  commit(TYPES.SET_TOKEN, token)
  setTokenInService(token)

  return Promise.resolve(token) // keep promise chain
}

const checkUserToken = ({ dispatch, state }) => {
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token)
  }

  /**
   * Token does not exist yet
   * - Recover it from localstorage
   * - Recover also the user, validating the token also
   */
  return storageInstance
    .getItem('token')
    .then((token) => {
      if (isEmpty(token)) {
        // Token is not saved in localstorage
        return Promise.reject(new Error('NO_TOKEN')) // Reject promise
      }

      // Put the token in the vuex store
      return dispatch('setToken', token) // keep promise chain
    })
    // With the token in hand, retrieves the user's data, validating the token
    .then(() => dispatch('loadUser'))
}

const logout = ({ commit }) => {
  return AuthService
    .logout()
    .then(() => {
      // clear user store
      clearToken()
      commit(TYPES.CLEAR_USER)
      commit(TYPES.CLEAR_TOKEN)

      return Promise.resolve(true) // keep promise chain
    })
    .catch(_ => {
      clearToken()
      commit(TYPES.CLEAR_USER)
      commit(TYPES.CLEAR_TOKEN)

      return Promise.reject(new Error('Um erro ocorreu ao fazer o logout'))
    })
}

const updateUser = async ({ dispatch }, payload) => {
  return AuthService
    .update(payload)
    .then(() => dispatch('loadUser'))
    .catch(err => Promise.reject(err))
}

const changePassword = async ({ dispatch }, payload) => {
  return AuthService
    .changePassword(payload)
    .then(() => dispatch('loadUser'))
    .catch(err => Promise.reject(err))
}

export default {
  login,
  logout,
  setToken,
  updateUser,
  checkUserToken,
  changePassword,
  loadUser
}
