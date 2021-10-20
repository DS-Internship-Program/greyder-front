<template>
  <div class="list-table">
    <h3 class="list-table__title">list of Tables</h3>
    <ul class="list-table__list" v-for="table, index in tables" :key="index">
      <li class="list-table__list-item">{{table.tableName}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'listTable',
  computed: {
    ...mapGetters({
      tables: 'tables'
    })
  },
  mounted() {
    this.$store.dispatch('getTables')
  }
}
</script>
<style scoped>
ul, li {
  list-style-type: none;
}
</style>