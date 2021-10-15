import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistenceStorage'

const state = {
  currentUser: null
}

const mutations = {
  registerSuccess(state, credentials) {
    state.currentUser = credentials
  },

  getCurrentSuccess(state, credentials) {
    state.currentUser = credentials
  },
}

const actions = {
  register({commit}, credentials) {
    return new Promise(() => {
      authApi.register(credentials)
        .then(res => {
          commit('registerSuccess', res.data.user)
          setItem('token', res.data.user.token)
        })
    })
  },

  getCurrentUser({commit}) {
    return new Promise(() => {
      authApi.getCurrentUser()
        .then(res => {
          commit('getCurrentSuccess', res.data.user)
          setItem('token', res.data.user.token)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}