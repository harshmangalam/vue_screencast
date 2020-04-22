<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn icon color="green accent-2" dark v-on="on">
                    <v-icon>mdi-comment</v-icon>
                </v-btn>
                {{video.comments}}
            </template>
            <v-card>
                <div v-if="video.comments">
                    <GetVideoComments :video="video" />
                </div>
                <div v-else class="my-4 text-center">
                    <h2>No Comment Yet ! Be First</h2>
                </div>
                <v-form>
                    <v-card-text>
                        <v-row align="center">
                            <v-col>
                                <v-textarea v-model="commentData.body" label="write comments..." prepend-icon="mdi-message"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="commentVideo(video._id)" color="pink accent-3">comment</v-btn>
                        <v-btn @click="dialog=false" color="pink accent-3">close</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import GetVideoComments from "./GetVideoComments.vue"
export default {
    components: {
        GetVideoComments,
    },
    props: ["video"],
    data() {
        return {
            dialog: false,
            commentData: {}
        }
    },
    methods: {
        async commentVideo(video_id) {
            const data = { commentData: this.commentData, video_id }
            const msg = await this.$store.dispatch("commentVideo", data)
            await this.$store.dispatch("setSnackbar", { ...msg, showing: true })
            this.commentData.body=""
        }
    }

}
</script>