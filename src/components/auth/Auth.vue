<template>
    <BContainer class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <b-form class="bg-light p-5 rounded">
            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        placeholder="Enter email"
                        required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                        required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" @click="submit" variant="primary">Войти</b-button>
        </b-form>
    </BContainer>
</template>


<script>
    export default {
        name: 'Auth',
        props: {},
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            submit() {
                console.log(this.email, this.password)
            }
        }
    }
</script>

<style>

</style>