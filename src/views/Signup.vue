<template>
    <div>
        <v-row align="center">
            <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Signup form</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="signupData.name" label="name" name="name" prepend-icon="mdi-account" type="text" />
                            <v-text-field v-model="signupData.email" label="Email" name="email" prepend-icon="mdi-email" type="text" />
                            <v-text-field v-model="signupData.password" id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn @click="signup" color="primary">Signup</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            signupData: {}
        }
    },
    methods: {
        async signup() {
            try {
                const res = await axios.post("http://localhost:3001/api/users/signup", this.signupData)
                const { message } = res.data
                const msg = {
                    text: message,
                    color: 'success',
                    showing: true,
                }
                this.$store.dispatch('setSnackbar', msg)
                this.$router.push({ name: 'Login' })

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>