<template>
    <div>
        <!-- navigation drawer -->
        <v-navigation-drawer app clipped v-model="drawer">
            <div v-if="currentUser && currentUser.name">
                <v-list-item >
                    <v-list-item-avatar to="/profile">
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{currentUser.name}}</v-list-item-title>
                        <v-list-item-title>{{currentUser.email}}</v-list-item-title>
                        <v-list-item-title>member since {{new Date(currentUser.createdAt).getFullYear()}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div v-else>
                <p>Login Your Account</p>
            </div>
            <v-divider></v-divider>
            <div v-if="currentUser && currentUser.name">
                <v-list dense>
                    <v-list-item v-for="item in auth_items" :key="item.title" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </div>
            <div v-else>
                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>
        <!-- top nav bar -->
        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>VideoScreencast</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data: () => ({
        drawer: false,
        items: [
            { title: 'Home', icon: 'mdi-home-city', to: "/" },
            { title: 'Login', icon: 'mdi-account', to: "/login" },
            { title: 'Signup', icon: 'mdi-account-group-outline', to: "/signup" },
        ],
        auth_items: [
            { title: 'Home', icon: 'mdi-home-city', to: "/" },
            { title: 'Videos', icon: 'mdi-video', to: "/videos" },
            { title: 'Watch Later', icon: 'mdi-account-group-outline', to: "/watch_later" },
            { title: 'Dashboard', icon: 'mdi-video', to: "/dashboard" },

            { title: 'Profile', icon: 'mdi-account', to: "/profile" },
            

        ],
    }),

    computed: {
        ...mapState(["currentUser"])
    },
    methods:{
        async logout(){
            const msg = await this.$store.dispatch("logout")
            await this.$store.dispatch("setSnackbar",{...msg,showing:true})
        }
    }
   
}
</script>