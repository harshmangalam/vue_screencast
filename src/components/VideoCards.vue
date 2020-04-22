<template>
    <div>
        <v-row>
            <v-col cols="12" sm="10" xs="12" md="8" offset-md="2" offset-sm="1">
                <v-card class="mx-auto my-4" v-for="video in videos" :key="video._id">
                    <v-list-item>
                        <v-list-item-avatar color="blue accent-3">
                            <img :src="video.thumbnail" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{video &&video.creator.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{new Date(video.createdAt).toDateString()}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img :src="video.thumbnail" contain class="my-4" max-height="200"></v-img>
                    <v-card-title>{{video.name}}</v-card-title>
                    <v-card-text>
                        {{video.description}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="pink accent-4">
                            watch now
                        </v-btn>
                        <v-btn text color="green accent-4">
                            watch later
                        </v-btn>
                        <v-spacer></v-spacer>
                        <div v-if="currentUser && currentUser.name">
                            <LikeVideo :video="video"/>
                            <CommentVideo :video="video" />
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex"
import LikeVideo from "@/components/videoAction/LikeVideo.vue"
import CommentVideo from "@/components/videoAction/CommentVideo.vue"
export default {
    components:{
      LikeVideo,
      CommentVideo
    },
    computed: {
        ...mapState(["videos","currentUser"])
    },

};
</script>