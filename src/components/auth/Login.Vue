<template>
  <div> 
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password" />
     <button>Войти</button>
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
    }
}
</script>

<style>

</style>