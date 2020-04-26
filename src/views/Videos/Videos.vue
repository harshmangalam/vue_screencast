<template>
    <div>
        <v-row align="center" justify="center">
            <div class="my-4">
               <CreateVideos />
            </div>
        </v-row>
        <v-tabs>
            <v-tab to="/videos/my_videos">My Videos</v-tab>
            <v-tab to="/videos/explore_videos">Explore Videos</v-tab>
        </v-tabs>
        <div class="my-4">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import CreateVideos from "@/components/CreateVideos"
export default {
    data() {
        return {
            fab: false,
            dialog: false,
        }
    },
    components:{
        CreateVideos
    }

}
</script>