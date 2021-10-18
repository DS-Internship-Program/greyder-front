import axios from './axios'


const login = (credentials) => {
    return axios.post('http://localhost:3000/auth/login', credentials)
}

export default {
    login
}