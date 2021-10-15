import axios from './axios'

const register = credentials => {
  axios.post('/users', credentials)
}

const getCurrentUser = () => {
  axios.get('/user')
}

export default {
  register,
  getCurrentUser
}