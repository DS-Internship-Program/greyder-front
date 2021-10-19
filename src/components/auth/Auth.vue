<template>
	<BContainer
		class="d-flex justify-content-center align-items-center"
		style="height: 100vh"
	>
		<b-form class="bg-light p-5 rounded" @submit.prevent="onSubmit">
			<b-form-group 
                id="input-group-1"
                label="Name:"
                label-for="input-1"
            >
				<b-form-input
					v-model="name"
					type="text"
					placeholder="Enter name"
					required
				>
				</b-form-input>
			</b-form-group>

			<b-form-group
                id="input-group-2"
                label="Nickname:"
                label-for="input-2"
            >
				<b-form-input
					id="input-2"
					v-model="nickName"
					type="text"
					placeholder="Enter nickname"
					required
				>
				</b-form-input>
			</b-form-group>

			<b-form-group
				id="input-group-3"
				label="Your Password:"
				label-for="input-3"
			>
				<b-form-input
					id="input-3"
					v-model="password"
					type="password"
					placeholder="Enter password"
					required
				>
                </b-form-input>
			</b-form-group>
            <p class="errors" v-if="error">{{error}}</p>
            <p>
                <router-link :to="{name: 'register'}">Register</router-link>
            </p>
			<b-button type="submit" variant="primary">Sign In</b-button>
		</b-form>
	</BContainer>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'auth',
	data() {
		return {
			name: '',
			nickName: '',
			password: '',
		}
	},
    computed: {
        ...mapState({
            error: state => state.auth.error
        })
    },
	methods: {
		onSubmit() {
			this.$store.dispatch('login', {
				name: this.name,
				nickName: this.nickName,
				password: this.password,
			}).then(() => {
                this.$router.push({name: 'app'})
            })
		},
	},
}
</script>