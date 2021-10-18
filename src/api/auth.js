import axios from './axios'


const login = (credentials) => {
    return axios.post('/auth/login', credentials)
}

export default {
    login
}