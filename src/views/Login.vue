<template>
    <div>
        <v-row align="center">
            <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email" v-model="loginData.email" name="email" prepend-icon="mdi-email" type="text" />
                            <v-text-field v-model="loginData.password" id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn @click="login" color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {

    data() {
        return {
            loginData: {},

        }
    },
    methods: {
        async login() {
            const msg = await this.$store.dispatch("login", this.loginData)
            await this.$store.dispatch("setSnackbar", { ...msg, showing: true })
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>