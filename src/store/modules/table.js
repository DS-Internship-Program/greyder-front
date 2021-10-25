import tableApi from '@/api/table';


const state = {
    columns : [],
    newColumn: null,
    posts: [],
    table: {}
}

const getters = {
    COLUMNS: state => state.columns,
    NEW_COLUMN: state => state.newColumn,
    POSTS: state => state.posts,
    TABLE: state => state.table
}

const mutations = {
    setColumns(state, payload){
        state.columns = payload
    },
    setAddColumn(state, payload){
        state.newColumn = payload
    },
    setAddPost(state, payload){
        state.posts = payload
    },
    setPosts(state, payload){
        state.posts = payload
    }
}

const actions = {
    getColumns({commit}, credentials){
        return new Promise(resolve => {
            tableApi.getColumns(credentials)
            .then(res => {
                // console.log(credentials)
                commit('setColumns', res.data)
                console.log(res.data, 'columns')
                resolve()
            })
            .catch(error => {
                console.log(error)
            })
        })
    },
    addColumn({commit}, credentials){
        return new Promise(resolve => {
            tableApi.addColumn(credentials)
            .then(res => {
                commit('setAddColumn', res.data)
                console.log(credentials, 'credentials')
                console.log(res, 'res')
                resolve()
            })
            .catch(error => {
                console.log(error)
            })
        })
    },
    addPost({commit}, credentials){
        return new Promise(resolve => {
            tableApi.addPost(credentials)
            .then(res => {
                commit('setAddPost', res.data)
                console.log(res.data, 'res');
                console.log(credentials, 'cred')
                resolve()
            })
            .catch(error => {
                console.log(error)
            })
        })
    },
    getPosts({commit}, credentials){
        return new Promise(resolve => {
            tableApi.getPosts(credentials)
            .then(res => {
                commit('setPosts', res.data)
                console.log(res.data, 'posts')
                console.log(credentials, 'credentials')
                resolve()
            })
            .catch(error => {
                console.log(error)
            })
        } )
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
