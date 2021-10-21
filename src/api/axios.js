import axios from "axios";
import {getItem} from '@/helpers/persistenceStorage'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.request.use(config => {
  const token = getItem('token')
  const authorizationToken = token ? `Bearer ${token}` : ''
  config.headers.Authorization = authorizationToken
  return config
})

export default axios;