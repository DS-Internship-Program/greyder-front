<template>
    <BContainer class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <b-form @submit.prevent="onSubmit" class="bg-light p-5 rounded">
            <b-form-group
                    id="input-group-1"
                    label="Username:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="username"
                        type="text"
                        placeholder="Enter username"
                        autocomplete="off"
                        required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    id="input-group-2"
                    label="Email address:"
                    label-for="input-2"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-2"
                        v-model="email"
                        type="email"
                        placeholder="Enter email"
                        required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
                <b-form-input
                        id="input-3"
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                        required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Войти</b-button>
        </b-form>
    </BContainer>
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