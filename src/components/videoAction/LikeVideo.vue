<template>
    <div>
        <div class="text-center">
            <v-menu open-on-hover left>
                <template v-slot:activator="{ on }">
                    <v-btn @mouseover="fetchVideoLikes(video._id)" icon color="primary" dark v-on="on" @click="likeVideo(video._id)">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn> {{video.likes}}
                </template>
                <v-card max-width="500" class="mx-auto">
                    <div v-if="loading">loading....</div>
                    <div v-else>
                      <div v-if="videoLikes.length">
                            <v-list>
                            <v-list-item v-for="like in videoLikes" :key="like._id">
                                <v-list-item-avatar>
                                    <img :src="like.likeOn.thumbnail" width="30px" height="40px" />
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-text="like.likeBy.name"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                      </div>
                      <div v-else>
                          No any likes
                      </div>
                    </div>
                    <v-divider></v-divider>
                </v-card>
            </v-menu>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            loading: false
        }
    },
    props: ["video"],
    computed: {
        ...mapState(["videoLikes"])
    },

    methods: {
        async likeVideo(video_id) {
            const msg = await this.$store.dispatch("likeVideo", video_id)
            await this.$store.dispatch("setSnackbar", { ...msg, showing: true })
        },
        async fetchVideoLikes(video_id) {
            this.loading = true
            await this.$store.dispatch("fetchVideoLikes", video_id)
            this.loading = false
        }


    }

}
</script>
