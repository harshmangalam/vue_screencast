<template>

  <div>
      <div style="overflow:scroll; width:auto;height:500px;position:relative">
          <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptions"

          >
        </video-player>
      </div>
    <v-row justify="center">
      <v-col cols="12" sm="12" xs="12" md="12">
        <v-card>
           <v-list-item>
      <v-list-item-avatar color="blue lighten-3">
          <v-img  :src="video.thumbnail"/>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{video.creator.name}}</v-list-item-title>
        <v-list-item-subtitle>{{new Date(video.createdAt).toDateString()}}</v-list-item-subtitle>

      </v-list-item-content>
    </v-list-item>
          <v-card-title class="blue--text">
              <h3>{{video.name}}</h3>

          </v-card-title>
          <v-card-subtitle>
              {{video.description}}
          </v-card-subtitle>
          <v-card-actions>
               <b class="red--text">
        </b>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import {mapState} from "vuex";
export default {
  components: {
    videoPlayer
  },
  computed: {
    video() {
      return this.videos.find(vid => vid._id == this.$route.params.video_id) || {};
    },
    ...mapState(['videos']),
    playerOptions() {
      return {
        sources: [

          {
            src: this.video.videoUrl
          }
        ],
        poster: this.video.thumbnail,

      };
    },
  },
};
</script>
