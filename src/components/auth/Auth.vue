<template>
  <div> 
    <form action="" @submit.prevent="onSubmit">
    <input type="text" v-model="email" placeholder="email">
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
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>