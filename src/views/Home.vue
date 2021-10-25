<template>
  <div>
    <list-table/>
    <create-table/>
    <table-view />
  </div>
</template>

<script>
import listTable from '@/components/Table/ListTable'
import createTable from '@/components/Table/CreateTable'
import TableView from '../components/table/TableView.vue'

export default {
  name: 'Home',
  components: {
    listTable,
    createTable,
    tableView
  }
}
</script>

