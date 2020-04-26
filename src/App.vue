

<template>

<v-app>
    <!-- navigation  -->
    <Navigation />
    <v-content>
        <v-container>
            <router-view></router-view>
            <div>

            </div>
            <!-- showing snackbar messages -->
            <Snackbar />
        </v-container>
    </v-content>
</v-app>

</template>

<script>

// import { mapState } from "vuex"
import Navigation from "@/components/Navigation"
import Snackbar from "@/components/Snackbar"

export default {
    name: "App",
    data() {
        return {
            fab: false
        }
    },
    components: {
        Navigation,
        Snackbar
    },
    created() {
        this.$store.dispatch("fetchVideos")
        this.$store.dispatch("loadCurrentUser")
    },
};

</script>
