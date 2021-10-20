<template>
  <div>
    <list-table/>
    <create-table/>
  </div>
</template>

<script>
import listTable from '@/components/Table/ListTable'
import createTable from '@/components/Table/CreateTable'
export default {
  name: 'Home',
  components: {
    listTable,
    createTable
  }
}
</script>