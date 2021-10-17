<template>
  <div> 
    <form action="">
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password" />
     <button @click="submit">Войти</button>
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
      submit(){
        console.log(this.email, this.password)
      }
    }
}
</script>

<style>

</style>