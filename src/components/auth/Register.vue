<template>
	<div>
		<form action="" @submit.prevent="onSubmit">
			<input type="text" placeholder="username" v-model="name">
			<input type="text" placeholder="email" v-model="nickName">
			<input type="text" placeholder="password" v-model="password">
			<button>submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'register',
	data() {
		return {
			name: '',
			nickName: '',
			password: ''
		}
	},
	methods: {
		onSubmit() {
			this.$store.dispatch('register', {
				name: this.name,
				nickName: this.nickName,
				password: this.password
			})
		}
	}
}
</script>