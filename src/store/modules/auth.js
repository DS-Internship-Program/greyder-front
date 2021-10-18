import authApi from '../../api/auth';


export default {
    state: {
        loggedIn: false,
        error: null
    },
    mutations: {
        loginSuccess(state, credentials){
            state.loggedIn = credentials
            console.log(state.loggedIn)
        },
        loginFailed(state, credentials){
            state.error = credentials
            state.loggedIn = false

        }
    },
    actions: {
        login: async ({commit}, credentials) => {
            return new Promise(() => {
                authApi.login(credentials)
                .then(res => {
                    // console.log(credentials, 'credentials')
                    commit('loginSuccess', true)
                    console.log(res , 'res')
                    // setItem('token', res.data.token)
                    console.log(res.data.token)
                })
                .catch((result) => {
                    console.log(result.response.data.message, 'error')
                    commit("loginFailed", result.response.data.message)  
                })
            })
        }
    }
}