import tablesApi from '@/api/tables'
const state = {
  tables: []
}

const getters = {
  tables: state => state.tables
}

const mutations = {
  getTablesSuccess(state, data) {
    state.tables = data
  }
}

const actions = {
  getTables({commit}) {
    return new Promise(() => {
      tablesApi.getTables().then(res => {
          // console.log(res);
          commit('getTablesSuccess', res.data)
        })
    })
  },

  createTable({dispatch}, tableName) {
    return new Promise(resolve => {
      tablesApi.createTable(tableName)
        .then(res => {
          // console.log(res);
          dispatch('getTables')
          resolve(res)
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