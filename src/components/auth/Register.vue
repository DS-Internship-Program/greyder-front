<template>
	<div>
		<form action="" @submit.prevent="onSubmit">
			<input type="text" placeholder="username" v-model="username">
			<input type="text" placeholder="email" v-model="email">
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
			username: '',
			email: '',
			password: ''
		}
	},
	methods: {
		onSubmit() {
			this.$store.dispatch('register', {
				username: this.username,
				email: this.email,
				password: this.password
			})
		}
	}
}
</script>