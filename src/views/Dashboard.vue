<template>
    <div>
        <v-container>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item v-for="(video,i) in my_videos" :key="video._id" color="blue lighten-3" fill-dot :right="i%2==0?true:false">
                    <v-row justify="center">
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-card>
                                <v-card-title>
                                    <h3 class="display-1 white--text font-weight-light">{{video.name}}</h3>
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" xs="12" sm="6" md="6">
                                            <img :src="video.thumbnail" />
                                        </v-col>
                                        <v-col cols="12" xs="12" sm="6" md="6">
                                            <h2 class="purple--text">video description</h2>
                                            <v-divider></v-divider>
                                            <div class="my-2 blue--text">
                                                <b>{{video.description}}</b>
                                            </div>
                                            <v-divider></v-divider>
                                            <div class="my-4 mx-2">
                                                <v-icon class="blue--text mx-1">mdi-comment </v-icon>{{video.comments}}
                                                <v-icon class="orange--text mx-1">
                                                    mdi-heart
                                                </v-icon>
                                                {{video.likes}}
                                            </div>
                                            <v-row justify="center">
                                                <v-col cols="12" xs="12" sm="6" md="6">
                                                    <v-btn @click="deleteVideo(video._id)" color="red" text>Delete</v-btn>
                                                </v-col>
                                                <v-col cols="12" xs="12" sm="6" md="6">
                                                    <v-btn color="green" text>Edit</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["videos", "currentUser"]),
        my_videos() {
            return this.videos.filter(vid => vid.creator._id == this.currentUser._id)
        }
    },

    methods:{
        async deleteVideo(video_id){
            const msg = await this.$store.dispatch("deleteVideo",video_id)
            await this.$store.dispatch("setSnackbar",{...msg,showing:true})

        }
    }
}
</script>