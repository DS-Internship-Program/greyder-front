import axios from './axios'

const getTables = () => {
  return axios.get('/post')
}

const createTable = tableName => {
  return axios.post(`/post/${tableName}/init`)
}

const deleteTable = tableName => {
  return axios.delete(`/post/${tableName}/table`)
}

export default {
  getTables,
  createTable,
  deleteTable
}