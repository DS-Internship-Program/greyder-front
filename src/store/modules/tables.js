import tablesApi from '@/api/tables'
const state = {
  tables: [],
  error: null,
  isLoading: false
}

const getters = {
  tables: state => state.tables,
  isLoading: state => state.isLoading
}

const mutations = {
  getTablesStart(state) {
    state.isLoading = true
  },
  getTablesSuccess(state, data) {
    state.tables = data
    state.isLoading = false
  },

  createTableSuccess(state) {
    state.error = null
  },
  createTableFailed(state, messageError) {
    state.error = messageError
  }
}

const actions = {
  getTables({commit}) {
    return new Promise(() => {
      commit('getTablesStart')
      tablesApi.getTables().then(res => {
          // console.log(res);
          commit('getTablesSuccess', res.data)
        })
    })
  },

  createTable({commit, dispatch}, tableName) {
    return new Promise(resolve => {
      tablesApi.createTable(tableName)
        .then(res => {
          dispatch('getTables')
          resolve(res.data)
        })
        .catch(result => {
          commit('createTableFailed', result.response.data.message)
        })
    })
  },

  deleteTable({dispatch}, tableName) {
    return new Promise(resolve =>{
      tablesApi.deleteTable(tableName)
      .then(res => {
        dispatch('getTables')
        resolve(res.data)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}