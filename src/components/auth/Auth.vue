<template>
  <div> 
    <form action="" @submit.prevent="onSubmit">
    <input type="text" v-model="name" placeholder="name">
    <input type="text" v-model="nickName" placeholder="nickname">
    <input type="password" v-model="password" placeholder="password" />
     <button>Войти</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Login',
    props:{},
    data(){
        return {
            name: '',
            nickName: '',
            password: ''
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('login', {
                name: this.name,
                nickName: this.nickName,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>