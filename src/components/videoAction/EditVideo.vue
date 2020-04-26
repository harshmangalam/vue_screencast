<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn color="red lighten-2" dark v-on="on">
                    Edit Videos
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-row align="center">
                        <v-col>
                            <v-form>
                                <v-text-field v-model="videoData.name" label="Video Name"  prepend-icon="mdi-account" type="text" />
                                <v-text-field v-model="videoData.thumbnail" label="Thumbnail Image" prepend-icon="mdi-email" type="text" />
                                <v-text-field v-model="videoData.videoUrl" label="Video Url" prepend-icon="mdi-lock" />
                                <v-textarea v-model="videoData.description" label="Video Description" prepend-icon="mdi-message"></v-textarea>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="editVideo(video._id)">
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
	props:["video"],
    data() {
        return {
            dialog: false,
            videoData: {
                name:this.video.name,
                thumbnail:this.video.thumbnail,
                videoUrl:this.video.videoUrl,
                description:this.video.description
            }
        }
    },


    methods: {
        async editVideo(video_id) {
            console.log(this.video)
            const msg = await this.$store.dispatch("editVideo", {videoData:this.videoData,video_id})
            this.$store.dispatch("setSnackbar", { ...msg, showing: true })
            this.$router.push({path:"/"})
        }
    }
}
</script>