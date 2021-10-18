import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistenceStorage'

const state = {
  loggedIn: false,
  error: null
}

const mutations = {
  registerSuccess(state, payload) {
    state.loggedIn = payload
  },
  registerFailed(state, payload) {
    state.error = payload
    state.loggedIn = false
  },
  loginSuccess(state, payload){
    state.loggedIn = payload
  },
  loginFailed(state, payload){
    state.error = payload
    state.loggedIn = false
  }
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
  login({commit}, credentials) {
    return new Promise(() => {
        authApi.login(credentials)
        .then(res => {
            commit('loginSuccess', true)
            setItem('token', res.data.token)
        })
        .catch((result) => {
            commit("loginFailed", result.response.data.message)  
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}