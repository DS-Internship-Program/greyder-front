<template>
  <div>
    <Table />
    <list-table/>
    <create-table/>
    <table-view />
  </div>
</template>

<script>
import listTable from '../components/table/ListTable.vue'
import createTable from '../components/table/CreateTable.vue'
import tableView from '../components/table/TableView.vue'
import Table from '../components/table/Table.vue'

export default {
  name: 'Home',
  components: {
    listTable,
    createTable,
    tableView,
    Table
  }
}
</script>

