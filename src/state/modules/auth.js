import axios from 'axios'
import { seedorfRESTUrl } from '../../app.config'

export const state = {
  currentUser: getSavedState('auth.currentUser'),
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    dispatch('validate')
  },

  // Logs in the current user.
  async logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')
    try {
      const response = await axios.post(`${seedorfRESTUrl}/auth/login/`, { username, password, email: username })
      const user = response.data
      commit('SET_CURRENT_USER', user)
      return user
    } catch(e) {
      if (e.response && e.response.data) { throw new Error(e.response.data[Object.keys(e.response.data)[0]]) }
      else throw new Error("Unknown error logging in")
    }
  },

  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_CURRENT_USER', null)
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  async validate({ commit, state }) {
    if (!state.currentUser) return null

    try {
      const response = await axios.post(`${seedorfRESTUrl}/auth/token-verify/`, {token: state.currentUser.token})
      const user = response.data
      // commit('SET_CURRENT_USER', user)
      return user
    } catch(e) {
      console.log(e)
      commit('SET_CURRENT_USER', null)
    }
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : ''
}
