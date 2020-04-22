<template>
    <div>
        <v-btn class="pink--text" icon @click="likeVideo(video._id)">
            <v-icon>mdi-heart</v-icon>
        </v-btn> {{video.likes}}
    </div>
</template>
<script>
export default {
    props: ["video"],
    methods: {
        async likeVideo(video_id) {
            const msg = await this.$store.dispatch("likeVideo", video_id)
            await this.$store.dispatch("setSnackbar", { ...msg, showing: true })
        }
    }

}
</script>