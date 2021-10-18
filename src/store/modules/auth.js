import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistenceStorage'

const state = {
  loggedIn: false,
  error: null
}

const mutations = {
  registerSuccess(state, data) {
    state.loggedIn = data
  },
  registerFailed(state, data) {
    state.error = data
    state.loggedIn = false
  },

  getCurrentSuccess(state, data) {
    state.loggedIn = data
  },
}

const actions = {
  register({commit}, credentials) {
    return new Promise(() => {
      authApi.register(credentials)
      .then(res => {
          commit('registerSuccess', true)
          setItem('token', res.data.token)
        })
        .catch(result => {
          commit('registerFailed', result.response.data.message)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions
}