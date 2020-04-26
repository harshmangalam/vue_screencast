<template>
   <v-row justify="center">
    <v-col cols="12" xs="12" sm="10" md="8">
         <v-card class="mx-auto mt-12">
        <v-system-bar></v-system-bar>
        <v-toolbar flat color="transparent">
            <v-btn icon @click="back">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-text-field append-icon="mdi-magnify" label="Search Videos" single-line></v-text-field>
        </v-toolbar>
        <div v-for="video in exploreVideos" :key="video._id" class="my-3">
            <v-list three-line>
                <v-list-item ripple>
                    <v-img :src="video.thumbnail" class="mr-4" max-width="80" min-width="64"></v-img>
                    <v-list-item-content>
                        <div class="text-uppercase font-weight-regular caption">
                            <h3>{{video.name}}</h3>
                        </div>
                        <small class="yellow--text">{{new Date(video.createdAt).toDateString()}}</small>
                        <div class="my-2 d-flex">
                          <small>likes 21</small>
                          <small>comments 23</small>
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
        </div>
    </v-card>
    </v-col>
   </v-row>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(["exploreVideos"])
    },

    methods:{
        back(){
            this.$router.push("/videos/my_videos")
        },
    }
}
</script>