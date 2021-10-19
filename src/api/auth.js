import axios from './axios'

const register = credentials => {
  return axios.post('/auth/registration', credentials)
}

const getCurrentUser = () => {
  axios.get('/user')
}

const login = (credentials) => {
    return axios.post('/auth/login', credentials)
}

export default {
  register,
  getCurrentUser,
  login
}
