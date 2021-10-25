import axios from './axios'

const getColumns = credentials => {
    return axios.get('/post/new_table/schema', credentials)
}

const addColumn = credentials => {
    return axios.post('post/new_table/column', credentials)
}

const addPost = credentials => {
    return axios.post('/post/new_table', credentials)
}

const getPosts = credentials => {
    return axios.get('/post/new_table', credentials)
}


export default {
    getColumns,
    addColumn,
    addPost,
    getPosts
}