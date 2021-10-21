<template>
  <div class="list-table">
    <h3 class="list-table__title">list of Tables</h3>
    <b-spinner v-if="isLoading" label="Spinning">loading...</b-spinner>
    <ul class="list-table__list" v-for="table, index in tables" :key="index">
      <li class="list-table__list-item">{{table.tableName}}</li>
      <button type="submit" @click="deleteTable(table.tableName, 'success')">Del</button>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'listTable',
  computed: {
    ...mapGetters({
      tables: 'tables',
      isLoading: 'isLoading'
    })
  },
  mounted() {
    this.$store.dispatch('getTables')
  },
  methods: {
    deleteTable(tableName, variant = null) {
      this.$store.dispatch('deleteTable', tableName)
        .then(res => {
          this.$bvToast.toast(res, {
            title: `${variant || 'default'}`,
            variant: variant,
            solid: true
          })
        })
    }
  }
}
</script>
<style scoped>
ul, li {
  list-style-type: none;
}
.list-table {
  width: 15%;
}
.list-table__list {
  display: flex;
  justify-content: space-between;
}
</style>