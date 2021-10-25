<template>
<div>
    <!-- <b-button class="m-2">Add row</b-button> -->
    <b-button class="m-2" @click="testClick">Get table</b-button>
    <b-button class="m-2" v-b-modal.modalAddCol> new column </b-button>
    <b-button class="m-2" v-b-modal.modalAddPost> new post </b-button>
    <div class="d-flex justify-content-center">

  <b-table-simple 
    small bordered outlined
    style="width: 1024px"
  >
    <!-- <b-thead> -->
        <!-- <b-th v-for="item in COLUMNS"
          :key="item.id"
        >
          {{item.column_name}}
        <b-tr
        v-for="post of POSTS"
        :key="post.id"
        >
        <b-td>{{post.id}}</b-td>
        <b-td>{{post[item.column_name]}}</b-td>
        </b-tr>
        </b-th> -->
    <!-- </b-thead> -->
    <b-tbody>
      <b-tr  
        v-for="item in COLUMNS"
        :key="item.id">
        <b-th>
        {{item.column_name}} 
        </b-th> 
        <b-td
        v-for="post of POSTS"
        :key="post.id"
        >
        {{post[post.id]}}
        <p> 
        {{post[item.column_name]}}
        <b-button variant="outline-secondary" @click="addPost(item.column_name, post.id)"> + </b-button>
        </p>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
    </div>
  <div class="d-flex justify-content-center">
    <b-col sm="7" md="6" class="my-1">
    <b-pagination
        align="fill"
        size="sm"
        class="my-0"
    >
    </b-pagination>
    </b-col>
  </div>
    <b-modal id="modalAddCol" ref="modalAddCol" centered title="New column add">
        <div class="d-flex flex-column" style="width: 250px">
        <input  v-model="newColumnTitle"  placeholder="Column title..." type="text" class="mb-2">
        <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <template slot="modal-footer">
          <b-button variant="primary" class="mr-1" @click="submitAddColumn()">Add column</b-button>
          <b-button variant="secondary" @click="$bvModal.hide('modalAddCol')">Cancel</b-button>
      </template>
    </b-modal>
    <b-modal id="modalAddPost" ref="modalAddPost" centered title="New post add">
        <div class="d-flex flex-column" style="width: 250px">
        <input v-model="newPostText"  placeholder="post text" type="text" class="mb-2">
        </div>
        <template slot="modal-footer">
          <b-button variant="primary" class="mr-1" @click="submitAddPost()">Add post</b-button>
          <b-button variant="secondary" @click="$bvModal.hide('modalAddPost')">Cancel</b-button>
      </template>
    </b-modal>
</div>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'
export default {
    name: 'tableView',
    data(){
        return {
          columnsData: [],
          postsData: [],
          selected: null,
          newColumnTitle: '',
          newPostText: '',
          options: [
            { value: null, text: 'Please select data type' },
            { value: 'varchar', text: 'varchar' },
            { value: 'text', text: 'text' },
            { value: 'serial', text: 'serial' },
            { value: 'boolean', text: 'boolean' }
        ]
        }
    },
    computed: {
      ...mapGetters([
        'COLUMNS',
        'POSTS',
        'TABLE'
      ])
    },
    methods: {
      ...mapActions([
        'getColumns',
        'addColumn'
      ]),
      testClick(){
        this.$store.dispatch('getColumns', {
          columns: this.columnsData
        })
        this.$store.dispatch('getPosts', {
          posts: this.postsData
        })
        console.log(this.columnsData, 'columnsData')
        console.log(this.postsData, 'postsData')
      },
      submitAddColumn(){
        let obj = {}
        obj[this.newColumnTitle] = this.selected
        this.$store.dispatch('addColumn', obj)
        .then(() => {
          this.getColumns()
          this.newColumnTitle = '';
          this.selected = null;
          this.$refs['modalAddCol'].hide();
        })
      },
      submitAddPost(){
        this.$store.dispatch('addPost', {
          "dastan": this.newPostText
        })
        .then(() => {
          this.getPosts();
          this.newPostText = '';
          this.$refs['modalAddPost'].hide();
        })
      },
      addPost(item, id){
        console.log(item, id)
      }
    }

}
</script>

<style>

</style>