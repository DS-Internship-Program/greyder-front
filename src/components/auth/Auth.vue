<template>
    <div> 
		<form action="" @submit.prevent="onSubmit">
			<input type="text" placeholder="name" v-model="name">
			<input type="text" placeholder="nickname" v-model="nickName">
			<input type="password" placeholder="password" v-model="password">
			<button>submit</button>
		</form>
    </div>
</template>

<script>
export default {
    name: 'login',
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