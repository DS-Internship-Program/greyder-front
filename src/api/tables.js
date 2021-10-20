import axios from './axios'

const getTables = () => {
  return axios.get('/post')
}

const createTable = tableName => {
  return axios.post(`/post/${tableName}/init`)
}

export default {
  getTables,
  createTable
}