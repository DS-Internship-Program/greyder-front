<template>
	<div>
		<b-button 
      v-b-modal.modal-1 
      @click="showModal"
    >
      Создать таблицу
    </b-button>
		<b-modal 
      id="modalFile"
      ref="modalFile"
      centered title="Table name"
    >
			<input
        class="input-modal"
        type="text"
        v-model="tableName"
        ref="tableName"
      />
			<template slot="modal-footer">
				<b-button 
          variant="success"
          @click="createTable('success')"
          class="mr-1"
				>
          Create table
        </b-button>
				<b-button
          variant="secondary"
          @click="$bvModal.hide('modalFile')"
					>
            Cancel
        </b-button>
			</template>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: 'CreateTable',
  data() {
    return {
      tableName: ''
    }
  },
	methods: {
		showModal() {
			this.$refs['modalFile'].show()
		},
    createTable(variant = null) {
      this.$store.dispatch('createTable', this.tableName)
      .then(res => {
        if(res.data === 'Таблица с таким именем уже есть в базе.') {
          console.log(this.$refs.tableName.classList.add('warning'));
          this.$bvToast.toast(res.data, {
            variant: 'danger',
            title: 'Warning',
            solid: true
          })
        }
        else {
          console.log(res);
          this.$refs['modalFile'].hide()
          this.tableName = ''
          this.$bvToast.toast(res, {
              title: `${variant || 'default'}`,
              variant: variant,
              solid: true
            })
        }
      })
    }
	},
}
</script>

<style scoped>
  .warning {
    border-color: red;
    color: red;
  }
</style>