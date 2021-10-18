import axios from './axios'

const register = credentials => {
  return axios.post('/auth/registration', credentials)
}

const getCurrentUser = () => {
  axios.get('/user')
}

export default {
  register,
  getCurrentUser
}