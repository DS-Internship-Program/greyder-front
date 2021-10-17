import authApi from '../../api/axios';


export default {
    state: {
        currentUser: null
    },
    mutations: {
        loginSuccess(state, credentials){
            state.currentUser = credentials
        }
    },
    actions: {
        login({commit}, credentials){
            return new Promise(() => {
                authApi.login(credentials)
                .then(res => {
                    commit('loginSuccess', res.data.user)
                    // setItem('token', res.data.user.token)
                })
            })
        }
    }
}